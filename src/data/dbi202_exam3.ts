import { Question } from './types';

export const DBI202_EXAM3_QUESTIONS: Question[] = [
  {
    "id": 1,
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
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
    "question": "Consider",
    "options": [
      "and FD's (",
      "—+ B,",
      "-9 C,",
      "-9 D,"
    ],
    "answer": 1
  },
  {
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
    "id": 11,
    "question": "In query optimization, why is it beneficial for the database engine to use indexes?",
    "options": [
      "To reduce table size",
      "To enforce foreign key constraints",
      "To speed up data retrieval"
    ],
    "answer": 2
  },
  {
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
    "question": "Question 17",
    "options": [
      "trivial FD",
      "non-trivial FD",
      "key of relation",
      "super key of relation"
    ],
    "answer": 0
  },
  {
    "id": 18,
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
    "id": 19,
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
    "id": 20,
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
    "id": 21,
    "question": "Given",
    "options": [
      "The average laptop price with model = 1",
      "The price of all laptops",
      "The price of laptop with model = 1",
      "The model of laptop with price = 1"
    ],
    "answer": 2
  },
  {
    "id": 22,
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
    "id": 23,
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
    "id": 24,
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
    "id": 25,
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
    "id": 26,
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
    "id": 27,
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
    "id": 28,
    "question": "database administrator: a person or persons responsible for the structure or schema of the database.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 29,
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
    "id": 30,
    "question": "Which statement best describes the DELETE command?",
    "options": [
      "Deletes all rows and cannot be rolled back",
      "Deletes the table structure and all its data",
      "Deletes specific rows and can be rolled back"
    ],
    "answer": 2
  },
  {
    "id": 31,
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
    "id": 32,
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
    "id": 33,
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
    "id": 34,
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
    "id": 37,
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
    "id": 38,
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
    "id": 39,
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
    "id": 40,
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
    "question": "Which files are created automatically by SQL Server when you create",
    "options": [
      "primary data file and secondary data file",
      "primary data file and log file",
      "index file and log file",
      "secondary data file and log file"
    ],
    "answer": 1
  },
  {
    "id": 44,
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
    "id": 45,
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
    "id": 46,
    "question": "In the context of",
    "options": [
      "money transfer where funds are withdrawn from one account but not credited to another due to a crash",
      "funds transfer request fails before any account is updated, so neither the debit nor the credit happens",
      "Both the debit from Account",
      "and the credit to Account"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "question": "Which SQL command is used to define",
    "options": [
      "ALTER TABLE",
      "SELECT",
      "CREATE TABLE",
      "INSERT"
    ],
    "answer": 0
  },
  {
    "id": 48,
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
    "id": 49,
    "question": "Which of the following best defines",
    "options": [
      "collection of unorganized files",
      "program used to analyze data",
      "structured collection of data",
      "spreadsheet"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "question": "Which indexes can be automatically created by defining constraints in",
    "options": [
      "PRIMARY KEY",
      "CHECK",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "answer": 0
  }
];
