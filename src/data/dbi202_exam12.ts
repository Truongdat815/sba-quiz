import { Question } from './types';

export const DBI202_EXAM12_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "A/An _____ is a data structure that makes it efficient to find those tuples that have a fixed value for an attribute",
    "options": [
      "Index",
      "Trigger",
      "stored-procedure",
      "View"
    ],
    "answer": 0
  },
  {
    "id": 2,
    "question": "___ allow the database application to find data fast, without reading the whole table",
    "options": [
      "Indexes",
      "Views",
      "Triggers",
      "Store-procedures"
    ],
    "answer": 0
  },
  {
    "id": 3,
    "question": "Well-designed ____ can reduce disk I/O operations and consume fewer system resources therefore improving query performance",
    "options": [
      "Triggers",
      "Indexes",
      "Views",
      "Stored Procedures"
    ],
    "answer": 1
  },
  {
    "id": 4,
    "question": "A ____ table is a table that is embedded within another table",
    "options": [
      "Nested",
      "Primitive",
      "Parent",
      "Child"
    ],
    "answer": 0
  },
  {
    "id": 5,
    "question": "A database of _____ data model is a collection of nodes, each node is either a leaf or interior",
    "options": [
      "semi-structured",
      "relational",
      "network",
      "object-relational"
    ],
    "answer": 0
  },
  {
    "id": 6,
    "question": "A _____ specifies which characters are \"less than\" which other characters",
    "options": [
      "Domains",
      "Character set",
      "Collation",
      "Stored procedure"
    ],
    "answer": 2
  },
  {
    "id": 7,
    "question": "A ____ is a powerful tool for creating and managing large amounts of data efficiently and allowing it to persist over long periods of time, safely",
    "options": [
      "DBMS",
      "Database",
      "Excel",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 8,
    "question": "What is the hierarchical data model?",
    "options": [
      "A hierarchical data model is a data model in which the data is organized into a tree-like structure",
      "A hierarchical data model is a data model in which the data is organized into a table-like structure",
      "A hierarchical data model is a data model in which the data is organized into a graph-like structure",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 9,
    "question": "In _____ Data Model, the data and relations between them are organized in tables",
    "options": [
      "Relational",
      "Network",
      "Flat-file",
      "Object-oriented",
      "Tree-based"
    ],
    "answer": 0
  },
  {
    "id": 10,
    "question": "Why the intersection operator is not called a primitive relational algebra operator?",
    "options": [
      "Because the intersection operator can be expressed through the union operator and the difference operator",
      "Because the intersection operator can be expressed through the selection operator and the projection operator",
      "Because the intersection operator can be expressed through the product operator and the projection operator",
      "Because the intersection operator can be expressed through the selection operator and the product operator"
    ],
    "answer": 0
  },
  {
    "id": 11,
    "question": "In SQL , the command/statement that let you add an attribute to a relation schema is .......",
    "options": [
      "Insert",
      "Update",
      "Alter",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 12,
    "question": "To update a relation's schema, which one of the following statements can be used?",
    "options": [
      "ALTER TABLE",
      "SELECT",
      "INSERT",
      "UPDATE"
    ],
    "answer": 0
  },
  {
    "id": 13,
    "question": "Which one of the following is NOT a DML command?",
    "options": [
      "DELETE",
      "ALTER TABLE",
      "INSERT",
      "UPDATE"
    ],
    "answer": 1
  },
  {
    "id": 14,
    "question": "What is a functional dependency?",
    "options": [
      "A functional dependency (A->B) occurs when the attribute A uniquely determines B",
      "A functional dependency (A->B) occurs when the attribute B uniquely determines A"
    ],
    "answer": 0
  },
  {
    "id": 15,
    "question": "3NFconcept is related to (choose 1 answer only):",
    "options": [
      "Atomic definition",
      "Full dependency definition",
      "Transitive dependency definition",
      "Super Key definition",
      "All of the others"
    ],
    "answer": 4
  },
  {
    "id": 16,
    "question": "Which of the following statements is correct?",
    "options": [
      "All relations in 3NF are also in BCNF",
      "For any relation schema, there is a dependency-preserving decomposition into 3NF",
      "All relations in 2NF are also in BCNF"
    ],
    "answer": 1
  },
  {
    "id": 17,
    "question": "How to eliminate anomalies when we design a database?",
    "options": [
      "We should decompose relation to eliminate anomalies",
      "We should join relations to eliminate anomalies",
      "We should union relations to eliminate anomalies",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 18,
    "question": "What is the goal of decomposition when designing a database?",
    "options": [
      "The goal of decomposition is to replace a relation by several relations that do not exhibit anomalies",
      "The goal of decomposition is to increase the speed of the database",
      "The goal of decomposition is to increase the security of the database",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 19,
    "question": "The ER Diagram uses three principle element types:",
    "options": [
      "Entity sets, Attributes and Constraints",
      "Entity sets, Attributes, and Relationships",
      "Attributes, Constraints, and Relationships",
      "Entity sets, Constraints, and Relationships"
    ],
    "answer": 1
  },
  {
    "id": 20,
    "question": "Consider the Datalog rule H(x,y) <- S(x, y) AND x > 2 AND y < 6. Relation S(x, y) has 3 tuples (2, 3), (3, 5), and (4, 6). What is about H?",
    "options": [
      "H has a tuple (3, 5)",
      "H has a tuple (2, 3)",
      "H has 2 tuples (2, 3) and (3, 5)",
      "H has 3 tuples (2, 3) and (3, 5) and (4, 6)"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "question": "A tuple which fails to participate in a join is called:",
    "options": [
      "dangling tuple",
      "child tuple",
      "parent tuple",
      "neighbor tuple"
    ],
    "answer": 0
  },
  {
    "id": 22,
    "question": "Choose one correct statement:",
    "options": [
      "Two null values are equal",
      "Comparisons between two null values, or between a NULL and any other value, return unknown",
      "Comparisons between two null values, or between a NULL and any other value, return FALSE"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "question": "A database transaction, by definition, must be ACID (atomic, consistent, isolated and durable). What does \"Isolated\" mean?",
    "options": [
      "\"Isolated\" means that: Transactions provide an \"all-or-nothing\" proposition, stating that each work-unit performed in a database must either complete in its entirety or have no effect whatsoever",
      "\"Isolated\" means that: Transactions must not violate any integrity constraints during its execution",
      "\"Isolated\" means that: Transactions that have committed will survive permanently",
      "\"Isolated\" means that: how/when the changes made by one operation in one transaction become visible to other concurrent operations in other transactions"
    ],
    "answer": 3
  },
  {
    "id": 24,
    "question": "What one is a wildcard used for pattern matching?",
    "options": [
      "\"%\" (for multi-character substitution)",
      "\"?\" (for single character substitution)",
      "\"?\" (for multi-character substitution)"
    ],
    "answer": 0
  },
  {
    "id": 25,
    "question": "Choose the most correct statement about PRIMARY KEY:",
    "options": [
      "The PRIMARY KEY constraint uniquely identifies each record in a database table",
      "Primary keys must contain unique values",
      "A primary key column cannot contain NULL values",
      "Each table should have a primary key, and each table can have only ONE primary key",
      "All of the others"
    ],
    "answer": 4
  },
  {
    "id": 26,
    "question": "Foreign key constraints are created by using \"_____\" keyword to refer to the primary key of another table",
    "options": [
      "REFERENCES",
      "POINT TO",
      "REFER",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 27,
    "question": "The most useful index on a relation is an index on its key. This is because:",
    "options": [
      "The index on non key attribute(s) runs slower",
      "The search operation based on the primary key is commonly used.",
      "The index on non key attribute(s) makes update operations to the relation more complex and time-consuming",
      "All of the others"
    ],
    "answer": 1
  },
  {
    "id": 28,
    "question": "The SQL operations that are performed while a connection is active form a ____",
    "options": [
      "Session",
      "Catalog",
      "Module",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 29,
    "question": "In PSM, the difference between a stored procedure and a function is that:",
    "options": [
      "A function has the return statement.",
      "We can declare local variables in a function.",
      "Loops are not allowed in a function.",
      "All of the others."
    ],
    "answer": 0
  },
  {
    "id": 30,
    "question": "The aim for the Object-relational database is to bridge the gap between conceptual data modelling techniques such as Entity-relationship diagram (ERD) and object-relational mapping (ORM), which often use classes and inheritance, and relational databases, which do not directly support them",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 31,
    "question": "______ is a set of markup declarations that define a document type for SGML-family markup languages (SGML, XML, HTML)",
    "options": [
      "Document Type Definition",
      "Document Definition Language",
      "Document Manipulation Language",
      "Document Control Language"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "question": "A ____ document defines the XML document structure with a list of legal elements and attributes",
    "options": [
      "XML",
      "DTD",
      "XSLT",
      "SGML"
    ],
    "answer": 1
  },
  {
    "id": 33,
    "question": "A ____ is the framework under which data may exist and SQL operations on data may be executed",
    "options": [
      "SQL Environment",
      "SQL Statement",
      "SQL Parser",
      "SQL Optimizer"
    ],
    "answer": 0
  },
  {
    "id": 34,
    "question": "In the context of",
    "options": [
      "The ability to perform multiple queries simultaneously",
      "Ensuring data is consistent, accurate, and reliable",
      "The ability to recover data after a failure",
      "Encrypting data to protect it from unauthorized access"
    ],
    "answer": 1
  },
  {
    "id": 35,
    "question": "The Isolation property in transactions ensures that:",
    "options": [
      "Each transaction is encrypted",
      "No two transactions run concurrently",
      "Transactions do not interfere with each other",
      "Only one user accesses the system"
    ],
    "answer": 2
  },
  {
    "id": 36,
    "question": "database administrator: a person or persons responsible for the structure or schema of the database.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "question": "Which syntax is commonly used for the rename operation in Relational Algebra?",
    "options": [
      "RENAME relation TO new relation",
      "RENAME attribute IN relation TO new attribute",
      "ALTER TABLE relation RENAME TO new relation",
      "SELECT * FROM relation AS new relation"
    ],
    "answer": 3
  },
  {
    "id": 38,
    "question": "Which of the following best defines",
    "options": [
      "collection of unorganized files",
      "program used to analyze data",
      "structured collection of data",
      "spreadsheet"
    ],
    "answer": 2
  },
  {
    "id": 39,
    "question": "The rows of",
    "options": [
      "Schemas",
      "Tuples",
      "Domains",
      "Attributes"
    ],
    "answer": 1
  },
  {
    "id": 40,
    "question": "Which of the following operations cannot be used in relational algebra? (Choose two answers) (ChQn 2 dåp ån)",
    "options": [
      "Union",
      "Divide",
      "Select",
      "Loop"
    ],
    "answer": [
      1,
      3
    ]
  },
  {
    "id": 41,
    "question": "Which operation is not part of basic relational algebra?",
    "options": [
      "Projection",
      "Join",
      "Sorting",
      "Selection"
    ],
    "answer": 2
  },
  {
    "id": 42,
    "question": "Which SQL command is used to define",
    "options": [
      "ALTER TABLE",
      "SELECT",
      "CREATE TABLE",
      "INSERT"
    ],
    "answer": 2
  },
  {
    "id": 43,
    "question": "Cäu IO. Which relational algebra operator removes attributes from a relation? A. Selection (o) B. Projection (n) C. Join (x) D. Union (u)",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1
  },
  {
    "id": 44,
    "question": "What is the purpose of the RENAME operation in relational algebra? (Choose three answers) (ChQn 3 dåp ån)",
    "options": [
      "To avoid ambiguity, especially when joining relations with the same attribute names.",
      "To make query expressions clearer and easier to read.",
      "To resolve naming conflicts in operations like UNION",
      "To search, index, and join tables quickly."
    ],
    "answer": 0
  },
  {
    "id": 45,
    "question": "Which of the following is the main requirement of 1 NF (First Normal Form)?",
    "options": [
      "No column in the table should contain repeating values or arrays.",
      "Each table contains only one foreign key.",
      "Each table has at least one primary key.",
      "All non-key attributes must be fully dependent on the primary key."
    ],
    "answer": 0
  },
  {
    "id": 46,
    "question": "Question 13",
    "options": [
      "trivial FD",
      "non-trivial FD",
      "key of relation",
      "super key of relation"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "question": "The subset of",
    "options": [
      "No proper subset is a super key",
      "All subsets are super keys",
      "Subset is a super key",
      "Each subset is a super key"
    ],
    "answer": 0
  },
  {
    "id": 48,
    "question": "Consider and FD's B,",
    "options": [
      "-9 C,",
      "—+ D,",
      "—+",
      ". Which of the following is the {A}+ ?"
    ],
    "answer": 1
  },
  {
    "id": 49,
    "question": "Consider the relation: OrderDetail (orderNumber, productCode, productName, quantity, dateOrdered, salesDiscount) And FDs { orderNumber, productCode —+ quantity, orderNumber -9 dateOrdered, productCode —i productName, salesDiscount And the key of OrderDetail is {orderNumber, productCode}. Which of the following is full dependency on the key?",
    "options": [
      "orderNumber, productCode quantity",
      "orderNumber -+ dateOrdered",
      "productCode —+ productName",
      "productCode —i productName, salesDiscount"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "question": "Question 17",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "All of the mentioned"
    ],
    "answer": 3
  }
];
