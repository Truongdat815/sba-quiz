import { Question } from './types';

export const DBI202_EXAM6_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "Consider",
    "options": [
      "and the following rules. Rule 1: If",
      "-+",
      "then",
      "-9 Rule 2: If"
    ],
    "answer": 3
  },
  {
    "id": 2,
    "question": "Database data models usually have",
    "options": [
      "Constraints on the data",
      "Operations on the data",
      "Structure of the data",
      "Definition of data"
    ],
    "answer": 0
  },
  {
    "id": 3,
    "question": "Database data models usually have",
    "options": [
      "Constraints on the data",
      "Operations on the data",
      "Structure of the data",
      "Definition of data"
    ],
    "answer": 0
  },
  {
    "id": 4,
    "question": "The name of",
    "options": [
      "Schema",
      "Tuple",
      "Domain",
      "Attribute"
    ],
    "answer": 0
  },
  {
    "id": 5,
    "question": "The operation that combines two relations by merging pairs of tuples, one from each relation, into",
    "options": [
      "Select",
      "Join",
      "Union",
      "Intersection"
    ],
    "answer": 1
  },
  {
    "id": 6,
    "question": "Suppose we have",
    "options": [
      "2NF",
      "INF",
      "3NF",
      "BCNF"
    ],
    "answer": 3
  },
  {
    "id": 7,
    "question": "Which of the following best describes an anomaly that normalization helps to eliminate in relational database design?",
    "options": [
      "Inconsistent data types within a table",
      "Redundant data that leads to storage inefficiency",
      "Insertion, update, or deletion anomalies",
      "Lack of referential integrity between tables"
    ],
    "answer": 2
  },
  {
    "id": 8,
    "question": "In an employee table, to ensure an attribute always has",
    "options": [
      "NULL",
      "NOT NULL",
      "UNIQUE",
      "DISTINCT"
    ],
    "answer": 1
  },
  {
    "id": 9,
    "question": "What is the primary goal of normalization in database design?",
    "options": [
      "To increase data redundancy",
      "To simplify data retrieval",
      "To introduce duplicate data",
      "To violate functional dependencies"
    ],
    "answer": 1
  },
  {
    "id": 10,
    "question": "Normalization is:",
    "options": [
      "The process of ensuring that each table has a key",
      "The process whereby a limit is put on the number of fields a record can contain",
      "The process of organizing data efficiently and minimizing repetition, helping maintain data consistency and reducing the risk of errors",
      "The process of ensuring that a relational database has at least two tables"
    ],
    "answer": 2
  },
  {
    "id": 11,
    "question": "The Data Definition Language (DDL) in SQL is used to:",
    "options": [
      "Insert, update, and delete data from a database",
      "Define and modify the structure of database objects such as tables, views, and indexes",
      "Query and retrieve data from a database",
      "Manage user permissions and access rights"
    ],
    "answer": 1
  },
  {
    "id": 12,
    "question": "Cäu IO. What happens if an error occurs during a transaction and it is not explicitly handled or rolled back? A. The transaction is automatically committed B. The transaction is automatically rolled back C. The database becomes read-only D. The transaction remains in a pending state",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1
  },
  {
    "id": 13,
    "question": "What is the purpose of",
    "options": [
      "It defines the data type of attributes",
      "It determines the cardinality of relationships",
      "It serves as the primary identifier for a table",
      "It establishes a link between two tables"
    ],
    "answer": 3
  },
  {
    "id": 14,
    "question": "Which of the following is an example of",
    "options": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle Database"
    ],
    "answer": 2
  },
  {
    "id": 15,
    "question": "Converting an E/R design to",
    "options": [
      "Turning each entity set into a relation with the same set of attributes",
      "Replacing a relationship by a relation whose attributes are the keys for the connected entity sets",
      "All of the others",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 16,
    "question": "What are logical constraints?",
    "options": [
      "The relationships between attributes are represented by relational operations",
      "The relationships between attributes are represented by comparison operators",
      "The relationships between attributes are represented by mathematical expressions",
      "The relationships between attributes are represented by functional dependencies"
    ],
    "answer": 3
  },
  {
    "id": 17,
    "question": "To convert",
    "options": [
      "Remove redundant data",
      "Ensure each attribute has a unique value",
      "Split the table into smaller tables",
      "Ensure each attribute contains atomic values"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "question": "The values appearing in given attributes of any tuple in the referencing relation must likewise occur in specified attributes of at least one tuple in the referenced relation, according to which integrity constraint?",
    "options": [
      "Referential",
      "Primary",
      "Referencing",
      "Specific"
    ],
    "answer": 0
  },
  {
    "id": 19,
    "question": "In relational algebra, the natural join operation can be viewed as:",
    "options": [
      "projection followed by a union",
      "selection followed by a projection",
      "Cartesian product followed by a selection and projection",
      "product followed by a union"
    ],
    "answer": 2
  },
  {
    "id": 20,
    "question": "An ERD uses three types of principal elements to form relationships:",
    "options": [
      "Entity sets, Constraints, and Relationships",
      "Attributes, Constraints, and Relationships",
      "Entity sets, Attributes, and Relationships",
      "Entity sets, Attributes, and Constraints"
    ],
    "answer": 2
  },
  {
    "id": 21,
    "question": "returns",
    "options": [
      "Intersection",
      "Set-difference",
      "Union",
      "Cross-product"
    ],
    "answer": 0
  },
  {
    "id": 22,
    "question": "What is the difference between DELETE and TRUNCATE in SQL?",
    "options": [
      "DELETE removes rows based on a condition, and TRUNCATE removes all rows from the table",
      "DELETE is faster and does not generate logs",
      "TRUNCATE allows rollback, but DELETE does not",
      "TRUNCATE can delete specific rows, while DELETE removes all rows"
    ],
    "answer": 0
  },
  {
    "id": 23,
    "question": "mön quan luön tap vién ké 5 thänh vién VE trang luyen tap Thi cuöi Icy (FE) Bö dé ånh cüa ky thi cuöi — xem tCrng ånh thåo luan ngay dudi ånh dö. Admin Test • 5 ngäy trudc Admin Test • 5 ngäy trudc Admin Test • 5 ngäy trudc Admin Test • 5 ngäy trudc Admin Test • 5 ngäy trudc DB1202 - SU25 - RE [SU25] Admin Test • 6 ngäy trur&c DB1202 -SU25 - 85 - 1 [SU25] Admin Test • 6 ngäy trur&c Admin Test • 5 ngåy trurdc Admin Test • 5 ngåy trurdc Admin Test • 5 ngåy trurdc Admin Test • 5 ngåy trurdc Admin Test • 5 ngåy trurdc DB1202 - SU25 - Final Exam [SU25] Admin Test • 6 ngåy trurdc DB1202 - SU 2024 - RE [SU24] Admin Test • 6 ngåy trurdc",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0
  },
  {
    "id": 24,
    "question": "In SQL, what is",
    "options": [
      "virtual table based on the result of a SELECT query",
      "physical table containing aggregated data",
      "temporary table used for transactions",
      "stored procedure with read-only access"
    ],
    "answer": 0
  },
  {
    "id": 25,
    "question": "Which of the following statements is/are TRUE? (1)",
    "options": [
      "column with a FOREIGN KEY constraint does not allow duplicate values. (2)",
      "FOREIGN KEY constraint can be defined to refer to columns with the UNIQUE constraint in another table.",
      "Both statements are True",
      "Both statements are False"
    ],
    "answer": 3
  },
  {
    "id": 26,
    "question": "Suppose relation R(A, B, C, D) has tuples. Which tuples are contained in the result of the query below? SELECT C, AVG(D) FROM R GROUP BY C HAVING AVG(D) > 1000 ORDER BY c;",
    "options": [
      "(101, 11 500); (1 02, 2500)",
      "(101, 2300); (102, 1250) c. (101, 5); (1 02, 2)",
      "(101, 11500); (102, 1250)"
    ],
    "answer": 3
  },
  {
    "id": 27,
    "question": "Choose the correct statement about the impact of declaring",
    "options": [
      "PRIMARY KEY: does not allow NULL values. UNIQUE: allows NULL values.",
      "PRIMARY KEY: allows NULL values. UNIQUE: does not allow NULL values.",
      "PRIMARY KEY: does not allow NULL values. UNIQUE: does not allow NULL values.",
      "PRIMARY KEY: allows NULL values. UNIQUE: allows NULL values."
    ],
    "answer": 0
  },
  {
    "id": 28,
    "question": "Suppose relation R(A, B) has tuples. Which tuples are contained in the result of the query below? SELECT * FROM R WHERE",
    "options": [
      "LIKE 'a%' UNION SELECT * FROM R WHERE",
      "> 7;",
      "(3, 5); (h, 8)"
    ],
    "answer": 2
  },
  {
    "id": 29,
    "question": "Which of the following is expressed by an E-R diagram?",
    "options": [
      "Relation between process and relationship",
      "Relation between entity and process",
      "Relation between processes",
      "Relation between entities"
    ],
    "answer": 3
  },
  {
    "id": 30,
    "question": "Question 30",
    "options": [
      "-9",
      "and",
      "—i C, which rule allows us to infer",
      "—i C?"
    ],
    "answer": 2
  },
  {
    "id": 31,
    "question": "The people whose jobs require access to the database for querying, updating, and generating reports (the database primarily exists for their use) are which type of user?",
    "options": [
      "DBA",
      "End users",
      "Database designer",
      "System Analysts and Application Programmers"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "question": "Which of the following describes an SQL cursor?",
    "options": [
      "It allows you to traverse the result set of a query and process each row individually",
      "It is a precompiled collection of one or more SQL statements that can be executed as a single unit",
      "field within a database",
      "Cursors are not related to SQL"
    ],
    "answer": 0
  },
  {
    "id": 33,
    "question": "In SQL, what does the acronym ACID stand for concerning transactions?",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Association, Concurrency, Integrity, Database",
      "Aggregate, Criteria, Index, Delete",
      "All Columns, Insertion, Deletion"
    ],
    "answer": 0
  },
  {
    "id": 34,
    "question": "How can you delete",
    "options": [
      "DELETE FUNCTION function name",
      "REMOVE FUNCTION function name",
      "DROP FUNCTION function name",
      "ERASE FUNCTION function name"
    ],
    "answer": 2
  },
  {
    "id": 35,
    "question": "In an UPDATE statement, what does the WHERE clause determine?",
    "options": [
      "The order of update",
      "The columns to be updated",
      "The condition for selecting rows to be updated",
      "The table to be updated"
    ],
    "answer": 2
  },
  {
    "id": 36,
    "question": "In the relational model of data,",
    "options": [
      "Structure",
      "Relationship",
      "Constraints",
      "Operations"
    ],
    "answer": [
      0,
      2,
      3
    ]
  },
  {
    "id": 37,
    "question": "What is NOT",
    "options": [
      "To use fewer hardware resources",
      "To enhance query performance",
      "To provide an index to a record",
      "To perform fast searching"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "question": "Which of the following is",
    "options": [
      "Relation set",
      "Tuples",
      "Entity set",
      "Entity Relationship model"
    ],
    "answer": 2
  },
  {
    "id": 39,
    "question": "Which operation is NOT typically associated with relational data manipulation?",
    "options": [
      "Deleting attributes",
      "Inserting tuples into a relation",
      "Modifying tuples in a relation",
      "Deleting tuples from a relation"
    ],
    "answer": 0
  },
  {
    "id": 40,
    "question": "To convert from an ER Diagram to the Relational Model,",
    "options": [
      "Putting the key attribute of the one-side into the M-side",
      "Putting the key attribute of the M-side into the one-side",
      "Generating 1 relation whose primary key is combined from two relations",
      "Building a table with two columns, one for each participating entity set's primary key"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "question": "DELETE command operates on how many relations?",
    "options": [
      "One",
      "Two",
      "Several",
      "Null"
    ],
    "answer": 0
  },
  {
    "id": 42,
    "question": "In the relational model, what does \"functional dependency\" imply?",
    "options": [
      "One attribute uniquely determines another attribute",
      "Each relation depends on another relation",
      "Relations can be modified without affecting each other",
      "All attributes must be independent of each other"
    ],
    "answer": 0
  },
  {
    "id": 43,
    "question": "Which of the following is FALSE about database triggers?",
    "options": [
      "It automatically runs when an event occurs in the database server",
      "DML triggers are frequently used for enforcing business rules and data integrity",
      "The same trigger action cannot be defined for more than one user action (for example, INSERT and UPDATE) within a single CREATE TRIGGER statement",
      "When a trigger fires, results are returned to the calling application, just like with stored procedures."
    ],
    "answer": 3
  },
  {
    "id": 44,
    "question": "When does the Inserted temporary trigger table become populated?",
    "options": [
      "With INSERT and UPDATE triggers",
      "With DELETE triggers only",
      "With INSERT, UPDATE, and DELETE triggers",
      "With UPDATE and DELETE triggers"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "question": "What is the difference between",
    "options": [
      "Tables can be updated, while a view displays data from a query",
      "Views can store data permanently, while tables are temporary",
      "Tables are created with the CREATE TABLE statement, while views use CREATE VIEW",
      "Views and tables are functionally equivalent in SQL"
    ],
    "answer": 2
  },
  {
    "id": 46,
    "question": "table can be in 3NF but not in INF.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 47,
    "question": "Which of the following is the correct way to execute",
    "options": [
      "EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WAI 1 DP';",
      "EXECUTE SelectAllCustomers 'London', 'WAI 1 DP' OUTPUT",
      "EXEC @City = 'London', @PostaICode - - 'WAI IDP'",
      "EXECUTE SelectAIICustomers"
    ],
    "answer": 0
  },
  {
    "id": 48,
    "question": "An E/R diagram is",
    "options": [
      "Entities",
      "Attributes",
      "Relationships",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 49,
    "question": "The descriptive property possessed by each entity set is:",
    "options": [
      "Entity",
      "Attribute",
      "Relation",
      "Model"
    ],
    "answer": 1
  },
  {
    "id": 50,
    "question": "In the entity-relationship model, what is an entity?",
    "options": [
      "Relationships",
      "Relationships between objects",
      "Objects and relationships between objects",
      "Data objects"
    ],
    "answer": 3
  }
];
