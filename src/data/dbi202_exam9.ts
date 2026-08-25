import { Question } from './types';

export const DBI202_EXAM9_QUESTIONS: Question[] = [
  {
    "id": 1,
    "question": "What is the father of relational data model?",
    "options": [
      "Charles Bachman",
      "Adgar Codd"
    ],
    "answer": 1
  },
  {
    "id": 2,
    "question": "Give the relation R(XYZT) with the following FD's: XY -> Z ; XYT -> Z ; XYZ -> T ; XZ -> T Determine the primary key for R and then choose the correct statement",
    "options": [
      "R is in BCNF",
      "R is not in BCNF"
    ],
    "answer": 1
  },
  {
    "id": 3,
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
    "id": 4,
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
    "id": 5,
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
    "id": 6,
    "question": "Give the relation R(EFGH) with the following FD's: E -> F ; F -> E ; E -> H ; H -> F Determine the keys for R and then choose the correct statement",
    "options": [
      "R is not in 3NF",
      "R is in 3NF"
    ],
    "answer": 1
  },
  {
    "id": 7,
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
    "id": 8,
    "question": "Which of the following relations is in Third normal form (3NF)?",
    "options": [
      "R(ABCD) with FD's: AB -> C ; ABD -> C ; ABC -> D ; AC -> D",
      "R(ABCD) with FD's: ACD -> B ; AC -> D ; D -> C ; AC -> B",
      "R(ABCD) with FD's: AB -> C ; BCD -> A ; D -> A ; B -> C"
    ],
    "answer": 1
  },
  {
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    "id": 12,
    "question": "Which of the following are guidelines for designing the relational schema ?",
    "options": [
      "Reduce the redundant values in tuples",
      "Reduce the NULL values in tuples",
      "All of the above"
    ],
    "answer": 2
  },
  {
    "id": 13,
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
    "id": 14,
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
    "id": 15,
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
    "id": 16,
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
    "id": 17,
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
    "id": 18,
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
    "id": 19,
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
    "id": 20,
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
    "id": 21,
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
    "id": 22,
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
    "id": 23,
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
    "id": 24,
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
    "id": 25,
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
    "id": 26,
    "question": "The LEN function in SQL Server is:",
    "options": [
      "Not a scalar function",
      "A scalar function"
    ],
    "answer": 1
  },
  {
    "id": 27,
    "question": "What is the meaning of the LEN function in SQL Server?",
    "options": [
      "The LEN function returns the total number of bytes used to store a string",
      "The LEN function returns the total number of characters of a string"
    ],
    "answer": 1
  },
  {
    "id": 28,
    "question": "How to remove all trailing blanks?",
    "options": [
      "We can use the RTRIM function",
      "We can use the LTRIM function"
    ],
    "answer": 0
  },
  {
    "id": 29,
    "question": "The following is the syntax for the DATEDIFF function: DATEDIFF ( datepart, startdate , enddate ) The datepart parameter specifies on which part (day, month, year) of the date to calculate the difference",
    "options": [
      "FALSE",
      "TRUE"
    ],
    "answer": 1
  },
  {
    "id": 30,
    "question": "How to remove all leading blanks?",
    "options": [
      "We can use the RTRIM function",
      "We can use the LTRIM function"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "question": "What is the meaning of the ISNULL function?",
    "options": [
      "The ISNULL function replaces NULL with the ZERO value.",
      "The ISNULL function replaces NULL with the BLANK value",
      "The ISNULL function replaces NULL with the specified replacement value."
    ],
    "answer": 1
  },
  {
    "id": 32,
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
    "id": 33,
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
    "id": 34,
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
    "id": 35,
    "question": "The CASE function is used to Evaluates a list of conditions and returns one of multiple possible result expressions",
    "options": [
      "FALSE",
      "TRUE"
    ],
    "answer": 1
  },
  {
    "id": 36,
    "question": "In SQL Server, an index is an on-disk structure associated with a table or view that speeds up retrieval of rows from the table or view",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "question": "Clustered index is not a good choice for the columns that undergo frequent changes",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "question": "A table or view must have a clustered indexe and some non-clustered indexes",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "question": "SQL Server typically selects the most efficient method when executing queries. However, if no indexes are available. SQL Server must use a full table scan",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 40,
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
    "id": 41,
    "question": "Indexes can be helpful for a variety of queries that contain SELECT, UPDATE, or DELETE statements",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 42,
    "question": "In SQL Server, indexes are automatically created when PRIMARY KEY and UNIQUE constraints are defined on table columns",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 43,
    "question": "In reality, an incorrect index choice can cause less than optimal performance",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 44,
    "question": "You should define the clustered index key with as few columns as possible",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "question": "Choose the incorrect statement",
    "options": [
      "Clustered indexes sort and store the data rows in the table based on their key values",
      "Non-Clustered indexes sort and store the data rows in the table based on their key values",
      "None of the above"
    ],
    "answer": 1
  },
  {
    "id": 46,
    "question": "An index contains keys built from one or more columns in the table or view. These keys are stored in a structure (B-tree) that enables SQL Server to find the row or rows associated with the key values quickly and efficiently",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "question": "When performing a table scan, the query optimizer reads all the rows in the table, and extracts the rows that meet the criteria of the query. A table scan generates any disk I/O operations and can be resource -intensive",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1
  },
  {
    "id": 48,
    "question": "Choose the correct statement",
    "options": [
      "Clustered indexes son and store the data rows in the table based on their key values",
      "Non-Clustered indexes sort and store the data rows in the table based on their key values",
      "Both of the above"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "question": "Well-designed indexes can reduce disk I/O operations and consume fewer system resources, therefore it improves query performance",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "question": "We should use which function to get the number of rows affected by the last statement",
    "options": [
      "@@IDENTITY",
      "@@ROWCOUNT",
      "@@ERROR",
      "@@NEWID"
    ],
    "answer": 0
  }
];
