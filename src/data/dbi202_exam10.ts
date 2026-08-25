import { Question } from './types';

export const DBI202_EXAM10_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "How to write a good performance SQL query?",
    "options": [
      "Always use \"SELECT *\"",
      "Always try to avoid using \"SELECT *\""
    ],
    "answer": 1
  },
  {
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
    "id": 5,
    "question": "A Database is called having good performance if",
    "options": [
      "The Database runs fast",
      "The response time is very small",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "id": 6,
    "question": "To improve the DB performance:",
    "options": [
      "We should you the set-based queries and avoids procedural (row-by-row) queries",
      "We should you the row-based queries and avoids set-based queries"
    ],
    "answer": 0
  },
  {
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
    "question": "Which is the most dangerous fault that can potentially affect the integrity of a transaction?",
    "options": [
      "Non-repeatable reades",
      "Dirty Read",
      "Phantom rows"
    ],
    "answer": 1
  },
  {
    "id": 11,
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
    "id": 12,
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
    "id": 13,
    "question": "Which is the least dangerous fault that can potentially affect the integrity of a transaction?",
    "options": [
      "Phantom rows",
      "Dirty Read",
      "Non-repeatable reads"
    ],
    "answer": 0
  },
  {
    "id": 14,
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
    "id": 15,
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
    "id": 16,
    "question": "When sorting. Null values are treated as the lowest possible values",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 17,
    "question": "Except for COUNT, aggregate functions ignore null values",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 18,
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
    "id": 19,
    "question": "The ORDER BY clause can not include items not appearing in the select list",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 20,
    "question": "RANK() and ROW_NUMBER() are 2 ranking functions",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "question": "We can use the Aggregation in WHERE clause",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 22,
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
    "id": 23,
    "question": "A trigger is a special kind of stored procedure that automatically executes when an event occurs in the database server",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 24,
    "question": "The RANK() function returns the rank of each row within the partition of a result set",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 25,
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
    "id": 26,
    "question": "When create stored procedures, the \"WITH ENCRYPTION\" option indicates that SQL Serverwill convert the original text of the CREATE PROCEDURE statement to an obfuscated format",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 27,
    "question": "The maximum nested level of a Transact-SQL stored procedure is 64MB",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 28,
    "question": "In SQL Server, we can use the ORDER BY clauses in sub-queries",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "question": "The maximum size of a Transact-SQL stored procedure is 256MB",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 30,
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
    "id": 31,
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
    "id": 32,
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
    "id": 33,
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
    "id": 34,
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
    "id": 35,
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
    "id": 36,
    "question": "What is a key attribute in a relation? *",
    "options": [
      "A key attribute is an attribute that belongs to one of the keys of the relation",
      "A key attribute is an attribute that belongs to one of the super keys of the relation"
    ],
    "answer": 0
  },
  {
    "id": 37,
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
    "id": 38,
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
    "id": 39,
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
    "id": 40,
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
    "id": 41,
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
    "id": 42,
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
    "id": 43,
    "question": "What is the difference between a \"where\" clause and a \"having\" clause?",
    "options": [
      "HAVING applies to rows. WHERE applies to summarized (or aggregate) rows",
      "Having is just another part of WHERE clause, so there is no difference between WHERE and HAVING clauses",
      "WHERE applies to rows. HAVING applies to summarized (or aggregate) rows"
    ],
    "answer": 2
  },
  {
    "id": 44,
    "question": "Consider the distributive law. that holds for set relations: * (R U S) - T = (R-T) U (S-T) A The above distributive law still hold for bag relations?",
    "options": [
      "False",
      "True"
    ],
    "answer": 1
  },
  {
    "id": 45,
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
    "id": 46,
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
    "id": 47,
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
    "id": 48,
    "question": "Suppose we have 2 relations R(A.B.C.D) and S(B.C.D.E) and B is the foreign key column in R and B is the primary key in S. [v] A This means that: when enter data into the column B in R. only values that belong to r|B(S) are permitted",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 49,
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
    "id": 50,
    "question": "(TRUE AND NULL) returns:",
    "options": [
      "None ofthe others",
      "TRUE",
      "NULL",
      "FALSE"
    ],
    "answer": 2
  }
];
