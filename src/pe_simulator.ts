import initSqlJs, { Database, SqlJsStatic } from 'sql.js';
import { PEExam, PEQuestion, PEQueryResult, PEGradeResult } from './data/pe_types';

let SQL: SqlJsStatic | null = null;

export class PESimulator {
  private db: Database | null = null;
  private currentExam: PEExam | null = null;

  async initEngine(): Promise<void> {
    if (!SQL) {
      SQL = await initSqlJs({
        locateFile: () => `/sql-wasm.wasm`
      });
    }
  }

  async loadExam(exam: PEExam): Promise<void> {
    await this.initEngine();
    if (!SQL) throw new Error("SQL.js failed to initialize");

    this.currentExam = exam;
    this.resetDatabase();
  }

  resetDatabase(): void {
    if (!SQL || !this.currentExam) return;
    if (this.db) {
      this.db.close();
    }

    this.db = new SQL.Database();
    
    // Execute DDL & DML script
    try {
      this.db.run(this.currentExam.dbScript);
    } catch (e) {
      console.error("Failed to execute DB script:", e);
    }
  }

  executeSQL(sql: string): PEQueryResult {
    if (!this.db) {
      return {
        success: false,
        columns: [],
        values: [],
        error: "Database not initialized"
      };
    }

    const startTime = performance.now();
    try {
      const results = this.db.exec(sql);
      const endTime = performance.now();
      const executionTime = Math.round(endTime - startTime);

      if (results.length === 0) {
        return {
          success: true,
          columns: [],
          values: [],
          rowsAffected: 0,
          timeMs: executionTime
        };
      }

      const res = results[0];
      return {
        success: true,
        columns: res.columns,
        values: res.values,
        rowsAffected: res.values.length,
        timeMs: executionTime
      };
    } catch (err: any) {
      return {
        success: false,
        columns: [],
        values: [],
        error: err.message || String(err)
      };
    }
  }

  gradeQuestion(q: PEQuestion, userSQL: string): PEGradeResult {
    if (!this.db || !SQL || !this.currentExam) {
      return { passed: false, message: "Database is not loaded" };
    }

    // Execute user query on a fresh temporary copy of database
    const tempUserDb = new SQL.Database();
    tempUserDb.run(this.currentExam.dbScript);

    const tempExpectedDb = new SQL.Database();
    tempExpectedDb.run(this.currentExam.dbScript);

    let userResult: PEQueryResult;
    let expectedResult: PEQueryResult;

    try {
      const uRes = tempUserDb.exec(userSQL);
      if (uRes.length > 0) {
        userResult = { success: true, columns: uRes[0].columns, values: uRes[0].values };
      } else {
        userResult = { success: true, columns: [], values: [] };
      }
    } catch (err: any) {
      tempUserDb.close();
      tempExpectedDb.close();
      return {
        passed: false,
        message: `Lỗi cú pháp SQL: ${err.message}`
      };
    }

    try {
      const eRes = tempExpectedDb.exec(q.solutionSQL);
      if (eRes.length > 0) {
        expectedResult = { success: true, columns: eRes[0].columns, values: eRes[0].values };
      } else {
        expectedResult = { success: true, columns: [], values: [] };
      }
    } catch (err: any) {
      tempUserDb.close();
      tempExpectedDb.close();
      return {
        passed: false,
        message: `Lỗi câu lệnh mẫu: ${err.message}`
      };
    }

    tempUserDb.close();
    tempExpectedDb.close();

    // Smart Row Comparison (Handles string vs number formatting & row order differences)
    const normalizeRow = (row: any[]) => row.map(v => (typeof v === 'number' ? Number(v.toFixed(4)) : String(v).trim().toLowerCase()));

    const userRowsNorm = userResult.values.map(normalizeRow);
    const expectedRowsNorm = expectedResult.values.map(normalizeRow);

    const isDirectMatch = JSON.stringify(userRowsNorm) === JSON.stringify(expectedRowsNorm);

    // Set-based match (Order independent comparison for queries without ORDER BY)
    const sortedUserStr = JSON.stringify([...userRowsNorm].sort());
    const sortedExpectedStr = JSON.stringify([...expectedRowsNorm].sort());
    const isSetMatch = sortedUserStr === sortedExpectedStr;

    if (isDirectMatch || isSetMatch) {
      return {
        passed: true,
        message: "✅ XUẤT SẮC! Kết quả kết xuất câu lệnh của bạn hoàn toàn chính xác (Cho dù viết bằng bất kỳ cách nào: JOIN, Subquery, hay WHERE filter)!",
        userResult,
        expectedResult
      };
    } else if (userResult.values.length === expectedResult.values.length) {
      return {
        passed: false,
        message: "❌ Chưa khớp đáp án: Số lượng hàng trả về đúng (cùng số hàng) nhưng giá trị dữ liệu các ô chưa khớp.",
        userResult,
        expectedResult
      };
    } else {
      return {
        passed: false,
        message: `❌ Chưa đạt: Trả về ${userResult.values.length} hàng (kết quả chuẩn yêu cầu ${expectedResult.values.length} hàng).`,
        userResult,
        expectedResult
      };
    }
  }

  getExpectedResult(q: PEQuestion): PEQueryResult {
    if (!SQL || !this.currentExam) {
      return { success: false, columns: [], values: [], error: "Engine not ready" };
    }

    const tempDb = new SQL.Database();
    try {
      tempDb.run(this.currentExam.dbScript);
      const res = tempDb.exec(q.solutionSQL);
      tempDb.close();

      if (res.length > 0) {
        return {
          success: true,
          columns: res[0].columns,
          values: res[0].values,
          rowsAffected: res[0].values.length
        };
      }
      return { success: true, columns: [], values: [], rowsAffected: 0 };
    } catch (err: any) {
      tempDb.close();
      return { success: false, columns: [], values: [], error: err.message };
    }
  }

  getSchemaOverview(): { tableName: string; columns: string[] }[] {
    if (!this.db) return [];
    try {
      const res = this.db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
      if (res.length === 0) return [];
      
      const tables = res[0].values.map(r => r[0] as string);
      const overview: { tableName: string; columns: string[] }[] = [];

      for (const table of tables) {
        const info = this.db.exec(`PRAGMA table_info(${table});`);
        if (info.length > 0) {
          const cols = info[0].values.map(r => `${r[1]} (${r[2]})`);
          overview.push({ tableName: table, columns: cols });
        }
      }

      return overview;
    } catch (e) {
      return [];
    }
  }
}

export const peSimulator = new PESimulator();
