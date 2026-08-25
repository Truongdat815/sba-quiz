import { Question } from './types';

export const DBI202_EXAM5_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "What is an index?",
    "options": [
      "An index is a database table attribute that speeds up data search within a table.",
      "An index is the same as an alias.",
      "An index is a special way to join 2 or more tables.",
      "An index is a database row attribute that speeds up data search within a table."
    ],
    "answer": 0
  },
  {
    "id": 2,
    "question": "Which of the following is NOT",
    "options": [
      "Minimum duplication of data",
      "Redundancy of data",
      "Single-user access only",
      "Support for the ACID property"
    ],
    "answer": 2
  },
  {
    "id": 3,
    "question": "Given R as",
    "options": [
      "R has a primary key, no repeating groups, no multivalued/composite attributes",
      "R has a primary key, no repeating groups, no multivalued/complex attributes, no partial functional dependencies",
      "R has a primary key, no repeating groups, no multivalued/composite attributes, no transitive dependencies",
      "R has a primary key, no repeating groups, no multivalued/complex attributes, no transitive functional dependencies, no partial functional dependencies E. R has complete functional dependency"
    ],
    "answer": 3
  },
  {
    "id": 4,
    "question": "Question 4",
    "options": [
      "ResultSet object is used to execute SQL queries and update statements in JDBC.",
      "Connection",
      "Statement",
      "CallableStatement"
    ],
    "answer": 2
  },
  {
    "id": 5,
    "question": "Which of the following is an example of",
    "options": [
      "StudentlD with a unique value",
      "FullName (split into FirstName and LastName)",
      "EmailAddress with multiple values",
      "DateOfBirth accepted in the format \"dd/mm/yyyy\""
    ],
    "answer": 1
  },
  {
    "id": 6,
    "question": "Which function gets the day value (of the month) in SQL?",
    "options": [
      "DAYOFMONTH(date)",
      "DATE(date)",
      "DAY(date)",
      "MONTHDAY(date) E. None of the above answers"
    ],
    "answer": 2
  },
  {
    "id": 7,
    "question": "In relational database design, which normal form eliminates multi-valued attributes and ensures that data is organized at",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "answer": 0
  },
  {
    "id": 8,
    "question": "Which statement about the network data model is true?",
    "options": [
      "It supports high-level query languages like SQL.",
      "It only allows one parent per record.",
      "It organizes data using tables and relations.",
      "It allows each record to have multiple parents and children."
    ],
    "answer": 3
  },
  {
    "id": 9,
    "question": "Which one of the following is NOT",
    "options": [
      "DELETE",
      "CREATE DATABASE",
      "INSERT",
      "USE"
    ],
    "answer": 0
  },
  {
    "id": 10,
    "question": "Cäu IO. How are many-to-many relationships typically represented in the relational model? A. By adding attributes to one of the related tables B. By creating a new table with foreign keys from both related tables C. By denormalizing the database D. By creating a new table for each related entity",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1
  },
  {
    "id": 11,
    "question": "What is the main purpose of",
    "options": [
      "To write SQL queries for the database",
      "To define the physical structure of tables and indexes",
      "To represent high-level business entities and relationships",
      "To optimize database performance by normalization and decomposition"
    ],
    "answer": 2
  },
  {
    "id": 12,
    "question": "Consider",
    "options": [
      "—+ D,",
      "—+ AE}. Which of the following is the closure of {B, D}?",
      "{ABCDE}",
      "{BCDE}"
    ],
    "answer": 0
  },
  {
    "id": 13,
    "question": "The CREATE TRIGGER statement is used to create",
    "options": [
      "for insert, on",
      "on, for insert",
      "for, insert",
      "None of the mentioned"
    ],
    "answer": 1
  },
  {
    "id": 14,
    "question": "Assume there is",
    "options": [
      "The primary key is the ID column, the unique key is the TAX NUMBER column",
      "The primary key is the TAX NUMBER column, the unique key is the ID column",
      "The primary key includes two columns (ID, TAX NUMBER) and there should not be a unique key",
      "The primary key is the TAX NUMBER column, and there should not be a unique key"
    ],
    "answer": 0
  },
  {
    "id": 15,
    "question": "Consider the relation R(A, B, C, D, E, F, G, K) with functional dependencies AB —+ C, B C, C —+ AD, D E, CF -+ B, G K. What is the closure of {AB}?",
    "options": [
      "{ABCDE}",
      "{ABCDEF}",
      "{CDE}",
      "{ABCD} E. {ABCFG}"
    ],
    "answer": 0
  },
  {
    "id": 16,
    "question": "What does an RDBMS consist of?",
    "options": [
      "Collection of Tables",
      "Collection of Records",
      "Collection of Keys",
      "Collection of Fields"
    ],
    "answer": 0
  },
  {
    "id": 17,
    "question": "What is an SQL virtual table that is constructed from other tables?",
    "options": [
      "Just another table",
      "view",
      "relation",
      "Query results"
    ],
    "answer": 1
  },
  {
    "id": 18,
    "question": "stored procedure in SQL is a:",
    "options": [
      "Block of functions",
      "Group of Transact-SQL statements compiled into a single execution plan",
      "Group of distinct SQL statements",
      "None of the mentioned"
    ],
    "answer": 1
  },
  {
    "id": 19,
    "question": "Which of the following is used to delete rows where \"model\" is \"ford\" from the Cars table?",
    "options": [
      "DELETE FROM Cars WHERE model = 'ford';",
      "DELETE Cars WHERE model = 'ford';",
      "DELETE FROM Cars WITH TIE model IS 'ford';",
      "DELETE model = 'ford' WHERE cars;"
    ],
    "answer": 0
  },
  {
    "id": 20,
    "question": "In an ERD, which of the following best describes",
    "options": [
      "Each instance of Entity",
      "is related to exactly one instance of Entity",
      "Each instance of Entity",
      "is related to many instances of Entity"
    ],
    "answer": 1
  },
  {
    "id": 21,
    "question": "What is",
    "options": [
      "Organized collection of information that cannot be accessed, updated, and managed",
      "Collection of data or information without organizing",
      "Organized collection of data or information that can be accessed, updated, and managed",
      "Organized collection of data that cannot be updated"
    ],
    "answer": 2
  },
  {
    "id": 22,
    "question": "Consider",
    "options": [
      "Boat: BoatlD, BoatName, Color, Status",
      "Boat(BoatlD, BoatName, Color, Status)",
      "Boat(BoatlD: String, BoatName: String, Color: String, Status: String)",
      "Boat: {BoatlD, BoatName, Color, Status}"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "question": "What does the attribute domain define in the relational model?",
    "options": [
      "The primary key of the table",
      "The foreign key references",
      "The cardinality of relationships",
      "The data type and range of values that an attribute can hold"
    ],
    "answer": 3
  },
  {
    "id": 24,
    "question": "What does the relational algebra operation \"Projection\" do?",
    "options": [
      "Selects rows based on a condition.",
      "Combines rows from two tables.",
      "Selects columns from a table.",
      "Renames a table."
    ],
    "answer": 2
  },
  {
    "id": 25,
    "question": "According to the technology deployed by the database management system, which of the following is correct?",
    "options": [
      "Locks are used to maintain transactional integrity and consistency.",
      "Cursors are used to maintain transactional integrity and consistency.",
      "Procedures are used to maintain transactional integrity and consistency.",
      "Functions are used to maintain transactional integrity and consistency."
    ],
    "answer": 0
  },
  {
    "id": 26,
    "question": "Which statement is used to disable",
    "options": [
      "ALTER TABLE",
      "DROP CONSTRAINT fk name",
      "ALTER TABLE",
      "DISABLE CONSTRAINT fk name"
    ],
    "answer": 3
  },
  {
    "id": 27,
    "question": "The deadlock state can be changed back to",
    "options": [
      "DELETE",
      "DEADLOCK",
      "COMMIT",
      "ROLLBACK"
    ],
    "answer": 3
  },
  {
    "id": 28,
    "question": "In SQL, what is the purpose of the CLOSE statement in relation to cursors?",
    "options": [
      "To close the database connection",
      "To close the cursor and release associated resources",
      "To close the transaction",
      "To close the result set"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "question": "Which normalization level ensures that there are no repeating groups in tables?",
    "options": [
      "First Normal Form (1 NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "question": "When is it recommended to use",
    "options": [
      "Always, as cursors are the most efficient way to process data",
      "When processing data row by row is necessary or unavoidable",
      "Only when creating complex joins between tables",
      "Never, as set-based operations are always more efficient"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "question": "Which constraint ensures that the values of certain attributes in",
    "options": [
      "Foreign key constraint",
      "Primary key constraint",
      "Check constraint",
      "Unique constraint"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "question": "Suppose relation RI(A, B) and relation R2(C, each have tuples. Which tuples are contained in the result of the query below?SELECT RI .B, R2.C FROM RI RIGHT JOIN R2 ON RI .",
    "options": [
      "= (a, 101); (a, 104); (a, 109); (b, 102); (c, 103); (d, NULL); (e, NULL)",
      "(2, 101); (b, 102); (c, 103); (a, 104); (a, 105)",
      "(a, 101); (b, 102); (e, 103)",
      "(a, 101); (a, 104); (b, 102); (c, 103); (e, NULL)"
    ],
    "answer": 3
  },
  {
    "id": 33,
    "question": "Which of the following is NOT",
    "options": [
      "Insert",
      "Select",
      "Update",
      "Delete"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "question": "Consider the relation R(A, B, C, D) with functional dependencies",
    "options": [
      "and -+ Find the key of this relation. The key is column",
      "The key includes two columns (A,",
      "The key is column or column",
      "The key is column C"
    ],
    "answer": 1
  },
  {
    "id": 35,
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
    "id": 36,
    "question": "What is information?",
    "options": [
      "collection of unprocessed data",
      "collection of processed data",
      "collection of processed information",
      "collection of unprocessed information"
    ],
    "answer": 1
  },
  {
    "id": 37,
    "question": "Which one of the following is NOT true for",
    "options": [
      "view never contains derived columns.",
      "view definition is permanently stored as part of the database.",
      "view is a virtual table.",
      "view is derived from other tables."
    ],
    "answer": 0
  },
  {
    "id": 38,
    "question": "Which one of the following is NOT true for",
    "options": [
      "view never contains derived columns.",
      "view definition is permanently stored as part of the database.",
      "view is a virtual table.",
      "view is derived from other tables."
    ],
    "answer": 0
  },
  {
    "id": 39,
    "question": "Which of the following is",
    "options": [
      "Sorting",
      "Indexing",
      "Selection",
      "Comping"
    ],
    "answer": 2
  },
  {
    "id": 40,
    "question": "Given that Cartoons and Murder Mysteries are special Movie genres, what is the relationship between the entities Cartoons, Murder Mysteries, and Movie?",
    "options": [
      "Is-a relationship",
      "A-is relationship",
      "Supporting relationship",
      "Referential integrity relationship"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "question": "What is Boyce-Codd Normal Form (BCNF)?",
    "options": [
      "The weakest normal form.",
      "normal form where every determinant is a candidate key.",
      "normal form that allows redundancy.",
      "The same as first normal form."
    ],
    "answer": 1
  },
  {
    "id": 42,
    "question": "Which command is used to remove",
    "options": [
      "DROP TABLE",
      "DELETE",
      "PURGE",
      "REMOVE"
    ],
    "answer": 0
  },
  {
    "id": 43,
    "question": "Let El and E2 be two entities in an E/R diagram with simple single-valued attributes. RI and R2 are two relationships between El and E2, where RI is one-to-many and R2 is many-to-many. RI and R2 do not have any attributes of their own. What is the minimum number of tables required to represent this situation in the relational model?",
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
    "question": "Question 44",
    "options": [
      "query parser",
      "query preprocessor",
      "query optimizer",
      "query processor"
    ],
    "answer": 2
  },
  {
    "id": 45,
    "question": "What are the ACID properties of DBMS transactions?",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Atomicity, Consistency, Interpolate, Database",
      "Atomicity, Consistency, Inconsistent, Durability",
      "Automatic, Concurrent, Inconsistent, Deadlock-freedom"
    ],
    "answer": 0
  },
  {
    "id": 46,
    "question": "Which of the following is correct?",
    "options": [
      "SELECT DATEPART(DATE, 'IO-jan-24')",
      "SELECT DATEPART('I O-jan-24', DATE)",
      "SELECT DATEPART('I O-jan-24', DAY)",
      "SELECT DATEPART(DAY, '1 0-jan-24')"
    ],
    "answer": 3
  },
  {
    "id": 47,
    "question": "Question 47",
    "options": [
      "-+ B, what can be said about B?",
      "is also a superkey",
      "is a determinant",
      "is functionally dependent on"
    ],
    "answer": 2
  },
  {
    "id": 48,
    "question": "In which objects can",
    "options": [
      "View, User-defined function",
      "User-defined function, Stored Procedure",
      "Stored Procedure, Trigger, View",
      "User-defined function, Stored Procedure, Trigger E. All of the mentioned answers are wrong"
    ],
    "answer": 4
  },
  {
    "id": 49,
    "question": "Consider",
    "options": [
      "ID -i NAME",
      "Password -+ email",
      "Password -+ NAME",
      "NAME email"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "question": "Consider two relations MovieStar(name, address, gender, birthdate) and MovieExec(name, address, cert, netWorth). You want the names and addresses of all female movie stars who are also movie executives with",
    "options": [
      "SELECT name, address FROM MovieStar WHERE gender = 'F' UNION SELECT name, address FROM MovieExec WHERE networth > 10000000",
      "SELECT name, address FROM MovieStar WHERE gender = 'F' INTERSECT SELECT name, address FROM MovieExec WHERE net-Worth > 10000000",
      "SELECT name, address FROM MovieStar WHERE gender = 'F' EXCEPT SELECT name, address FROM MovieExec WHERE networth > 10000000",
      "None of the others"
    ],
    "answer": 1
  }
];
