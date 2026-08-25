import { Question } from './types';
import { DBI202_EXAM1_QUESTIONS } from './dbi202_exam1';
import { DBI202_EXAM2_QUESTIONS } from './dbi202_exam2';
import { DBI202_EXAM3_QUESTIONS } from './dbi202_exam3';
import { DBI202_EXAM4_QUESTIONS } from './dbi202_exam4';
import { DBI202_EXAM5_QUESTIONS } from './dbi202_exam5';
import { DBI202_EXAM6_QUESTIONS } from './dbi202_exam6';
import { DBI202_EXAM7_QUESTIONS } from './dbi202_exam7';
import { DBI202_EXAM8_QUESTIONS } from './dbi202_exam8';
import { DBI202_EXAM9_QUESTIONS } from './dbi202_exam9';
import { DBI202_EXAM10_QUESTIONS } from './dbi202_exam10';
import { DBI202_EXAM11_QUESTIONS } from './dbi202_exam11';
import { DBI202_EXAM12_QUESTIONS } from './dbi202_exam12';

export { DBI202_EXAM1_QUESTIONS, DBI202_EXAM2_QUESTIONS, DBI202_EXAM3_QUESTIONS, DBI202_EXAM4_QUESTIONS, DBI202_EXAM5_QUESTIONS, DBI202_EXAM6_QUESTIONS, DBI202_EXAM7_QUESTIONS, DBI202_EXAM8_QUESTIONS, DBI202_EXAM9_QUESTIONS, DBI202_EXAM10_QUESTIONS, DBI202_EXAM11_QUESTIONS, DBI202_EXAM12_QUESTIONS };

