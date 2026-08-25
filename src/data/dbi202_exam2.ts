import { Question } from './types';

export const DBI202_EXAM2_QUESTIONS: Question[] = [
  {
    "id": 1,
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
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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
    "id": 8,
    "question": "Triggers are stored blocks of code that have to be called in order to operate.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
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
    "id": 18,
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
    "id": 19,
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
    "id": 20,
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
    "id": 21,
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
    "id": 22,
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
    "id": 23,
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
    "id": 24,
    "question": "Consider",
    "options": [
      "and C->E. What is/are the key(s) for R",
      "AD"
    ],
    "answer": 2
  },
  {
    "id": 25,
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
    "id": 26,
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
    "id": 27,
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
    "id": 28,
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
    "id": 29,
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
    "id": 30,
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
    "id": 31,
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
    "id": 32,
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
    "id": 33,
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
    "id": 34,
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
    "id": 35,
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
    "id": 36,
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
    "id": 37,
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
    "id": 38,
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
    "id": 39,
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
    "id": 40,
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
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
    "id": 44,
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
    "id": 45,
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
    "id": 46,
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
    "id": 47,
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
    "id": 48,
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
    "id": 49,
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
    "id": 50,
    "question": "Which of the following accurately represents the purpose of",
    "options": [
      "To maintain data integrity and consistency.",
      "To define access permissions",
      "To ensure a sequence of operations is completed fully or not at all",
      "To allow concurrent modifications without restrictions"
    ],
    "answer": 0
  }
];
