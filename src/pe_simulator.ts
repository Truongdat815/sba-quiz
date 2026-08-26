import initSqlJs, { Database, SqlJsStatic } from 'sql.js';
import { PEExam, PEQuestion, PEQueryResult, PEGradeResult } from './data/pe_types';

let SQL: SqlJsStatic | null = null;

/**
 * Register comprehensive T-SQL (Microsoft SQL Server) compatibility functions in SQLite
 */
function registerTSqlFunctions(db: Database): void {
  // 1. Date & Time Functions
  db.create_function('YEAR', (val: any) => {
    if (val === null || val === undefined) return null;
    const str = String(val).trim();
    const match = str.match(/^(\d{4})/);
    if (match) return parseInt(match[1], 10);
    const d = new Date(str);
    return isNaN(d.getFullYear()) ? null : d.getFullYear();
  });

  db.create_function('MONTH', (val: any) => {
    if (val === null || val === undefined) return null;
    const str = String(val).trim();
    const match = str.match(/^\d{4}[-/](\d{1,2})/);
    if (match) return parseInt(match[1], 10);
    const d = new Date(str);
    return isNaN(d.getMonth()) ? null : d.getMonth() + 1;
  });

  db.create_function('DAY', (val: any) => {
    if (val === null || val === undefined) return null;
    const str = String(val).trim();
    const match = str.match(/^\d{4}[-/]\d{1,2}[-/](\d{1,2})/);
    if (match) return parseInt(match[1], 10);
    const d = new Date(str);
    return isNaN(d.getDate()) ? null : d.getDate();
  });

  db.create_function('GETDATE', () => {
    const now = new Date();
    const pad = (n: number) => (n < 10 ? '0' + n : String(n));
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  });

  db.create_function('GETUTCDATE', () => {
    const now = new Date();
    const pad = (n: number) => (n < 10 ? '0' + n : String(n));
    return `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())} ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`;
  });

  db.create_function('DATEDIFF', (part: any, start: any, end: any) => {
    if (!start || !end) return null;
    const p = String(part).toLowerCase().replace(/['"]/g, '');
    const d1 = new Date(String(start));
    const d2 = new Date(String(end));
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return null;

    const diffMs = d2.getTime() - d1.getTime();
    if (p === 'day' || p === 'd' || p === 'dd') {
      return Math.round(diffMs / (1000 * 60 * 60 * 24));
    }
    if (p === 'year' || p === 'yy' || p === 'yyyy') {
      return d2.getFullYear() - d1.getFullYear();
    }
    if (p === 'month' || p === 'm' || p === 'mm') {
      return (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
    }
    if (p === 'hour' || p === 'hh') {
      return Math.round(diffMs / (1000 * 60 * 60));
    }
    if (p === 'minute' || p === 'mi' || p === 'n') {
      return Math.round(diffMs / (1000 * 60));
    }
    if (p === 'second' || p === 'ss' || p === 's') {
      return Math.round(diffMs / 1000);
    }
    return Math.round(diffMs / (1000 * 60 * 60 * 24));
  });

  db.create_function('DATEADD', (part: any, num: any, dateVal: any) => {
    if (!dateVal) return null;
    const p = String(part).toLowerCase().replace(/['"]/g, '');
    const count = Number(num);
    const d = new Date(String(dateVal));
    if (isNaN(d.getTime())) return null;

    if (p === 'day' || p === 'd' || p === 'dd') {
      d.setDate(d.getDate() + count);
    } else if (p === 'month' || p === 'm' || p === 'mm') {
      d.setMonth(d.getMonth() + count);
    } else if (p === 'year' || p === 'yy' || p === 'yyyy') {
      d.setFullYear(d.getFullYear() + count);
    } else if (p === 'hour' || p === 'hh') {
      d.setHours(d.getHours() + count);
    } else if (p === 'minute' || p === 'mi' || p === 'n') {
      d.setMinutes(d.getMinutes() + count);
    } else if (p === 'second' || p === 'ss' || p === 's') {
      d.setSeconds(d.getSeconds() + count);
    }
    const pad = (n: number) => (n < 10 ? '0' + n : String(n));
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  });

  db.create_function('DATEPART', (part: any, dateVal: any) => {
    if (!dateVal) return null;
    const p = String(part).toLowerCase().replace(/['"]/g, '');
    const d = new Date(String(dateVal));
    if (isNaN(d.getTime())) return null;

    if (p === 'year' || p === 'yy' || p === 'yyyy') return d.getFullYear();
    if (p === 'month' || p === 'm' || p === 'mm') return d.getMonth() + 1;
    if (p === 'day' || p === 'd' || p === 'dd') return d.getDate();
    if (p === 'weekday' || p === 'dw') return d.getDay() + 1; // 1 = Sunday
    if (p === 'hour' || p === 'hh') return d.getHours();
    if (p === 'minute' || p === 'mi' || p === 'n') return d.getMinutes();
    if (p === 'second' || p === 'ss' || p === 's') return d.getSeconds();
    return d.getDate();
  });

  // 2. String & Manipulation Functions
  db.create_function('LEN', (val: any) => {
    if (val === null || val === undefined) return null;
    return String(val).length;
  });

  db.create_function('LEFT', (str: any, n: any) => {
    if (str === null || str === undefined || n === null || n === undefined) return null;
    return String(str).slice(0, Number(n));
  });

  db.create_function('RIGHT', (str: any, n: any) => {
    if (str === null || str === undefined || n === null || n === undefined) return null;
    const s = String(str);
    const len = Number(n);
    return s.slice(Math.max(0, s.length - len));
  });

  db.create_function('SUBSTRING', (str: any, start: any, len: any) => {
    if (str === null || str === undefined) return null;
    const s = String(str);
    const st = Math.max(0, Number(start) - 1);
    return s.substring(st, st + Number(len));
  });

  db.create_function('CHARINDEX', (sub: any, str: any, start?: any) => {
    if (sub === null || str === null || sub === undefined || str === undefined) return null;
    const s = String(str);
    const n = String(sub);
    const st = start ? Math.max(0, Number(start) - 1) : 0;
    const idx = s.indexOf(n, st);
    return idx === -1 ? 0 : idx + 1;
  });

  db.create_function('CONCAT', (...args: any[]) => {
    return args.map((a) => (a === null || a === undefined ? '' : String(a))).join('');
  });

  db.create_function('CONCAT_WS', (sep: any, ...args: any[]) => {
    const s = sep === null || sep === undefined ? '' : String(sep);
    return args.filter((a) => a !== null && a !== undefined).map(String).join(s);
  });

  db.create_function('REVERSE', (str: any) => {
    if (str === null || str === undefined) return null;
    return String(str).split('').reverse().join('');
  });

  db.create_function('REPLICATE', (str: any, count: any) => {
    if (str === null || str === undefined) return null;
    return String(str).repeat(Math.max(0, Number(count) || 0));
  });

  db.create_function('STUFF', (str: any, start: any, length: any, newStr: any) => {
    if (str === null || str === undefined) return null;
    const s = String(str);
    const st = Math.max(0, Number(start) - 1);
    const len = Math.max(0, Number(length));
    const rep = newStr === null || newStr === undefined ? '' : String(newStr);
    return s.slice(0, st) + rep + s.slice(st + len);
  });

  // 3. Mathematical & Conversion Functions
  db.create_function('CEILING', (val: any) => (val == null ? null : Math.ceil(Number(val))));
  db.create_function('FLOOR', (val: any) => (val == null ? null : Math.floor(Number(val))));
  db.create_function('SQUARE', (val: any) => (val == null ? null : Math.pow(Number(val), 2)));
  db.create_function('SQRT', (val: any) => (val == null ? null : Math.sqrt(Number(val))));
  db.create_function('POWER', (b: any, e: any) => (b == null || e == null ? null : Math.pow(Number(b), Number(e))));

  db.create_function('CONVERT', (_type: any, val: any) => val);
}

/**
 * Transpiles T-SQL syntax to compatible SQLite queries
 */
export function transpileTSqlToSqlite(rawSql: string): string {
  if (!rawSql || typeof rawSql !== 'string') return rawSql;

  let sql = rawSql.trim();

  // 1. Remove SSMS batch delimiter 'GO'
  sql = sql.replace(/^\s*GO\s*$/gim, ';');

  // 2. Transpile Unicode string literal prefix N'...' -> '...'
  sql = sql.replace(/\bN'((?:[^']|'')*)'/g, "'$1'");

  // 3. Transpile ISNULL(a, b) -> IFNULL(a, b)
  sql = sql.replace(/\bISNULL\s*\(/gi, 'IFNULL(');

  // 4. Quote unquoted datepart arguments for DATEDIFF / DATEADD / DATEPART
  const dateParts = 'day|month|year|hour|minute|second|weekday|quarter|d|m|y|yy|yyyy|dd|mm|hh|mi|ss|n|s|dw|wk|week|q|qq';
  const partRegex = new RegExp(`\\b(DATEDIFF|DATEADD|DATEPART)\\s*\\(\\s*(${dateParts})\\s*,`, 'gi');
  sql = sql.replace(partRegex, (_match, fn, part) => {
    return `${fn}('${part.toLowerCase()}',`;
  });

  // 5. Remove SQL Server table hints e.g. WITH (NOLOCK)
  sql = sql.replace(/\bWITH\s*\(\s*NOLOCK\s*\)/gi, '');

  // 6. Transpile SELECT TOP (n) / SELECT TOP n [PERCENT] -> SELECT ... LIMIT n
  const topRegex = /\bSELECT\s+(DISTINCT\s+)?TOP\s*\(?(\d+)\)?\s*(?:PERCENT\s*)?(?:WITH\s+TIES\s*)?/gi;
  if (topRegex.test(sql)) {
    let topLimit: string | null = null;
    sql = sql.replace(topRegex, (_match, distinct, limit) => {
      topLimit = limit;
      return `SELECT ${distinct || ''}`;
    });

    if (topLimit && !/\bLIMIT\b/i.test(sql)) {
      sql = sql.trim().replace(/;+$/, '');
      sql = `${sql} LIMIT ${topLimit};`;
    }
  }

  // 7. Transpile String concatenation `+` when adjacent to string literals
  // e.g. 'a' + 'b' -> 'a' || 'b',  col + ' ' + col -> col || ' ' || col
  sql = sql.replace(/('(?:[^']|'')*')\s*\+\s*('(?:[^']|'')*')/g, '$1 || $2');
  sql = sql.replace(/('(?:[^']|'')*')\s*\+\s*([a-zA-Z0-9_\.\[\]]+)/g, '$1 || $2');
  sql = sql.replace(/([a-zA-Z0-9_\.\[\]]+)\s*\+\s*('(?:[^']|'')*')/g, '$1 || $2');

  return sql;
}

/**
 * Normalizes DDL scripts for SQLite schema simulation
 */
function normalizeDdlForSqlite(ddl: string): string {
  return ddl
    .replace(/\bNVARCHAR\s*\(\s*(MAX|\d+)\s*\)/gi, 'VARCHAR($1)')
    .replace(/\bVARCHAR\s*\(\s*MAX\s*\)/gi, 'TEXT')
    .replace(/\bDATETIME2\b/gi, 'DATETIME')
    .replace(/\bMONEY\b/gi, 'DECIMAL(19,4)')
    .replace(/\bIDENTITY\s*\(\s*\d+\s*,\s*\d+\s*\)/gi, '')
    .replace(/\bBIT\b/gi, 'INTEGER')
    .replace(/^\s*GO\s*$/gim, ';');
}

export class PESimulator {
  private db: Database | null = null;
  private currentExam: PEExam | null = null;

  async initEngine(): Promise<void> {
    if (!SQL) {
      SQL = await initSqlJs({
        locateFile: () => `/sql-wasm.wasm`,
      });
    }
  }

  async loadExam(exam: PEExam): Promise<void> {
    await this.initEngine();
    if (!SQL) throw new Error('SQL.js failed to initialize');

    this.currentExam = exam;
    this.resetDatabase();
  }

  private createInitializedDb(): Database {
    if (!SQL || !this.currentExam) {
      throw new Error('Database or Exam not loaded');
    }

    const db = new SQL.Database();
    registerTSqlFunctions(db);

    const cleanScript = normalizeDdlForSqlite(this.currentExam.dbScript);
    try {
      db.run(cleanScript);
    } catch (e) {
      console.error('Failed to execute clean DB script:', e);
    }

    return db;
  }

  resetDatabase(): void {
    if (!SQL || !this.currentExam) return;
    if (this.db) {
      this.db.close();
    }

    this.db = this.createInitializedDb();
  }

  executeSQL(sql: string): PEQueryResult {
    if (!this.db) {
      return {
        success: false,
        columns: [],
        values: [],
        error: 'Database not initialized',
      };
    }

    const startTime = performance.now();
    try {
      const transpiledSql = transpileTSqlToSqlite(sql);
      const results = this.db.exec(transpiledSql);
      const endTime = performance.now();
      const executionTime = Math.round(endTime - startTime);

      if (results.length === 0) {
        return {
          success: true,
          columns: [],
          values: [],
          rowsAffected: 0,
          timeMs: executionTime,
        };
      }

      const res = results[0];
      return {
        success: true,
        columns: res.columns,
        values: res.values,
        rowsAffected: res.values.length,
        timeMs: executionTime,
      };
    } catch (err: any) {
      return {
        success: false,
        columns: [],
        values: [],
        error: err.message || String(err),
      };
    }
  }

  gradeQuestion(q: PEQuestion, userSQL: string): PEGradeResult {
    if (!this.db || !SQL || !this.currentExam) {
      return { passed: false, message: 'Database is not loaded' };
    }

    const userClean = userSQL.trim();
    if (!userClean) {
      return { passed: false, message: 'Vui lòng nhập câu lệnh SQL trước khi nộp bài.' };
    }

    // 1. SPECIAL CASE: Question 1 (DDL CREATE TABLE)
    if (q.id === 1 || /^\s*CREATE\s+TABLE/i.test(q.solutionSQL)) {
      return this.gradeDdlQuestion(q, userClean);
    }

    // 2. SPECIAL CASE: Question 8 (Stored Procedure / Function)
    if (/^\s*CREATE\s+(PROCEDURE|PROC|FUNCTION)/i.test(q.solutionSQL) || /^\s*CREATE\s+(PROCEDURE|PROC|FUNCTION)/i.test(userClean)) {
      return this.gradeStoredProcedureQuestion(q, userClean);
    }

    // 3. SPECIAL CASE: Question 9 (Trigger)
    if (/^\s*CREATE\s+TRIGGER/i.test(q.solutionSQL) || /^\s*CREATE\s+TRIGGER/i.test(userClean)) {
      return this.gradeTriggerQuestion(q, userClean);
    }

    // 4. SPECIAL CASE: Question 10 or DML (UPDATE / DELETE / INSERT)
    if (/^\s*(UPDATE|DELETE|INSERT\s+INTO)\b/i.test(q.solutionSQL)) {
      return this.gradeDmlQuestion(q, userClean);
    }

    // 5. STANDARD CASE: SELECT Query Grading (Q2 - Q7)
    return this.gradeSelectQuery(q, userClean);
  }

  private gradeSelectQuery(q: PEQuestion, userSQL: string): PEGradeResult {
    const tempUserDb = this.createInitializedDb();
    const tempExpectedDb = this.createInitializedDb();

    let userResult: PEQueryResult;
    let expectedResult: PEQueryResult;

    try {
      const transpiledUser = transpileTSqlToSqlite(userSQL);
      const uRes = tempUserDb.exec(transpiledUser);
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
        message: `Lỗi cú pháp T-SQL: ${err.message}`,
      };
    }

    try {
      const transpiledExp = transpileTSqlToSqlite(q.solutionSQL);
      const eRes = tempExpectedDb.exec(transpiledExp);
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
        message: `Lỗi câu lệnh mẫu: ${err.message}`,
      };
    }

    tempUserDb.close();
    tempExpectedDb.close();

    // Row comparison with numeric precision tolerance and case-insensitivity
    const normalizeRow = (row: any[]) =>
      row.map((v) => (typeof v === 'number' ? Number(v.toFixed(4)) : v === null ? null : String(v).trim().toLowerCase()));

    const userRowsNorm = userResult.values.map(normalizeRow);
    const expectedRowsNorm = expectedResult.values.map(normalizeRow);

    const isDirectMatch = JSON.stringify(userRowsNorm) === JSON.stringify(expectedRowsNorm);

    // Set-based match (Order independent comparison for queries without strict ORDER BY)
    const sortedUserStr = JSON.stringify([...userRowsNorm].sort());
    const sortedExpectedStr = JSON.stringify([...expectedRowsNorm].sort());
    const isSetMatch = sortedUserStr === sortedExpectedStr;

    if (isDirectMatch || isSetMatch) {
      return {
        passed: true,
        message: '✅ XUẤT SẮC! Truy vấn T-SQL của bạn trả về kết quả hoàn toàn chính xác (đúng số lượng hàng và chuẩn dữ liệu theo đề thi)!',
        userResult,
        expectedResult,
      };
    } else if (userResult.values.length === expectedResult.values.length) {
      return {
        passed: false,
        message: '❌ Chưa khớp đáp án: Số lượng hàng trả về đúng (cùng số hàng) nhưng giá trị dữ liệu các ô chưa khớp.',
        userResult,
        expectedResult,
      };
    } else {
      return {
        passed: false,
        message: `❌ Chưa đạt: Trả về ${userResult.values.length} hàng (kết quả chuẩn yêu cầu ${expectedResult.values.length} hàng).`,
        userResult,
        expectedResult,
      };
    }
  }

  private gradeDdlQuestion(q: PEQuestion, userSQL: string): PEGradeResult {
    if (!SQL) return { passed: false, message: 'Engine not ready' };

    const testDb = new SQL.Database();
    registerTSqlFunctions(testDb);

    try {
      const cleanDdl = normalizeDdlForSqlite(userSQL);
      testDb.run(cleanDdl);

      // Check created tables in SQLite
      const tablesRes = testDb.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
      const createdTables = tablesRes.length > 0 ? tablesRes[0].values.map((r) => String(r[0]).toLowerCase()) : [];

      if (createdTables.length === 0) {
        testDb.close();
        return { passed: false, message: '❌ Chưa tạo được bảng nào. Hãy kiểm tra lại câu lệnh CREATE TABLE.' };
      }

      // Check against expected tables
      const expDb = new SQL.Database();
      registerTSqlFunctions(expDb);
      expDb.run(normalizeDdlForSqlite(q.solutionSQL));
      const expTablesRes = expDb.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
      const expTables = expTablesRes.length > 0 ? expTablesRes[0].values.map((r) => String(r[0]).toLowerCase()) : [];

      expDb.close();
      testDb.close();

      const missingTables = expTables.filter((t) => !createdTables.includes(t));
      if (missingTables.length > 0) {
        return {
          passed: false,
          message: `❌ Bạn còn thiếu bảng: [${missingTables.join(', ')}]. Hãy tạo đầy đủ các bảng và khóa ngoại theo đúng đề bài.`,
        };
      }

      return {
        passed: true,
        message: `✅ XUẤT SẮC! Cấu trúc bảng DDL và các khóa (Primary Key / Foreign Key) đã được tạo chính xác (${createdTables.length} bảng)!`,
      };
    } catch (err: any) {
      testDb.close();
      return {
        passed: false,
        message: `❌ Lỗi cú pháp DDL: ${err.message}`,
      };
    }
  }

  private gradeStoredProcedureQuestion(_q: PEQuestion, userSQL: string): PEGradeResult {
    const cleanUser = userSQL.trim();
    const hasCreateProc = /\bCREATE\s+(PROCEDURE|PROC)\b/i.test(cleanUser);
    if (!hasCreateProc) {
      return {
        passed: false,
        message: '❌ Cú pháp chưa đúng: Cần khai báo bắt đầu bằng "CREATE PROCEDURE" hoặc "CREATE PROC".',
      };
    }

    // Extract procedure name
    const procMatch = cleanUser.match(/\bCREATE\s+(?:PROCEDURE|PROC)\s+([a-zA-Z0-9_]+)/i);
    const procName = procMatch ? procMatch[1] : 'Procedure';

    // Verify key T-SQL procedural elements
    const hasParams = /@[a-zA-Z0-9_]+/i.test(cleanUser);
    const hasAs = /\bAS\b/i.test(cleanUser);
    const hasBody = /\b(BEGIN|SELECT|UPDATE|INSERT|DELETE|IF)\b/i.test(cleanUser);

    if (!hasAs || !hasBody) {
      return {
        passed: false,
        message: `❌ Thủ tục [${procName}] còn thiếu từ khóa "AS" hoặc khối thân lệnh (BEGIN...END / câu lệnh xử lý).`,
      };
    }

    return {
      passed: true,
      message: `✅ XUẤT SẮC! Cú pháp Stored Procedure [${procName}] chuẩn T-SQL (có ${hasParams ? 'khai báo tham số @param' : 'khối lệnh'} AS BEGIN...END và logic xử lý dữ liệu)!`,
    };
  }

  private gradeTriggerQuestion(_q: PEQuestion, userSQL: string): PEGradeResult {
    const cleanUser = userSQL.trim();
    const hasCreateTrg = /\bCREATE\s+TRIGGER\b/i.test(cleanUser);
    if (!hasCreateTrg) {
      return {
        passed: false,
        message: '❌ Cú pháp chưa đúng: Cần khai báo bắt đầu bằng "CREATE TRIGGER".',
      };
    }

    const trgMatch = cleanUser.match(/\bCREATE\s+TRIGGER\s+([a-zA-Z0-9_]+)/i);
    const trgName = trgMatch ? trgMatch[1] : 'Trigger';

    const hasOnTable = /\bON\s+([a-zA-Z0-9_]+)/i.test(cleanUser);
    const hasEvent = /\b(FOR|AFTER|INSTEAD\s+OF)\s+(INSERT|UPDATE|DELETE)/i.test(cleanUser);
    const hasInsertedDeleted = /\b(inserted|deleted)\b/i.test(cleanUser);

    if (!hasOnTable || !hasEvent) {
      return {
        passed: false,
        message: `❌ Trigger [${trgName}] cần chỉ định rõ bảng áp dụng (ON [TableName]) và sự kiện (AFTER/INSTEAD OF INSERT/UPDATE/DELETE).`,
      };
    }

    return {
      passed: true,
      message: `✅ XUẤT SẮC! Cú pháp Trigger [${trgName}] chuẩn T-SQL (đầy đủ bảng đích, sự kiện kích hoạt và bảng giả lập ${hasInsertedDeleted ? 'inserted/deleted' : 'dữ liệu'})!`,
    };
  }

  private gradeDmlQuestion(q: PEQuestion, userSQL: string): PEGradeResult {
    const tempUserDb = this.createInitializedDb();
    const tempExpectedDb = this.createInitializedDb();

    try {
      tempUserDb.run(transpileTSqlToSqlite(userSQL));
    } catch (err: any) {
      tempUserDb.close();
      tempExpectedDb.close();
      return {
        passed: false,
        message: `❌ Lỗi cú pháp DML: ${err.message}`,
      };
    }

    try {
      tempExpectedDb.run(transpileTSqlToSqlite(q.solutionSQL));
    } catch (err: any) {
      tempUserDb.close();
      tempExpectedDb.close();
      return {
        passed: false,
        message: `Lỗi câu lệnh mẫu: ${err.message}`,
      };
    }

    // Compare all table states
    const tablesRes = tempExpectedDb.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
    const tables = tablesRes.length > 0 ? tablesRes[0].values.map((r) => String(r[0])) : [];

    let isMatched = true;
    let mismatchTable = '';

    for (const table of tables) {
      const uRows = tempUserDb.exec(`SELECT * FROM ${table};`);
      const eRows = tempExpectedDb.exec(`SELECT * FROM ${table};`);

      const uData = uRows.length > 0 ? JSON.stringify(uRows[0].values) : '[]';
      const eData = eRows.length > 0 ? JSON.stringify(eRows[0].values) : '[]';

      if (uData !== eData) {
        isMatched = false;
        mismatchTable = table;
        break;
      }
    }

    tempUserDb.close();
    tempExpectedDb.close();

    if (isMatched) {
      return {
        passed: true,
        message: '✅ XUẤT SẮC! Dữ liệu sau khi thực thi câu lệnh DML (UPDATE / DELETE / INSERT) hoàn toàn trùng khớp với đáp án mẫu!',
      };
    } else {
      return {
        passed: false,
        message: `❌ Dữ liệu trong bảng [${mismatchTable}] sau khi chạy lệnh chưa khớp với kết quả mong đợi. Hãy kiểm tra lại điều kiện WHERE hoặc giá trị cập nhật.`,
      };
    }
  }

  getExpectedResult(q: PEQuestion): PEQueryResult {
    if (!SQL || !this.currentExam) {
      return { success: false, columns: [], values: [], error: 'Engine not ready' };
    }

    if (/^\s*(CREATE|UPDATE|DELETE|INSERT)\b/i.test(q.solutionSQL)) {
      return { success: true, columns: [], values: [], rowsAffected: 0 };
    }

    let tempDb: Database | null = null;
    try {
      tempDb = this.createInitializedDb();
      const transpiled = transpileTSqlToSqlite(q.solutionSQL);
      const res = tempDb.exec(transpiled);
      tempDb.close();

      if (res.length > 0) {
        return {
          success: true,
          columns: res[0].columns,
          values: res[0].values,
          rowsAffected: res[0].values.length,
        };
      }
      return { success: true, columns: [], values: [], rowsAffected: 0 };
    } catch (err: any) {
      if (tempDb) tempDb.close();
      return { success: false, columns: [], values: [], error: err.message };
    }
  }

  getSchemaOverview(): { tableName: string; columns: string[] }[] {
    if (!this.db) return [];
    try {
      const res = this.db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
      if (res.length === 0) return [];

      const tables = res[0].values.map((r) => r[0] as string);
      const overview: { tableName: string; columns: string[] }[] = [];

      for (const table of tables) {
        const info = this.db.exec(`PRAGMA table_info(${table});`);
        if (info.length > 0) {
          const cols = info[0].values.map((r) => `${r[1]} (${r[2]})`);
          overview.push({ tableName: table, columns: cols });
        }
      }

      return overview;
    } catch (e) {
      return [];
    }
  }

  getCurrentExamScript(): string {
    return this.currentExam ? this.currentExam.dbScript : '';
  }
}

export const peSimulator = new PESimulator();
