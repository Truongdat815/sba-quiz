import { Question } from './types';

export const DBI202_EXAM8_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "may be executed",
    "options": [
      "All of the others",
      "Within a SQL environment are two special kinds of processes: SQL clients and SQL servers.",
      "A SQL environment is a DBMS running at some installation."
    ],
    "answer": 1
  },
  {
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    "id": 12,
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
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
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
    "id": 18,
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
    "id": 19,
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
    "id": 20,
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
    "id": 21,
    "question": "PICREATE TABLE MovieStar (name StarType PRIMARY KEY);",
    "options": [
      "CREATE TABLE MovieStar OF StarType Q;",
      "None of the others"
    ],
    "answer": 2
  },
  {
    "id": 22,
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
    "id": 23,
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
    "id": 24,
    "question": "WHERE clause;",
    "options": [
      "Sub-queries return relations, that can be used in WHERE clause",
      "Sub-queries can appear in FROM clauses, followed by a tuple variable",
      "All of the others"
    ],
    "answer": 3
  },
  {
    "id": 25,
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
    "id": 26,
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
    "id": 27,
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
    "id": 28,
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
    "id": 29,
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
    "id": 30,
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
    "id": 31,
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
    "id": 32,
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
    "id": 33,
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
    "id": 34,
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
    "id": 35,
    "question": "automatically generates a name for it",
    "options": [
      "We can create constraint on a tuple as a whole.",
      "We can create constraint on a single attribute"
    ],
    "answer": 0
  },
  {
    "id": 36,
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
    "id": 37,
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
    "id": 38,
    "question": "In relational data model, an attribute is a column",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 39,
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
    "id": 40,
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
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
    "id": 44,
    "question": "In relational data model, a tuple is a record or a row",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 45,
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
    "id": 46,
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
    "id": 47,
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
    "id": 48,
    "question": "XML files are semi-structured data",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "question": "A relation is a list of tuples",
    "options": [
      "True",
      "False"
    ],
    "answer": 1
  },
  {
    "id": 50,
    "question": "A relation is a set of tuples",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  }
];
