import { Question } from './types';

export const DBI202_EXAM7_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "For two relations Employee and Customer sharing the columns (Name, City, Gender), what is the result of the Union operation between Employee and Customer?",
    "options": [
      "Only the rows common to both relations",
      "All rows from Employee only",
      "All rows from Customer only",
      "All distinct rows from both relations, with duplicates removed"
    ],
    "answer": 3
  },
  {
    "id": 2,
    "question": "How many joins are required to join 6 tables in",
    "options": [
      "12"
    ],
    "answer": 1
  },
  {
    "id": 3,
    "question": "Triggers are stored blocks of code that have to be called in order to operate.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 4,
    "question": "In SQL, after grouping data using the GROUP BY clause, which clause is used to filter the groups based on specific conditions?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "WITH"
    ],
    "answer": 1
  },
  {
    "id": 5,
    "question": "Suppose we have",
    "options": [
      "—+ B,",
      "—i C, BC —i A,",
      "D, E A,",
      "—i E. Of the following is NOT a key?"
    ],
    "answer": 0
  },
  {
    "id": 6,
    "question": "Suppose we need to sort all students in the STUDENTS(id, name, age) table in descending order of name and descending order of age. Which command should we use?",
    "options": [
      "SELECT * FROM Students ORDER BY name, age DESC",
      "SELECT * FROM Students ORDER BY name DESC, age DESC",
      "Both",
      "and"
    ],
    "answer": 1
  },
  {
    "id": 7,
    "question": "To ensure that each row in",
    "options": [
      "CHECK",
      "UNIQUE",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "answer": 3
  },
  {
    "id": 8,
    "question": "real-world thing, distinguishable from other objects, in an ERD is called:",
    "options": [
      "Entity",
      "Diagram",
      "Relationship",
      "Primary entity"
    ],
    "answer": 0
  },
  {
    "id": 9,
    "question": "Which of the following statements is correct when converting from the ERD model to the relational model?",
    "options": [
      "The order of the columns is not important",
      "The order of both rows and columns is important",
      "The order of the rows is important",
      "The order of the columns is important"
    ],
    "answer": 0
  },
  {
    "id": 10,
    "question": "Two concurrently executing transactions Tl and T 2 are allowed to update the same record in an uncontrolled manner. If the database system has no concurrency module, which of the following problems may occur?",
    "options": [
      "Transaction failure",
      "Dirty read problem",
      "Lost update problem",
      "Inconsistent database state"
    ],
    "answer": 2
  },
  {
    "id": 11,
    "question": "Generally, what parts does",
    "options": [
      "Structure of the data, operations on the data, and constraints on the data",
      "Metadata of the data, action logs, and data files",
      "Keys on the table, records accepted in the table, and attributes of the table",
      "Data schema, domain of attributes, and keys"
    ],
    "answer": 0
  },
  {
    "id": 12,
    "question": "Cäu IO. Which of the following SQL statements returns only matching records between Customers and Saleslnvoice based on custlD? A. SELECT * FROM Customers LEFT JOIN Saleslnvoice ON Customers.custlD = Saleslnvoice.custlD; B. SELECT * FROM Customers INNER JOIN Saleslnvoice ON Customers.custlD = Saleslnvoice.custlD; C. SELECT * FROM Customers RIGHT JOIN Saleslnvoice ON Customers.custlD = Saleslnvoice.custlD; D. SELECT * FROM Customers FULL JOIN Saleslnvoice ON Customers.custlD = Saleslnvoice.custlD;",
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
    "question": "What is",
    "options": [
      "Increased storage space efficiency",
      "Reduced update anomalies",
      "Simplified database queries",
      "Enhanced data security"
    ],
    "answer": 1
  },
  {
    "id": 14,
    "question": "Suppose we have",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "answer": 3
  },
  {
    "id": 15,
    "question": "In which of the following is",
    "options": [
      "One-to-One Relationship",
      "One-to-Many Relationship",
      "Many-to-Many Relationship",
      "Composite Relationship"
    ],
    "answer": 1
  },
  {
    "id": 16,
    "question": "Which property of ACID transactions ensures that",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "answer": 3
  },
  {
    "id": 17,
    "question": "Which of the following is NOT",
    "options": [
      "Inner join",
      "Outer join",
      "Cross join",
      "Super join"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "question": "key:",
    "options": [
      "must always be composed of two or more columns",
      "can only be one column",
      "identifies a row",
      "identifies a column"
    ],
    "answer": 2
  },
  {
    "id": 19,
    "question": "Which SQL statement is used to remove an existing index from",
    "options": [
      "DROP INDEX",
      "REMOVE INDEX",
      "DELETE INDEX",
      "UNINDEX TABLE"
    ],
    "answer": 0
  },
  {
    "id": 20,
    "question": "Which of the following best describes",
    "options": [
      "One entity is related to one other entity",
      "One entity is related to many other entities",
      "Many entities are related to many other entities",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 21,
    "question": "Consider",
    "options": [
      "101 rows will be returned with no error.",
      "10,001 rows will be returned with no error.",
      "101 rows will be returned with a maximum recursion error.",
      "10,001 rows will be returned with a maximum recursion error."
    ],
    "answer": 2
  },
  {
    "id": 22,
    "question": "Which SQL statement is used to declare",
    "options": [
      "OPEN",
      "DECLARE",
      "CREATE CURSOR",
      "BEGIN CURSOR"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "question": "Which data model introduced the concept of tables with rows and columns?",
    "options": [
      "Hierarchical Model",
      "Network Model",
      "Object-Oriented Model",
      "Relational Model"
    ],
    "answer": 3
  },
  {
    "id": 24,
    "question": "Which SQL statement creates an updatable view?",
    "options": [
      "CREATE VIEW AS SELECT DISTINCT Product_No FROM \"Order\"",
      "CREATE VIEW Product_Name, Order_Quantity) AS SELECT Order_No, Product_Name, Order_Quantity FROM \"Order\", Product WHERE \"Order\".Product_No = Product.Product No",
      "CREATE VIEW Order_Quantity) AS SELECT Product_No, FROM \"Order\" GROUP BY Product_No",
      "CREATE VIEW Product_Name) AS SELECT Product_No, Product Name FROM Product WHERE Product Unit Price > 1000"
    ],
    "answer": 3
  },
  {
    "id": 25,
    "question": "view's definition can be modified using which statement, while a view's data can be modified using which statement?",
    "options": [
      "ALTER VIEW, ALTER",
      "ALTER VIEW, EDIT",
      "ALTER VIEW, UPDATE",
      "UPDATE, ALTER VIEW"
    ],
    "answer": 2
  },
  {
    "id": 26,
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
    "id": 27,
    "question": "How do you execute",
    "options": [
      "EXECUTE name_sp",
      "EXEC name_sp",
      "CALL name_sp",
      "All of the answers above E."
    ],
    "answer": 4
  },
  {
    "id": 28,
    "question": "In an ERD, what does",
    "options": [
      "An attribute",
      "relationship",
      "primary key",
      "foreign key"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "question": "In the query below, which keyword must be inserted?lNSERT INTO Students INTO B. SET C. WHERE D. VALUES (32, N'lona Bush',",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 3
  },
  {
    "id": 30,
    "question": "Which operator is used to produce",
    "options": [
      "Selection",
      "Projection",
      "Intersection",
      "All of the others"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "question": "In an ERD, what role does",
    "options": [
      "It uniquely identifies each record in a table",
      "It establishes relationships between tables",
      "It determines the data type of attributes",
      "It defines the cardinality of relationships"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "question": "If R is neither many-one from E to F nor from F to E, then we say R is:",
    "options": [
      "Many-one",
      "One-one",
      "Many-many",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 33,
    "question": "Which SQL clause is used to add",
    "options": [
      "ADD COLUMN",
      "ALTER TABLE ADD COLUMN",
      "INSERT INTO",
      "CREATE COLUMN"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "question": "You need to develop an application to manage university courses, which requires structured data (tables, rows, columns), strict consistency, complex queries, and enforcement of ACID properties. Which data model is most appropriate?",
    "options": [
      "Relational data model (e.g. Microsoft SQL Server, MySQL)",
      "Document-based data model (e.g. MongoDB, Cassandra, CouchDB)",
      "Key-value data model (e.g. Redis, DynamoDB, Riak)",
      "Hierarchical data model"
    ],
    "answer": 0
  },
  {
    "id": 35,
    "question": "How can you invoke",
    "options": [
      "Using the EXECUTE statement",
      "Using the CALL statement",
      "Using the SELECT statement",
      "Using the RUN statement"
    ],
    "answer": 2
  },
  {
    "id": 36,
    "question": "relation R(X, Y, Z) has functional dependencies XY -9 Z and Z Y. Assuming X, Y, Z are single attributes and {X, Y} is the only candidate key, what is the highest normal form that R satisfies?",
    "options": [
      "First Normal Form (1 NF) only",
      "Second Normal Form (2NF) but not Third Normal Form (3NF)",
      "Third Normal Form (3NF) but not Boyce-Codd Normal Form (BCNF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "answer": 2
  },
  {
    "id": 37,
    "question": "Consider",
    "options": [
      "1, f2, f3, f4",
      "f2, B, f4"
    ],
    "answer": 2
  },
  {
    "id": 38,
    "question": "When does the Deleted temporary trigger table become populated?",
    "options": [
      "With DELETE and INSERT triggers",
      "With DELETE triggers only",
      "With DELETE, UPDATE, and INSERT triggers",
      "With DELETE and UPDATE triggers"
    ],
    "answer": 3
  },
  {
    "id": 39,
    "question": "In SQL, to update",
    "options": [
      "INSERT",
      "UPDATE",
      "ALTER",
      "ALTER TABLE"
    ],
    "answer": 3
  },
  {
    "id": 40,
    "question": "With SQL, how do you select all records from",
    "options": [
      "SELECT * FROM Customers WHERE FirstName = 'a'",
      "SELECT * FROM Customers WHERE FirstName LIKE 'aw",
      "SELECT * FROM Customers WHERE FirstName LIKE 'Oka'",
      "SELECT * FROM Customers WHERE FirstName ="
    ],
    "answer": 2
  },
  {
    "id": 41,
    "question": "In SQL, the statement SELECT * FROM R, S is equivalent to which of the following?",
    "options": [
      "SELECT * FROM R INNER JOIN S",
      "SELECT * FROM R NATURAL JOIN S",
      "SELECT * FROM R CROSS JOIN S",
      "SELECT * FROM R UNION JOIN S"
    ],
    "answer": 2
  },
  {
    "id": 42,
    "question": "Which of the following best describes an entity in an ERD (Entity-Relationship Diagram)?",
    "options": [
      "table with rows and columns",
      "real-world object or concept with attributes",
      "set of rows, columns, and constraints",
      "table with rows, columns, and domain constraints"
    ],
    "answer": 1
  },
  {
    "id": 43,
    "question": "Which of the following is NOT true about an aggregate function?",
    "options": [
      "All aggregate functions are nondeterministic.",
      "It performs a calculation on a set of values and returns a single value.",
      "Aggregate functions such as COUNT(*) ignore null values.",
      "Aggregate functions are often used with the GROUP BY clause of the SELECT statement."
    ],
    "answer": 0
  },
  {
    "id": 44,
    "question": "database administrator is a person or persons responsible for the structure or schema of the database.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "question": "In the context of set of changes that must all be made together\"?",
    "options": [
      "Consistency",
      "Concurrency",
      "Transaction",
      "Atom"
    ],
    "answer": 2
  },
  {
    "id": 46,
    "question": "In SQL normalization theory, which of the following statements is correct?",
    "options": [
      "All relations in 2NF are also in BCNF.",
      "All relations in INF are also in BCNF.",
      "All relations in 3NF are also in BCNF.",
      "For any relation schema, there is a dependency-preserving decomposition into 3NF."
    ],
    "answer": 3
  },
  {
    "id": 47,
    "question": "Question 47",
    "options": [
      "Yes, a stored procedure can call another stored procedure",
      "No, stored procedures cannot call each other",
      "Only if both procedures are in the same schema",
      "Only if one procedure is a system procedure"
    ],
    "answer": 0
  },
  {
    "id": 48,
    "question": "In the relational model, how are relationships represented between tables?",
    "options": [
      "By adding attributes to each table",
      "By creating a new table for each relationship",
      "By adding foreign keys to related tables",
      "By creating a primary key in each table"
    ],
    "answer": 2
  },
  {
    "id": 49,
    "question": "Within the context of ACID properties, which property ensures that even if the system crashes during",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "question": "Consider",
    "options": [
      "with functional dependencies {AB —+ C,",
      "—+ D,",
      "-9 A}. What are all the keys of R?",
      "AB, BC, BD"
    ],
    "answer": 0
  },
  {
    "id": 51,
    "question": "Which files are created automatically by SQL Server when you create",
    "options": [
      "Primary data file and secondary data file",
      "Primary data file and log file",
      "Index file and log file",
      "Secondary data file and log file E. Backup file and metadata file"
    ],
    "answer": 1
  },
  {
    "id": 52,
    "question": "Which of the following queries deletes employees who are not assigned to any department?",
    "options": [
      "DELETE FROM Employees WHERE DepartmentiD IS NULL;",
      "DELETE FROM Employees WHERE DepartmentiD = I';",
      "DELETE FROM Employees WHERE DepartmentiD = O;",
      "DELETE FROM Employees WHERE DepartmentiD IS NOT NULL;"
    ],
    "answer": 0
  }
];
