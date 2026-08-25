import { Question } from './types';

export const DBI202_EXAM11_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "Answer The relation R(A.B) may have duplicate tuples. Choose the query that create non-duplicated results, regardless of what tuples R contains?",
    "options": [
      "SELECT A. B FROM R",
      "SELECT A FROM R WHERE A NOT IN (SELECT B FROM R)",
      "SELECT TOP 3 A. B FROM R",
      "SELECT A. B FROM R GROUP BY A. B"
    ],
    "answer": 3
  },
  {
    "id": 2,
    "question": "(TRUE OR NULL) return:",
    "options": [
      "TRUE",
      "None ofthe others",
      "FALSE",
      "NULL"
    ],
    "answer": 0
  },
  {
    "id": 3,
    "question": "Except for , aggregate functions ignore null values",
    "options": [
      "MAX",
      "COUNT",
      "AVG",
      "MIN",
      "SUM"
    ],
    "answer": 0
  },
  {
    "id": 4,
    "question": "Today, in a modern DBMS, the queries are pars|ed and optimized by",
    "options": [
      "query compiler",
      "all of the others",
      "execution engine",
      "buffer manager"
    ],
    "answer": 1
  },
  {
    "id": 5,
    "question": "A database is a data structure that improves the speed of data retrieval operations on a database table at the cost of slower writes and increased storage space",
    "options": [
      "Store Procedure",
      "Index",
      "View",
      "Trigger"
    ],
    "answer": 1
  },
  {
    "id": 6,
    "question": "When sorting in SQL Server, Null values are treated as the lowest possible values.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 7,
    "question": "Suppose we have a relation R(MNPQ) with FD's: NP -> M ; MQ -> P ; PQ -> N ; NQ -> P",
    "options": [
      "R is in BCNF",
      "R is not in BCNF"
    ],
    "answer": 1
  },
  {
    "id": 8,
    "question": "A(an) asserts that a value appearing in one relation must also appear in the primary-key component(s) of another relationl",
    "options": [
      "Primary key constraint",
      "Foreign key constraint",
      "Unique key constraint",
      "Candidate key constraint"
    ],
    "answer": 2
  },
  {
    "id": 9,
    "question": "Answer Choose a wrong answer.",
    "options": [
      "Single Datalog rule can be expressed in relational algebra.",
      "Basic relational algebra can be expressed in Datalog rule(s).",
      "Relational algebra can express recursion.",
      "Datalog does not support bag operations."
    ],
    "answer": 3
  },
  {
    "id": 10,
    "question": "What SQL keyword can be used to return data from two non-related tables as a combined set of rows?",
    "options": [
      "DISTINCT ALL",
      "DISTINCT",
      "UNION ALL",
      "COMBINED"
    ],
    "answer": 2
  },
  {
    "id": 11,
    "question": "Consider the law. that holds for set relations: (R natural join S) natural join T = R natural join (S natural join T). Does the above law still hold for bag relations?",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 12,
    "question": "Which of the following tuples DOES NOT appear in the result?",
    "options": [
      "(1.2.3)",
      "(4.5.6)",
      "(1.5.4)",
      "(4.2.3)"
    ],
    "answer": 2
  },
  {
    "id": 13,
    "question": "The ER model can:",
    "options": [
      "enable low level descriptions of data",
      "replace relational design",
      "enable detailed descriptions of data query processing",
      "be close to a users perception of the data"
    ],
    "answer": 3
  },
  {
    "id": 14,
    "question": "The DBMS (Database Management System) is expected to:",
    "options": [
      "Allow users to query the data",
      "Support the storage of very large amounts of data",
      "Allow users to create new databases and specify their schemas",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 15,
    "question": "What is an Entity Set?",
    "options": [
      "It is a collection of entities of a particular entity type grouped together into an entity set",
      "It is a \"thing\" in the real world with an independent existence.",
      "None ofthe others",
      "It is a collection (set) of entities that have same attributes"
    ],
    "answer": 0
  },
  {
    "id": 16,
    "question": "What is the degree of a Relation?",
    "options": [
      "None of the others",
      "It Is the number of attributes of its relation schema",
      "It is the number of tuples of its relation schema"
    ],
    "answer": 1
  },
  {
    "id": 17,
    "question": "SELECT name FROM customers WHERE name LIKE '%Gate';. This query would yield an name for every customer whose name ends with \"Gate\". Suppose that the name column has been Indexed. Which of the following statements is correct?",
    "options": [
      "None of the others",
      "The database does not perform a full table scan when executing the above SELECT statement",
      "The database must perform a full table scan when executing the above SELECT statement"
    ],
    "answer": 2
  },
  {
    "id": 18,
    "question": "What type of key is used to BE REFERENCED by another table? (choose all possible)",
    "options": [
      "Unique Key",
      "Foreign Key",
      "None of the others",
      "Primary Key"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": 19,
    "question": "If you don't specify ASC or DESC after a SQL ORDER BY clause, the following Is used by default:",
    "options": [
      "All of the others",
      "DESC",
      "ASC",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 20,
    "question": "A XML involves a Document Type Definition that specifies the allowable tags and gives a grammar for how they may be nested",
    "options": [
      "Well-formed",
      "All of the others",
      "Valid",
      "None of the other"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "question": "Which of the following statements is the most correct?",
    "options": [
      "The selection of the right indexes for a database and its workload is a complex balancing act between query speed and update cost",
      "All of the others",
      "Designing efficient indexes is paramount to achieve good database and application performance",
      "Poorly designed indexes and a lack of indexes are primary sources of database application bottlenecks."
    ],
    "answer": 1
  },
  {
    "id": 22,
    "question": "Suppose we have 2 relations: R=(A,B,C,D) S = (B,C,D,E) When we can set B to be the foreign key of R?",
    "options": [
      "When B is the primary key of S",
      "When B is the unique key of S",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 23,
    "question": "SQL provides a statement to allow one user to give a privilege to another",
    "options": [
      "GRANT",
      "REVOKE",
      "GIVE",
      "TAKE"
    ],
    "answer": 0
  },
  {
    "id": 24,
    "question": "For what values of x, y, and z, including NULL, does the boolean expression x <= 3 OR NOT(y >= 1 AND z = 5) have the truth value FALSE? Identify one of those values from the list below",
    "options": [
      "x= NULL, y = 3, z = 5.",
      "x = 4, y = 3, z = 5.",
      "x = 3, y = 1, z = 5.",
      "x= NULL, y = 2, z = 5."
    ],
    "answer": 2
  },
  {
    "id": 25,
    "question": "The type denotes a fixed-length string of up to N-characters",
    "options": [
      "VARCHAR(n)",
      "CHAR(n)",
      "NVARCHAR(n)",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 26,
    "question": "Compute the bag union R and S, and then indicate which of the following is true.",
    "options": [
      "(1.2.3) appears twice in the result.",
      "(1.2.3) appears once in the result.",
      "(4.5.6) appears once in the result.",
      "(4.5.6) appears twice in the result."
    ],
    "answer": 3
  },
  {
    "id": 27,
    "question": "Please choose the in-correct functional dependencies:",
    "options": [
      "None of the others",
      "B -> C",
      "B-> A",
      "B -> D"
    ],
    "answer": 3
  },
  {
    "id": 28,
    "question": "A ____ is a logically coherent collection of data with some inherent meaning, representing some aspect of real world and being designed, built and populated with data for a specific purpose",
    "options": [
      "Database",
      "Database Instance",
      "Schema",
      "Schema Instance"
    ],
    "answer": 0
  },
  {
    "id": 29,
    "question": "Choose the most correct statement.",
    "options": [
      "Database is created and maintained by a DMBS",
      "All of the others",
      "Database is a collection of data that is managed by a DBMS",
      "Database is a collection of information that exists over a long period of time"
    ],
    "answer": 1
  },
  {
    "id": 30,
    "question": "Which of following is never used as a data model?",
    "options": [
      "Hierarchical data model",
      "None of the others",
      "Graph-based data model",
      "Tree-based data model",
      "Relational data model"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "question": "A ____ is a relation name, together with the attributes of that relation.",
    "options": [
      "schema",
      "database",
      "database instance",
      "schema instance"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "question": "A ___ is a notation for describing the structure of the data in a database, along with the constraints on that data",
    "options": [
      "data model",
      "database management system",
      "data operation",
      "data manipulation"
    ],
    "answer": 0
  },
  {
    "id": 33,
    "question": "A _____ is a language for defining data structures",
    "options": [
      "DDL",
      "DML",
      "DCL",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 34,
    "question": "Which statement is used to remove a relation named R?",
    "options": [
      "DROP TABLE R;",
      "REMOVE TABLE R;",
      "DELETE TABLE R;",
      "TRUNCATE TABLE R;"
    ],
    "answer": 0
  },
  {
    "id": 35,
    "question": "What is another term for a row in a relational table?",
    "options": [
      "Attribute",
      "Tuple",
      "Field",
      "Relation"
    ],
    "answer": 1
  },
  {
    "id": 36,
    "question": "What is the difference between the 2NF and the 3NF?",
    "options": [
      "2NF deals with partial functional dependency, while 3NF deals with transitive functional dependency",
      "2NF deals with transitive functional dependency, while 3NF deals with partial functional dependency"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "question": "What is \"de-normalization\"?",
    "options": [
      "De-normalization means allowing redundancy in a table",
      "De-normalization means allowing duplicate columns appeared in a table",
      "De-normalization means allowing a table to have more than 3 columns",
      "De-normalization means allowing a table to have more than 1024 columns"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "question": "What is the benefit of \"de-normalization\"?",
    "options": [
      "\"de-normalization\" has no benefit",
      "The main benefit of de-normalization is improved performance with simplified data retrieval (this is done by reduction in the number of joins needed for data processing)",
      "The main benefit of de-normalization is eliminating redundant information from a table and organizing the data so that future changes to the table are easier"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "question": "A(n) _____ provides a means to analyze business requirements so as to standardize organizational vocabulary, enforce business rules, and ensure adequate data quality",
    "options": [
      "Entity Relationship Diagram",
      "Relation Schema Design",
      "All of the others",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 40,
    "question": "An association class in UML is similar to ______ in the ER model",
    "options": [
      "attributes on a relationship",
      "Attributes",
      "Entities",
      "entity sets"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "question": "In UML, what is the difference between an aggregation and a composition?",
    "options": [
      "In composition, when the owning object is destroyed, so are the contained objects. In aggregation, this is not necessarily true.",
      "In aggregation, when the owning object is destroyed, so are the contained objects. In composition, this is not necessarily true.",
      "All of the others",
      "There is no difference between an aggregation and a composition"
    ],
    "answer": 0
  },
  {
    "id": 42,
    "question": "When we apply set operators (UNION, INTERSECT, EXCEPT) to two relations R and S, which conditions on R and S must be satisfied?",
    "options": [
      "R and S must have schemas with identical sets of attributes and the types (domains) for each attributes must be the same in R and S",
      "Before we compute the set-theoretic union, intersection, or difference of sets of tuples, the columns of R and S must be ordered so that the order of attributes is the same for both relations",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 43,
    "question": "How many JOIN conditions are necessary to combine five tables based on common attributes?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 3
  },
  {
    "id": 44,
    "question": "What operator tests column for the absence of data?",
    "options": [
      "IS BLANK operator",
      "IS ZERO operator",
      "IS NULL operator",
      "ISNULL operator"
    ],
    "answer": 2
  },
  {
    "id": 45,
    "question": "What does NULL mean?",
    "options": [
      "The value NULL means UNKNOWN",
      "The value NULL means '' (empty string)",
      "The value NULL means ' ' (space character)",
      "The value NULL means ZERO"
    ],
    "answer": 0
  },
  {
    "id": 46,
    "question": "Which SQL keyword is used to sort the result-set?",
    "options": [
      "ORDER BY",
      "SORT BY",
      "ORDER",
      "SORT"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "question": "A database transaction, by definition, must be ACID (atomic, consistent, isolated and durable). What does \"Durable\" mean?",
    "options": [
      "\"Durable\" means that: Transactions provide an \"all-or-nothing\" proposition, stating that each work-unit performed in a database must either complete in its entirety or have no effect whatsoever",
      "\"Durable\" means that: Transactions must not violate any integrity constraints during its execution",
      "\"Durable\" means that: Transactions that have committed will survive permanently",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 48,
    "question": "What is the difference between the WHERE and HAVING SQL clauses?",
    "options": [
      "The WHERE and the HAVING clauses are identical",
      "The HAVING SQL clause condition(s) is applied to all rows in the result set before the WHERE clause is applied (if present). The WHERE clause is used only with SELECT SQL statements and specifies a search condition for an aggregate or a group",
      "The WHERE SQL clause condition(s) is applied to all rows in the result set before the HAVING clause is applied (if present). The HAVING clause is used only with SELECT SQL statements and specifies a search condition for an aggregate or a group",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 49,
    "question": "A(an) _____ asserts that a value appearing in one relation must also appear in the primary-key component(s) of another relation",
    "options": [
      "Unique key constraint",
      "Primary key constraint",
      "Foreign key constraint",
      "Candidate key constraint"
    ],
    "answer": 2
  },
  {
    "id": 50,
    "question": "What is difference between PRIMARY KEY and UNIQUE KEY ?",
    "options": [
      "A table can have more than one UNIQUE KEY constraint but only one PRIMARY KEY",
      "A table can have more than one PRIMARY KEY constraint but only one UNIQUE KEY",
      "UNIQUE KEY and PRIMARY KEY are the same",
      "None of the others"
    ],
    "answer": 0
  }
];