export const ALL_DBI202_QUESTIONS: Question[] = [
  {
    "id": 1,
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
    "id": 2,
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
    "id": 3,
    "question": "database administrator: a person or persons responsible for the structure or schema of the database.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
    "question": "Question 17",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "All of the mentioned"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "question": "Question 18",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "answer": 0
  },
  {
    "id": 19,
    "question": "What are some benefits of normalization when converting an ERD to",
    "options": [
      "Increased storage space efficiency",
      "Reduced update anomalies",
      "Simplified database queries",
      "Enhanced data security"
    ],
    "answer": 1
  },
  {
    "id": 20,
    "question": "Which normalization form eliminates transitive dependency?",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answer": 2
  },
  {
    "id": 21,
    "question": "What is the relationship between",
    "options": [
      "One-to-one relationship.",
      "Many-to-many relationship.",
      "Many-to-one relationship.",
      "One-to-many relationship."
    ],
    "answer": 3
  },
  {
    "id": 22,
    "question": "What type of attribute in an ER diagram is represented with",
    "options": [
      "Multivalued attribute",
      "Derived attribute",
      "Composite attribute",
      "Primary attribute"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "question": "An E/R diagram is",
    "options": [
      "Entity",
      "Attributes",
      "Relationships",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 24,
    "question": "Question 24",
    "options": [
      "Entity Real-world thing, distinguishable from other objects, in ERD.",
      "Diagram",
      "Relationship",
      "Primary entity"
    ],
    "answer": 0
  },
  {
    "id": 25,
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
    "id": 26,
    "question": "The key for",
    "options": [
      "Zero or more attributes",
      "The set of attributes of supporting relationships",
      "It is possible for an entity set's key to be composed of attributes, some or all of which belong to another entity set",
      "The set of attributes of supporting entity sets"
    ],
    "answer": 2
  },
  {
    "id": 27,
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
    "id": 28,
    "question": "To convert from ER Diagram to Relational Model, I-M relationship:",
    "options": [
      "Put key attribute of one-side to M-side",
      "Put key attribute of M-side to one-side",
      "Generate 1 relation, Primary key of this relation combined from two relations",
      "Build a table with two columns, one column for each participating entity set's primary key."
    ],
    "answer": 0
  },
  {
    "id": 29,
    "question": "There is",
    "options": [
      "agrees",
      "disagrees",
      "is not relative",
      "differs with"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "question": "In SQL, after grouping data using the GROUP BY clause, the groups based on specific conditions.",
    "options": [
      "Where",
      "Having",
      "Group by",
      "With clause is used to filter the"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "question": "Question 31",
    "options": [
      "UPDATE",
      "ALTER",
      "MODIFY",
      "CHANGE"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "question": "Which of the following is false about",
    "options": [
      "Whereas only one foreign key is allowed in a table.",
      "It refers to the field in a table which is the primary key of another table.",
      "It can contain duplicate values and a table in a relational database.",
      "It can also contain NULL values."
    ],
    "answer": 0
  },
  {
    "id": 33,
    "question": "The ORDER BY clause can only be used in cases",
    "options": [
      "GROUP BY queries",
      "SELECT queries",
      "HAVING queries",
      "None of the others"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "question": "While executing",
    "options": [
      "Inner Join",
      "Right Join",
      "Full Outer Join",
      "Left Join"
    ],
    "answer": 3
  },
  {
    "id": 35,
    "question": "Delete command operates on",
    "options": [
      "One",
      "Two",
      "Several",
      "Null relation."
    ],
    "answer": 0
  },
  {
    "id": 36,
    "question": "Which keyword is used in SQL to filter grouped results?",
    "options": [
      "WHERE",
      "TOP",
      "GROUP BY",
      "HAVING"
    ],
    "answer": 3
  },
  {
    "id": 37,
    "question": "Which statement best describes the DELETE command?",
    "options": [
      "Deletes all rows and cannot be rolled back",
      "Deletes the table structure and all its data",
      "Deletes specific rows and can be rolled back",
      "Deletes only columns that exist in DELETE command."
    ],
    "answer": 2
  },
  {
    "id": 38,
    "question": "In query optimization, why is it beneficial for the database engine to use indexes?",
    "options": [
      "To reduce table size",
      "To enforce foreign key constraints",
      "To speed up data retrieval",
      "To convert text to binary"
    ],
    "answer": 2
  },
  {
    "id": 39,
    "question": "Two concurrent executing transactions Tl and T 2 are allowed to update the same record in an uncontrolled manner. In such",
    "options": [
      "Transaction failure",
      "Dirty read problem",
      "Lost update problem",
      "Inconsistent database state"
    ],
    "answer": 2
  },
  {
    "id": 40,
    "question": "In database transactions, which isolation level is most restrictive?",
    "options": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    "answer": 3
  },
  {
    "id": 41,
    "question": "Which is the SQL statement that creates an updatable view? (In this question, all the tables in the SQL statements are updatable)",
    "options": [
      "CREATE VIEW AS SELECT DISTINCT Product_No FROM Order",
      "CREATE VIEW Product_Name, Order_Quantity) AS SELECT Order_No, Product_Name, Order_Quantity FROM Order, Product WHERE Order.Product_No = Product.Product_No",
      "CREATE VIEW Order_Quantity) AS SELECT Product_No, FROM Order GROUP BY Product_No",
      "CREATE VIEW Product_Name) AS SELECT Product_No, Product Name FROM Product WHERE Product Unit Price > 1000"
    ],
    "answer": 3
  },
  {
    "id": 42,
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
    "id": 43,
    "question": "Which two statements correctly describe stored procedures? (Choose two correct answers) (ChQn 2 dåp ån)",
    "options": [
      "They can return multiple result sets",
      "They are compiled each time they run",
      "They support conditional logic like IF...ELSE",
      "They replace the need for triggers"
    ],
    "answer": 0
  },
  {
    "id": 44,
    "question": "Which indexes can be automatically created by defining constraints in",
    "options": [
      "PRIMARY KEY",
      "CHECK",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": 45,
    "question": "Given",
    "options": [
      "The average laptop price with model = 1",
      "The price of all laptops",
      "The price of laptop with model = 1",
      "The model of laptop with price = 1 - @model"
    ],
    "answer": 2
  },
  {
    "id": 46,
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
    "id": 47,
    "question": "How many types of variables are there in Stored Procedure?",
    "options": [
      "Default variable and input variable",
      "Default variable and output variable",
      "Input variable and output variable",
      "Local variables and global variables"
    ],
    "answer": 2
  },
  {
    "id": 48,
    "question": "Which of the following methods fetch data from cursor to access data?",
    "options": [
      "First, last, next, prior, absolute, relative",
      "First, last, next",
      "First, last, next, prior",
      "First, absolute, relative"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "question": "Which files are created automatically by SQL Server when you create",
    "options": [
      "primary data file and secondary data file",
      "primary data file and log file",
      "index file and log file",
      "secondary data file and log file E. backup file and metadata file"
    ],
    "answer": 1
  },
  {
    "id": 50,
    "question": "In an employee table to include the attributes whose value always have some value which of the following constraint must be used?",
    "options": [
      "Null",
      "Not null",
      "Unique",
      "Distinct"
    ],
    "answer": 1
  },
  {
    "id": 51,
    "question": "What is NOT true about the cursor in SQL?",
    "options": [
      "It is considered the best practice to use when we want insert, update, or delete data in a table of SQL Server.",
      "The cursor allows users to process data from a result set, one row at a time.",
      "Cursors are an alternative to commands, which operate on all rows in a result set at the same time.",
      "Unlike commands, cursors can be used to update data on a row-by-row basis."
    ],
    "answer": 0
  },
  {
    "id": 52,
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
    "id": 53,
    "question": "What happens to derived attributes when converting an ERD to",
    "options": [
      "They become primary keys in the related tables",
      "They are calculated and stored as regular attributes in the related tables",
      "They become foreign keys in the related tables",
      "They are ignored during the conversion process"
    ],
    "answer": 3
  },
  {
    "id": 54,
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
    "id": 55,
    "question": "Given that Cartoons and Murder Mysteries are special Movie genres, what is the relationship between entities Cartoons, Murder Mysteries and Movie?",
    "options": [
      "is-a relationship",
      "ais relationship",
      "supporting relationship",
      "referential integrity relationship"
    ],
    "answer": 0
  },
  {
    "id": 56,
    "question": "Which type of user-defined function in SQL returns",
    "options": [
      "Scalar function",
      "Table-valued function",
      "Inline function",
      "Aggregate function"
    ],
    "answer": 0
  },
  {
    "id": 57,
    "question": "Triggers are stored blocks of code that have to be called in order to operate.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 58,
    "question": "The predicate in",
    "options": [
      "Unknown, unknown, false",
      "True, false, unknown",
      "True, unknown, unknown",
      "Unknown, false, unknown"
    ],
    "answer": 3
  },
  {
    "id": 59,
    "question": "Cäu IO. In which of the following is a single-entity instance of one type related to many entity instances of another type? A. One-to-One Relationship B. One-to-Many Relationship C. Many-to-Many Relationship D. Composite Relationship",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1
  },
  {
    "id": 60,
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
    "id": 61,
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
    "id": 62,
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
    "id": 63,
    "question": "(Choose 3 answers) Which one of the following is NOT",
    "options": [
      "DELETE",
      "CREATE DATABASE",
      "INSERT",
      "USE"
    ],
    "answer": [
      0,
      2,
      3
    ]
  },
  {
    "id": 64,
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
    "id": 65,
    "question": "data model is a notation for describing data or information. The description generally consists",
    "options": [
      "Structure of the data",
      "Operations on the data",
      "Constraints on the data.",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 66,
    "question": "In the entity-relationship model, what is the entity?",
    "options": [
      "Relationships",
      "Relationships between objects",
      "Objects and relationships between objects",
      "Data objects"
    ],
    "answer": 3
  },
  {
    "id": 67,
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
    "id": 68,
    "question": "How are weak entity sets represented in an Entity Relationship Diagram (ERD)?",
    "options": [
      "With rectangle",
      "With diamond shape",
      "With a double-line rectangle",
      "With a dashed oval"
    ],
    "answer": 2
  },
  {
    "id": 69,
    "question": "DB1202 SP26_RE I Multiple Choice Question 29 (Choose 2 answers) During database design, why is it necessary to identify candidate keys? Choose two answers",
    "options": [
      "To reduce data type complexity.",
      "To normalize tables faster",
      "To select the most appropriate primary key",
      "To remove NULL values"
    ],
    "answer": [
      1,
      2
    ]
  },
  {
    "id": 70,
    "question": "Given two relations R(A, B, C) and S(C, D). Which of the following relational algebra expressions is equivalent to the SQL query: SELECT A, D FROM R JOIN S ON R.C = S.C?",
    "options": [
      "π A,D (R ⋈ S)",
      "π A,D (σ R.C=S.C (R × S))",
      "σ R.C=S.C (π A,D (R × S))",
      "Both π A,D (R ⋈ S) and π A,D (σ R.C=S.C (R × S))"
    ],
    "answer": 3
  },
  {
    "id": 71,
    "question": "DB1202 SP26_RE I Multiple Choice Question 15 (Choose 1 answer) Domain constraints, functional dependency and referential integrity are special forms of",
    "options": [
      "Foreign key",
      "Primary key",
      "Assertion",
      "Referential constraint"
    ],
    "answer": 2
  },
  {
    "id": 72,
    "question": "In which scenario would denormalization be considered",
    "options": [
      "When maximizing disk usage is a priority",
      "When minimizing data redundancy is the main goal",
      "When performance of read-heavy queries is critical",
      "When multiple developers are working on schema design"
    ],
    "answer": 2
  },
  {
    "id": 73,
    "question": "Consider",
    "options": [
      "and C->E. What is/are the key(s) for R",
      "AD"
    ],
    "answer": 2
  },
  {
    "id": 74,
    "question": "What are the disadvantages of network data model?",
    "options": [
      "Not support the high-level query language",
      "Not support the relationships between nodes",
      "Not support the database management system",
      "Not support the storage method of very large amounts of data"
    ],
    "answer": 0
  },
  {
    "id": 75,
    "question": "variable is local, and its value is not preserved by the DBMS after a run-ning of the function or procedure.",
    "options": [
      "DECLARE",
      "RETURN",
      "CALL",
      "EXEC"
    ],
    "answer": 0
  },
  {
    "id": 76,
    "question": "Question 27",
    "options": [
      "many-to-one",
      "one-to-many",
      "many-to-many",
      "one-to-one"
    ],
    "answer": 2
  },
  {
    "id": 77,
    "question": "In SQL, what is the primary advantage of using stored procedures?",
    "options": [
      "They allow for the creation of tables",
      "They enhance security by restricting access to data",
      "They provide a way to encapsulate and reuse a set of SQL statements",
      "They are more efficient than regular SQL queries"
    ],
    "answer": 2
  },
  {
    "id": 78,
    "question": "I Multiple Choice Question 18 (Choose 2 answers) Assume that all tables, columns are ready, and each customer can place one or more orders. How can you retrieve all customers who have not made any purchases? (choose two options)",
    "options": [
      "SELECT c_CustomerID, c.CustomerName, c.Email, c.CreatedDate FROM dbo.Customers AS c VWERE NOT EXISTS ( SELECT 1 FROM dboOrders AS o WHERE o.CustomerlD = c CustornerlD",
      "SELECT c_CustomerID, c_CustomerName, c_Email, c.CreatedDate FROM db0Customers AS c LEFT JOIN dboorders AS o ON c CustomerlD o.CustomerlD WHERE corderlD IS NULL;",
      "SELECT c.CustomerlD, c.CustomerName, c.Email, c.CreatedDate FROM dbo_CustomersAS c INNER JOIN dbo_OrdersASo ON c_CustomerlD = o_CustomerlD WHERE corderlD IS NULL;",
      "SELECT c_CustomerlD, c_CustomerName, c_Email, c_CreatedDate FROM c RIGHT JOIN db0.oroers AS o ON coustomerlD = o.CustomerlD WHERE o OrderlD IS NULL; Hinh trong dé"
    ],
    "answer": 0
  },
  {
    "id": 79,
    "question": "Consider the relation R(A, B, C, D) with functional dependencies: AB -> C, C -> A, AB -> D. What are the candidate keys of R?",
    "options": [
      "AB",
      "BC",
      "AB and BC",
      "ABC"
    ],
    "answer": 2
  },
  {
    "id": 80,
    "question": "The highest normal form for relation schema R(ABCD) with functional dependencies F C->ABD} is:",
    "options": [
      "2NF",
      "INF",
      "3NF",
      "BCNF"
    ],
    "answer": 2
  },
  {
    "id": 81,
    "question": "In query compiler, which unit builds",
    "options": [
      "query parser",
      "query preprocessor",
      "query optimizer",
      "query processor"
    ],
    "answer": 0
  },
  {
    "id": 82,
    "question": "Which of the following is the appropriate characteristic of",
    "options": [
      "Because a database is created to suit the format of the data, it cannot respond flexibly to data format changes.",
      "The procedure for making backups is complicated.",
      "It is difficult to share data between operations due to an exclusive control function.",
      "It can be accessed by multiple users at the same time due to an exclusive control function."
    ],
    "answer": 3
  },
  {
    "id": 83,
    "question": "Which of the following is not mentioned how does",
    "options": [
      "The name of the local variable should begin with \"@@\" sign as the first character of its name.",
      "local variable is defined using T-SQL by using statement \"DECLARE\".",
      "When a variable is first declared, its value is set to NULL. To assign a value to a variable, use the SET statement.",
      "The data type of local variable is declared after its name and assigned a system-supplied or user- defined data type and a length."
    ],
    "answer": 0
  },
  {
    "id": 84,
    "question": "What is the main disadvantage of having too many indexes on",
    "options": [
      "Improved query performance",
      "Increased storage space",
      "Enhanced data integrity",
      "Fast data modification operations"
    ],
    "answer": 1
  },
  {
    "id": 85,
    "question": "Consider the relation R(A, B, C, D) and functional dependencies: AB -> C, C -> D, D -> A. Find the candidate key(s) of R.",
    "options": [
      "AB",
      "BC",
      "BD",
      "AB, BC, and BD"
    ],
    "answer": 3
  },
  {
    "id": 86,
    "question": "Which two statements about foreign key constraints are true? (Choose two correct answers)",
    "options": [
      "They enforce referential integrity",
      "They allow orphaned rows in child tables",
      "They can be defined using ALTER TABLE",
      "They replace the need for primary keys"
    ],
    "answer": 0
  },
  {
    "id": 87,
    "question": "Consider the table: Which functional dependency exists in the above table?",
    "options": [
      "ID NAME",
      "Password -+ email",
      "Password —NAME",
      "NAME email"
    ],
    "answer": 0
  },
  {
    "id": 88,
    "question": "The values appearing in given attributes of any tuple in the referencing relation must likewise occur in specified attributes of at least one tuple in the referenced relation, according to constraint. integrity",
    "options": [
      "Referential",
      "Primary",
      "Referencing",
      "Specific"
    ],
    "answer": 0
  },
  {
    "id": 89,
    "question": "Given R as",
    "options": [
      "If R: Has a primary key, no repeating groups, no multivalued attributes/composite attributes",
      "If R: Has a primary key, no repeating groups, no multivalued attributes/complex attributes, no partial functional dependencies.",
      "If R: Has a primary key, no repeating groups, no multivalued/composite attributes, no transitive dependencies.",
      "If R: Has a primary key, no repeating groups, no multivalued attributes/complex attributes, no transitive functional dependencies, no partial functional dependencies. E. If R: has complete functional dependency."
    ],
    "answer": 3
  },
  {
    "id": 90,
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
    "id": 91,
    "question": "I Multiple Choice Question 32 (Choose 1 answer) Assume that the table Cars and it's columns are ready Which of the following to update the \"colour\" field to \"Sitver• for all records where model is \"Escape\" from Cars table?",
    "options": [
      "UPDATE cars SET colour = 'Silver' WHERE model = 'Escape';",
      "UPDATE Cars SET = 'Escape' WHERE colour = 'Silver';",
      "UPDATE Cars SET colour = 'Sliver'",
      "UPDATE FROM Cars SET colour 'Silver' WHERE model = Escape'; Hinh trong dé"
    ],
    "answer": 0
  },
  {
    "id": 92,
    "question": "Question 43",
    "options": [
      "Attributes",
      "Fields",
      "Tuples",
      "Keys"
    ],
    "answer": 2
  },
  {
    "id": 93,
    "question": "DB1202 SP26_RE I Multiple Choice Question 34 (Choose 1 answer) The transaction methods is used with the Connection object to save or cancel changes made to the data source.",
    "options": [
      "Begin Transaction, Rollback Transaction",
      "Begin Transaction, Commit Transaction",
      "Begin Transaction, Commit Transaction, Rollback Transaction",
      "Commit Transaction, Rollback Transaction"
    ],
    "answer": 2
  },
  {
    "id": 94,
    "question": "Which of the following aggregate functions does not ignore nulls in its results?",
    "options": [
      "MIN",
      "MAX",
      "COUNT",
      "COUNT"
    ],
    "answer": 2
  },
  {
    "id": 95,
    "question": "If two entities in an ER model share the same attribute name but represent different meanings, what should be done during schema transformation?",
    "options": [
      "Always add entity name to the attribute name to make the meaning clear.",
      "Rename one of the attributes to avoid ambiguity",
      "Merge both entities",
      "Ignore the attribute names"
    ],
    "answer": 1
  },
  {
    "id": 96,
    "question": "Given relation R(X, Y, Z, W) with the set of functional dependencies: XY -> Z, Z -> W, W -> X. Which of the following is a candidate key of R?",
    "options": [
      "XY",
      "YZ",
      "YW",
      "All of XY, YZ, and YW"
    ],
    "answer": 3
  },
  {
    "id": 97,
    "question": "What is the result of",
    "options": [
      "Union of tables",
      "Intersection of tables",
      "Cartesian product",
      "Natural join"
    ],
    "answer": 2
  },
  {
    "id": 98,
    "question": "In query compiler, which unit transforms the initial query plan into the best available sequence of operations on the actual data?",
    "options": [
      "query parser",
      "query preprocessor",
      "query optimizer",
      "query processor"
    ],
    "answer": 2
  },
  {
    "id": 99,
    "question": "Which of the following accurately represents the purpose of",
    "options": [
      "To maintain data integrity and consistency.",
      "To define access permissions",
      "To ensure a sequence of operations is completed fully or not at all",
      "To allow concurrent modifications without restrictions"
    ],
    "answer": 0
  },
  {
    "id": 100,
    "question": "Question 6",
    "options": [
      "UPDATE",
      "ALTER",
      "MODIFY",
      "CHANGE"
    ],
    "answer": 1
  },
  {
    "id": 101,
    "question": "Consider the relation: OrderDetail (orderNumber, productCode, productName, quantity, dateOrdered, salesDiscount) And FDs { orderNumber, productCode -+ quantity, orderNumber -+ dateOrdered, productCode -+ productName, salesDiscount } And the key of OrderDetail is {orderNumber, productCode}. Which of the following is full dependency on the key?",
    "options": [
      "orderNumber, productCode quantity",
      "orderNumber -+ dateOrdered",
      "productCode —+ productName",
      "productCode —i productName, salesDiscount"
    ],
    "answer": 0
  },
  {
    "id": 102,
    "question": "Cäu IO. Which of the following operations cannot be used in relational algebra? (Choose two answers) A. Union B. Divide C. Select D. Loop",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": [
      1,
      3
    ]
  },
  {
    "id": 103,
    "question": "Which relational algebra operator removes attributes from",
    "options": [
      "Selection (o)",
      "Projection (n)",
      "Join (x)",
      "Union (u)"
    ],
    "answer": 1
  },
  {
    "id": 104,
    "question": "What is the purpose of the RENAME operation in relational algebra? (Choose three answers)",
    "options": [
      "To avoid ambiguity, especially when joining relations with the same attribute names.",
      "To make query expressions clearer and easier to read.",
      "To resolve naming conflicts in operations like UNION",
      "To search, index, and join tables quickly."
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": 105,
    "question": "Question 33",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "answer": 0
  },
  {
    "id": 106,
    "question": "Question 40",
    "options": [
      "Entity Real-world thing, distinguishable from other objects, in ERD.",
      "Diagram",
      "Relationship",
      "Primary entity"
    ],
    "answer": 0
  },
  {
    "id": 107,
    "question": "Question 42",
    "options": [
      "INF",
      "2NF",
      "3NF",
      "All of the mentioned"
    ],
    "answer": 3
  },
  {
    "id": 108,
    "question": "Which two statements correctly describe stored procedures? (Choose two correct answers)",
    "options": [
      "They can return multiple result sets",
      "They are compiled each time they run",
      "They support conditional logic like IF...ELSE",
      "They replace the need for triggers"
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": 109,
    "question": "Problems such as redundancy that occur when we try to cram too much into",
    "options": [
      "Normal Form",
      "Anomalies",
      "Decomposing Relations",
      "None of the others"
    ],
    "answer": 1
  },
  {
    "id": 110,
    "question": "What is the full form of DBMS?",
    "options": [
      "Data of Binary Management System",
      "Database Management System",
      "Database Management Service",
      "Data Backup Management System"
    ],
    "answer": 1
  },
  {
    "id": 111,
    "question": "In SQL,",
    "options": [
      "The UPDATE command is applicable to all views.",
      "The fields in a view are fields from one or more real tables in the database.",
      "The database engine recreates the view every time a user queries it.",
      "view always shows up-to-date data."
    ],
    "answer": 0
  },
  {
    "id": 112,
    "question": "Which of the following is an appropriate characteristic of",
    "options": [
      "Because a database is created to suit the format of the data, it cannot respond flexibly to data format changes.",
      "The procedure for making backups is complicated.",
      "It is difficult to share data between operations due to an exclusive control function.",
      "It can be accessed by multiple users at the same time due to an exclusive control function."
    ],
    "answer": 3
  },
  {
    "id": 113,
    "question": "Which key does not accept",
    "options": [
      "Unique Key",
      "Primary Key",
      "Foreign Key",
      "Candidate Key"
    ],
    "answer": 1
  },
  {
    "id": 114,
    "question": "Which of the following is used to define code that is fired when certain actions or events occur?",
    "options": [
      "You use an application Trigger to fire when certain actions or events occur.",
      "You use an application Cursor to fire when certain actions or events occur.",
      "You use an application Replace to fire when certain actions or events occur.",
      "You use an application Keyword to fire when certain actions or events occur."
    ],
    "answer": 0
  },
  {
    "id": 115,
    "question": "Cäu IO. Foreign key constraints are created by using the ' another table. A. REFER B. REFERENCES C. REFERENTIAL D. All of the others keyword to refer to the primary key of",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 1
  },
  {
    "id": 116,
    "question": "Question 11",
    "options": [
      "Primary Key",
      "Foreign Key",
      "Super key",
      "Candidate Key"
    ],
    "answer": 2
  },
  {
    "id": 117,
    "question": "The % wildcard, when used with the LIKE keyword, represents",
    "options": [
      "Has a minimum length of 0 characters",
      "Has a minimum length of 1 character, a maximum length of n characters",
      "Has a minimum length of 1 character, a maximum length of 255 characters",
      "Has a minimum length of 1 character, a maximum length of 256 characters E. None of the above answers"
    ],
    "answer": 0
  },
  {
    "id": 118,
    "question": "The intersection operator is used to get the",
    "options": [
      "Different",
      "Common",
      "All",
      "Repeating tuples."
    ],
    "answer": 1
  },
  {
    "id": 119,
    "question": "Suppose there is",
    "options": [
      "-9 EG,",
      "-9 A, BE -+ C, BC —i D, CG BD, ACD -9 B, CE -9 AG}. Compute the closure {AB}+.",
      "ABCD",
      "ABCDE"
    ],
    "answer": 3
  },
  {
    "id": 120,
    "question": "In relational database design, which of the following is",
    "options": [
      "Entity Relationship model",
      "Entity set",
      "Field set",
      "Record set"
    ],
    "answer": 1
  },
  {
    "id": 121,
    "question": "Transaction processing is associated with everything below except:",
    "options": [
      "Producing detail, summary, or exception reports",
      "Recording a business activity",
      "Confirming an action or triggering a response",
      "Maintaining data"
    ],
    "answer": 0
  },
  {
    "id": 122,
    "question": "To modify the schema of an existing relation, use:",
    "options": [
      "CREATE TABLE",
      "MODIFY TABLE",
      "ALTER TABLE",
      "DROP TABLE"
    ],
    "answer": 2
  },
  {
    "id": 123,
    "question": "Which of the following is NOT correct about how",
    "options": [
      "The name of the local variable should begin with the \"@@\" sign as the first character of its name.",
      "local variable is defined using T-SQL with the statement DECLARE.",
      "When a variable is first declared, its value is set to NULL. To assign a value, use the SET statement.",
      "The data type of a local variable is declared after its name, assigned a system-supplied or user- defined data type and a length."
    ],
    "answer": 0
  },
  {
    "id": 124,
    "question": "Which operation is commonly used to display selected columns (attributes) from the original relation?",
    "options": [
      "Union",
      "Intersection",
      "Closure",
      "Projection"
    ],
    "answer": 3
  },
  {
    "id": 125,
    "question": "In the relational model of data, what is the result of an algebraic query language?",
    "options": [
      "Data series",
      "Data file",
      "Relation",
      "Database"
    ],
    "answer": 2
  },
  {
    "id": 126,
    "question": "Regarding the difference between WHERE and HAVING in SQL, which of the following is true?",
    "options": [
      "WHERE filters data on aggregated values, HAVING filters on non-aggregated ones.",
      "WHERE is written after GROUP BY, while HAVING comes before GROUP BY.",
      "WHERE filters data on non-aggregated values, HAVING filters on aggregated ones.",
      "Both HAVING and WHERE are written before GROUP BY, and HAVING comes before WHERE."
    ],
    "answer": 2
  },
  {
    "id": 127,
    "question": "What is the purpose of data normalization in the context of database design?",
    "options": [
      "Ensure data security",
      "Avoid information anomalies",
      "Make sure data is inherited",
      "Ensuring better data storage"
    ],
    "answer": 1
  },
  {
    "id": 128,
    "question": "Which SQL command is used to undo changes made by",
    "options": [
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT",
      "UNDO"
    ],
    "answer": 1
  },
  {
    "id": 129,
    "question": "What data structure represents the hierarchical data model?",
    "options": [
      "Array structure",
      "Table structure",
      "Tree structure",
      "Pointer structure"
    ],
    "answer": 2
  },
  {
    "id": 130,
    "question": "data model is a notation for describing data or information. The description generally consists of:",
    "options": [
      "Structure of the data",
      "Operations on the data",
      "Constraints on the data",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 131,
    "question": "Consider the join of",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0
  },
  {
    "id": 132,
    "question": "Which is the correct statement about Stored Procedures?",
    "options": [
      "It is a set of SQL statements used to perform a certain task and works like a function in other programming languages",
      "It is a single SQL statement used to perform a certain task and works like a function in other programming languages",
      "It is a set of SQL statements used to perform many different tasks and works like a function in other programming languages",
      "and b are correct"
    ],
    "answer": 0
  },
  {
    "id": 133,
    "question": "Question 34",
    "options": [
      "Many-to-one",
      "One-to-many",
      "Many-to-many",
      "One-to-one"
    ],
    "answer": 2
  },
  {
    "id": 134,
    "question": "Fill in the correct keyword to update the instructor relation.UPDATE instructor salary = salary * 1.05;",
    "options": [
      "WHERE",
      "SET",
      "FROM",
      "SELECT"
    ],
    "answer": 1
  },
  {
    "id": 135,
    "question": "What is relational algebra?",
    "options": [
      "Relational algebra is a set of operations on relations",
      "Relational algebra is the decomposition of relations",
      "Relational algebra is eliminated from relations",
      "Relational algebra is gone from relations"
    ],
    "answer": 0
  },
  {
    "id": 136,
    "question": "The result of which operation contains all pairs of tuples from the two relations, regardless of whether their attribute values match?",
    "options": [
      "Join",
      "Cartesian product",
      "Intersection",
      "Set difference"
    ],
    "answer": 1
  },
  {
    "id": 137,
    "question": "Which transaction methods are used with the Connection object to save or cancel changes made to the data source?",
    "options": [
      "Begin Transaction, Rollback Transaction",
      "Begin Transaction, Commit Transaction",
      "Begin Transaction, Commit Transaction, Rollback Transaction",
      "Commit Transaction, Rollback Transaction"
    ],
    "answer": 2
  },
  {
    "id": 138,
    "question": "Select the most correct answer:",
    "options": [
      "An index is not a data structure used to speed access to tuples of a relation, given values of one or more attributes.",
      "The key to an index cannot be any attribute or set of attributes, and need not be the key to the relation.",
      "We can think of the index as a binary search tree of (key, locations) pairs in which a key is not associated with a set of locations of the tuples.",
      "An index is a data structure used to speed access to tuples of a relation, given values of one or more attributes."
    ],
    "answer": 3
  },
  {
    "id": 139,
    "question": "How are composite attributes represented in the relational model?",
    "options": [
      "As individual attributes in the related tables",
      "By creating a new table for each composite attribute",
      "By using a single attribute in the related tables",
      "By using a composite key in the related tables"
    ],
    "answer": 0
  },
  {
    "id": 140,
    "question": "The ability to query data, as well as insert, delete, and alter tuples, is offered by:",
    "options": [
      "TCL (Transaction Control Language)",
      "DCL (Data Control Language)",
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)"
    ],
    "answer": 3
  },
  {
    "id": 141,
    "question": "Which of the following statements is true regarding Third Normal Form (3NF)?",
    "options": [
      "It eliminates transitive dependencies",
      "It allows for redundant data",
      "It only considers partial dependencies",
      "It doesn't address any anomalies in a database"
    ],
    "answer": 0
  },
  {
    "id": 142,
    "question": "Which normalization level ensures that each attribute is dependent only on the primary key?",
    "options": [
      "First Normal Form (1 NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "answer": 1
  },
  {
    "id": 143,
    "question": "Question 46",
    "options": [
      "query parser",
      "query preprocessor",
      "query optimizer",
      "query processor"
    ],
    "answer": 0
  },
  {
    "id": 144,
    "question": "Through",
    "options": [
      "Always updateable",
      "Can never update",
      "Some cases can be updated, some cases cannot",
      "If the VIEW sees a table, it can be updated E. All of the mentioned answers are wrong"
    ],
    "answer": 2
  },
  {
    "id": 145,
    "question": "What data type is best suited for",
    "options": [
      "Varchar(30)",
      "Nvarchar(30)",
      "Text(30)",
      "Char(30)"
    ],
    "answer": 1
  },
  {
    "id": 146,
    "question": "Domain constraints, functional dependency, and referential integrity are special forms of:",
    "options": [
      "Foreign key",
      "Primary key",
      "Assertion",
      "Referential constraint"
    ],
    "answer": 2
  },
  {
    "id": 147,
    "question": "Which statement best represents Armstrong's Axiom of Decomposition?",
    "options": [
      "If BC, then",
      "and",
      "and C, then",
      "If B, then AC BC B, then B"
    ],
    "answer": 0
  },
  {
    "id": 148,
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
    "id": 149,
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
    "id": 150,
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
    "id": 151,
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
    "id": 152,
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
    "id": 153,
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
    "id": 154,
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
    "id": 155,
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
    "id": 156,
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
    "id": 157,
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
    "id": 158,
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
    "id": 159,
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
    "id": 160,
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
    "id": 161,
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
    "id": 162,
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
    "id": 163,
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
    "id": 164,
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
    "id": 165,
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
    "id": 166,
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
    "id": 167,
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
    "id": 168,
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
    "id": 169,
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
    "id": 170,
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
    "id": 171,
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
    "id": 172,
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
    "id": 173,
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
    "id": 174,
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
    "id": 175,
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
    "id": 176,
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
    "id": 177,
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
    "id": 178,
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
    "id": 179,
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
    "id": 180,
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
    "id": 181,
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
    "id": 182,
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
    "id": 183,
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
    "id": 184,
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
    "id": 185,
    "question": "Consider two relations MovieStar(name, address, gender, birthdate) and MovieExec(name, address, cert, netWorth). You want the names and addresses of all female movie stars who are also movie executives with",
    "options": [
      "SELECT name, address FROM MovieStar WHERE gender = 'F' UNION SELECT name, address FROM MovieExec WHERE networth > 10000000",
      "SELECT name, address FROM MovieStar WHERE gender = 'F' INTERSECT SELECT name, address FROM MovieExec WHERE net-Worth > 10000000",
      "SELECT name, address FROM MovieStar WHERE gender = 'F' EXCEPT SELECT name, address FROM MovieExec WHERE networth > 10000000",
      "None of the others"
    ],
    "answer": 1
  },
  {
    "id": 186,
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
    "id": 187,
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
    "id": 188,
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
    "id": 189,
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
    "id": 190,
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
    "id": 191,
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
    "id": 192,
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
    "id": 193,
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
    "id": 194,
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
    "id": 195,
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
    "id": 196,
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
    "id": 197,
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
    "id": 198,
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
    "id": 199,
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
    "id": 200,
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
    "id": 201,
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
    "id": 202,
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
    "id": 203,
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
    "id": 204,
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
    "id": 205,
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
    "id": 206,
    "question": "Suppose relation R(A, B, C, D) has tuples. Which tuples are contained in the result of the query below? SELECT C, AVG(D) FROM R GROUP BY C HAVING AVG(D) > 1000 ORDER BY c;",
    "options": [
      "(101, 11 500); (1 02, 2500)",
      "(101, 2300); (102, 1250) c. (101, 5); (1 02, 2)",
      "(101, 11500); (102, 1250)"
    ],
    "answer": 3
  },
  {
    "id": 207,
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
    "id": 208,
    "question": "Suppose relation R(A, B) has tuples. Which tuples are contained in the result of the query below? SELECT * FROM R WHERE",
    "options": [
      "LIKE 'a%' UNION SELECT * FROM R WHERE",
      "> 7;",
      "(3, 5); (h, 8)"
    ],
    "answer": 2
  },
  {
    "id": 209,
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
    "id": 210,
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
    "id": 211,
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
    "id": 212,
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
    "id": 213,
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
    "id": 214,
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
    "id": 215,
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
    "id": 216,
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
    "id": 217,
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
    "id": 218,
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
    "id": 219,
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
    "id": 220,
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
    "id": 221,
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
    "id": 222,
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
    "id": 223,
    "question": "table can be in 3NF but not in INF.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 224,
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
    "id": 225,
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
    "id": 226,
    "question": "In the entity-relationship model, what is an entity?",
    "options": [
      "Relationships",
      "Relationships between objects",
      "Objects and relationships between objects",
      "Data objects"
    ],
    "answer": 3
  },
  {
    "id": 227,
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
    "id": 228,
    "question": "How many joins are required to join 6 tables in",
    "options": [
      "12"
    ],
    "answer": 1
  },
  {
    "id": 229,
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
    "id": 230,
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
    "id": 231,
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
    "id": 232,
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
    "id": 233,
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
    "id": 234,
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
    "id": 235,
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
    "id": 236,
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
    "id": 237,
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
    "id": 238,
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
    "id": 239,
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
    "id": 240,
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
    "id": 241,
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
    "id": 242,
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
    "id": 243,
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
    "id": 244,
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
    "id": 245,
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
    "id": 246,
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
    "id": 247,
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
    "id": 248,
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
    "id": 249,
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
    "id": 250,
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
    "id": 251,
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
    "id": 252,
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
    "id": 253,
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
    "id": 254,
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
    "id": 255,
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
    "id": 256,
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
    "id": 257,
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
    "id": 258,
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
    "id": 259,
    "question": "database administrator is a person or persons responsible for the structure or schema of the database.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 260,
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
    "id": 261,
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
    "id": 262,
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
    "id": 263,
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
    "id": 264,
    "question": "Which of the following queries deletes employees who are not assigned to any department?",
    "options": [
      "DELETE FROM Employees WHERE DepartmentiD IS NULL;",
      "DELETE FROM Employees WHERE DepartmentiD = I';",
      "DELETE FROM Employees WHERE DepartmentiD = O;",
      "DELETE FROM Employees WHERE DepartmentiD IS NOT NULL;"
    ],
    "answer": 0
  },
  {
    "id": 265,
    "question": "may be executed",
    "options": [
      "All of the others",
      "Within a SQL environment are two special kinds of processes: SQL clients and SQL servers.",
      "A SQL environment is a DBMS running at some installation."
    ],
    "answer": 1
  },
  {
    "id": 266,
    "question": "Schema-altering commands are known as......commands.",
    "options": [
      "Data Manipulation Language",
      "Data Controlling Language",
      "Data Definition Language",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 267,
    "question": "Referential integrity Constraints control relationships between _.",
    "options": [
      "operations of an object",
      "tables in a database",
      "attributes in a table",
      "database instances"
    ],
    "answer": 1
  },
  {
    "id": 268,
    "question": "Choose the right statement below to declare zero or one occurrence of an Element in DTD.",
    "options": [
      "<\"ELEMENT element-name (childname?)>",
      "<IELEMENT element-name (child-name+)>",
      "<'ELEMENT element-name (child-name*)>",
      "<IELEMENT element-name (child-name)>"
    ],
    "answer": 0
  },
  {
    "id": 269,
    "question": "Given a relation R(A.B.C.D). Which of the followings is trivial?",
    "options": [
      "A->BCD",
      "A->->BCD",
      "A->AB",
      "A->->AB"
    ],
    "answer": 1
  },
  {
    "id": 270,
    "question": "Which of the following is NOT a standard aggregation operator?",
    "options": [
      "SUM",
      "AVG",
      "GROUP",
      "COUNT"
    ],
    "answer": 2
  },
  {
    "id": 271,
    "question": "In the three-tier architecture, the database tier's function is to",
    "options": [
      "All of the others.",
      "Execute the business logic of the organization operating the database.",
      "Manage the interactions with the user.",
      "Execute queries that are requested from the application tier."
    ],
    "answer": 3
  },
  {
    "id": 272,
    "question": "Which of the followings is part of data model?",
    "options": [
      "Operations on the data",
      "Constraints on the data",
      "All of the others |",
      "Structure of the data"
    ],
    "answer": 2
  },
  {
    "id": 273,
    "question": "Exception handler in PSM is defined as follows: DECLARE <where to go next> HANDLER FOR condition list> <statement> The <where to go next> clause can be:",
    "options": [
      "UNDO",
      "EXIT",
      "All of the others",
      "CONTINUE"
    ],
    "answer": 2
  },
  {
    "id": 274,
    "question": "In SQL language, the command/statement that let you add an attribute to a relation is_",
    "options": [
      "Alter",
      "None of the others",
      "Insert",
      "Update"
    ],
    "answer": 0
  },
  {
    "id": 275,
    "question": "Choose the right statement",
    "options": [
      "All of the others.",
      "The syntax to remove a trigger is. DROP TRIGGER<trigger_name>",
      "Use ALTER TRIGGER to change the definition of a trigger",
      "You can remove a trigger by dropping it or by dropping the trigger table."
    ],
    "answer": 0
  },
  {
    "id": 276,
    "question": "Consider the Dalalog rule H(xy) <- Sfx. y) AND x > 2 AND y < 6. Relation S(x y) has 3 tuples (2.3). (3.5). and (4.6). What is about H?",
    "options": [
      "H has a tuple (2.3)",
      "H has 3 tuples (2.3) and (3.5) and (4.6)",
      "H has 2 tuples (2.3) and (3.5)",
      "*H has a tuple (3.5)"
    ],
    "answer": 3
  },
  {
    "id": 277,
    "question": "The relational operator that yields all possible pairs of rows from two tables is known as a _",
    "options": [
      "Union",
      "Selection",
      "Product",
      "Join"
    ],
    "answer": 2
  },
  {
    "id": 278,
    "question": "Consider a relation with schema R(A, B, CD) and FD's BC-> D, D-> A, A-> B. Which of the following is the key of R?",
    "options": [
      "BD",
      "D",
      "AB",
      "BC"
    ],
    "answer": 3
  },
  {
    "id": 279,
    "question": "In PSM. the difference between 3 stored procedure and a function is that",
    "options": [
      "A function has the return statement.",
      "We can declare local variables in a function.",
      "All of the others",
      "Loops are not allowed in a function."
    ],
    "answer": 2
  },
  {
    "id": 280,
    "question": "Given relations R(A.B) and S(B.C.D). The result of natural join of the relations R and S has",
    "options": [
      "Only two attributes R B and SB",
      "None of the others",
      "Only attribute B",
      "Attributes A B. C. D"
    ],
    "answer": 3
  },
  {
    "id": 281,
    "question": "Data Definition language (DDL) is used to _",
    "options": [
      "declare database schemas",
      "connect to database and query database",
      "query database and modify the database",
      "All of the others"
    ],
    "answer": 0
  },
  {
    "id": 282,
    "question": "The result of (UNKNOWN OR TRUE) is",
    "options": [
      "UNKNOWN",
      "FALSE",
      "TRUE",
      "NULL"
    ],
    "answer": 2
  },
  {
    "id": 283,
    "question": "In Java Database Connectivity (JDBC). before we can execute SQL statements), we need to _",
    "options": [
      "Create a cursor.",
      "Create an environment",
      "Create a description.",
      "Establish a connection to the database and create statement(s)"
    ],
    "answer": 3
  },
  {
    "id": 284,
    "question": "Choose the right answer",
    "options": [
      "A User-Defined Type (UDT) in SQL can be the type of a table",
      "A UDT can be the type of an attribute belonging to some table",
      "The form of UDT definition is: CREATE TYPE T AS (<primitive type | attribute declarations>)",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 285,
    "question": "PICREATE TABLE MovieStar (name StarType PRIMARY KEY);",
    "options": [
      "CREATE TABLE MovieStar OF StarType Q;",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 286,
    "question": "Which of the following statements is true?",
    "options": [
      "I3NF implies BCNF",
      "Multi-valued Dependency (MVD) implies Fourth Normal form (4NF)",
      "4NF implies BCNF and BCNF implies 3NF",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 287,
    "question": "The binary relationship between classes in UML is called -",
    "options": [
      "Relation",
      "Association",
      "Aggregation",
      "Composition"
    ],
    "answer": 1
  },
  {
    "id": 288,
    "question": "WHERE clause;",
    "options": [
      "Sub-queries return relations, that can be used in WHERE clause",
      "Sub-queries can appear in FROM clauses, followed by a tuple variable",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 289,
    "question": "Given the relation Movies(title, year, length, genre. studioName). Select the right query to create a View with the titles and studio names of all movies that were produced in 1980",
    "options": [
      "CREATE VIEW OldMovies SELECT title. studioName FROM Movies WHERE year-1980",
      "CREATE VIEW OldMovies SELECT title, year FROM Movies WHERE year=1980",
      "CREATE VIEW OldMovies AS SELECT title. studioName FROM Movies WHERE year=1980",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 290,
    "question": "Given the relation Employee(SSN. FNAME. LNAME. SALARY. DepartmentNo). Select the right query below to count the number of employees in each department",
    "options": [
      "SELECT COUNTf) FROM Employee",
      "SELECT DepartmentNo. COUNT(*) FROM Employee GROUP BY DepartmentNo",
      "SELECT DepartmentNo. COUNT(*) FROM Employee",
      "None of the others"
    ],
    "answer": 1
  },
  {
    "id": 291,
    "question": "Consider a relation with schema R(A, B. C. D) and FD's A-> B. A-> C. C -> D. Which ofthe following is the {A}+ ?",
    "options": [
      "{A}",
      "{A B C D}",
      "{A. B. C}",
      "{A.B}"
    ],
    "answer": 1
  },
  {
    "id": 292,
    "question": "To create a constraint (for example, referential integrity constraint) on a relation, the owner ofthe schema must have",
    "options": [
      "UNDER privilege",
      "REFERENCES privilege",
      "UPDATE privilege",
      "EXECUTE privilege"
    ],
    "answer": 1
  },
  {
    "id": 293,
    "question": "Choose a wrong answer.",
    "options": [
      "Relational algebra can express recursion.",
      "Basic relational algebra can be expressed in Datalog rule(s).",
      "Single Datalog rule can be expressed in relational algebra.",
      "Datalog does not support bag operations"
    ],
    "answer": 0
  },
  {
    "id": 294,
    "question": "_______authorizes access to database, coordinate, monitor its use, acquiring software, and hardware resources.",
    "options": [
      "All of the others",
      "Database administrator",
      "Database designer",
      "Database end-user"
    ],
    "answer": 1
  },
  {
    "id": 295,
    "question": "Choose right answer(s).",
    "options": [
      "NULL value is unknown, inapplicable, or withheld",
      "Comparisons with NULL values will return UNKNOWN",
      "Arithmetic operators on NULL values will return a NULL value",
      "All of orther"
    ],
    "answer": 3
  },
  {
    "id": 296,
    "question": "Four characteristics of transactions are",
    "options": [
      "None of the others",
      "Read uncommitted, Read committed, Repeatable read, Serializable",
      "Atomicity. Isolation. Concurrency. Durability",
      "Atomicity. Isolation. Consistency. Durability"
    ],
    "answer": 3
  },
  {
    "id": 297,
    "question": "Choose the right statement to grant the INSERT and SELECT privileges on table Movies to users torn' and jerry'",
    "options": [
      "GRANT SELECT. INSERT on Movies",
      "GRANT SELECT. INSERT on Movies TO torn, jerry CASCADE",
      "GRANT SELECT. INSERT on Movies TO torn, jerry WITH GRANT OPTION",
      "GRANT SELECT. INSERT on Movies TO ALL"
    ],
    "answer": 2
  },
  {
    "id": 298,
    "question": "When declaring foreign key constraint for relation A thai references relation B. the referenced attribute(s) of the relation B must be declare as_______",
    "options": [
      "UNIQUE or PRIMARY KEY",
      "FOREIGN KEY",
      "INDEX KEY",
      "All of the others"
    ],
    "answer": 0
  },
  {
    "id": 299,
    "question": "automatically generates a name for it",
    "options": [
      "We can create constraint on a tuple as a whole.",
      "We can create constraint on a single attribute"
    ],
    "answer": 0
  },
  {
    "id": 300,
    "question": "A class in UML is similar to___",
    "options": [
      "A Relationship in E/R model",
      "An attribute in E/R model",
      "An entity set in E/R model",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 301,
    "question": "Given relations Movies(title, year, length, genre. studioName. producer#). MovieExec(name. address. cert#). and Studio(name. address. presC#). Suppose we have the materialized view that finds the name - ofthe producer of a given movie as follows: CREATE MATERIALIZED VIEW MovieProd AS SELECT title, year, name FROM Movies. MovieExec WHERE producer# - cert# Which of the following modification will affect the MovieProd materialized view?",
    "options": [
      "Insert a new tuple into Studio",
      "Delete a tuple from Studio",
      "Insert a new tuple into Movies or delete a tuple from Movies",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 302,
    "question": "In relational data model, an attribute is a column",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 303,
    "question": "A data model is a notation for describing data or information. And the description generally consist of:",
    "options": [
      "2 parts",
      "3 parts",
      "4 parts",
      "5 parts"
    ],
    "answer": 1
  },
  {
    "id": 304,
    "question": "DBMS stands for what?",
    "options": [
      "Database Managing Systems",
      "Database Management System",
      "Database Manage System",
      "Database Managable System"
    ],
    "answer": 1
  },
  {
    "id": 305,
    "question": "Look at this line: MOVIES (Id, Name, Description) What the above represent?",
    "options": [
      "A relation",
      "A schema",
      "A schema instance",
      "A relation instance"
    ],
    "answer": 1
  },
  {
    "id": 306,
    "question": "Look at the following data for table R: A B C 1 1 2 1 1 2 1 1 3 Choose all correct answers",
    "options": [
      "R is not a relation",
      "R is a relation",
      "R has no key",
      ""
    ],
    "answer": [
      1,
      3
    ]
  },
  {
    "id": 307,
    "question": "Choose all correct statements:",
    "options": [
      "Relation instance is current set of rows for a relation schema",
      "Relation instance is current list of rows for a relation schema",
      "Column headers = attributes.",
      "Relational Data Model is a model that match the way we think about our data"
    ],
    "answer": [
      0,
      3
    ]
  },
  {
    "id": 308,
    "question": "In relational data model, a tuple is a record or a row",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 309,
    "question": "When the Relational Data Model first proposed?",
    "options": [
      "1940",
      "1950",
      "1960",
      "1970"
    ],
    "answer": 3
  },
  {
    "id": 310,
    "question": "What is the oldest data model?",
    "options": [
      "Network Data Model",
      "Flat File Data Model",
      "Relational Data Model",
      "Hierachical Data Model"
    ],
    "answer": 0
  },
  {
    "id": 311,
    "question": "How many data models mentioned in our database course?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 3
  },
  {
    "id": 312,
    "question": "XML files are semi-structured data",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 313,
    "question": "A relation is a list of tuples",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 314,
    "question": "A relation is a set of tuples",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 315,
    "question": "What is the father of relational data model?",
    "options": [
      "Charles Bachman",
      "Adgar Codd"
    ],
    "answer": 1
  },
  {
    "id": 316,
    "question": "Give the relation R(XYZT) with the following FD's: XY -> Z ; XYT -> Z ; XYZ -> T ; XZ -> T Determine the primary key for R and then choose the correct statement",
    "options": [
      "R is in BCNF",
      "R is not in BCNF"
    ],
    "answer": 1
  },
  {
    "id": 317,
    "question": "A weak entity:",
    "options": [
      "must have total participation in an identifying relationship",
      "does not have a key attribute(s)",
      "both (a) and (b)",
      "none of the above"
    ],
    "answer": 2
  },
  {
    "id": 318,
    "question": "Given the relation schema R(XYZT) and functional dependencies F = {X->Z, T->Y}. Which functional dependency causes a violation of second normal form (2NF) ?",
    "options": [
      "X->Z",
      "T->Y",
      "both X->Z and T->Y",
      "none of the above"
    ],
    "answer": 2
  },
  {
    "id": 319,
    "question": "The highest normal form for relation schema R(XYZ) with functional dependencies: F = {XY-> Z; Y->X; Z->Y } is:",
    "options": [
      "2NF",
      "BCNF",
      "1NF",
      "3NF"
    ],
    "answer": 3
  },
  {
    "id": 320,
    "question": "Give the relation R(EFGH) with the following FD's: E -> F ; F -> E ; E -> H ; H -> F Determine the keys for R and then choose the correct statement",
    "options": [
      "R is not in 3NF",
      "R is in 3NF"
    ],
    "answer": 1
  },
  {
    "id": 321,
    "question": "Give the relation R(ABCDE) with the following FD's: D -> C, CE-> A, D ->A, and AE ->D indicating which of the following attribute set is a key?",
    "options": [
      "ABCDE",
      "CDE",
      "ABE",
      "BD"
    ],
    "answer": 2
  },
  {
    "id": 322,
    "question": "Which of the following relations is in Third normal form (3NF)?",
    "options": [
      "R(ABCD) with FD's: AB -> C ; ABD -> C ; ABC -> D ; AC -> D",
      "R(ABCD) with FD's: ACD -> B ; AC -> D ; D -> C ; AC -> B",
      "R(ABCD) with FD's: AB -> C ; BCD -> A ; D -> A ; B -> C"
    ],
    "answer": 1
  },
  {
    "id": 323,
    "question": "Let R(ABCDEFGH) satisfies the following functional dependencies: A -> B, CH -> A, B -> E, BD -> C, EG -> H, DE -> F. Which of the following FD's is also guaranteed to be satisfied by R?",
    "options": [
      "ADG -> CH",
      "ACG -> DH",
      "CGH -> BF",
      "BCD -> FH"
    ],
    "answer": 0
  },
  {
    "id": 324,
    "question": "Which of the following statements are correct? (choose 2)",
    "options": [
      "All relations with only two attributes are in BCNF",
      "For any relation schema, there is a dependency-preserving decomposition into 3NF",
      "All relations in 3NF are also in BCNF"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": 325,
    "question": "How many design principles are there in our course when drawing an ERD?",
    "options": [
      "7",
      "6",
      "4",
      "5"
    ],
    "answer": 3
  },
  {
    "id": 326,
    "question": "Which of the following are guidelines for designing the relational schema ?",
    "options": [
      "Reduce the redundant values in tuples",
      "Reduce the NULL values in tuples",
      "All of the above"
    ],
    "answer": 2
  },
  {
    "id": 327,
    "question": "Choose the correct statements: When draw an ERD (choose 2):",
    "options": [
      "We should picking the right kind of element",
      "When an entity has no non-primary key attribute, we should convert that entity to an attribute",
      "Always use weak entities",
      "Always make redundancies"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": 328,
    "question": "Given relation scheme R = (XYZTV) and functional dependencies: {XY -> ZTV and X -> V}. So, we can say that:",
    "options": [
      "X is a key for R",
      "YV is a key for R",
      "XY is a key for R",
      "none of the above"
    ],
    "answer": 2
  },
  {
    "id": 329,
    "question": "Consider a relation R(A,B,C,D,E) with functional dependencies: AB->C, B->D, and C->E. What is/are the key(s) for R (maybe you must choose 1 or more):",
    "options": [
      "AC",
      "AD",
      "AB",
      "CD",
      "DE"
    ],
    "answer": 2
  },
  {
    "id": 330,
    "question": "The ER model means that:",
    "options": [
      "replace relational design",
      "be close to a users perception of the data",
      "enable low level descriptions of data",
      "enable detailed descriptions of data query processing"
    ],
    "answer": 1
  },
  {
    "id": 331,
    "question": "Consider the following statement: \"When drawing ERD, you should avoid saying something in many different ways' That above statement describes which principle?",
    "options": [
      "Simplicity Count Principle",
      "Limit the use of weak entity sets principle",
      "Avoid Redundancy Principle",
      "Faithfulness principle"
    ],
    "answer": 2
  },
  {
    "id": 332,
    "question": "Consider the following statement: \"Entity Sets and their attributes should reflect the reality\" That above statement describes which principle?",
    "options": [
      "Limit the use of weak entity sets principle",
      "Simplicity Count Principle",
      "Avoid Redundancy Principle",
      "Faithfulness principle"
    ],
    "answer": 3
  },
  {
    "id": 333,
    "question": "Given the relation schema R(MNPQ) with FDs: {MN->P; MN->Q; PQ->M; PQ->N}. Which is the highest normal form for R?",
    "options": [
      "2NF",
      "3NF",
      "BCNF",
      "NF"
    ],
    "answer": 1
  },
  {
    "id": 334,
    "question": "The functional dependency A -> B for relation schema R(A,B.C,D) implies that",
    "options": [
      "no two tuples in R can have the same value for attribute B",
      "No two tuples in R can have the same value for attribute A",
      "any two tuples in R that have the same value for B must have the same value for A",
      "Any two tuples in R that have the same value for A must have the same value for B"
    ],
    "answer": 3
  },
  {
    "id": 335,
    "question": "How many primitive relational algebra operators are there in our course?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2
  },
  {
    "id": 336,
    "question": "Suppose relation R(A.B) has the tuples: A B 1 2 3 4 5 6 7 8 and the relation S(B.C.D) has tuples: B C D 2 4 6 4 6 8 5 5 5 4 7 9 Compute the Left - outenom of R and S. where the condition is: R.B = SB. Then identify all the tuples of R that are not appear in the computed result",
    "options": [
      "(1.2)",
      "(3.4)",
      "(5.6)",
      "(7.8)",
      "None of the above"
    ],
    "answer": 4
  },
  {
    "id": 337,
    "question": "Consider the following statement \"When drawing ERD. you should avoid introducing more elements into your design than necessary\" That above statement describes which principle?",
    "options": [
      "Limit the use of weak entity sets principle",
      "Faithfulness principle",
      "Avoid Redundancy Principle",
      "Simplicity Count Principle"
    ],
    "answer": 3
  },
  {
    "id": 338,
    "question": "Suppose relation R(A.B) has the tuples: A B 1 2 3 4 5 6 7 8 and the relation S(B.C.D) has tuples: B C D 2 4 6 4 6 8 5 5 5 4 7 9 Compute the right - outerjoin of R and S. where the condition is: R.B = S.B. Then identify all the tuples of R that are not appear in the computed result",
    "options": [
      "(5.6)",
      "(1.2)",
      "(7.8)",
      "(3.4)"
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": 339,
    "question": "Consider the following statement \"When drawing ERD. if an entity has no non-key attribute and it is the \"one\" in many-one relationship, then we should set r! to the attribute of other entities\" That above statement describes which principle?",
    "options": [
      "Picking the right kind of element principle",
      "Faithfulness principle",
      "Limit the use of weak entity sets principle",
      "Simplicity Count Principle",
      "Avoid Redundancy Principle"
    ],
    "answer": 0
  },
  {
    "id": 340,
    "question": "The LEN function in SQL Server is:",
    "options": [
      "Not a scalar function",
      "A scalar function"
    ],
    "answer": 1
  },
  {
    "id": 341,
    "question": "What is the meaning of the LEN function in SQL Server?",
    "options": [
      "The LEN function returns the total number of bytes used to store a string",
      "The LEN function returns the total number of characters of a string"
    ],
    "answer": 1
  },
  {
    "id": 342,
    "question": "How to remove all trailing blanks?",
    "options": [
      "We can use the RTRIM function",
      "We can use the LTRIM function"
    ],
    "answer": 0
  },
  {
    "id": 343,
    "question": "The following is the syntax for the DATEDIFF function: DATEDIFF ( datepart, startdate , enddate ) The datepart parameter specifies on which part (day, month, year) of the date to calculate the difference",
    "options": [
      "FALSE",
      "TRUE"
    ],
    "answer": 1
  },
  {
    "id": 344,
    "question": "How to remove all leading blanks?",
    "options": [
      "We can use the RTRIM function",
      "We can use the LTRIM function"
    ],
    "answer": 1
  },
  {
    "id": 345,
    "question": "What is the meaning of the ISNULL function?",
    "options": [
      "The ISNULL function replaces NULL with the ZERO value.",
      "The ISNULL function replaces NULL with the BLANK value",
      "The ISNULL function replaces NULL with the specified replacement value."
    ],
    "answer": 1
  },
  {
    "id": 346,
    "question": "Which of the following is in-correct?",
    "options": [
      "SELECT datepart(dd, 'l-jan-09')",
      "SELECT datepart(d, 'l-jan-09')",
      "SELECT datepart('1-jan-09', day)",
      "SELECT datepart(day, 'l-jan-09')"
    ],
    "answer": 2
  },
  {
    "id": 347,
    "question": "How to convert a number to a string? (choose all possible)",
    "options": [
      "We can use the CONVERT function",
      "We can use the CAST function",
      "We can use the STR function"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": 348,
    "question": "What is the meaning of the DATEADD function?",
    "options": [
      "The DATEADD function adds some years to a date you specify",
      "The DATEADD function adds some months to a date you specify",
      "The DATEADD function adds an interval to a date you specify",
      "The DATEADD function adds some days to a date you specify"
    ],
    "answer": 2
  },
  {
    "id": 349,
    "question": "The CASE function is used to Evaluates a list of conditions and returns one of multiple possible result expressions",
    "options": [
      "FALSE",
      "TRUE"
    ],
    "answer": 1
  },
  {
    "id": 350,
    "question": "In SQL Server, an index is an on-disk structure associated with a table or view that speeds up retrieval of rows from the table or view",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 351,
    "question": "Clustered index is not a good choice for the columns that undergo frequent changes",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 352,
    "question": "A table or view must have a clustered indexe and some non-clustered indexes",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 353,
    "question": "SQL Server typically selects the most efficient method when executing queries. However, if no indexes are available. SQL Server must use a full table scan",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 354,
    "question": "How many clustered index we can create in a table?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      ""
    ],
    "answer": 0
  },
  {
    "id": 355,
    "question": "Indexes can be helpful for a variety of queries that contain SELECT, UPDATE, or DELETE statements",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 356,
    "question": "In SQL Server, indexes are automatically created when PRIMARY KEY and UNIQUE constraints are defined on table columns",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 357,
    "question": "In reality, an incorrect index choice can cause less than optimal performance",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 358,
    "question": "You should define the clustered index key with as few columns as possible",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 359,
    "question": "Choose the incorrect statement",
    "options": [
      "Clustered indexes sort and store the data rows in the table based on their key values",
      "Non-Clustered indexes sort and store the data rows in the table based on their key values",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 360,
    "question": "An index contains keys built from one or more columns in the table or view. These keys are stored in a structure (B-tree) that enables SQL Server to find the row or rows associated with the key values quickly and efficiently",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 361,
    "question": "When performing a table scan, the query optimizer reads all the rows in the table, and extracts the rows that meet the criteria of the query. A table scan generates any disk I/O operations and can be resource -intensive",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 362,
    "question": "Choose the correct statement",
    "options": [
      "Clustered indexes son and store the data rows in the table based on their key values",
      "Non-Clustered indexes sort and store the data rows in the table based on their key values",
      "Both of the above"
    ],
    "answer": 0
  },
  {
    "id": 363,
    "question": "Well-designed indexes can reduce disk I/O operations and consume fewer system resources, therefore it improves query performance",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 364,
    "question": "We should use which function to get the number of rows affected by the last statement",
    "options": [
      "@@IDENTITY",
      "@@ROWCOUNT",
      "@@ERROR",
      "@@NEWID"
    ],
    "answer": 0
  },
  {
    "id": 365,
    "question": "How to write a good performance SQL query?",
    "options": [
      "Always use \"SELECT *\"",
      "Always try to avoid using \"SELECT *\""
    ],
    "answer": 1
  },
  {
    "id": 366,
    "question": "Choose the correct answer",
    "options": [
      "Normalize the database to 3NF",
      "Avoid database designs that move data from table to table in a transactional manner",
      "None of the above",
      "All of the above"
    ],
    "answer": 0
  },
  {
    "id": 367,
    "question": "Choose all the thing that we should do with SQL Server",
    "options": [
      "Use the tools",
      "Use cursors as much as possible",
      "Use \"SELECT for every SELECT statement",
      "Create an index on the \"SEX\" column"
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": 368,
    "question": "We should use which function to get the last-inserted identity value.",
    "options": [
      "@@IDENTITY",
      "@@ROWCOUNT",
      "@@ERROR",
      "@@NEWID"
    ],
    "answer": 0
  },
  {
    "id": 369,
    "question": "A Database is called having good performance if",
    "options": [
      "The Database runs fast",
      "The response time is very small",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 370,
    "question": "To improve the DB performance:",
    "options": [
      "We should you the set-based queries and avoids procedural (row-by-row) queries",
      "We should you the row-based queries and avoids set-based queries"
    ],
    "answer": 0
  },
  {
    "id": 371,
    "question": "Regardless of what any other transaction is doing, a transaction must be able to continue with the exact same data£ sets it started with. The above describes which property of a transaction?",
    "options": [
      "Isolation",
      "Consistency",
      "Atomic",
      "Durability"
    ],
    "answer": 0
  },
  {
    "id": 372,
    "question": "Every row and value must agree with all constraints once the transaction is complete. The above describes which property of a transaction?",
    "options": [
      "Durability",
      "Consistency",
      "Atomic",
      "Isolation"
    ],
    "answer": 1
  },
  {
    "id": 373,
    "question": "The DB product must be constructed so that even if the data drive melts, the DB can be restored up to the last transaction that was committed a split second before the hard drive died The above describes which property of a transaction?",
    "options": [
      "Isolation",
      "Consistency",
      "Durability",
      "Atomic"
    ],
    "answer": 2
  },
  {
    "id": 374,
    "question": "Which is the most dangerous fault that can potentially affect the integrity of a transaction?",
    "options": [
      "Non-repeatable reades",
      "Dirty Read",
      "Phantom rows"
    ],
    "answer": 1
  },
  {
    "id": 375,
    "question": "How many properties we must use to measured the quality of a transaction?",
    "options": [
      "5",
      "6",
      "3",
      "4"
    ],
    "answer": 3
  },
  {
    "id": 376,
    "question": "Once a transaction is committed, it stays committed The above describes which property of a transaction?",
    "options": [
      "Atomic",
      "Isolation",
      "Consistency",
      "Durability"
    ],
    "answer": 3
  },
  {
    "id": 377,
    "question": "Which is the least dangerous fault that can potentially affect the integrity of a transaction?",
    "options": [
      "Phantom rows",
      "Dirty Read",
      "Non-repeatable reads"
    ],
    "answer": 0
  },
  {
    "id": 378,
    "question": "Each transaction must be isolated or separated from the effects of other transaction The above describes which property of a transaction?",
    "options": [
      "Durability",
      "Isolation",
      "Atomic",
      "Consistency"
    ],
    "answer": 1
  },
  {
    "id": 379,
    "question": "At the end of the transaction, either all statements of the transaction is successful or all statements of the transaction fail. The above describes which property of a transaction?",
    "options": [
      "Isolation",
      "Atomic",
      "Consistency",
      "Durability"
    ],
    "answer": 1
  },
  {
    "id": 380,
    "question": "When sorting. Null values are treated as the lowest possible values",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 381,
    "question": "Except for COUNT, aggregate functions ignore null values",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 382,
    "question": "How to returns a part of a character, binary, text or image? (For example: how to get the 'bcd' in 'abcdef' string)",
    "options": [
      "Use the RIGHT function",
      "Use the LEFT function",
      "Use the LEN function",
      "Use the SUBSTRING function"
    ],
    "answer": 3
  },
  {
    "id": 383,
    "question": "The ORDER BY clause can not include items not appearing in the select list",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 384,
    "question": "RANK() and ROW_NUMBER() are 2 ranking functions",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 385,
    "question": "We can use the Aggregation in WHERE clause",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 386,
    "question": "How to get the information about the number of attempted connections, either successful or unsuccessful since SQL Server was last started",
    "options": [
      "Use the @@ERROR",
      "Use the @@IDENTITY",
      "Use the @@VERSION",
      "Use the @@CONNECTIONS"
    ],
    "answer": 3
  },
  {
    "id": 387,
    "question": "A trigger is a special kind of stored procedure that automatically executes when an event occurs in the database server",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 388,
    "question": "The RANK() function returns the rank of each row within the partition of a result set",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 389,
    "question": "|How to get the information about the version, processor architecture, build date, and operating system for the current installation of SQL Server",
    "options": [
      "Usethe@@ERROR",
      "Usethe @@IDENTITY",
      "Usethe @@VERSION",
      "Usethe @@CONNECTIONS"
    ],
    "answer": 2
  },
  {
    "id": 390,
    "question": "When create stored procedures, the \"WITH ENCRYPTION\" option indicates that SQL Serverwill convert the original text of the CREATE PROCEDURE statement to an obfuscated format",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 391,
    "question": "The maximum nested level of a Transact-SQL stored procedure is 64MB",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 392,
    "question": "In SQL Server, we can use the ORDER BY clauses in sub-queries",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 393,
    "question": "The maximum size of a Transact-SQL stored procedure is 256MB",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 394,
    "question": "The key for a weak entity set E is_",
    "options": [
      "*Zero or more attributes of and key attributes from supporting entity sets",
      "The set of attributes of supporting relationships for E",
      "The set of attributes of supporting entity sets",
      "Zero or more attributes of E"
    ],
    "answer": 0
  },
  {
    "id": 395,
    "question": "Select the right statement to declare MovieStar to be a relation whose tuples are of type StarType. Note; StarType is a user-defined type that has its definition as follows; CREATE TYPE StarType AS ( nameCHAR(30). address CHAR(IOO) };",
    "options": [
      "CREATE TABLE MovieStar (name StarType).",
      "CREATE TABLE MovieStar (name StarType PRIMARY KEY);",
      "CREATE TABLE MovieStar OF StarType Q;",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 396,
    "question": "Select the right answer",
    "options": [
      "Virtual views do not exist physically",
      "Virtual views are defined by an expression like a query",
      "Virtual views can be queried and can even be modified",
      "All of other"
    ],
    "answer": 3
  },
  {
    "id": 397,
    "question": "Suppose we have a relation with schema R(A. B. C. D. E. F. G. H) Ifwe issue a query of the form SELECT... FROM R WHERE... GROUP BYB.E. C. D HAVING ??? Identify, in the list below, the term that CAN NOT appear in the HAVING condition (represented by ??? in the above query).",
    "options": [
      "COUNT(A)",
      "H",
      "SUM(H)",
      "B+E"
    ],
    "answer": 1
  },
  {
    "id": 398,
    "question": "Answer A(an) asserts that a value appearing in one relation must also appear in the primary-key component(s) of another relation",
    "options": [
      "Primary key constraint",
      "Foreign key constraint",
      "Unique key constraint",
      "Candidate key constraint"
    ],
    "answer": 0
  },
  {
    "id": 399,
    "question": "FALSE AND NULL) return:",
    "options": [
      "NULL",
      "TRUE",
      "FALSE",
      "None ofthe others"
    ],
    "answer": 2
  },
  {
    "id": 400,
    "question": "What is a key attribute in a relation? *",
    "options": [
      "A key attribute is an attribute that belongs to one of the keys of the relation",
      "A key attribute is an attribute that belongs to one of the super keys of the relation"
    ],
    "answer": 0
  },
  {
    "id": 401,
    "question": "The most concert",
    "options": [
      "The selection of the right indexes for a database and its workload is a complex balancing act between query speed and update cost",
      "Poorly designed indexes and a lack of indexes are primary sources of database application bottlenecks.",
      "Designing efficient indexes is paramount to achieve good database and application performance",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 402,
    "question": "(FALSE OR NULL) return:",
    "options": [
      "TRUE",
      "None ofthe others",
      "FALSE",
      "NULL"
    ],
    "answer": 3
  },
  {
    "id": 403,
    "question": "After grouping by (A+10). the output has:",
    "options": [
      "2 groups",
      "1 groups",
      "4 groups",
      "3 groups"
    ],
    "answer": 3
  },
  {
    "id": 404,
    "question": "The structure of an XML document is similar to the ones used in (choose two):",
    "options": [
      "Graph-based data model",
      "Relational data model",
      "Flat file data model",
      "Hierarchical data model"
    ],
    "answer": [
      1,
      2
    ]
  },
  {
    "id": 405,
    "question": "When we multiply 0 with NULL, the result is:",
    "options": [
      "TRUE",
      "FALSE",
      "0",
      "NULL"
    ],
    "answer": 3
  },
  {
    "id": 406,
    "question": "A SQL statement cannot be executed without the appropriate to that statement",
    "options": [
      "Privileges",
      "Domains",
      "Sessions",
      "Character Sets"
    ],
    "answer": 0
  },
  {
    "id": 407,
    "question": "What is the difference between a \"where\" clause and a \"having\" clause?",
    "options": [
      "HAVING applies to rows. WHERE applies to summarized (or aggregate) rows",
      "Having is just another part of WHERE clause, so there is no difference between WHERE and HAVING clauses",
      "WHERE applies to rows. HAVING applies to summarized (or aggregate) rows"
    ],
    "answer": 2
  },
  {
    "id": 408,
    "question": "Consider the distributive law. that holds for set relations: * (R U S) - T = (R-T) U (S-T) A The above distributive law still hold for bag relations?",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "id": 409,
    "question": "Which of the following relations is in Boyce-Codd Normal Form (BCNF)?",
    "options": [
      "R(A,B,C,D) FD's: A -> D ; C -> A ; D -> B ; AC -> B",
      "R(A,B,C,D) FD's: A -> C ; B -> A ; A -> D ; AD -> C",
      "R(A,B,C,D) FD's: BD -> C ; AB -> D ; AC -> B ; BD -> A",
      "R(A.B:C,D) FD's: BC -> A ; AD -> C ; CD -> B ; BD -> C"
    ],
    "answer": 2
  },
  {
    "id": 410,
    "question": "How many properties we must use to measure the quality of a transaction? \\",
    "options": [
      "6",
      "4",
      "3",
      "5"
    ],
    "answer": 1
  },
  {
    "id": 411,
    "question": "Which tuple is contained in the result of the following query: SELECT a. COUNT(DISTINCT B) FROM R GROUP BY a HAVING SUM(B) >3;",
    "options": [
      "(2.10)",
      "(2.3)",
      "(3.7)",
      "(3.12)"
    ],
    "answer": 1
  },
  {
    "id": 412,
    "question": "Suppose we have 2 relations R(A.B.C.D) and S(B.C.D.E) and B is the foreign key column in R and B is the primary key in S. [v] A This means that: when enter data into the column B in R. only values that belong to r|B(S) are permitted",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 413,
    "question": "Suppose we have a relation R(MNPQ) with FD's: NQ -> P ; MN -> Q ; MP -> N ; NQ -> M What does the highest normal form that R belong?",
    "options": [
      "2NF",
      "BCNF",
      "3NF",
      "1NF"
    ],
    "answer": 1
  },
  {
    "id": 414,
    "question": "(TRUE AND NULL) returns:",
    "options": [
      "None ofthe others",
      "TRUE",
      "NULL",
      "FALSE"
    ],
    "answer": 2
  },
  {
    "id": 415,
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
    "id": 416,
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
    "id": 417,
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
    "id": 418,
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
    "id": 419,
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
    "id": 420,
    "question": "When sorting in SQL Server, Null values are treated as the lowest possible values.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 421,
    "question": "Suppose we have a relation R(MNPQ) with FD's: NP -> M ; MQ -> P ; PQ -> N ; NQ -> P",
    "options": [
      "R is in BCNF",
      "R is not in BCNF"
    ],
    "answer": 1
  },
  {
    "id": 422,
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
    "id": 423,
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
    "id": 424,
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
    "id": 425,
    "question": "Consider the law. that holds for set relations: (R natural join S) natural join T = R natural join (S natural join T). Does the above law still hold for bag relations?",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 426,
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
    "id": 427,
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
    "id": 428,
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
    "id": 429,
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
    "id": 430,
    "question": "What is the degree of a Relation?",
    "options": [
      "None of the others",
      "It Is the number of attributes of its relation schema",
      "It is the number of tuples of its relation schema"
    ],
    "answer": 1
  },
  {
    "id": 431,
    "question": "SELECT name FROM customers WHERE name LIKE '%Gate';. This query would yield an name for every customer whose name ends with \"Gate\". Suppose that the name column has been Indexed. Which of the following statements is correct?",
    "options": [
      "None of the others",
      "The database does not perform a full table scan when executing the above SELECT statement",
      "The database must perform a full table scan when executing the above SELECT statement"
    ],
    "answer": 2
  },
  {
    "id": 432,
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
    "id": 433,
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
    "id": 434,
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
    "id": 435,
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
    "id": 436,
    "question": "Suppose we have 2 relations: R=(A,B,C,D) S = (B,C,D,E) When we can set B to be the foreign key of R?",
    "options": [
      "When B is the primary key of S",
      "When B is the unique key of S",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 437,
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
    "id": 438,
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
    "id": 439,
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
    "id": 440,
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
    "id": 441,
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
    "id": 442,
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
    "id": 443,
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
    "id": 444,
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
    "id": 445,
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
    "id": 446,
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
    "id": 447,
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
    "id": 448,
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
    "id": 449,
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
    "id": 450,
    "question": "What is the difference between the 2NF and the 3NF?",
    "options": [
      "2NF deals with partial functional dependency, while 3NF deals with transitive functional dependency",
      "2NF deals with transitive functional dependency, while 3NF deals with partial functional dependency"
    ],
    "answer": 0
  },
  {
    "id": 451,
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
    "id": 452,
    "question": "What is the benefit of \"de-normalization\"?",
    "options": [
      "\"de-normalization\" has no benefit",
      "The main benefit of de-normalization is improved performance with simplified data retrieval (this is done by reduction in the number of joins needed for data processing)",
      "The main benefit of de-normalization is eliminating redundant information from a table and organizing the data so that future changes to the table are easier"
    ],
    "answer": 1
  },
  {
    "id": 453,
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
    "id": 454,
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
    "id": 455,
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
    "id": 456,
    "question": "When we apply set operators (UNION, INTERSECT, EXCEPT) to two relations R and S, which conditions on R and S must be satisfied?",
    "options": [
      "R and S must have schemas with identical sets of attributes and the types (domains) for each attributes must be the same in R and S",
      "Before we compute the set-theoretic union, intersection, or difference of sets of tuples, the columns of R and S must be ordered so that the order of attributes is the same for both relations",
      "All of the others"
    ],
    "answer": 2
  },
  {
    "id": 457,
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
    "id": 458,
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
    "id": 459,
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
    "id": 460,
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
    "id": 461,
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
    "id": 462,
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
    "id": 463,
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
    "id": 464,
    "question": "What is difference between PRIMARY KEY and UNIQUE KEY ?",
    "options": [
      "A table can have more than one UNIQUE KEY constraint but only one PRIMARY KEY",
      "A table can have more than one PRIMARY KEY constraint but only one UNIQUE KEY",
      "UNIQUE KEY and PRIMARY KEY are the same",
      "None of the others"
    ],
    "answer": 0
  },
  {
    "id": 465,
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
    "id": 466,
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
    "id": 467,
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
    "id": 468,
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
    "id": 469,
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
    "id": 470,
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
    "id": 471,
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
    "id": 472,
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
    "id": 473,
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
    "id": 474,
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
    "id": 475,
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
    "id": 476,
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
    "id": 477,
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
    "id": 478,
    "question": "What is a functional dependency?",
    "options": [
      "A functional dependency (A->B) occurs when the attribute A uniquely determines B",
      "A functional dependency (A->B) occurs when the attribute B uniquely determines A"
    ],
    "answer": 0
  },
  {
    "id": 479,
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
    "id": 480,
    "question": "Which of the following statements is correct?",
    "options": [
      "All relations in 3NF are also in BCNF",
      "For any relation schema, there is a dependency-preserving decomposition into 3NF",
      "All relations in 2NF are also in BCNF"
    ],
    "answer": 1
  },
  {
    "id": 481,
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
    "id": 482,
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
    "id": 483,
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
    "id": 484,
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
    "id": 485,
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
    "id": 486,
    "question": "Choose one correct statement:",
    "options": [
      "Two null values are equal",
      "Comparisons between two null values, or between a NULL and any other value, return unknown",
      "Comparisons between two null values, or between a NULL and any other value, return FALSE"
    ],
    "answer": 1
  },
  {
    "id": 487,
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
    "id": 488,
    "question": "What one is a wildcard used for pattern matching?",
    "options": [
      "\"%\" (for multi-character substitution)",
      "\"?\" (for single character substitution)",
      "\"?\" (for multi-character substitution)"
    ],
    "answer": 0
  },
  {
    "id": 489,
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
    "id": 490,
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
    "id": 491,
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
    "id": 492,
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
    "id": 493,
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
    "id": 494,
    "question": "The aim for the Object-relational database is to bridge the gap between conceptual data modelling techniques such as Entity-relationship diagram (ERD) and object-relational mapping (ORM), which often use classes and inheritance, and relational databases, which do not directly support them",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 495,
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
    "id": 496,
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
    "id": 497,
    "question": "A ____ is the framework under which data may exist and SQL operations on data may be executed",
    "options": [
      "SQL Environment",
      "SQL Statement",
      "SQL Parser",
      "SQL Optimizer"
    ],
    "answer": 0
  }
];
