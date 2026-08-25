export interface PEQuestion {
  id: number;
  title: string;
  points?: number;
  description: string;
  initialCode?: string;
  solutionSQL: string;
}

export interface TableColumnDetail {
  name: string;
  type: string;
  isPk?: boolean;
  isFk?: boolean;
  fkRef?: string;
}

export interface TableSchemaDetail {
  tableName: string;
  description?: string;
  columns: TableColumnDetail[];
}

export interface PEExam {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badgeClass: string;
  themeColor: string;
  gradient: string;
  dbScript: string;
  erdDiagramHtml?: string;
  schemaDetails?: TableSchemaDetail[];
  questions: PEQuestion[];
}

export interface PEQueryResult {
  success: boolean;
  columns: string[];
  values: any[][];
  error?: string;
  rowsAffected?: number;
  timeMs?: number;
}

export interface PEGradeResult {
  passed: boolean;
  message: string;
  userResult?: PEQueryResult;
  expectedResult?: PEQueryResult;
}
