import { Question } from './types';

export const DBI202_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What are the disadvantages of network data model?",
    options: [
      "Not support the high-level query language",
      "Not support the relationships between nodes",
      "Not support the database management system",
      "Not support the storage method Of very large amounts of data"
    ],
    answer: 0,
    explanation: "Mô hình mạng (Network data model) là mô hình dữ liệu cũ, điều hướng thông qua con trỏ (pointers), không hỗ trợ ngôn ngữ truy vấn bậc cao mang tính khai báo như SQL."
  },
  {
    id: 2,
    question: "What is information?",
    options: [
      "A collection of unprocessed data",
      "A collection Of processed data",
      "A collection of processed information",
      "A collection of unprocessed information"
    ],
    answer: 1,
    explanation: "Thông tin (Information) là dữ liệu đã qua xử lý (Processed data) để mang lại ý nghĩa và ngữ cảnh cho người sử dụng."
  },
  {
    id: 3,
    question: "In query compiler, which unit builds a tree structure from the text form of the query?",
    options: [
      "A query parser",
      "A query preprocessor",
      "A query optimizer",
      "A query processor"
    ],
    answer: 0,
    explanation: "Query Parser (Bộ phân tích cú pháp truy vấn) có nhiệm vụ kiểm tra cú pháp câu lệnh SQL và xây dựng cây cú pháp (Parse Tree) từ văn bản câu truy vấn."
  },
  {
    id: 4,
    question: "Which of the following is the appropriate characteristic of a database?",
    options: [
      "Because a database is created to suit the format of the data, it cannot respond flexibly to data format changes",
      "The procedure for making backups is complicated.",
      "It is difficult to share data between operations due to an exclusive control function.",
      "It can be accessed by multiple users at the same time due to an exclusive control function."
    ],
    answer: 0,
    explanation: "Cơ sở dữ liệu cho phép nhiều người dùng truy cập và thao tác đồng thời nhờ cơ chế khóa và kiểm soát truy cập đồng thời (Concurrency / Exclusive control)."
  },
  {
    id: 5,
    question: "In query compiler, which unit transforms the initial query plan into the best available sequence of operations on the actual data?",
    options: [
      "A query parser",
      "A query preprocessor",
      "A query optimizer",
      "A query processor"
    ],
    answer: 0,
    explanation: "Query Optimizer (Bộ tối ưu hóa truy vấn) ước lượng chi phí (Cost estimation) và chuyển đổi cây truy vấn ban đầu thành kế hoạch thực thi tối ưu nhất (Execution Plan)."
  },
  {
    id: 6,
    question: "Which statement about the network data model is true?",
    options: [
      "It supports high-level query languages like SQL.",
      "It only allows one parent per record.",
      "It organizes data using tables and relations.",
      "It allows each record to have multiple parents and children."
    ],
    answer: 0,
    explanation: "Trong mô hình dữ liệu mạng (Network model), mỗi bản ghi (record) có thể có nhiều bản ghi cha (parents) và nhiều bản ghi con (children), tạo thành cấu trúc đồ thị mạng (Graph)."
  },
  {
    id: 7,
    question: "What is a database?",
    options: [
      "Organized collection of information that cannot be accessed, updated, and managed",
      "Collection Of data or information without organizing",
      "Organized collection of data or information that can be accessed, updated, and managed",
      "Organized collection Of data that cannot be updated"
    ],
    answer: 2,
    explanation: "Cơ sở dữ liệu (Database) là tập hợp dữ liệu hoặc thông tin có cấu trúc và được tổ chức để có thể dễ dàng truy cập, quản lý và cập nhật."
  },
  {
    id: 8,
    question: "In the relational model, what is the main purpose of using a primary key in a table?",
    options: [
      "To allow duplicate records",
      "TO identify each row' uniquely",
      "To store data temporarily",
      "TO improve database aesthetics"
    ],
    answer: 0,
    explanation: "Trong mô hình quan hệ, mục đích chính của Khóa chính (Primary Key) là để định danh duy nhất (uniquely identify) từng hàng (tuple/row) trong bảng."
  },
  {
    id: 9,
    question: "returns a relation instance containing all tuples that occur in both R and S",
    options: [
      "Intersection",
      "Set-difference",
      "Union",
      "D. Cross product"
    ],
    answer: 0,
    explanation: "Phép giao (Intersection, ký hiệu ∩) trả về một quan hệ chứa tất cả các bộ (tuples) cùng xuất hiện ở cả hai quan hệ R và S."
  },
  {
    id: 10,
    question: "The values appearing in given attributes of any tuple in the referencing relation must likewise cccur in specified integrity attributes of at least one tuple in the referenced relation, according to constraint.",
    options: [
      "Referential",
      "Primary",
      "Referencing",
      "Specific"
    ],
    answer: 0,
    explanation: "Ràng buộc toàn vẹn tham chiếu (Referential Integrity Constraint) quy định rằng giá trị của khóa ngoại trong bảng tham chiếu phải tồn tại trong khóa chính của bảng được tham chiếu."
  },
  {
    id: 11,
    question: "Consider the relation , D) and functional dependencies: Find key of the above relation.",
    options: [
      "The key is the A column",
      "The key includes two columns (A,C)",
      "The key is the A column or C column",
      "The key is the C column"
    ],
    answer: 0,
    explanation: "Với R(A, B, C, D) và phụ thuộc hàm A → B, C → D: bao đóng (AC)+ = {A, B, C, D}. Do đó khóa của quan hệ là tập hợp hai thuộc tính (A, C)."
  },
  {
    id: 12,
    question: "In a network data model, a node can be linked to multiple other nodes. What is this relationship called?",
    options: [
      "many-to-one",
      "one-to-many",
      "many-to-many",
      "one-to-one"
    ],
    answer: 0,
    explanation: "Trong mô hình mạng, một nút có thể liên kết với nhiều nút khác theo cả hai chiều, đại diện cho mối quan hệ nhiều - nhiều (Many-to-Many)."
  },
  {
    id: 13,
    question: "A(n) ________ is a property of the entire relation, rather than of the individual tuples in which each tuple is unique.",
    options: [
      "Row",
      "Key",
      "Attribute",
      "Field"
    ],
    answer: 1,
    explanation: "Khóa (Key) là thuộc tính hoặc tập thuộc tính có tính chất áp dụng cho toàn bộ quan hệ, đảm bảo mỗi bản ghi trong quan hệ là duy nhất."
  },
  {
    id: 14,
    question: "Which operation is commonly used to display all the properties derived from the original property?",
    options: [
      "Union",
      "Intersection",
      "Closure",
      "D. Projection"
    ],
    answer: 0,
    explanation: "Bao đóng (Closure, ký hiệu X+) của tập thuộc tính là phép toán dùng để tìm tất cả các thuộc tính có thể được suy dẫn từ tập thuộc tính ban đầu."
  },
  {
    id: 15,
    question: "Given relation R(X, Y, Z, W) with the set of functional dependencies: F = { X → Y, Y → Z, Z → W } Which of the following is a key for R?",
    options: [
      "X",
      "Y",
      "XZ",
      "XY"
    ],
    answer: 0,
    explanation: "Với F = { X → Y, Y → Z, Z → W }, tính bao đóng của X: X+ = {X, Y, Z, W} chứa toàn bộ thuộc tính của R, do đó X là khóa (Key) của R."
  },
  {
    id: 16,
    question: "If two entities in an ER model share the same attribute name but represent different meanings, what should be done during schema transformation?",
    options: [
      "Alvvays add entity name to the attribute name to make the meaning clear.",
      "Rename one of the attributes to avoid ambiguity",
      "Merge both entities",
      "Ignore the attribute names"
    ],
    answer: 0,
    explanation: "Khi hai thực thể có cùng tên thuộc tính nhưng mang ngữ nghĩa khác nhau, trong quá trình chuyển đổi sang lược đồ quan hệ cần đổi tên một trong hai thuộc tính (Rename) để tránh trùng lặp, nhập nhằng."
  },
  {
    id: 17,
    question: "In SQL, Which of the following statements is correct?",
    options: [
      "All relations in 2NF are also in BCNF",
      "All relations in INF are also in BCNF",
      "All relations in 3NF are also in BCNF",
      "D. For any relation schema, there is a dependency-preserving decomposition into 3NF"
    ],
    answer: 0,
    explanation: "Theo lý thuyết cơ sở dữ liệu, đối với mọi lược đồ quan hệ luôn tồn tại một phép phân rã bảo toàn phụ thuộc hàm đạt dạng chuẩn 3NF."
  },
  {
    id: 18,
    question: "Given R as a relation, which of the following statements is correct about normalizing data in 3NF form:",
    options: [
      "If R: Has a primary key, no repeating groups, no multivalued attributes/composite attributes",
      "If R: Has a primary key, no repeating groups, no multivalued attributes/complex attributes, no partial functional dependencies _",
      "If R: Has a primary key, no repeating groups, no multivalued/composite attributes, no transitive dependencies",
      "If R: Has a primary key, no repeating groups, no multivalued attributes/complex attributes, no transitive functional dependencies, no partial functional dependences. E. If R: has complete functional dependency _"
    ],
    answer: 0,
    explanation: "Điều kiện đạt dạng chuẩn 3NF: Phải đạt 2NF (không có phụ thuộc hàm từng phần vào khóa chính) và không có phụ thuộc hàm bắc cầu (No transitive functional dependencies)."
  },
  {
    id: 19,
    question: "Which of the following violates INF (First Normal Form)?",
    options: [
      "Having a NULL in a column",
      "Repeating groups Of values in a column",
      "Having a primary key and all single attributes",
      "Not exist multi-value attributes"
    ],
    answer: 0,
    explanation: "Vi phạm dạng chuẩn 1 (1NF) xảy ra khi có các nhóm giá trị lặp lại (Repeating groups) hoặc thuộc tính đa trị (Multivalued attributes) trong một cột."
  },
  {
    id: 20,
    question: "Which diagram is used to model entities and relationships?",
    options: [
      "UML class diagram",
      "Flowchart",
      "E../R diagram",
      "Dependency graph"
    ],
    answer: 2,
    explanation: "Sơ đồ Thực thể - Mối quan hệ (E/R Diagram - Entity Relationship Diagram) được dùng để mô hình hóa các thực thể và mối quan hệ giữa chúng trong thiết kế CSDL."
  },
  {
    id: 21,
    question: "In the entity-relationship model, what is the entity?",
    options: [
      "Relationships",
      "Relationships between objects",
      "Objects and relationships between objects",
      "Data objects"
    ],
    answer: 3,
    explanation: "Trong mô hình E/R, Thực thể (Entity) đại diện cho các đối tượng dữ liệu cụ thể (Data objects) trong thế giới thực."
  },
  {
    id: 22,
    question: "In relational database design, which of the following is known as a set of entities of the same type that share the same properties or attributes?",
    options: [
      "Entity Relation model",
      "Entity set",
      "Field set",
      "Record set"
    ],
    answer: 0,
    explanation: "Tập thực thể (Entity Set) là tập hợp các thực thể cùng loại, chia sẻ chung các thuộc tính hoặc đặc tính."
  },
  {
    id: 23,
    question: "In SQL, ERD use three types of principle elements to form relationships:",
    options: [
      "Entity sets, Constraints and Relationships",
      "Attributes, Constraints, and Relationships",
      "Entity sets, Attributes, and Relationships",
      "Entity sets, Attributes and Constraints"
    ],
    answer: 2,
    explanation: "Trong mô hình E/R, thuộc tính có thể chia nhỏ thành các thành phần nhỏ hơn (ví dụ: FullName = FirstName + LastName, Address = Street + City) gọi là Thuộc tính phức hợp (Composite attribute)."
  },
  {
    id: 24,
    question: "In an ERD, which of the follow.'ing best describes a one-to-many (1 relationship?",
    options: [
      "Each instance of Entity A is related to exactly one instance of Entity B",
      "Each instance Of Entity A is related to many instances Of Entity B",
      "Each instance of both entities is related to exactly one other instance",
      "Entities are not related at all"
    ],
    answer: 0,
    explanation: "Quan hệ 1 - Nhiều (One-to-Many): Mỗi giảng viên (Teacher) có thể giảng dạy nhiều môn học (Subjects), nhưng mỗi môn học chỉ do một giảng viên phụ trách."
  },
  {
    id: 25,
    question: "How are weak entity sets represented in an Entity Relationship Diagram (ERD)?",
    options: [
      "With rectangle",
      "With diamond shape",
      "With a double-line rectangle",
      "With a dashed oval"
    ],
    answer: 0,
    explanation: "Để loại bỏ giá trị trùng lặp trong kết quả truy vấn SQL, ta sử dụng từ khóa DISTINCT ngay sau mệnh đề SELECT."
  },
  {
    id: 26,
    question: "What happens to derived attributes when converting an ERD to a relational model?",
    options: [
      "They become primary keys in the related tables",
      "They are calculated and stored as regular attributes in the related tables",
      "They become foreign keys in the related tables",
      "They are ignored during the conversion process"
    ],
    answer: 3,
    explanation: "Toán tử LIKE kết hợp với ký tự đại diện % được dùng để tìm kiếm chuỗi mẫu (Pattern matching) trong SQL."
  },
  {
    id: 27,
    question: "How are many-to-many relationships typically represented in the relational model?",
    options: [
      "By adding attributes to one of the related tables",
      "By creating a new table with foreign keys from both related tables",
      "By denormalizing the database",
      "By creaüng a new table for each related entity"
    ],
    answer: 0,
    explanation: "Mệnh đề ORDER BY được sử dụng để sắp xếp các dòng kết quả trả về theo thứ tự tăng dần (ASC) hoặc giảm dần (DESC)."
  },
  {
    id: 28,
    question: "The predicate in a where clause can involve Boolean operations such as and. The result of true and unknown false and unknown is while unknown and unknown is",
    options: [
      "Unknown, unknowm, false",
      "True, false, unknown",
      "True, unknown, unknown",
      "Unknown, false, unknown"
    ],
    answer: 3,
    explanation: "Trong logic 3 giá trị của SQL: TRUE AND UNKNOWN = UNKNOWN, FALSE AND UNKNOWN = FALSE, UNKNOWN AND UNKNOWN = UNKNOWN."
  },
  {
    id: 29,
    question: "Which SQL clause is used to add a new column to an existing table?",
    options: [
      "ADD COLUMN",
      "ALTER TABLE ADD COLUMN",
      "INSERT INTO",
      "CREATE COLUMN"
    ],
    answer: 0,
    explanation: "Mệnh đề GROUP BY gom các dòng có cùng giá trị thành các nhóm; các hàm tổng hợp như SUM, COUNT, AVG được tính toán riêng biệt cho từng nhóm đó."
  },
  {
    id: 30,
    question: "Which statement is used to disable a foreign key constraint named fk_name during INSERT and UPDATE transactions in table B?",
    options: [
      "ALTER TABLE B DROP CONSTRAINT fk name",
      "ALTER TABLE B DISABLE CONSTRAINT fk name",
      "ALTER TABLE B DISABLE fk name",
      "ALTER TABLE B NOCHECK CONSTRAINT fk name"
    ],
    answer: 3,
    explanation: "Hàm AVG() trong SQL tính giá trị trung bình của cột số và tự động bỏ qua (ignore) các giá trị NULL."
  },
  {
    id: 31,
    question: "Which SQL statement selects all rows frorn table called Contest, with column ContestDate having values greater or equal to May 25,2006?",
    options: [
      "SELECT FROM Contest WHERE ContestDate '05/25/2006'",
      "SELECT FROM Contest GROUPBY ContestDate '05/25,'2006'_",
      "SELECT FROM Contest WHERE ContestDate < '0525/2006'",
      "SELECT FROM Contest HAVING ContestDate '05/25/2006'."
    ],
    answer: 0,
    explanation: "Tập thuộc tính {maker, model} là khóa chính (Primary Key) xác định duy nhất sản phẩm của từng nhà sản xuất."
  },
  {
    id: 32,
    question: "What is the value of the query SELECT ' Agnes ' + NULL + ' Allison '",
    options: [
      "Agnes",
      "Allison",
      "NULL",
      "Agnes Allison"
    ],
    answer: 0,
    explanation: "Trong SQL, chuỗi cộng với NULL ('Agnes' + NULL + 'Allison') theo chuẩn SQL Server sẽ trả về giá trị NULL."
  },
  {
    id: 33,
    question: "Given two relations: Printer(maker, model, type) PC(model, speed, ram, hd, price) What does this query return? SELECT maker FROM Product WHERE model NOT IN (SELECT model FROM PC);",
    options: [
      "Makers of all devices",
      "Makers that also build PCs",
      "Makers of non-PC devices",
      "Makers of PCs only"
    ],
    answer: 2,
    explanation: "Truy vấn con loại trừ các model là PC, do đó câu lệnh trả về danh sách các nhà sản xuất các thiết bị không phải PC (Makers of non-PC devices)."
  },
  {
    id: 34,
    question: "In SQL query, choose the correct statement about the order of execution",
    options: [
      "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY",
      "SELECT FROM - GROUP BY - WHERE - HAVING - ORDER BY",
      "SELECT - FROM - HAVING - GROUP BY- WHERE -ORDER BY",
      "SELECT - FROM - OREDER BY - WHERE - HAVING -GROUP BY"
    ],
    answer: 0,
    explanation: "Mệnh đề HAVING được dùng để đặt điều kiện lọc trên các nhóm sau khi đã gom nhóm bằng GROUP BY (trong khi WHERE lọc từng dòng trước khi gom nhóm)."
  },
  {
    id: 35,
    question: "Which of the following belongs to DDL (data definition language)?",
    options: [
      "create, alter, drop",
      "Insert, update, delete, select",
      "Truncate, select, invoke",
      "D. Deny, create, drop"
    ],
    answer: 0,
    explanation: "Thực thể yếu (Weak Entity) là thực thể không có đủ thuộc tính để tạo thành khóa chính riêng, phải phụ thuộc vào thực thể xác định (Identifying entity)."
  },
  {
    id: 36,
    question: "Foreign key is the one in which the of one relation is referenced in another relation",
    options: [
      "Foreign key",
      "Primary key",
      "References",
      "D. Check constraint"
    ],
    answer: 0,
    explanation: "Khóa ngoại (Foreign Key) là một cột hoặc tập cột tham chiếu đến Khóa chính (Primary Key) của một bảng khác để tạo mối quan hệ giữa hai bảng."
  },
  {
    id: 37,
    question: "Transaction processing is associated with everything belov.' except",
    options: [
      "Producing detail, summery, or exception reports",
      "Recording a business activity",
      "Confirming an action or triggering a response",
      "Maintaining data"
    ],
    answer: 0,
    explanation: "Dạng chuẩn BCNF (Boyce-Codd Normal Form) yêu cầu mọi phụ thuộc hàm không tầm thường X → Y thì X bắt buộc phải là một Siêu khóa (Superkey)."
  },
  {
    id: 38,
    question: "In an employee table to include the attributes whose value always have some value which of the following constraint must be used?",
    options: [
      "Null",
      "Not null",
      "Unique",
      "Distinct"
    ],
    answer: 0,
    explanation: "Mất mát thông tin (Lossy decomposition) xảy ra khi nối lại các bảng đã phân rã tạo ra các bộ dữ liệu giả (Spurious tuples)."
  },
  {
    id: 39,
    question: "The deadlock state can be changed back to stable state by using ________ statement.",
    options: [
      "Deadlock",
      "Abort",
      "Commit",
      "Rollback"
    ],
    answer: 3,
    explanation: "Trạng thái bế tắc (Deadlock) được DBMS giải quyết bằng cách hủy và hoàn tác (Rollback) một trong các giao dịch đang xung đột để đưa hệ thống về trạng thái ổn định."
  },
  {
    id: 40,
    question: "What is the difference between a view and a table in SQL?",
    options: [
      "Tables can be updated, while the view is displaying data from the query",
      "Views can store data permanently, while tables are temporary",
      "Tables are created with the CREATE TABLE statement, while views use CREATE VIEW",
      "D. Vlews and tables are functionally equivalent in SQL"
    ],
    answer: 2,
    explanation: "Thuộc tính dẫn xuất (Derived attribute) là thuộc tính có giá trị được tính toán từ các thuộc tính khác (ví dụ: Tuổi được tính từ Ngày sinh)."
  },
  {
    id: 41,
    question: "Domain constraints, functional dependency and referential integrity are special forms of",
    options: [
      "Foreign key",
      "Primary key",
      "Assertion",
      "D. Referential constraint"
    ],
    answer: 0,
    explanation: "Thuộc tính đa trị (Multivalued attribute) có thể chứa nhiều hơn một giá trị cho một thực thể (ví dụ: một người có nhiều số điện thoại)."
  },
  {
    id: 42,
    question: "Which of the following is not mentioned how does a local variable is defined using T-SQL?",
    options: [
      "The name of the local variable should begin with sign as the first character of its name.",
      "A local variable is defined using T-SQL by using statement \"DECLARE'",
      "When a variable is first declared, its value is set to NULL. To assign a value to a variable, use the SET statement.",
      "The data type of local variable is declared after its name and assigned a system-supplied or user-defined data type and a length."
    ],
    answer: 0,
    explanation: "Bảng cầu / Bảng trung gian (Junction table) chứa khóa ngoại tham chiếu đến cả hai bảng để biểu diễn mối quan hệ nhiều - nhiều (N:N)."
  },
  {
    id: 43,
    question: "In which line of the following code is the error? 1: CREATE TRIGGER trigger1 2: ON dbo.EMPLOYEE 3: AFTER FOR INSERT AS 4: BEGIN 5: INSERT INTO EMPLOYEE_BACKUP 6: SELECT * FROM INSERTED 7: END",
    options: [
      "Line 1",
      "Line 2",
      "Line 3",
      "Line 5"
    ],
    answer: 2,
    explanation: "Trong T-SQL, từ khóa AFTER và FOR có ý nghĩa tương đương khi định nghĩa trigger, không được viết liền 'AFTER FOR' mà chỉ chọn một trong hai từ khóa."
  },
  {
    id: 44,
    question: "Which type of user-defined function in SQL returns a single value?",
    options: [
      "Scalar function",
      "Table-valued function",
      "Inline function",
      "D. Aggregate function"
    ],
    answer: 0,
    explanation: "Tính bền vững (Durability) trong ACID đảm bảo rằng một khi giao dịch đã hoàn tất thành công (Commit), các thay đổi dữ liệu sẽ được lưu vĩnh viễn ngay cả khi hệ thống gặp sự cố mất điện."
  },
  {
    id: 45,
    question: "In SQL, what is the purpose of the CLOSE statement in relation to cursors?",
    options: [
      "To close the database connection",
      "TO close the cursor and release associated resources",
      "To close the transaction",
      "D. TO close the result set"
    ],
    answer: 0,
    explanation: "Mức cô lập Serializable là mức cô lập cao nhất trong SQL, ngăn chặn tất cả các hiện tượng Dirty Read, Non-repeatable Read và Phantom Read."
  },
  {
    id: 46,
    question: "A variable is local, and its value is not preserved by the DBMS after a run-ning of the function or procedure.",
    options: [
      "DECLARE",
      "RETURN",
      "CALL",
      "EXEC"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) cấu trúc B-Tree giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trong các truy vấn có điều kiện WHERE hoặc JOIN."
  },
  {
    id: 47,
    question: "The following SQL statement creates a stored procedure that selects Customers from a particular City with a particular PostalCode from the \"Customers\" table: CREATE PROCEDURE Select.AllCustomers @City nvarchar(30), @PostalCode nvarchar( 10) BEGIN SELECT FROM Customers WHERE City = @City AND PostalCode = @PostalCode; END; GO Which of the following is the way to execute a procedure?",
    options: [
      "EXEC SelectAllCustomers @City — = 'WAI IDP',",
      "EXECUTE SelectAllCustomers 'London', 'WAIIDP' OUTPUT",
      "EXEC @Cit = 'London', @PostalCode = 'WAIIDP;",
      "EXECUTE SelectAllCustomers"
    ],
    answer: 0,
    explanation: "Cú pháp thực thi Stored Procedure có truyền tham số trong SQL Server là: EXEC ProcedureName @Param1 = Value1, @Param2 = Value2;"
  },
  {
    id: 48,
    question: "Assume that you are required to develop an application to manage courses at the university, which requires Structured data (tables, rows, columns), strict consistency, and the need to use complex queries. The enforcement of ACID properties (Atomicity, Consistency, Isolation, Durability). In the context of databases, which most appropriate data model should you choose for developing this application?",
    options: [
      "relational data model (example:Microsoft SQL Server, MySQL,",
      "document- based data model (example: MongoDB, Cassandra, Couch DB)",
      "key-value data model (example : Redis, DynamoDB, Riak)",
      "Hierachical data model"
    ],
    answer: 0,
    explanation: "Ứng dụng cần dữ liệu có cấu trúc, quan hệ chặt chẽ và tuân thủ ACID nghiêm ngặt nên sử dụng mô hình cơ sở dữ liệu quan hệ (Relational data model: SQL Server, MySQL, PostgreSQL)."
  },
  {
    id: 49,
    question: "Given the relational schema R(A, B, C, D, E) and the set of functional dependencies: F = { AB → C, C → D, D → E } What is the closure of the attribute set {A, B}?",
    options: [
      "{A, B}",
      "{A, B, C}",
      "{A, B, C, D}",
      "{A, B, C, D, E}"
    ],
    answer: 3,
    explanation: "Với R(A, B, C, D, E) và AB → C, C → D, D → E: bao đóng của {A, B} là {A, B}+ = {A, B, C, D, E} chứa toàn bộ thuộc tính."
  },
  {
    id: 50,
    question: "Which of the following is an example of a composite attribute?",
    options: [
      "StudentlD with unique value",
      "FullName (split into FirstName and LastName)",
      "EmailAddress with multi-values",
      "D. DateOfBirth value is accepted with format"
    ],
    answer: 0,
    explanation: "Trigger là khối lệnh tự động thực thi khi xảy ra các thao tác DML (INSERT, UPDATE, DELETE) trên bảng dữ liệu."
  },
  {
    id: 51,
    question: "Which of the following is a function of a DBMS?",
    options: [
      "Designing web pages",
      "Give users the ability to query the data",
      "Performing system backups",
      "Compiling source code"
    ],
    answer: 1,
    explanation: "Mô hình mạng (Network model) sử dụng các con trỏ (pointers/links) để liên kết trực tiếp giữa các bản ghi thay vì dùng bảng quan hệ."
  },
  {
    id: 52,
    question: "A person or persons responsible for the structure or schema of the database is",
    options: [
      "A user",
      "A Coder",
      "A Customer",
      "A database administrator"
    ],
    answer: 0,
    explanation: "Thông tin (Information) là dữ liệu đã được xử lý (Processed data) để có ý nghĩa trong việc ra quyết định."
  },
  {
    id: 53,
    question: "The people whose jobs require access to the database for querying, updating, and generating reports; the database primarily exists for their use. What type of this user?",
    options: [
      "DBA",
      "End users",
      "Database designer",
      "System Analysts and Application Programmers"
    ],
    answer: 0,
    explanation: "Query Parser phân tích cú pháp câu lệnh SQL và tạo ra cây phân tích cú pháp (Parse tree)."
  },
  {
    id: 54,
    question: "Consider the tw•o relations from our running movie database: Movies(title, year, length, genre, studioName, producerC#) MovieExec(name, address, cert#, netWorth) The producerC# component of each Movies tuple must also appear in the cert# component of some MovieExec tuple How can we express this integrity constraint in relational algebra?",
    options: [
      "n_(producerC#) (MovieExec)",
      "n_(producerC#) (Movies)C n_(cert#) (MovieExec)",
      "n_(cert#) (MovieExec)C n_(producerC#) (Movies)",
      "(MovieExec)"
    ],
    answer: 0,
    explanation: "Ràng buộc toàn vẹn thực thể (Entity Integrity) quy định Khóa chính (Primary Key) không được phép chứa giá trị NULL."
  },
  {
    id: 55,
    question: "Database data models usually have a way to go describe limitations on what the data can be, is called",
    options: [
      "Constraints on the data",
      "Operations on the data",
      "Structure of the data",
      "D. definition of data"
    ],
    answer: 0,
    explanation: "Trong đại số quan hệ: Điều kiện ràng buộc toàn vẹn tham chiếu biểu diễn rằng tập hợp khóa ngoại của Movies phải là tập con (⊆) của tập khóa chính trong MovieExec."
  },
  {
    id: 56,
    question: "In relational DBMS, what is the difference between PRIMARY KEY and UNIQUE KEY?",
    options: [
      "UNIQUE KEY allows NULL value but PRIMARY KEY does not",
      "UNIQUE KEY and PRIMARY KEY are completely the same",
      "A table can have more than one PRIMARY KEY constraint but only one UNIQUE KEY",
      "A table can have more than one UNIQUE KEY constraint and multiple PRIMARY KEYs"
    ],
    answer: 0,
    explanation: "Điểm khác biệt quan trọng giữa PRIMARY KEY và UNIQUE KEY: UNIQUE KEY cho phép chứa giá trị NULL (trong SQL Server là 1 giá trị NULL), còn PRIMARY KEY tuyệt đối không được NULL."
  },
  {
    id: 57,
    question: "For the following relations and a Set operation: Employee Name I City I Gender Nguyen Trung Truc I HCM I Male Le Hong Son I HCM I Male Customer Name I City I Gender Nguyen Trung Truc I HCM I Male Tran Tuyet Nhi I HN I Female Employee IJ Customer What is the result Of the Union operation?",
    options: [
      "Name I City I Gender Nguyen Trung Truc I HCM I Male Le Hong Son I HCM I Male",
      "Name I City :Gender Nguyen Trung Truc I HCM I Male Tran Tuyet Nhi I HN I Female",
      "Name I City I Gender Nguyen Trung Truc I HCM I Male Le Hong Son I HCM I Male Nguyen Trung Truc I HCM I Male Tran Tuyet Nhi I HN I Female",
      "Name I City I Gender Nguyen Trung Truc I HCM I Male Le Hong Son I HCM I Male Tran Tuyet Nhi I HN I Female"
    ],
    answer: 0,
    explanation: "Phép hợp (Union) trong đại số quan hệ kết hợp các dòng từ hai quan hệ và tự động loại bỏ các dòng trùng lặp."
  },
  {
    id: 58,
    question: "In a binary relationship with cardinality (1 , N), what does it signify?",
    options: [
      "One entity can be related to multiple instances of another entity, but not vice versa",
      "Multiple instances Of one entity can relate to multiple instances Of another entity",
      "One entity can relate to only one instance of another entity",
      "Each instance of one entity must relate toa unique Instance of another entity"
    ],
    answer: 0,
    explanation: "Phép chiếu (Projection, ký hiệu π) chọn lọc các cột (thuộc tính) cụ thể từ quan hệ và loại bỏ các cột còn lại."
  },
  {
    id: 59,
    question: "What is a superkey?",
    options: [
      "A minimal set of attributes that uniquely identifies a row.",
      "Any set Of attributes that contains a key _",
      "An attribute that is not part of any key",
      "D. A foreign key in a table."
    ],
    answer: 0,
    explanation: "Phép chọn (Selection, ký hiệu σ) lọc ra các dòng (tuples) thỏa mãn một biểu thức điều kiện xác định."
  },
  {
    id: 60,
    question: "Which statement best represents Armstrong's Axiom of Decomposition?",
    options: [
      "If A → B and B → C, then A → C",
      "If A → B, then AC → BC",
      "If A → BC, then A → B and A → C",
      "If A → B and A → C, then A → BC"
    ],
    answer: 2,
    explanation: "Luật phân rã Armstrong (Decomposition Axiom): Nếu A → BC thì suy ra A → B và A → C."
  },
  {
    id: 61,
    question: "Suppose we have a relation and functional dependencies: F = { F → A, A → B, B → C, BC → A, A → D, E → A, D → E } Which of the following is NOT a candidate key?",
    options: [
      "A",
      "F",
      "E",
      "D"
    ],
    answer: 0,
    explanation: "Thuộc tính A có thể suy dẫn ra tất cả các thuộc tính khác qua chuỗi phụ thuộc hàm, do đó A là một khóa ứng viên (Candidate Key)."
  },
  {
    id: 62,
    question: "Which of the following is NOT one of Armstrong's primary axioms for inference of functional dependencies?",
    options: [
      "Reflexivity: If Y ⊆ X, then X → Y",
      "Augmentation: If X → Y, then XZ → YZ",
      "Transitivity: If X → Y and Y → Z, then X → Z",
      "Decomposition: If X → YZ, then X → Y and Y → Z"
    ],
    answer: 3,
    explanation: "Luật cơ bản của Armstrong bao gồm: Tính phản xạ (Reflexivity), Tính tăng trưởng (Augmentation), và Tính bắc cầu (Transitivity). Luật phân rã là luật phái sinh."
  },
  {
    id: 63,
    question: "Consider a relation with functional dependencies. Which of the following is a trivial functional dependency of the relation?",
    options: [
      "AB → A",
      "AD → ABC",
      "C → CB",
      "AB → CD"
    ],
    answer: 0,
    explanation: "Phụ thuộc hàm tầm thường (Trivial functional dependency) là phụ thuộc hàm dạng X → Y trong đó Y là tập con của X (ví dụ: AB → A)."
  },
  {
    id: 64,
    question: "Problems such as redundancy that occur when we try to cram too much into a single relation are called",
    options: [
      "Normal Form",
      "Anomalies",
      "Relations",
      "None of the otherss"
    ],
    answer: 0,
    explanation: "Quan hệ đạt chuẩn 2NF khi nó đã ở dạng chuẩn 1NF và không tồn tại phụ thuộc hàm từng phần của thuộc tính không khóa vào bất kỳ khóa chính nào."
  },
  {
    id: 65,
    question: "What is the purpose of data normalization in the context of the database design?",
    options: [
      "Ensure data security",
      "Avoid information anomalies",
      "Make sure data is inherited",
      "D. Ensuring better data storage"
    ],
    answer: 0,
    explanation: "Dạng chuẩn 3NF loại bỏ các phụ thuộc hàm bắc cầu (Transitive functional dependencies) giữa các thuộc tính không khóa."
  },
  {
    id: 66,
    question: "Which normalization level ensures that there are no repeating groups in tables?",
    options: [
      "First Normal Form (INF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    answer: 0,
    explanation: "Một tập thuộc tính K là Siêu khóa (Superkey) nếu K xác định duy nhất mọi thuộc tính trong quan hệ (K+ chứa toàn bộ thuộc tính của R)."
  },
  {
    id: 67,
    question: "Which of the following statements is true regarding Third Normal Form (3NF)?",
    options: [
      "It eliminates transitive dependencies",
      "It allows for redundant data",
      "It only considers partial dependencies",
      "It doesn't address any anomalies in a database"
    ],
    answer: 0,
    explanation: "Trong sơ đồ E/R: Thuộc tính khóa (Key attribute) thường được biểu diễn bằng hình elip có gạch chân dưới tên thuộc tính."
  },
  {
    id: 68,
    question: "SSN Converting entity set to relation",
    options: [
      "Employees(SSN, Name, Address, Street, City) Employees",
      "Employees(SSN, Name, Street, City)",
      "Employees(SSN, Name, Address)",
      "Employees(SSN, Name, Address) Employees(SSN , Street, City)"
    ],
    answer: 0,
    explanation: "Chuyển đổi thực thể có thuộc tính phức hợp: Các thuộc tính thành phần của thuộc tính phức hợp sẽ trở thành các cột trực tiếp trong bảng quan hệ."
  },
  {
    id: 69,
    question: "Given the ERD: Customer(1) --- [Makes] --- (n) Order Customer attributes: CustomerId, FirstName, LastName, Email, PhoneNumber Order attributes: OrderId, OrderDate How many attributes does the table 'ORDER' contain when converted to relational schema?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "Quan hệ 1:N giữa Customer (1) và Order (N): Bảng Order sẽ có các thuộc tính riêng (OrderId, OrderDate) cộng thêm khóa ngoại CustomerId tham chiếu từ bảng Customer, tổng cộng là 3 thuộc tính."
  },
  {
    id: 70,
    question: "What is the purpose of a foreign key in an ERD?",
    options: [
      "ltdefines the data type of attributes",
      "It determines the cardinality Of relationships",
      "It serves as the primary identifier for a table",
      "It establishes a link between two tables"
    ],
    answer: 0,
    explanation: "Mối quan hệ nhiều - nhiều (N:N) trong mô hình E/R khi chuyển đổi sang CSDL quan hệ bắt buộc phải tạo một bảng trung gian (Junction table / Bridge table)."
  },
  {
    id: 71,
    question: "Which of the following statements about relational databases is true?",
    options: [
      "The database is built on a relational data model.",
      "The database is created from excel software.",
      "Relational databases are only relations with attributes that are not primary keys.",
      "Relational database is the relationship between rows and columns in a data table."
    ],
    answer: 0,
    explanation: "Mệnh đề WHERE lọc dữ liệu trước khi gom nhóm, không thể sử dụng trực tiếp các hàm tổng hợp như SUM, COUNT trong WHERE (phải dùng HAVING)."
  },
  {
    id: 72,
    question: "Which of the following best describes an entity in an ERD (Entity-Relationship Diagram)?",
    options: [
      "A table with rows and columns",
      "A real-world object or concept with attributes",
      "A set of rows, columns, and constraints",
      "D. A table with rows, columns, and domain constraints"
    ],
    answer: 0,
    explanation: "Từ khóa DISTINCT loại bỏ các bản ghi trùng lặp trong tập kết quả trả về của câu lệnh SELECT."
  },
  {
    id: 73,
    question: "In ER modeling, what does a weak entity require in order to be uniquely identified?",
    options: [
      "A surrogate key",
      "A composite attribute with a identity constraint",
      "A relationship with an identifying entity",
      "A multi-valued attribute"
    ],
    answer: 2,
    explanation: "Phép nối tự nhiên (NATURAL JOIN) tự động kết hợp các dòng từ hai bảng dựa trên tất cả các cột có cùng tên và cùng kiểu dữ liệu giữa hai bảng."
  },
  {
    id: 74,
    question: "What is a derived attribute in an ERD?",
    options: [
      "An attribute that is calculated from other attributes",
      "An attribute that cannot be calculated",
      "An attribute that is the primary key of an entity",
      "An attribute that represents a relationship"
    ],
    answer: 0,
    explanation: "LEFT OUTER JOIN giữ lại toàn bộ các dòng từ bảng bên trái; các cột của bảng bên phải không khớp điều kiện sẽ nhận giá trị NULL."
  },
  {
    id: 75,
    question: "How are composite attributes represented in the relational model?",
    options: [
      "As individual attributes in the related tables",
      "By creating a new table for each composite attribute",
      "By using a single attribute in the related tables",
      "By using a composite key in the related tables"
    ],
    answer: 0,
    explanation: "RIGHT OUTER JOIN giữ lại toàn bộ các dòng từ bảng bên phải; các cột của bảng bên trái không khớp sẽ nhận giá trị NULL."
  },
  {
    id: 76,
    question: "What does the ON UPDATE CASCADE option do in SQL Server when defined for a foreign key constraint?",
    options: [
      "Automatically updates the foreign key value when the referenced primary key is updated",
      "Automatically deletes the foreign key row when the referenced rovv' is updated",
      "Prevents the update of foreign key values",
      "Sets the foreign key value to NULL when the referenced primary key is updated"
    ],
    answer: 0,
    explanation: "FULL OUTER JOIN kết hợp kết quả của cả LEFT JOIN và RIGHT JOIN, giữ lại toàn bộ các dòng từ cả hai bảng."
  },
  {
    id: 77,
    question: "Which of the following wildcard characters matches any sequence of zero or more characters in a string comparison in SQL (LIKE clause)?",
    options: [
      "_",
      "%",
      "*",
      "?"
    ],
    answer: 1,
    explanation: "Trong SQL, ký tự đại diện '%' khớp với chuỗi gồm 0 hoặc nhiều ký tự bất kỳ trong mệnh đề so sánh LIKE."
  },
  {
    id: 78,
    question: "Which of the following date functions is correct in SQL Server to extract the year part?",
    options: [
      "SELECT DATEPART(year, '2024-01-10');",
      "SELECT DATEPART('2024-01-10', year);",
      "SELECT PARTDATE(year, '2024-01-10');",
      "SELECT GETDATE(year, '2024-01-10');"
    ],
    answer: 0,
    explanation: "Hàm DATEPART(datepart, date) trong SQL Server: Tham số đầu tiên là phần ngày cần lấy (year, month, day) và tham số thứ hai là giá trị ngày tháng."
  },
  {
    id: 79,
    question: "What does the following SQL query return? SELECT name FROM Products WHERE price > 100;",
    options: [
      "All product names with price less than 100",
      "All product names regardless of price",
      "Product names with price greater than 100",
      "Syntax error"
    ],
    answer: 2,
    explanation: "Hàm DATEDIFF(datepart, startdate, enddate) trả về khoảng chênh lệch thời gian giữa hai mốc ngày tháng."
  },
  {
    id: 80,
    question: "",
    options: [
      "must always be composed of 0.•.'0 or more columns.",
      "can only be one column.",
      "identifies a row.",
      "D. identifies a column."
    ],
    answer: 2,
    explanation: "Hàm COUNT(*) đếm tổng số dòng trong bảng (bao gồm cả dòng có chứa giá trị NULL)."
  },
  {
    id: 81,
    question: "Given a relation: R(A,B,C,D) with the key is A, the foreign key is D And the query : \"select A, count(D) from R group by D\" What is the output of the query?",
    options: [
      "It will return all rows from the R table",
      "It returns only the A column where the value in D column is grouped",
      "This query will cause an error in standard SQL",
      "There is no GROUP BY with a HAVING clause-"
    ],
    answer: 2,
    explanation: "Mệnh đề GROUP BY gom các dòng có cùng giá trị trong các cột được chỉ định lại với nhau để thực hiện các phép tính tổng hợp."
  },
  {
    id: 82,
    question: "Which of the following SQL statements returns all rows from Cars where year is greater than 2019?",
    options: [
      "SELECT * FROM Cars WHERE year > 2019;",
      "SELECT * FROM Cars HAVING year > 2019;",
      "SELECT * FROM Cars WHEN year > 2019;",
      "SELECT * FROM Cars WHERE year = 2019;"
    ],
    answer: 0,
    explanation: "Cú pháp chuẩn để lọc các bản ghi có năm sản xuất lớn hơn 2019: SELECT * FROM Cars WHERE year > 2019;"
  },
  {
    id: 83,
    question: "Which of the following statements is false regarding SQL Correlated sub-queries?",
    options: [
      "A correlated subquery is not evaluated once for each row processed by the parent statement.",
      "Correlated subqueries are used for row-by-row processing.",
      "Each subquery is executed once for every row of the outer query.",
      "Subqueries always process the innermost query first and the work outward."
    ],
    answer: 0,
    explanation: "Câu lệnh INSERT INTO dùng để thêm một hoặc nhiều dòng dữ liệu mới vào bảng quan hệ."
  },
  {
    id: 84,
    question: "Which SQL statement will correctly update the salary of all employees by 10% where job title is 'Manager'?",
    options: [
      "UPDATE Employees SET salary = salary * 1.1 WHERE job = 'Manager';",
      "UPDATE Employees WHERE job = 'Manager' SET salary = salary * 1.1;",
      "UPDATE Employees SET salary + 1.1 WHERE job = 'Manager';",
      "MODIFY Employees SET salary = salary * 1.1 WHERE job = 'Manager';"
    ],
    answer: 0,
    explanation: "Cú pháp chuẩn để cập nhật lương tăng 10%: UPDATE Employees SET salary = salary * 1.1 WHERE job = 'Manager';"
  },
  {
    id: 85,
    question: "Which SQL command is used to create a non-clustered index on the EmployeeName column in the Employees table?",
    options: [
      "CREATE INDEX EmployeeName_lndex ON Employees(EmployeeName);",
      "CREATE NONCLUSTERED INDEX EmployeeName_lndex ON Employees(EmployeeName);",
      "CREATE PRIMARY KEY INDEX EmployeeName_lndex ON Employees(EmployeeName);",
      "CREATE CLUSTERED INDEX EmployeeName Index ON Employees(EmployeeName);"
    ],
    answer: 0,
    explanation: "Câu lệnh DELETE FROM tableName WHERE condition; xóa các dòng thỏa mãn điều kiện lọc mà không xóa cấu trúc của bảng."
  },
  {
    id: 86,
    question: "What is not the purpose of the index in MS-SQL Server?",
    options: [
      "To use less hardware resources",
      "TO enhance the query performance",
      "To provide an index to a record",
      "TO perform fast in searching"
    ],
    answer: 0,
    explanation: "Khung nhìn (VIEW) là một bảng ảo (Virtual Table) dựa trên tập kết quả của một câu truy vấn SQL, không lưu trữ dữ liệu vật lý riêng biệt."
  },
  {
    id: 87,
    question: "In which objects can Transaction be used?",
    options: [
      "View, User-defined function",
      "User-defined function, Store Procedure",
      "Store Procedure, Trigger, View",
      "D. User-defined function, Store Procedure, Trigger E. All of the mentioned answers are wrong"
    ],
    answer: 0,
    explanation: "Lợi ích của VIEW bao gồm: Bảo mật dữ liệu (ẩn các cột nhạy cảm), đơn giản hóa truy vấn phức tạp và đảm bảo tính độc lập dữ liệu."
  },
  {
    id: 88,
    question: "What are the ACID properties of DBMS Transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Atomicity, Consistency, Interpolate, Database",
      "Atomicity, Consistency, Inconsistent, Durability",
      "Automatic, Concurrent, Inconsistent, Deadlock-freedom"
    ],
    answer: 0,
    explanation: "Mức độ cô lập Read Committed chỉ cho phép đọc dữ liệu đã được commit bởi các giao dịch khác, ngăn chặn Dirty Read."
  },
  {
    id: 89,
    question: "What's the default behavior if autocommit is ON?",
    options: [
      "Manual COMMIT needed",
      "Every command is saved",
      "No command is saved",
      "D. only SELECT works"
    ],
    answer: 0,
    explanation: "Giao dịch (Transaction) là một chuỗi các thao tác cơ sở dữ liệu được thực hiện như một đơn vị công việc duy nhất tuân thủ tính nguyên tử (Atomicity)."
  },
  {
    id: 90,
    question: "Which one of the follov'ing is not true for a view'?",
    options: [
      "View never contains derived columns.",
      "A view definition is permanently stored as part Of the database.",
      "View is a virtual table.",
      "Vlew is derived from other tables."
    ],
    answer: 0,
    explanation: "Lệnh ROLLBACK hoàn tác tất cả các thay đổi do giao dịch thực hiện kể từ thời điểm bắt đầu giao dịch hoặc từ điểm lưu (Savepoint)."
  },
  {
    id: 91,
    question: "How can you pass parameters to a stored procedure?",
    options: [
      "Using @parameter_name = value",
      "Using value",
      "using :parameter_name = value",
      "Using param_name value"
    ],
    answer: 0,
    explanation: "Lệnh COMMIT xác nhận lưu vĩnh viễn tất cả các thay đổi của giao dịch vào cơ sở dữ liệu."
  },
  {
    id: 92,
    question: "Suppose we have defined VIEW ParamountMovies from the Movies table. When we execute the command: DROP TABLE Movies; Which of the following statements is correct?",
    options: [
      "The Movies table goes away, but VIEW ParamountMovies can still be used.",
      "The Movies table goes away and VIEW ParamountMovies cannot be used.",
      "The Movies table cannot be dropped because VIEW ParamountMovies still references it.",
      "The Movies table cannot be dropped, but VIEW ParamountMovies is dropped."
    ],
    answer: 1,
    explanation: "Khi xóa bảng gốc bằng lệnh DROP TABLE, khung nhìn (VIEW) phụ thuộc vào bảng đó sẽ mất nguồn dữ liệu và không thể tiếp tục sử dụng được."
  },
  {
    id: 93,
    question: "Which command is used to remove a relation (table) completely from an SQL database?",
    options: [
      "DROP TABLE",
      "DELETE TABLE",
      "PURGE TABLE",
      "REMOVE TABLE"
    ],
    answer: 0,
    explanation: "Lệnh DROP TABLE xóa hoàn toàn định nghĩa bảng, toàn bộ dữ liệu, chỉ mục và trigger liên quan khỏi cơ sở dữ liệu."
  },
  {
    id: 94,
    question: "When is it recommended to use a cursor in SQL?",
    options: [
      "Always, as cursors are the most efficient way to process data",
      "When processing data row by row is necessary or unavoidable",
      "Only when creating complex joins between tables",
      "Never, as set-based operations are always more efficient"
    ],
    answer: 0,
    explanation: "Khi cần xử lý từng dòng dữ liệu tuần tự theo logic nghiệp vụ phức tạp mà câu lệnh set-based SQL không thể xử lý trực tiếp, ta sử dụng CURSOR."
  },
  {
    id: 95,
    question: "What makes stored procedures faster than sending a Transact-SQL statement to SQL Server?",
    options: [
      "They are not faster.",
      "The query plan is compiled and cached on the server _",
      "The Transact-SQL statements are shorter.",
      "D. There are less commands available, so parsing time is shorter."
    ],
    answer: 0,
    explanation: "Stored Procedure thực thi nhanh hơn câu lệnh SQL thô vì nó đã được biên dịch và tối ưu hóa trước, đồng thời kế hoạch thực thi (Execution Plan) được lưu trong bộ nhớ đệm (Cache)."
  },
  {
    id: 96,
    question: "Which of the following is not a typical trigger action ?",
    options: [
      "Insert",
      "Select",
      "Update",
      "Delete"
    ],
    answer: 0,
    explanation: "Trigger trong CSDL thường được kích hoạt tự động sau hoặc thay thế cho các thao tác DML (INSERT, UPDATE, DELETE). SELECT không phải là sự kiện kích hoạt trigger thông thường."
  },
  {
    id: 97,
    question: "Which of the following best describes Atomicity in transactions?",
    options: [
      "Transactions rum in parallel",
      "Transactions are executed step by step",
      "All operations in a transaction succeed or none are applied",
      "Data is stored permanently"
    ],
    answer: 2,
    explanation: "Tính nguyên tử (Atomicity) trong ACID đảm bảo rằng một giao dịch hoặc là được thực hiện trọn vẹn thành công tất cả các bước, hoặc là không có bước nào được thực hiện (All or Nothing)."
  },
  {
    id: 98,
    question: "What is a NULL constraint?",
    options: [
      "A constraint that allows only NULL values",
      "A constraint that prevents NULL values in a column.",
      "A constraint that sets default values to NULL",
      "D. A constraint that converts NULL values to a specific data type."
    ],
    answer: 0,
    explanation: "Ràng buộc NOT NULL đảm bảo rằng cột không được phép chứa giá trị rỗng (NULL), bắt buộc phải có giá trị khi thêm hoặc cập nhật bản ghi."
  },
  {
    id: 99,
    question: "What is the main difference between DELETE and TRUNCATE in SQL?",
    options: [
      "DELETE cannot be rolled back, while TRUNCATE can.",
      "TRUNCATE deletes all data in a table faster and logs minimally (DDL), while DELETE can delete specific rows based on WHERE condition (DML).",
      "DELETE is for tables, while TRUNCATE is only for Views.",
      "There is no difference between DELETE and TRUNCATE."
    ],
    answer: 1,
    explanation: "TRUNCATE xóa toàn bộ dữ liệu trong bảng nhanh hơn và ghi ít log hơn (thao tác DDL), trong khi DELETE có thể xóa theo điều kiện WHERE và ghi log từng dòng (thao tác DML)."
  },
  {
    id: 100,
    question: "Which data model introduced the concept of tables with ro•ws and columns?",
    options: [
      "Hierarchical Model",
      "Network Model",
      "Object-Oriented Model",
      "Relational Model"
    ],
    answer: 3,
    explanation: "Mô hình quan hệ (Relational model) do E.F. Codd đề xuất đã đưa ra khái niệm tổ chức dữ liệu dưới dạng các bảng gồm các hàng (rows/tuples) và các cột (columns/attributes)."
  },
  {
    id: 101,
    question: "Choose a right answer.",
    options: [
      "A SQL environment is the framework under which data may exist and SQL operations on data may be executed",
      "All of the others",
      "Within a SQL environment are two special kinds of processes: SQL clients and SQL servers.",
      "A SQL environment is a DBMS running at some installation."
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"All of the others\"."
  },
  {
    id: 102,
    question: "Schema-altering commands are known as......commands.",
    options: [
      "Data Manipulation Language",
      "Data Controlling Language",
      "Data Definition Language",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "DDL (Data Definition Language) là ngôn ngữ định nghĩa dữ liệu, bao gồm các lệnh thay đổi cấu trúc bảng và lược đồ CSDL như CREATE, ALTER, DROP, TRUNCATE."
  },
  {
    id: 103,
    question: "Referential integrity Constraints control relationships between _.",
    options: [
      "operations of an object",
      "tables in a database",
      "attributes in a table",
      "database instances"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"tables in a database\"."
  },
  {
    id: 104,
    question: "Choose the right statement below to declare zero or one occurrence of an Element in DTD.",
    options: [
      "<\"ELEMENT element-name (childname?)>",
      "<IELEMENT element-name (child-name+)>",
      "<'ELEMENT element-name (child-name*)>",
      "<IELEMENT element-name (child-name)>"
    ],
    answer: 0,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 105,
    question: "Given the relation Employee(SSN. FNAME. LNAME. SALARY). Select the right query below to find the employee(s) who has the lowest salary in the company",
    options: [
      "SELECT LNAME. FNAME. SALARY FROM Employee WHERE SALARY IN (SELECT MIN(SALARY) FROM Employee)",
      "SELECT LNAME. FNAME. SALARY FROM Employee WHERE SALARY >= ALL (SELECT SALARY FROM Employee)",
      "SELECT LNAME. FNAME. SALARY FROM Employee WHERE SALARY < MAX (SELECT SALARY FROM Employee)",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Để tìm nhân viên có mức lương thấp nhất, sử dụng truy vấn con kết hợp toán tử IN: WHERE SALARY IN (SELECT MIN(SALARY) FROM Employee)."
  },
  {
    id: 106,
    question: "Given a relation R(A.B.C.D). Which of the followings is trivial?",
    options: [
      "A->BCD",
      "A->->BCD",
      "A->AB",
      "A->->AB"
    ],
    answer: 1,
    explanation: "Phụ thuộc hàm / đa trị tầm thường (Trivial): X → Y là tầm thường khi Y ⊆ X; A →→ BCD là tầm thường khi BCD chứa trong tập thuộc tính hoặc bao hàm toàn bộ quan hệ."
  },
  {
    id: 107,
    question: "Which of the following is NOT a standard aggregation operator?",
    options: [
      "SUM",
      "AVG",
      "GROUP",
      "COUNT"
    ],
    answer: 2,
    explanation: "Các hàm tổng hợp chuẩn trong SQL bao gồm: SUM, AVG, COUNT, MIN, MAX. GROUP là mệnh đề gom nhóm (GROUP BY), không phải là hàm tổng hợp."
  },
  {
    id: 108,
    question: "Select the well-formed XML",
    options: [
      "All of the others",
      "<? xml version = \"1.0\" ?>",
      "<? xml version - \"1 0' ?>",
      "<? xml version = 1 0 7>"
    ],
    answer: 1,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 109,
    question: "Which of the followings is true?",
    options: [
      "The Entity Relationship (ER) model represents the structure of data graphically",
      "The ER model is a low level database design IC]The ER model represents the operation on data",
      "All of the others"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"The Entity Relationship (ER) model represents the structure of data graphically\"."
  },
  {
    id: 110,
    question: "In the three-tier architecture, the database tier's function is to",
    options: [
      "All of the others.",
      "Execute the business logic of the organization operating the database.",
      "Manage the interactions with the user.",
      "Execute queries that are requested from the application tier."
    ],
    answer: 3,
    explanation: "Trong kiến trúc 3 tầng (3-tier), Database tier chịu trách nhiệm thực thi các câu truy vấn và quản lý lưu trữ dữ liệu theo yêu cầu từ Application tier."
  },
  {
    id: 111,
    question: "Choose a right answer",
    options: [
      "When a privilege is granted, it cannot be revoked",
      "Privileges cannot be granted on a view",
      "An authorization ID may be granted privileges from others or may grve its privileges to others",
      "All of the others"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"An authorization ID may be granted privileges from others or may grve its privileges to others\"."
  },
  {
    id: 112,
    question: "Which of the followings is part of data model?",
    options: [
      "Operations on the data",
      "Constraints on the data",
      "All of the others |",
      "Structure of the data"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"All of the others |\"."
  },
  {
    id: 113,
    question: "Exception handler in PSM is defined as follows: DECLARE <where to go next> HANDLER FOR condition list> <statement> The <where to go next> clause can be:",
    options: [
      "UNDO",
      "EXIT",
      "All of the others",
      "CONTINUE"
    ],
    answer: 2,
    explanation: "Trong SQL/PSM, Exception Handler có thể khai báo các hành động tiếp theo như UNDO, EXIT hoặc CONTINUE khi gặp biệt lệ."
  },
  {
    id: 114,
    question: "In SQL language, the command/statement that let you add an attribute to a relation is_",
    options: [
      "Alter",
      "None of the othersss",
      "Insert",
      "Update"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Alter\"."
  },
  {
    id: 115,
    question: "Choose the right statement",
    options: [
      "All of the others.",
      "The syntax to remove a trigger is. DROP TRIGGER<trigger_name>",
      "Use ALTER TRIGGER to change the definition of a trigger",
      "You can remove a trigger by dropping it or by dropping the trigger table."
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"All of the others.\"."
  },
  {
    id: 116,
    question: "Consider the Dalalog rule H(xy) <- Sfx. y) AND x > 2 AND y < 6. Relation S(x y) has 3 tuples (2.3). (3.5). and (4.6). What is about H?",
    options: [
      "H has a tuple (2.3)",
      "H has 3 tuples (2.3) and (3.5) and (4.6)",
      "H has 2 tuples (2.3) and (3.5)",
      "*H has a tuple (3.5)"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"*H has a tuple (3.5)\"."
  },
  {
    id: 117,
    question: "Select the valid query to declare the foreign key presC# of the relation Studiolname. address. presC#) that references the cert of the relation MovieExeclname. address. cert#. netWorth):",
    options: [
      "All of the others.",
      "CREATE TABLE Studio (name CHAR(30) PRIMARY KEY. address VARCHAR(256). presC# INT FOREIGN KEY):",
      "CREATE TABLE Studio (name CHAR(30) PRIMARY KEY. address VARCHAR(256). presC# INT UNIQUE KEY REFERENCES MovieExec):",
      "CREATE TABLE Studio (name CHAR(30) PRIMARY KEY. address VARCHAR(256). presC# INT REFERENCES Movie Exec (cert#));"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"CREATE TABLE Studio (name CHAR(30) PRIMARY KEY. address VARCHAR(256). presC# INT REFERENCES Movie Exec (cert#));\"."
  },
  {
    id: 118,
    question: "Choose the right statement",
    options: [
      "XML Schema allows us to declare simple types, such as integer or float and even complex types",
      "All of the others",
      "XML schema provides us the ability to declare keys and foreign keys.",
      "XML Schema is an alternative way to provide a schema for XML documents."
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"All of the others\"."
  },
  {
    id: 119,
    question: "The relational operator that yields all possible pairs of rows from two tables is known as a _",
    options: [
      "Union",
      "Selection",
      "Product",
      "Join"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Product\"."
  },
  {
    id: 120,
    question: "Consider a relation with schema R(A, B, CD) and FD's BC-> D, D-> A, A-> B. Which of the following is the key of R?",
    options: [
      "BD",
      "D",
      "AB",
      "BC"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"BC\"."
  },
  {
    id: 121,
    question: "The ER Diagram uses three principle element types:",
    options: [
      "Entity sets. Constraints, and Relationships",
      "Entity sets. Attributes and Constraints IC]Attributes. Constraints, and Relationships",
      "Entity sets. Attributes, and Relationships"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 122,
    question: "In PSM. the difference between 3 stored procedure and a function is that",
    options: [
      "A function has the return statement.",
      "We can declare local variables in a function.",
      "All of the others",
      "Loops are not allowed in a function."
    ],
    answer: 2,
    explanation: "Trong SQL/PSM, Exception Handler có thể khai báo các hành động tiếp theo như UNDO, EXIT hoặc CONTINUE khi gặp biệt lệ."
  },
  {
    id: 123,
    question: "Selecl Ihe right syntax for HAVING clause in SQL",
    options: [
      "SELECT <list of attributes> FROM <list of tables> WHERE <conditions on tuples> HAVING <conditions on groups> GROUP BY <list of attributes>",
      "SELECT <list of attributes> FROM <list of tables> WHERE <conditions on tuples> GROUP BY <list of attributes> HAVING <conditions on groups>",
      "SELECT < list of attributes> FROM < list of tables> HAVING <conditions on groups> WHERE <conditions on tuples> GROUP BY <list of attributes>",
      "All of the others"
    ],
    answer: 1,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 124,
    question: "Given relations R(A.B) and S(B.C.D). The result of natural join of the relations R and S has",
    options: [
      "Only two attributes R B and SB",
      "None of the othersss",
      "Only attribute B",
      "Attributes A B. C. D"
    ],
    answer: 3,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: 'Attributes A B. C. D'."
  },
  {
    id: 125,
    question: "Select the right answer.",
    options: [
      "All of the others",
      "Tags in XML are text surrounded by triangular brackets (for example, <_>).",
      "An XML tag can be a single tag with no matching closing tag (for example. <foo />",
      "Tags in XML comes in matching pairs, with an opening tag like <foo> and a matched closing tag like</foo>"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"All of the others\"."
  },
  {
    id: 126,
    question: "Given relation U(A, B, C) that has 2 tuples (1,2,3) and (4,5,6), and relation V(B(C, D) that has 2 tuples (2,3,10) and (2,3,11). Choose the right answer below;",
    options: [
      "None of the othersss.",
      "The outer join of U and V is the relation R(A, B, C, D) that has 2 tuples (1.2, 3.10) and (1,2,3,11).",
      "The outer join of U and V is the relation R(A. B. C. D) that has 3 tuples (1.2.3.10) .(1.2.3.11) and(4.5.6. NULL).",
      "The outer join of U and V is the relation R(A. B. C. D) that has only 1 tuple (NULL. 4.5.6)"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"The outer join of U and V is the relation R(A. B. C. D) that has 3 tuples (1.2.3.10) .(1.2.3.11) and(4.5.6. NULL).\"."
  },
  {
    id: 127,
    question: "Data Definition language (DDL) is used to _",
    options: [
      "declare database schemas",
      "connect to database and query database",
      "query database and modify the database",
      "All of the others"
    ],
    answer: 0,
    explanation: "DDL (Data Definition Language) là ngôn ngữ định nghĩa dữ liệu, bao gồm các lệnh thay đổi cấu trúc bảng và lược đồ CSDL như CREATE, ALTER, DROP, TRUNCATE."
  },
  {
    id: 128,
    question: "The result of (UNKNOWN OR TRUE) is",
    options: [
      "UNKNOWN",
      "FALSE",
      "TRUE",
      "NULL"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"TRUE\"."
  },
  {
    id: 129,
    question: "In Java Database Connectivity (JDBC). before we can execute SQL statements), we need to _",
    options: [
      "Create a cursor.",
      "Create an environment",
      "Create a description.",
      "Establish a connection to the database and create statement(s)"
    ],
    answer: 3,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Establish a connection to the database and create statement(s)'."
  },
  {
    id: 130,
    question: "Choose the right answer",
    options: [
      "A User-Defined Type (UDT) in SQL can be the type of a table",
      "A UDT can be the type of an attribute belonging to some table",
      "The form of UDT definition is: CREATE TYPE T AS (<primitive type | attribute declarations>)",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 131,
    question: "Choose a right answer",
    options: [
      "The object-relational model is the extension of the relation model with new features such as structured types, methods, identifiers for tuples, and references",
      "Object-relation model allows a non-atomic type that can be a relation schema which is called nested relation",
      "In object-relational model, the type of an attribute can be a reference to a tuple with a given schema or a set of references to tuples with a given schema",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 132,
    question: "Which of following is never used as a data model'",
    options: [
      "Hierarchical data model",
      "Relational data model",
      "Tree-based data model",
      "Graph-based data model |[E]None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Hierarchical data model\"."
  },
  {
    id: 133,
    question: "Select the right statement to declare MovieStar to be a relation whose tuples are of type StarType. Note; StarType is a user-defined type that has its definition as follows; CREATE TYPE StarType AS ( nameCHAR(30). address CHAR(IOO) };",
    options: [
      "CREATE TABLE MovieStar (name StarType). PICREATE TABLE MovieStar (name StarType PRIMARY KEY);",
      "CREATE TABLE MovieStar OF StarType Q;",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"None of the otherss\"."
  },
  {
    id: 134,
    question: "Suppose an updatable view ParamountMovies is associated with Movies relation. Choose a nght answer",
    options: [
      "Drop Movies relation also delete the view ParamountMovies",
      "Drop ParamountMovies also delete Movies IC]An update on ParamountMovies is translated into Movies",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Drop Movies relation also delete the view ParamountMovies\"."
  },
  {
    id: 135,
    question: "Which of the following statements is true?",
    options: [
      "I3NF implies BCNF",
      "Multi-valued Dependency (MVD) implies Fourth Normal form (4NF)",
      "4NF implies BCNF and BCNF implies 3NF",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"4NF implies BCNF and BCNF implies 3NF\"."
  },
  {
    id: 136,
    question: "The binary relationship between classes in UML is called -",
    options: [
      "Relation",
      "Association",
      "Aggregation",
      "Composition"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Association\"."
  },
  {
    id: 137,
    question: "Choose the right statement",
    options: [
      "Sub-queries return a single constant this constant can be compared with another value in a WHERE clause;",
      "Sub-queries return relations, that can be used in WHERE clause",
      "Sub-queries can appear in FROM clauses, followed by a tuple variable",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 138,
    question: "Which of the following statements is true?",
    options: [
      "in BCNF condition, the left side of every non trivial FD must be a super key.",
      "All of the others",
      "Any two-attribute relation is in BCNF",
      "BCNF condition guarantees the anomalies do not exist"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"All of the others\"."
  },
  {
    id: 139,
    question: "Given the relation Movies(title, year, length, genre. studioName). Select the right query to create a View with the titles and studio names of all movies that were produced in 1980",
    options: [
      "CREATE VIEW OldMovies SELECT title. studioName FROM Movies WHERE year-1980",
      "CREATE VIEW OldMovies SELECT title, year FROM Movies WHERE year=1980",
      "CREATE VIEW OldMovies AS SELECT title. studioName FROM Movies WHERE year=1980",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"CREATE VIEW OldMovies AS SELECT title. studioName FROM Movies WHERE year=1980\"."
  },
  {
    id: 140,
    question: "Given the relation Employee(SSN. FNAME. LNAME. SALARY. DepartmentNo). Select the right query below to count the number of employees in each department",
    options: [
      "SELECT COUNTf) FROM Employee",
      "SELECT DepartmentNo. COUNT(*) FROM Employee GROUP BY DepartmentNo",
      "SELECT DepartmentNo. COUNT(*) FROM Employee",
      "None of the othersss"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"SELECT DepartmentNo. COUNT(*) FROM Employee GROUP BY DepartmentNo\"."
  },
  {
    id: 141,
    question: "Consider a relation with schema R(A, B. C. D) and FD's A-> B. A-> C. C -> D. Which ofthe following is the {A}+ ?",
    options: [
      "{A}",
      "{A B C D}",
      "{A. B. C}",
      "{A.B}"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"{A B C D}\"."
  },
  {
    id: 142,
    question: "To create a constraint (for example, referential integrity constraint) on a relation, the owner ofthe schema must have",
    options: [
      "UNDER privilege",
      "REFERENCES privilege",
      "UPDATE privilege",
      "EXECUTE privilege"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"REFERENCES privilege\"."
  },
  {
    id: 143,
    question: "Choose a wrong answer.",
    options: [
      "Relational algebra can express recursion.",
      "Basic relational algebra can be expressed in Datalog rule(s).",
      "Single Datalog rule can be expressed in relational algebra.",
      "Datalog does not support bag operations"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Relational algebra can express recursion.\"."
  },
  {
    id: 144,
    question: "In DTD. the main difference between PCDATA and CDATA is",
    options: [
      "PCDATA is text that will be parsed by a parser and tags inside the text will be treated as markup and entities will be expanded CDATA is text that will NOT be parsed by a parser and tags inside the text wil NOT be treated as markup and entities will not be expanded.",
      "All of the others.",
      "CDATA is used to assert something about the allowable content of elements where as PCDATA is used as a common type for attribute",
      "There's no difference between PCDATA and CDATA"
    ],
    answer: 0,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 145,
    question: "_______authorizes access to database, coordinate, monitor its use, acquiring software, and hardware resources.",
    options: [
      "All of the others",
      "Database administrator",
      "Database designer",
      "Database end-user"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Database administrator'."
  },
  {
    id: 146,
    question: "The key for a weak entity set E is_",
    options: [
      "Zero or more attributes of E and key attributes from supporting entity sets",
      "The set of attributes of supporting relationships for E IC]The set of attributes of supporting entity sets",
      "Zero or more attributes of E"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 147,
    question: "Choose right answer(s).",
    options: [
      "NULL value is unknown, inapplicable, or withheld",
      "Comparisons with NULL values will return UNKNOWN",
      "Arithmetic operators on NULL values will return a NULL value",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 148,
    question: "Choose the right statement",
    options: [
      "The action associated with the trigger executes no matter what the condition is hold or not",
      "Triggering events do not support INSERT and DELETE.",
      "All of the others.",
      "When the trigger is awakened, it tests a condition. If the condition is satisfied, the action associated with the trigger is executed"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"When the trigger is awakened, it tests a condition. If the condition is satisfied, the action associated with the trigger is executed\"."
  },
  {
    id: 149,
    question: "Four characteristics of transactions are",
    options: [
      "None of the othersss",
      "Read uncommitted, Read committed, Repeatable read, Serializable",
      "Atomicity. Isolation. Concurrency. Durability",
      "Atomicity. Isolation. Consistency. Durability"
    ],
    answer: 3,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 150,
    question: "Select the right answer",
    options: [
      "An index is a data structure used to speed access to tuples of a relation, given values of one or more attributes",
      "The key for index can be any attribute or set of attributes, and need not be the key ofthe relation",
      "We can think of the indexas a binary search tree of (key, locations) pairs in which a key a is associated with a set of locations of the tuples",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 151,
    question: "Choose the right statement to grant the INSERT and SELECT privileges on table Movies to users torn' and jerry'",
    options: [
      "GRANT SELECT. INSERT on Movies",
      "GRANT SELECT. INSERT on Movies TO torn, jerry CASCADE",
      "GRANT SELECT. INSERT on Movies TO torn, jerry WITH GRANT OPTION",
      "GRANT SELECT. INSERT on Movies TO ALL"
    ],
    answer: 2,
    explanation: "Trong quản trị CSDL, quyền (Privileges) được cấp phát thông qua lệnh GRANT và có thể được thu hồi bằng lệnh REVOKE."
  },
  {
    id: 152,
    question: "When declaring foreign key constraint for relation A thai references relation B. the referenced attribute(s) of the relation B must be declare as_______",
    options: [
      "UNIQUE or PRIMARY KEY",
      "FOREIGN KEY",
      "INDEX KEY",
      "All of the others"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"UNIQUE or PRIMARY KEY\"."
  },
  {
    id: 153,
    question: "Choose an incorrect statement",
    options: [
      "None of the othersss",
      "Database is created and maintained by a DMBS IC]Database is a collection of information that exists over a long opened of time",
      "Database is a collection of data that is managed by a DBMS"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"None of the otherss\"."
  },
  {
    id: 154,
    question: "Select the right statement",
    options: [
      "All of the others",
      "Every constraint has a name. If we don't define constraint's name explicitly, then DBMS automatically generates a name for it",
      "We can create constraint on a tuple as a whole.",
      "We can create constraint on a single attribute"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"All of the others\"."
  },
  {
    id: 155,
    question: "A class in UML is similar to___",
    options: [
      "A Relationship in E/R model",
      "An attribute in E/R model",
      "An entity set in E/R model",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"An entity set in E/R model\"."
  },
  {
    id: 156,
    question: "Given relations Movies(title, year, length, genre. studioName. producer#). MovieExec(name. address. cert#). and Studio(name. address. presC#). Suppose we have the materialized view that finds the name - ofthe producer of a given movie as follows: CREATE MATERIALIZED VIEW MovieProd AS SELECT title, year, name FROM Movies. MovieExec WHERE producer# - cert# Which of the following modification will affect the MovieProd materialized view?",
    options: [
      "Insert a new tuple into Studio",
      "Delete a tuple from Studio",
      "Insert a new tuple into Movies or delete a tuple from Movies",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Insert a new tuple into Movies or delete a tuple from Movies\"."
  },
  {
    id: 157,
    question: "In relational data model, an attribute is a column",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"True\"."
  },
  {
    id: 158,
    question: "A data model is a notation for describing data or information. And the description generally consist of:",
    options: [
      "2 parts",
      "3 parts",
      "4 parts",
      "5 parts"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"3 parts\"."
  },
  {
    id: 159,
    question: "DBMS stands for what?",
    options: [
      "Database Managing Systems",
      "Database Management System",
      "Database Manage System",
      "Database Managable System"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Database Management System'."
  },
  {
    id: 160,
    question: "Look at this line: MOVIES (Id, Name, Description) What the above represent?",
    options: [
      "A relation",
      "A schema",
      "A schema instance",
      "A relation instance"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"A schema\"."
  },
  {
    id: 161,
    question: "Look at the following data for table R: A B C 1 1 2 1 1 2 1 1 3 Choose all correct answers",
    options: [
      "R is not a relation",
      "R is a relation",
      "R has no key",
      ""
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"R is a relation\"."
  },
  {
    id: 162,
    question: "Choose all correct statements:",
    options: [
      "Relation instance is current set of rows for a relation schema",
      "Relation instance is current list of rows for a relation schema",
      "Column headers = attributes.",
      "Relational Data Model is a model that match the way we think about our data"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Relation instance is current set of rows for a relation schema\"."
  },
  {
    id: 163,
    question: "Choose 3 important data models that we will study in database course",
    options: [
      "Flat File System",
      "Network Data Model",
      "Hierachical Data Model",
      "Relational Data Model",
      "Object - Relational Data Model",
      "Object Oriented Data Model"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Network Data Model'."
  },
  {
    id: 164,
    question: "In relational data model, a tuple is a record or a row",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"True\"."
  },
  {
    id: 165,
    question: "When the Relational Data Model first proposed?",
    options: [
      "1940",
      "1950",
      "1960",
      "1970"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"1970\"."
  },
  {
    id: 166,
    question: "What is the oldest data model?",
    options: [
      "Network Data Model",
      "Flat File Data Model",
      "Relational Data Model",
      "Hierachical Data Model"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Network Data Model\"."
  },
  {
    id: 167,
    question: "How many data models mentioned in our database course?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: '6'."
  },
  {
    id: 168,
    question: "XML files are semi-structured data",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 169,
    question: "A relation is a list of tuples",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"False\"."
  },
  {
    id: 170,
    question: "A relation is a set of tuples",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"True\"."
  },
  {
    id: 171,
    question: "What is the father of relational data model?",
    options: [
      "Charles Bachman",
      "Adgar Codd"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Adgar Codd\"."
  },
  {
    id: 172,
    question: "Give the relation R(XYZT) with the following FD's: XY -> Z ; XYT -> Z ; XYZ -> T ; XZ -> T Determine the primary key for R and then choose the correct statement",
    options: [
      "R is in BCNF",
      "R is not in BCNF"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"R is not in BCNF\"."
  },
  {
    id: 173,
    question: "A weak entity:",
    options: [
      "must have total participation in an identifying relationship",
      "does not have a key attribute(s)",
      "both (a) and (b)",
      "none of the above"
    ],
    answer: 2,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 174,
    question: "Given the relation schema R(XYZT) and functional dependencies F = {X->Z, T->Y}. Which functional dependency causes a violation of second normal form (2NF) ?",
    options: [
      "X->Z",
      "T->Y",
      "both X->Z and T->Y",
      "none of the above"
    ],
    answer: 2,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: 'both X->Z and T->Y'."
  },
  {
    id: 175,
    question: "The highest normal form for relation schema R(XYZ) with functional dependencies: F = {XY-> Z; Y->X; Z->Y } is:",
    options: [
      "2NF",
      "BCNF",
      "1NF",
      "3NF"
    ],
    answer: 3,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: '3NF'."
  },
  {
    id: 176,
    question: "Give the relation R(EFGH) with the following FD's: E -> F ; F -> E ; E -> H ; H -> F Determine the keys for R and then choose the correct statement",
    options: [
      "R is not in 3NF",
      "R is in 3NF"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"R is in 3NF\"."
  },
  {
    id: 177,
    question: "Give the relation R(ABCDE) with the following FD's: D -> C, CE-> A, D ->A, and AE ->D indicating which of the following attribute set is a key?",
    options: [
      "ABCDE",
      "CDE",
      "ABE",
      "BD"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"ABE\"."
  },
  {
    id: 178,
    question: "Which of the following relations is in Third normal form (3NF)?",
    options: [
      "R(ABCD) with FD's: AB -> C ; ABD -> C ; ABC -> D ; AC -> D",
      "R(ABCD) with FD's: ACD -> B ; AC -> D ; D -> C ; AC -> B",
      "R(ABCD) with FD's: AB -> C ; BCD -> A ; D -> A ; B -> C"
    ],
    answer: 1,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: 'R(ABCD) with FD's: ACD -> B ; AC -> D ; D -> C ; AC -> B'."
  },
  {
    id: 179,
    question: "Let R(ABCDEFGH) satisfies the following functional dependencies: A -> B, CH -> A, B -> E, BD -> C, EG -> H, DE -> F. Which of the following FD's is also guaranteed to be satisfied by R?",
    options: [
      "ADG -> CH",
      "ACG -> DH",
      "CGH -> BF",
      "BCD -> FH"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"ADG -> CH\"."
  },
  {
    id: 180,
    question: "Which of the following statements are correct? (choose 2)",
    options: [
      "All relations with only two attributes are in BCNF",
      "For any relation schema, there is a dependency-preserving decomposition into 3NF",
      "All relations in 3NF are also in BCNF"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"All relations with only two attributes are in BCNF\"."
  },
  {
    id: 181,
    question: "Which of the following relations is in Boyce-Codd Normal Form (BCNF)?",
    options: [
      "R(ABCD) with FD's: BC -> A ; AD -> C ; CD -> B ; BD -> C",
      "R(ABCD) with FD's: BD -> C ; AB -> D ; AC -> B ; BD -> A",
      "R(ABCD) with FD's: C -> B ; BC -> A ; A -> C ; BD -> A"
    ],
    answer: 1,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: 'R(ABCD) with FD's: BD -> C ; AB -> D ; AC -> B ; BD -> A'."
  },
  {
    id: 182,
    question: "How many design principles are there in our course when drawing an ERD?",
    options: [
      "7",
      "6",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 183,
    question: "Which of the following are guidelines for designing the relational schema ?",
    options: [
      "Reduce the redundant values in tuples",
      "Reduce the NULL values in tuples",
      "All of the above"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"All of the above\"."
  },
  {
    id: 184,
    question: "Choose the correct statements: When draw an ERD (choose 2):",
    options: [
      "We should picking the right kind of element",
      "When an entity has no non-primary key attribute, we should convert that entity to an attribute",
      "Always use weak entities",
      "Always make redundancies"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 185,
    question: "Given relation scheme R = (XYZTV) and functional dependencies: {XY -> ZTV and X -> V}. So, we can say that:",
    options: [
      "X is a key for R",
      "YV is a key for R",
      "XY is a key for R",
      "none of the above"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"XY is a key for R\"."
  },
  {
    id: 186,
    question: "Consider a relation R(A,B,C,D,E) with functional dependencies: AB->C, B->D, and C->E. What is/are the key(s) for R (maybe you must choose 1 or more):",
    options: [
      "AC",
      "AD",
      "AB",
      "CD",
      "DE"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"AB\"."
  },
  {
    id: 187,
    question: "The ER model means that:",
    options: [
      "replace relational design",
      "be close to a users perception of the data",
      "enable low level descriptions of data",
      "enable detailed descriptions of data query processing"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"be close to a users perception of the data\"."
  },
  {
    id: 188,
    question: "Consider the following statement: \"When drawing ERD, you should avoid saying something in many different ways' That above statement describes which principle?",
    options: [
      "Simplicity Count Principle",
      "Limit the use of weak entity sets principle",
      "Avoid Redundancy Principle",
      "Faithfulness principle"
    ],
    answer: 2,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 189,
    question: "Consider the following statement: \"Entity Sets and their attributes should reflect the reality\" That above statement describes which principle?",
    options: [
      "Limit the use of weak entity sets principle",
      "Simplicity Count Principle",
      "Avoid Redundancy Principle",
      "Faithfulness principle"
    ],
    answer: 3,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 190,
    question: "When draw an ERD (choose 3):",
    options: [
      "Choosing the right relation-ships",
      "Avoid introducing more elements into the design than is absolutely necessary",
      "Entity sets and their attributes should reflect reality",
      "Redundancy is not important, so we can ignore it"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 191,
    question: "Given the relation schema R(MNPQ) with FDs: {MN->P; MN->Q; PQ->M; PQ->N}. Which is the highest normal form for R?",
    options: [
      "2NF",
      "3NF",
      "BCNF",
      "NF"
    ],
    answer: 1,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: '3NF'."
  },
  {
    id: 192,
    question: "The functional dependency A -> B for relation schema R(A,B.C,D) implies that",
    options: [
      "no two tuples in R can have the same value for attribute B",
      "No two tuples in R can have the same value for attribute A",
      "any two tuples in R that have the same value for B must have the same value for A",
      "Any two tuples in R that have the same value for A must have the same value for B"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"Any two tuples in R that have the same value for A must have the same value for B\"."
  },
  {
    id: 193,
    question: "How many primitive relational algebra operators are there in our course?",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"6\"."
  },
  {
    id: 194,
    question: "Suppose relation R(A.B) has the tuples: A B 1 2 3 4 5 6 7 8 and the relation S(B.C.D) has tuples: B C D 2 4 6 4 6 8 5 5 5 4 7 9 Compute the Left - oouterjoin of R and S. where the condition is: R.B = SB. Then identify all the tuples of R that are not appear in the computed result",
    options: [
      "(1.2)",
      "(3.4)",
      "(5.6)",
      "(7.8)",
      "None of the above"
    ],
    answer: 4,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: 'None of the above'."
  },
  {
    id: 195,
    question: "Consider the following statement \"When drawing ERD. you should avoid introducing more elements into your design than necessary\" That above statement describes which principle?",
    options: [
      "Limit the use of weak entity sets principle",
      "Faithfulness principle",
      "Avoid Redundancy Principle",
      "Simplicity Count Principle"
    ],
    answer: 3,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 196,
    question: "Suppose relation R(A.B) has the tuples: A B 1 2 3 4 5 6 and the relation S(B.C.D) has tuples: B C D 2 4 6 4 6 8 4 7 9 Compute the natural join of R and S. Then, identify which of the following tuples is/are in the natural joinR|><| S. You may assume each output tuple has schema (A.B.C.D)",
    options: [
      "(3.4.6.8)",
      "(12.4.6)",
      "(1.4.6.8)",
      "(1.2.6.8)"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '(3.4.6.8)'."
  },
  {
    id: 197,
    question: "Suppose relation R(A.B) has the tuples: B C D 2 4 6 4 6 8 4 7 9 A B 1 2 3 4 5 6 and the relation S(B.C.D) has tuples: Compute the join of R and S with the condition: R.A < S.C AND R.B < S D Then, identify from the list below all the tuples in the computed result (assume the schema of the result is (A. R.B. S.B. C. D)):",
    options: [
      "(1.2.2.6.8)",
      "(5.62.4.6) (C](1.2.4.6.8)",
      "(1.2.2.4.6)"
    ],
    answer: 2,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '(1.2.2.4.6)'."
  },
  {
    id: 198,
    question: "Suppose relation R(A.B) has the tuples: A B 1 2 3 4 5 6 7 8 and the relation S(B.C.D) has tuples: B C D 2 4 6 4 6 8 5 5 5 4 7 9 Compute the right - outerjoin of R and S. where the condition is: R.B = S.B. Then identify all the tuples of R that are not appear in the computed result",
    options: [
      "(5.6)",
      "(1.2)",
      "(7.8)",
      "(3.4)"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '(5.6)'."
  },
  {
    id: 199,
    question: "Consider the following statement \"When drawing ERD. if an entity has no non-key attribute and it is the \"one\" in many-one relationship, then we should set r! to the attribute of other entities\" That above statement describes which principle?",
    options: [
      "Picking the right kind of element principle",
      "Faithfulness principle",
      "Limit the use of weak entity sets principle",
      "Simplicity Count Principle",
      "Avoid Redundancy Principle"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 200,
    question: "The LEN function in SQL Server is:",
    options: [
      "Not a scalar function",
      "A scalar function"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"A scalar function\"."
  },
  {
    id: 201,
    question: "What is the meaning of the LEN function in SQL Server?",
    options: [
      "The LEN function returns the total number of bytes used to store a string",
      "The LEN function returns the total number of characters of a string"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"The LEN function returns the total number of characters of a string\"."
  },
  {
    id: 202,
    question: "How to remove all trailing blanks?",
    options: [
      "We can use the RTRIM function",
      "We can use the LTRIM function"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"We can use the RTRIM function\"."
  },
  {
    id: 203,
    question: "The following is the syntax for the DATEDIFF function: DATEDIFF ( datepart, startdate , enddate ) The datepart parameter specifies on which part (day, month, year) of the date to calculate the difference",
    options: [
      "FALSE",
      "TRUE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"TRUE\"."
  },
  {
    id: 204,
    question: "How to remove all leading blanks?",
    options: [
      "We can use the RTRIM function",
      "We can use the LTRIM function"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"We can use the LTRIM function\"."
  },
  {
    id: 205,
    question: "What is the meaning of the ISNULL function?",
    options: [
      "The ISNULL function replaces NULL with the ZERO value.",
      "The ISNULL function replaces NULL with the BLANK value",
      "The ISNULL function replaces NULL with the specified replacement value."
    ],
    answer: 1,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 206,
    question: "Which of the following is in-correct?",
    options: [
      "SELECT datepart(dd, 'l-jan-09')",
      "SELECT datepart(d, 'l-jan-09')",
      "SELECT datepart('1-jan-09', day)",
      "SELECT datepart(day, 'l-jan-09')"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"SELECT datepart('1-jan-09', day)\"."
  },
  {
    id: 207,
    question: "How to convert a number to a string? (choose all possible)",
    options: [
      "We can use the CONVERT function",
      "We can use the CAST function",
      "We can use the STR function"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"We can use the CONVERT function\"."
  },
  {
    id: 208,
    question: "What is the meaning of the DATEADD function?",
    options: [
      "The DATEADD function adds some years to a date you specify",
      "The DATEADD function adds some months to a date you specify",
      "The DATEADD function adds an interval to a date you specify",
      "The DATEADD function adds some days to a date you specify"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"The DATEADD function adds an interval to a date you specify\"."
  },
  {
    id: 209,
    question: "The CASE function is used to Evaluates a list of conditions and returns one of multiple possible result expressions",
    options: [
      "FALSE",
      "TRUE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"TRUE\"."
  },
  {
    id: 210,
    question: "In SQL Server, an index is an on-disk structure associated with a table or view that speeds up retrieval of rows from the table or view",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 211,
    question: "Clustered index is not a good choice for the columns that undergo frequent changes",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 212,
    question: "A table or view must have a clustered indexe and some non-clustered indexes",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 1,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 213,
    question: "SQL Server typically selects the most efficient method when executing queries. However, if no indexes are available. SQL Server must use a full table scan",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 214,
    question: "How many clustered index we can create in a table?",
    options: [
      "1",
      "2",
      "3",
      "4",
      ""
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 215,
    question: "Indexes can be helpful for a variety of queries that contain SELECT, UPDATE, or DELETE statements",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 216,
    question: "In SQL Server, indexes are automatically created when PRIMARY KEY and UNIQUE constraints are defined on table columns",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 217,
    question: "In reality, an incorrect index choice can cause less than optimal performance",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 218,
    question: "You should define the clustered index key with as few columns as possible",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 219,
    question: "Choose the incorrect statement",
    options: [
      "Clustered indexes sort and store the data rows in the table based on their key values",
      "Non-Clustered indexes sort and store the data rows in the table based on their key values",
      "None of the above"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Non-Clustered indexes sort and store the data rows in the table based on their key values\"."
  },
  {
    id: 220,
    question: "An index contains keys built from one or more columns in the table or view. These keys are stored in a structure (B-tree) that enables SQL Server to find the row or rows associated with the key values quickly and efficiently",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 221,
    question: "When performing a table scan, the query optimizer reads all the rows in the table, and extracts the rows that meet the criteria of the query. A table scan generates any disk I/O operations and can be resource -intensive",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"FALSE\"."
  },
  {
    id: 222,
    question: "Choose the correct statement",
    options: [
      "Clustered indexes son and store the data rows in the table based on their key values",
      "Non-Clustered indexes sort and store the data rows in the table based on their key values",
      "Both of the above"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Clustered indexes son and store the data rows in the table based on their key values\"."
  },
  {
    id: 223,
    question: "Well-designed indexes can reduce disk I/O operations and consume fewer system resources, therefore it improves query performance",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 224,
    question: "Choose all the correct statements about indexes",
    options: [
      "The selection of the right indexes for a database and its workload is a complex balancing act between query speed and update cost",
      "Designing efficient indexes is paramount to achieving good database and application performance",
      "Poorly designed indexes and a lack of indexes are primary sources of database application bottlenecks."
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 225,
    question: "We should use which function to get the number of rows affected by the last statement",
    options: [
      "@@IDENTITY",
      "@@ROWCOUNT",
      "@@ERROR",
      "@@NEWID"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"@@IDENTITY\"."
  },
  {
    id: 226,
    question: "How to write a good performance SQL query?",
    options: [
      "Always use \"SELECT *\"",
      "Always try to avoid using \"SELECT *\""
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Always try to avoid using \"SELECT *\"\"."
  },
  {
    id: 227,
    question: "Choose the correct answer",
    options: [
      "Normalize the database to 3NF",
      "Avoid database designs that move data from table to table in a transactional manner",
      "None of the above",
      "All of the above"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Normalize the database to 3NF\"."
  },
  {
    id: 228,
    question: "Choose all the thing that we should do with SQL Server",
    options: [
      "Use the tools",
      "Use cursors as much as possible",
      "Use \"SELECT for every SELECT statement",
      "Create an index on the \"SEX\" column"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Use the tools\"."
  },
  {
    id: 229,
    question: "We should use which function to get the last-inserted identity value.",
    options: [
      "@@IDENTITY",
      "@@ROWCOUNT",
      "@@ERROR",
      "@@NEWID"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 230,
    question: "A Database is called having good performance if",
    options: [
      "The Database runs fast",
      "The response time is very small",
      "None of the above"
    ],
    answer: 2,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 231,
    question: "To improve the DB performance:",
    options: [
      "We should you the set-based queries and avoids procedural (row-by-row) queries",
      "We should you the row-based queries and avoids set-based queries"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"We should you the set-based queries and avoids procedural (row-by-row) queries\"."
  },
  {
    id: 232,
    question: "Regardless of what any other transaction is doing, a transaction must be able to continue with the exact same data£ sets it started with. The above describes which property of a transaction?",
    options: [
      "Isolation",
      "Consistency",
      "Atomic",
      "Durability"
    ],
    answer: 0,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 233,
    question: "Every row and value must agree with all constraints once the transaction is complete. The above describes which property of a transaction?",
    options: [
      "Durability",
      "Consistency",
      "Atomic",
      "Isolation"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 234,
    question: "The DB product must be constructed so that even if the data drive melts, the DB can be restored up to the last transaction that was committed a split second before the hard drive died The above describes which property of a transaction?",
    options: [
      "Isolation",
      "Consistency",
      "Durability",
      "Atomic"
    ],
    answer: 2,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 235,
    question: "Which is the most dangerous fault that can potentially affect the integrity of a transaction?",
    options: [
      "Non-repeatable reades",
      "Dirty Read",
      "Phantom rows"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 236,
    question: "How many properties we must use to measured the quality of a transaction?",
    options: [
      "5",
      "6",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 237,
    question: "Once a transaction is committed, it stays committed The above describes which property of a transaction?",
    options: [
      "Atomic",
      "Isolation",
      "Consistency",
      "Durability"
    ],
    answer: 3,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 238,
    question: "Please choose 3 properties of a lock in DBMS",
    options: [
      "Mode - the size of the lock",
      "Mode -the isolation mode of the lock",
      "Duration - the isolation mode of the lock",
      "Granularity - the type of the lock",
      "Mode - the type of the lock",
      "Granularity-the size of the lock"
    ],
    answer: 2,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Duration - the isolation mode of the lock'."
  },
  {
    id: 239,
    question: "Which is the least dangerous fault that can potentially affect the integrity of a transaction?",
    options: [
      "Phantom rows",
      "Dirty Read",
      "Non-repeatable reads"
    ],
    answer: 0,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 240,
    question: "Each transaction must be isolated or separated from the effects of other transaction The above describes which property of a transaction?",
    options: [
      "Durability",
      "Isolation",
      "Atomic",
      "Consistency"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 241,
    question: "At the end of the transaction, either all statements of the transaction is successful or all statements of the transaction fail. The above describes which property of a transaction?",
    options: [
      "Isolation",
      "Atomic",
      "Consistency",
      "Durability"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 242,
    question: "When sorting. Null values are treated as the lowest possible values",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 243,
    question: "Except for COUNT, aggregate functions ignore null values",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Các hàm tổng hợp chuẩn trong SQL bao gồm: SUM, AVG, COUNT, MIN, MAX. GROUP là mệnh đề gom nhóm (GROUP BY), không phải là hàm tổng hợp."
  },
  {
    id: 244,
    question: "How to returns a part of a character, binary, text or image? (For example: how to get the 'bcd' in 'abcdef' string)",
    options: [
      "Use the RIGHT function",
      "Use the LEFT function",
      "Use the LEN function",
      "Use the SUBSTRING function"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"Use the SUBSTRING function\"."
  },
  {
    id: 245,
    question: "The ORDER BY clause can not include items not appearing in the select list",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"TRUE\"."
  },
  {
    id: 246,
    question: "RANK() and ROW_NUMBER() are 2 ranking functions",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"TRUE\"."
  },
  {
    id: 247,
    question: "We can use the Aggregation in WHERE clause",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 1,
    explanation: "Các hàm tổng hợp chuẩn trong SQL bao gồm: SUM, AVG, COUNT, MIN, MAX. GROUP là mệnh đề gom nhóm (GROUP BY), không phải là hàm tổng hợp."
  },
  {
    id: 248,
    question: "How to get the information about the number of attempted connections, either successful or unsuccessful since SQL Server was last started",
    options: [
      "Use the @@ERROR",
      "Use the @@IDENTITY",
      "Use the @@VERSION",
      "Use the @@CONNECTIONS"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"Use the @@CONNECTIONS\"."
  },
  {
    id: 249,
    question: "A trigger is a special kind of stored procedure that automatically executes when an event occurs in the database server",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'TRUE'."
  },
  {
    id: 250,
    question: "The RANK() function returns the rank of each row within the partition of a result set",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"TRUE\"."
  },
  {
    id: 251,
    question: "|How to get the information about the version, processor architecture, build date, and operating system for the current installation of SQL Server",
    options: [
      "Usethe@@ERROR",
      "Usethe @@IDENTITY",
      "Usethe @@VERSION",
      "Usethe @@CONNECTIONS"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Usethe @@VERSION\"."
  },
  {
    id: 252,
    question: "When create stored procedures, the \"WITH ENCRYPTION\" option indicates that SQL Serverwill convert the original text of the CREATE PROCEDURE statement to an obfuscated format",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"TRUE\"."
  },
  {
    id: 253,
    question: "The maximum nested level of a Transact-SQL stored procedure is 64MB",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"FALSE\"."
  },
  {
    id: 254,
    question: "In SQL Server, we can use the ORDER BY clauses in sub-queries",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"FALSE\"."
  },
  {
    id: 255,
    question: "The maximum size of a Transact-SQL stored procedure is 256MB",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"TRUE\"."
  },
  {
    id: 256,
    question: "Choose the correct statement",
    options: [
      "Aggregate functions perform a calculation on a set of values and return a single value",
      "Except for COUNT, aggregate functions ignore null values",
      "Aggregate functions are frequently used with the GROUP BY clause of the SELECT statement",
      "All of the above"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the above\"."
  },
  {
    id: 257,
    question: "Choose a wrong answer.",
    options: [
      "Relational algebra can express recursion.",
      "Basic relational algebra can be expressed in Datalog rule(s). IC]Single Datalog rule can be expressed in relational algebra.",
      "Datalog does not support bag operations."
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Relational algebra can express recursion.\"."
  },
  {
    id: 258,
    question: "Select the right answer",
    options: [
      "Virtual views do not exist physically",
      "Virtual views are defined by an expression like a query",
      "Virtual views can be queried and can even be modified",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 259,
    question: "Suppose we have a relation with schema R(A. B. C. D. E. F. G. H) Ifwe issue a query of the form SELECT... FROM R WHERE... GROUP BYB.E. C. D HAVING ??? Identify, in the list below, the term that CAN NOT appear in the HAVING condition (represented by ??? in the above query).",
    options: [
      "COUNT(A)",
      "H",
      "SUM(H)",
      "B+E"
    ],
    answer: 1,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 260,
    question: "The ER model means that",
    options: [
      "enable detailed descriptions of data query processing",
      "replace relational design",
      "enable low level descriptions of data be close to",
      "be close to a perception of the data"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"be close to a perception of the data\"."
  },
  {
    id: 261,
    question: "A(an) asserts that a value appearing in one relation must also appear in the primary-key component(s) of another relation",
    options: [
      "Primary key constraint",
      "Foreign key constraint",
      "Unique key constraint",
      "Candidate key constraint"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Primary key constraint\"."
  },
  {
    id: 262,
    question: "FALSE AND NULL) return:",
    options: [
      "NULL",
      "TRUE",
      "FALSE",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 263,
    question: "What is a key attribute in a relation? *",
    options: [
      "A key attribute is an attribute that belongs to one of the keys of the relation",
      "A key attribute is an attribute that belongs to one of the super keys of the relation"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"A key attribute is an attribute that belongs to one of the keys of the relation\"."
  },
  {
    id: 264,
    question: "The most concert",
    options: [
      "The selection of the right indexes for a database and its workload is a complex balancing act between query speed and update cost",
      "Poorly designed indexes and a lack of indexes are primary sources of database application bottlenecks.",
      "Designing efficient indexes is paramount to achieve good database and application performance",
      "All of the others"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Designing efficient indexes is paramount to achieve good database and application performance\"."
  },
  {
    id: 265,
    question: "(FALSE OR NULL) return:",
    options: [
      "TRUE",
      "None of the othersss",
      "FALSE",
      "NULL"
    ],
    answer: 3,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 266,
    question: "Column A of a relation has the following list of values in the six rows of the table: * NULL. NULL. 10.10. 20. 20 After grouping by (A+10). the output has:",
    options: [
      "2 groups",
      "1 groups",
      "4 groups",
      "3 groups"
    ],
    answer: 3,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 267,
    question: "The structure of an XML document is similar to the ones used in (choose two):",
    options: [
      "Graph-based data model",
      "Relational data model",
      "Flat file data model",
      "Hierarchical data model"
    ],
    answer: 1,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 268,
    question: "When we multiply 0 with NULL, the result is:",
    options: [
      "TRUE",
      "FALSE",
      "0",
      "NULL"
    ],
    answer: 3,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 269,
    question: "A SQL statement cannot be executed without the appropriate to that statement",
    options: [
      "Privileges",
      "Domains",
      "Sessions",
      "Character Sets"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Privileges\"."
  },
  {
    id: 270,
    question: "The table Arc(x.y) currently has the following tuples (note that there are duplicates): (1.2). (1.2). (2.3). (3.4). (3.4). (4.1). (4.1). (4.1). (4.2). Compute the result of the query: SELECT a1.x. a2.y. COUNT(*) FROM Arc a1. Arc a2 WHERE a1.y = a2.x GROUP BY a1.x. a2.y; Which of the following tuples is in the result?",
    options: [
      "(2.4.6)",
      "(3.1.2)",
      "(3.1.6)",
      "(1.3.4)",
      "(3.2.6)"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"(3.1.2)\"."
  },
  {
    id: 271,
    question: "What is the difference between a \"where\" clause and a \"having\" clause?",
    options: [
      "HAVING applies to rows. WHERE applies to summarized (or aggregate) rows",
      "Having is just another part of WHERE clause, so there is no difference between WHERE and HAVING clauses",
      "WHERE applies to rows. HAVING applies to summarized (or aggregate) rows"
    ],
    answer: 2,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 272,
    question: "Consider the distributive law. that holds for set relations: * (R U S) - T = (R-T) U (S-T) A The above distributive law still hold for bag relations?",
    options: [
      "False",
      "True"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"True\"."
  },
  {
    id: 273,
    question: "How many properties we must use to measure the quality of a transaction? \\",
    options: [
      "6",
      "4",
      "3",
      "5"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 274,
    question: "Suppose relation R(a.b.c) has the following tuples: A B C 1 1 3 1 2 3 2 1 4 2 3 5 2 4 1 3 2 4 3 3 6 Which tuple is contained in the result of the following query: SELECT a. COUNT(DISTINCT B) FROM R GROUP BY a HAVING SUM(B) >3;",
    options: [
      "(2.10)",
      "(2.3)",
      "(3.7)",
      "(3.12)"
    ],
    answer: 1,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 275,
    question: "Suppose we have 2 relations R(A.B.C.D) and S(B.C.D.E) and B is the foreign key column in R and B is the primary key in S. [v] A This means that: when enter data into the column B in R. only values that belong to r|B(S) are permitted",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"TRUE\"."
  },
  {
    id: 276,
    question: "Suppose we have a relation R(MNPQ) with FD's: NQ -> P ; MN -> Q ; MP -> N ; NQ -> M What does the highest normal form that R belong?",
    options: [
      "2NF",
      "BCNF",
      "3NF",
      "1NF"
    ],
    answer: 1,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: 'BCNF'."
  },
  {
    id: 277,
    question: "(TRUE AND NULL) returns:",
    options: [
      "None of the othersss",
      "TRUE",
      "NULL",
      "FALSE"
    ],
    answer: 2,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 278,
    question: "The relation R(A.B) may have duplicate tuples. Choose the query that create non-duplicated results, regardless of what tuples R contains?",
    options: [
      "SELECT A. B FROM R",
      "SELECT A FROM R WHERE A NOT IN (SELECT B FROM R)",
      "SELECT TOP 3 A. B FROM R",
      "SELECT A. B FROM R GROUP BY A. B"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"SELECT A. B FROM R GROUP BY A. B\"."
  },
  {
    id: 279,
    question: "(TRUE OR NULL) return:",
    options: [
      "TRUE",
      "None of the othersss",
      "FALSE",
      "NULL"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 280,
    question: "Except for , aggregate functions ignore null values",
    options: [
      "MAX",
      "COUNT",
      "AVG",
      "MIN",
      "SUM"
    ],
    answer: 0,
    explanation: "Các hàm tổng hợp chuẩn trong SQL bao gồm: SUM, AVG, COUNT, MIN, MAX. GROUP là mệnh đề gom nhóm (GROUP BY), không phải là hàm tổng hợp."
  },
  {
    id: 281,
    question: "Today, in a modern DBMS, the queries are pars|ed and optimized by",
    options: [
      "query compiler",
      "all of the others",
      "execution engine",
      "buffer manager"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'all of the others'."
  },
  {
    id: 282,
    question: "What is an index?",
    options: [
      "An index is a data structure that makes it efficient to find tuples B",
      "None of the othersss",
      "An index is a special way to join 2 or more tables",
      "An index is the same as alias"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 283,
    question: "A database is a data structure that improves the speed of data retrieval operations on a database table at the cost of slower writes and increased storage space",
    options: [
      "Store Procedure",
      "Index",
      "View",
      "Trigger"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Index'."
  },
  {
    id: 284,
    question: "When sorting in SQL Server, Null values are treated as the lowest possible values.",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 285,
    question: "Suppose we have a relation R(MNPQ) with FD's: NP -> M ; MQ -> P ; PQ -> N ; NQ -> P",
    options: [
      "R is in BCNF",
      "R is not in BCNF"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"R is not in BCNF\"."
  },
  {
    id: 286,
    question: "A(an) asserts that a value appearing in one relation must also appear in the primary-key component(s) of another relationl",
    options: [
      "Primary key constraint",
      "Foreign key constraint",
      "Unique key constraint",
      "Candidate key constraint"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Unique key constraint\"."
  },
  {
    id: 287,
    question: "Choose a wrong answer.",
    options: [
      "Single Datalog rule can be expressed in relational algebra.",
      "Basic relational algebra can be expressed in Datalog rule(s).",
      "Relational algebra can express recursion.",
      "Datalog does not support bag operations."
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"Datalog does not support bag operations.\"."
  },
  {
    id: 288,
    question: "What SQL keyword can be used to return data from two non-related tables as a combined set of rows?",
    options: [
      "DISTINCT ALL",
      "DISTINCT",
      "UNION ALL",
      "COMBINED"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"UNION ALL\"."
  },
  {
    id: 289,
    question: "A database transaction, by definition, must be ACID (atomic, consistent isolated and durable). What does 'Consistent\" mean?",
    options: [
      "'Consistent' means that: Transactions provide an \"all-or-nothing\" proposition, stating that each work-unit performed in a database must either complete in its entirety or have no effect whatsoever",
      "'Consistent' means that: Transactions must not violate any integrity constraints during its execution"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 290,
    question: "In database design processes, data requirements are expressed through",
    options: [
      "Schema Design",
      "ERD",
      "UML",
      "Table Design",
      "(c) and (d)",
      "(b) and (c)",
      "(a) and (b)"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'ERD'."
  },
  {
    id: 291,
    question: "Consider the law. that holds for set relations: (R natural join S) natural join T = R natural join (S natural join T). Does the above law still hold for bag relations?",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: 'True'."
  },
  {
    id: 292,
    question: "Compute the union of the ABC 1 2 3 4 2 3 4 5 6 2 5 3 1 2 6 and relation S(A.B.C): A B C 2 5 3 2 5 4 4 5 6 1 2 3 Which of the following tuples DOES NOT appear in the result?",
    options: [
      "(1.2.3)",
      "(4.5.6)",
      "(1.5.4)",
      "(4.2.3)"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"(1.5.4)\"."
  },
  {
    id: 293,
    question: "The ER model can:",
    options: [
      "enable low level descriptions of data",
      "replace relational design",
      "enable detailed descriptions of data query processing",
      "be close to a users perception of the data"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"be close to a users perception of the data\"."
  },
  {
    id: 294,
    question: "The DBMS (Database Management System) is expected to:",
    options: [
      "Allow users to query the data",
      "Support the storage of very large amounts of data",
      "Allow users to create new databases and specify their schemas",
      "All of the others"
    ],
    answer: 3,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'All of the others'."
  },
  {
    id: 295,
    question: "What is an Entity Set?",
    options: [
      "It is a collection of entities of a particular entity type grouped together into an entity set",
      "It is a \"thing\" in the real world with an independent existence.",
      "None of the othersss",
      "It is a collection (set) of entities that have same attributes"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 296,
    question: "What is the degree of a Relation?",
    options: [
      "None of the othersss",
      "It Is the number of attributes of its relation schema",
      "It is the number of tuples of its relation schema"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"It Is the number of attributes of its relation schema\"."
  },
  {
    id: 297,
    question: "SELECT name FROM customers WHERE name LIKE '%Gate';. This query would yield an name for every customer whose name ends with \"Gate\". Suppose that the name column has been Indexed. Which of the following statements is correct?",
    options: [
      "None of the othersss",
      "The database does not perform a full table scan when executing the above SELECT statement",
      "The database must perform a full table scan when executing the above SELECT statement"
    ],
    answer: 2,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 298,
    question: "What type of key is used to BE REFERENCED by another table? (choose all possible)",
    options: [
      "Unique Key",
      "Foreign Key",
      "None of the othersss",
      "Primary Key"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Unique Key\"."
  },
  {
    id: 299,
    question: "If you don't specify ASC or DESC after a SQL ORDER BY clause, the following Is used by default:",
    options: [
      "All of the others",
      "DESC",
      "ASC",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"ASC\"."
  },
  {
    id: 300,
    question: "A XML involves a Document Type Definition that specifies the allowable tags and gives a grammar for how they may be nested",
    options: [
      "Well-formed",
      "All of the others",
      "Valid",
      "None of the otherss"
    ],
    answer: 0,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 301,
    question: "Which of the following statements is the most correct?",
    options: [
      "The selection of the right indexes for a database and its workload is a complex balancing act between query speed and update cost",
      "All of the others",
      "Designing efficient indexes is paramount to achieve good database and application performance",
      "Poorly designed indexes and a lack of indexes are primary sources of database application bottlenecks."
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"All of the others\"."
  },
  {
    id: 302,
    question: "Suppose we have 2 relations: R=(A,B,C,D) S = (B,C,D,E) When we can set B to be the foreign key of R?",
    options: [
      "When B is the primary key of S",
      "When B is the unique key of S",
      "All of the others"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"All of the others\"."
  },
  {
    id: 303,
    question: "SQL provides a statement to allow one user to give a privilege to another",
    options: [
      "GRANT",
      "REVOKE",
      "GIVE",
      "TAKE"
    ],
    answer: 0,
    explanation: "Trong quản trị CSDL, quyền (Privileges) được cấp phát thông qua lệnh GRANT và có thể được thu hồi bằng lệnh REVOKE."
  },
  {
    id: 304,
    question: "For what values of x, y, and z, including NULL, does the boolean expression x <= 3 OR NOT(y >= 1 AND z = 5) have the truth value FALSE? Identify one of those values from the list below",
    options: [
      "x= NULL, y = 3, z = 5.",
      "x = 4, y = 3, z = 5.",
      "x = 3, y = 1, z = 5.",
      "x= NULL, y = 2, z = 5."
    ],
    answer: 2,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 305,
    question: "What is an index?",
    options: [
      "An index is the same as alias",
      "None of the othersss",
      "An index is a data structure that makes it efficient to find tuples",
      "An index is a special way to join 2 or more tables"
    ],
    answer: 2,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 306,
    question: "The type denotes a fixed-length string of up to N-characters",
    options: [
      "VARCHAR(n)",
      "CHAR(n)",
      "NVARCHAR(n)",
      "All of the others"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"NVARCHAR(n)\"."
  },
  {
    id: 307,
    question: "Suppose relation R(A,B,C) has the tuples: A B C 1 2 3 1 2 3 4 5 6 2 5 3 1 2 6 and relation S(A,B,C) has the tuples: A B C 2 5 3 2 5 4 4 5 6 1 2 3 Compute the bag union R and S, and then indicate which of the following is true.",
    options: [
      "(1.2.3) appears twice in the result.",
      "(1.2.3) appears once in the result.",
      "(4.5.6) appears once in the result.",
      "(4.5.6) appears twice in the result."
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"(4.5.6) appears twice in the result.\"."
  },
  {
    id: 308,
    question: "Choose 3 correct statements.",
    options: [
      "Unique keys and primary keys can be used to uniquely identify a row in a table",
      "A relation can have only 1 primary key but can have many unique key",
      "Unique keys and primary keys can be referenced by foreign keys",
      "A relation can have only 1 unique key but can have many primary key"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Unique keys and primary keys can be used to uniquely identify a row in a table\"."
  },
  {
    id: 309,
    question: "Given a relation R(A,B,C,D) like this: A B C D 1 2 3 6 1 2 3 7 2 4 5 7 Please choose the in-correct functional dependencies:",
    options: [
      "None of the othersss",
      "B -> C",
      "B-> A",
      "B -> D"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"B -> D\"."
  },
  {
    id: 310,
    question: "Choose a wrong answer.",
    options: [
      "Datalog does not support bag operations.",
      "Basic relational algebra can be expressed in Datalog rule(s).",
      "Single Datalog rule can be expressed in relational algebra.",
      "Relational algebra can express recursion."
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"Relational algebra can express recursion.\"."
  },
  {
    id: 311,
    question: "A ____ is a logically coherent collection of data with some inherent meaning, representing some aspect of real world and being designed, built and populated with data for a specific purpose",
    options: [
      "Database",
      "Database Instance",
      "Schema",
      "Schema Instance"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Database\"."
  },
  {
    id: 312,
    question: "Choose the most correct statement.",
    options: [
      "Database is created and maintained by a DMBS",
      "All of the others",
      "Database is a collection of data that is managed by a DBMS",
      "Database is a collection of information that exists over a long period of time"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"All of the others\"."
  },
  {
    id: 313,
    question: "A ____ is a relation name, together with the attributes of that relation.",
    options: [
      "schema",
      "database",
      "database instance",
      "schema instance"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"schema\"."
  },
  {
    id: 314,
    question: "A ___ is a notation for describing the structure of the data in a database, along with the constraints on that data",
    options: [
      "data model",
      "database management system",
      "data operation",
      "data manipulation"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'data model'."
  },
  {
    id: 315,
    question: "A _____ is a language for defining data structures",
    options: [
      "DDL",
      "DML",
      "DCL",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"DDL\"."
  },
  {
    id: 316,
    question: "Which statement is used to remove a relation named R?",
    options: [
      "DROP TABLE R;",
      "REMOVE TABLE R;",
      "DELETE TABLE R;",
      "TRUNCATE TABLE R;"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"DROP TABLE R;\"."
  },
  {
    id: 317,
    question: "What is another term for a row in a relational table?",
    options: [
      "Attribute",
      "Tuple",
      "Field",
      "Relation"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Tuple\"."
  },
  {
    id: 318,
    question: "Let R(ABCD) be a relation with functional dependencies {A -> B, C -> B, B -> D} What is the key for R (choose one)",
    options: [
      "AB",
      "AC",
      "AD",
      "BD"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"AC\"."
  },
  {
    id: 319,
    question: "Suppose R is a relation with attributes A1, A2, A3, A4. The only key of R is {A1, A2}. So, how many super-keys do R have?",
    options: [
      "4",
      "8",
      "12",
      "16"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"4\"."
  },
  {
    id: 320,
    question: "Consider the following functional dependencies a,b -> c,d e,g,h -> f,j a,c -> b,d p,q -> r,s e,f,g -> h,i s -> t f,g -> j q -> u g,h -> i Which of the following best describes the relation R(e,f,g,h,i,j)?",
    options: [
      "R is in First Normal Form",
      "R is in Second Normal Form",
      "R is in Third Normal Form",
      "R is in Boyce Codd Normal Form"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"R is in First Normal Form\"."
  },
  {
    id: 321,
    question: "The relation R(ABCD) has following FDs: { A -> B ; B -> A ; A -> D ; D -> B }",
    options: [
      "R is in 3NF",
      "R is not in 3NF",
      "R is not in 2NF",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"R is in 3NF\"."
  },
  {
    id: 322,
    question: "Given a R(A,B,C,D) with the following FDs: AB->D BC->A AD->B CD->B AD->C Choose a correct statement about R:",
    options: [
      "The FD set of R is not canonical and R is in BCNF",
      "The FD set of R is canonical and R is not in BCNF",
      "The FD set of R is not canonical and R is not in BCNF"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"The FD set of R is not canonical and R is in BCNF\"."
  },
  {
    id: 323,
    question: "What is the difference between the 2NF and the 3NF?",
    options: [
      "2NF deals with partial functional dependency, while 3NF deals with transitive functional dependency",
      "2NF deals with transitive functional dependency, while 3NF deals with partial functional dependency"
    ],
    answer: 0,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: '2NF deals with partial functional dependency, while 3NF deals with transitive functional dependency'."
  },
  {
    id: 324,
    question: "What is \"de-normalization\"?",
    options: [
      "De-normalization means allowing redundancy in a table",
      "De-normalization means allowing duplicate columns appeared in a table",
      "De-normalization means allowing a table to have more than 3 columns",
      "De-normalization means allowing a table to have more than 1024 columns"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"De-normalization means allowing redundancy in a table\"."
  },
  {
    id: 325,
    question: "What is the benefit of \"de-normalization\"?",
    options: [
      "\"de-normalization\" has no benefit",
      "The main benefit of de-normalization is improved performance with simplified data retrieval (this is done by reduction in the number of joins needed for data processing)",
      "The main benefit of de-normalization is eliminating redundant information from a table and organizing the data so that future changes to the table are easier"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"The main benefit of de-normalization is improved performance with simplified data retrieval (this is done by reduction in the number of joins needed for data processing)\"."
  },
  {
    id: 326,
    question: "A class in UML is similar to...........",
    options: [
      "An entity set in E/R model",
      "An attribute in E/R model",
      "A Relationship in E/R model",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"An entity set in E/R model\"."
  },
  {
    id: 327,
    question: "A(n) _____ provides a means to analyze business requirements so as to standardize organizational vocabulary, enforce business rules, and ensure adequate data quality",
    options: [
      "Entity Relationship Diagram",
      "Relation Schema Design",
      "All of the others",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Entity Relationship Diagram\"."
  },
  {
    id: 328,
    question: "An association class in UML is similar to ______ in the ER model",
    options: [
      "attributes on a relationship",
      "Attributes",
      "Entities",
      "entity sets"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"attributes on a relationship\"."
  },
  {
    id: 329,
    question: "In UML, what is the difference between an aggregation and a composition?",
    options: [
      "In composition, when the owning object is destroyed, so are the contained objects. In aggregation, this is not necessarily true.",
      "In aggregation, when the owning object is destroyed, so are the contained objects. In composition, this is not necessarily true.",
      "All of the others",
      "There is no difference between an aggregation and a composition"
    ],
    answer: 0,
    explanation: "Các hàm tổng hợp chuẩn trong SQL bao gồm: SUM, AVG, COUNT, MIN, MAX. GROUP là mệnh đề gom nhóm (GROUP BY), không phải là hàm tổng hợp."
  },
  {
    id: 330,
    question: "Consider the law, that holds for set relations: T intersect(R union S) = (T intersect R) union (T intersect S) The above law still hold for bag relations?",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"False\"."
  },
  {
    id: 331,
    question: "Choose the correct statement:",
    options: [
      "Aggregate functions perform a calculation on a set of values and return a single value",
      "Aggregate functions perform a calculation on a single value and return a single value",
      "Aggregate functions perform a calculation on a set of values and return a relation",
      "Aggregate functions perform a calculation on a set of values and return a row"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Aggregate functions perform a calculation on a set of values and return a single value\"."
  },
  {
    id: 332,
    question: "Suppose the relation S(B,C,D) has tuples: B C D ------------------------------------ a 4 6 c 6 8 c 5 5 e 9 9 F 10 10 c 7 9 Compute the result of the following query: SELECT SUM(D) FROM S WHERE D < 8 AND D > 5 Choose the row that appears in the computed result.",
    options: [
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"6\"."
  },
  {
    id: 333,
    question: "Suppose the relation S(B,C,D) has tuples: B C D ----------------------------------- a 4 6 c 6 8 c 5 5 e 9 9 f 10 10 c 7 9 Compute the result of the following query: SELECT D, SUM(C) FROM S GROUP BY D Choose rows that are appear in the computed result",
    options: [
      "(9,12)",
      "(9,14)",
      "(9,16)",
      "(9,18)"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"(9,16)\"."
  },
  {
    id: 334,
    question: "Column A of a relation has the following list of values in the six rows of the table: NULL, NULL, 10, 10, 20, 30 In SQL Server, which of the following is the correct value of AVG(DISTINCT A)?",
    options: [
      "15",
      "NULL",
      "20",
      "10"
    ],
    answer: 2,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 335,
    question: "How we can understand about this statement: \"All aggregate functions are deterministic\"?",
    options: [
      "This means aggregate functions return the same value any time they are called by using a specific set of input values",
      "This means aggregate functions return the different values each time they are called by using a specific set of input values",
      "This means aggregate functions return the same value any time they are called by using any set of input values",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Các hàm tổng hợp chuẩn trong SQL bao gồm: SUM, AVG, COUNT, MIN, MAX. GROUP là mệnh đề gom nhóm (GROUP BY), không phải là hàm tổng hợp."
  },
  {
    id: 336,
    question: "When we apply set operators (UNION, INTERSECT, EXCEPT) to two relations R and S, which conditions on R and S must be satisfied?",
    options: [
      "R and S must have schemas with identical sets of attributes and the types (domains) for each attributes must be the same in R and S",
      "Before we compute the set-theoretic union, intersection, or difference of sets of tuples, the columns of R and S must be ordered so that the order of attributes is the same for both relations",
      "All of the others"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"All of the others\"."
  },
  {
    id: 337,
    question: "How many JOIN conditions are necessary to combine five tables based on common attributes?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '4'."
  },
  {
    id: 338,
    question: "Suppose relation R(A,B) has the tuples: A B ------------------- 10 x 30 y 50 z 70 t and the relation S(B,C,D) has tuples: B C D ------------------------------------ x 40 60 z 60 80 z 50 50 z 70 90 Compute the right outer join of R and S, where the condition is: R.B = S.B. Then identify 2 tuples of R that do not appear in the computed result.",
    options: [
      "(10,x)",
      "(30,y)",
      "(50,z)",
      "(70,t)"
    ],
    answer: 1,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '(30,y)'."
  },
  {
    id: 339,
    question: "For what values of x, y, and z, including NULL, does the Boolean expression x <= 4 OR NOT(y >= 2 AND z = 10) have the truth value FALSE? Identify one of those values from the list below",
    options: [
      "x = 5, y = 3, z = 10",
      "x = 3, y = 1, z = 10.",
      "x = NULL, y = 2, z = 10.",
      "x = NULL, y = 3, z = 10."
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 340,
    question: "What operator tests column for the absence of data?",
    options: [
      "IS BLANK operator",
      "IS ZERO operator",
      "IS NULL operator",
      "ISNULL operator"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"IS NULL operator\"."
  },
  {
    id: 341,
    question: "What does NULL mean?",
    options: [
      "The value NULL means UNKNOWN",
      "The value NULL means '' (empty string)",
      "The value NULL means ' ' (space character)",
      "The value NULL means ZERO"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 342,
    question: "What is the value of the query: SELECT 'Nancy' + NULL + 'Smith' when evaluated on Microsoft SQL Server?",
    options: [
      "'Nancy Smith'",
      "'Nancy'",
      "'NancySmith'",
      "NULL"
    ],
    answer: 3,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 343,
    question: "Which SQL keyword is used to sort the result-set?",
    options: [
      "ORDER BY",
      "SORT BY",
      "ORDER",
      "SORT"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"ORDER BY\"."
  },
  {
    id: 344,
    question: "Three properties of a lock in DBMS are:",
    options: [
      "Granularity: the size of the lock",
      "Granularity: the type of the lock",
      "Mode: the type of the lock",
      "Duration: the time in seconds that the DBMS waits for a lock to be released",
      "(a) and (c) and (d) are true",
      "(a) and (b) and (d) are true",
      "(b) and (c) and (d) are true",
      "(a) and (b) and (c) are true"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Granularity: the size of the lock'."
  },
  {
    id: 345,
    question: "A database transaction, by definition, must be ACID (atomic, consistent, isolated and durable). What does \"Durable\" mean?",
    options: [
      "\"Durable\" means that: Transactions provide an \"all-or-nothing\" proposition, stating that each work-unit performed in a database must either complete in its entirety or have no effect whatsoever",
      "\"Durable\" means that: Transactions must not violate any integrity constraints during its execution",
      "\"Durable\" means that: Transactions that have committed will survive permanently",
      "All of the others"
    ],
    answer: 2,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 346,
    question: "What is the difference between the WHERE and HAVING SQL clauses?",
    options: [
      "The WHERE and the HAVING clauses are identical",
      "The HAVING SQL clause condition(s) is applied to all rows in the result set before the WHERE clause is applied (if present). The WHERE clause is used only with SELECT SQL statements and specifies a search condition for an aggregate or a group",
      "The WHERE SQL clause condition(s) is applied to all rows in the result set before the HAVING clause is applied (if present). The HAVING clause is used only with SELECT SQL statements and specifies a search condition for an aggregate or a group",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 347,
    question: "Choose the correct statement.",
    options: [
      "You can remove a trigger by dropping it or by dropping the trigger table.",
      "The syntax to remove a trigger is: DROP TRIGGER <trigger_name>",
      "Use ALTER TRIGGER to change the definition of a trigger",
      "All of the others."
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others.\"."
  },
  {
    id: 348,
    question: "Suppose R and S are 2 relations. R is the parent of S. And the relationship between R and S is set to \"ON DELETE CASCADE\". This means that:",
    options: [
      "We can delete a row from R if that row has children in S (and in this case, the database server will raise up an error)",
      "We can delete a row from R although that row has children in S (and in this case, all the children will be deleted too)"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"We can delete a row from R although that row has children in S (and in this case, all the children will be deleted too)\"."
  },
  {
    id: 349,
    question: "To create a DEFAULT constraint on the \"City\" column of the table PERSON which is already created, use the following SQL:",
    options: [
      "ALTER TABLE Person ALTER COLUMN City SET DEFAULT 'SANDNES'",
      "ALTER TABLE Person EDIT COLUMN City SET DEFAULT 'SANDNES'",
      "ALTER TABLE Person UPDATE COLUMN City SET DEFAULT 'SANDNES'",
      "ALTER TABLE Person MODIFY COLUMN City SET DEFAULT 'SANDNES'"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"ALTER TABLE Person ALTER COLUMN City SET DEFAULT 'SANDNES'\"."
  },
  {
    id: 350,
    question: "Three basic types of database integrity constraints are:",
    options: [
      "Entity integrity",
      "Domain integrity",
      "Referential integrity",
      "Primary key integrity",
      "(a) and (b) and (c) are true",
      "(a) and (b) and (d) are true",
      "(a) and (c) and (d) are true",
      "(b) and (c) and (d) are true"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Entity integrity'."
  },
  {
    id: 351,
    question: "What is difference between PRIMARY KEY and UNIQUE KEY ?",
    options: [
      "A table can have more than one UNIQUE KEY constraint but only one PRIMARY KEY",
      "A table can have more than one PRIMARY KEY constraint but only one UNIQUE KEY",
      "UNIQUE KEY and PRIMARY KEY are the same",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"A table can have more than one UNIQUE KEY constraint but only one PRIMARY KEY\"."
  },
  {
    id: 352,
    question: "A/An _____ is a data structure that makes it efficient to find those tuples that have a fixed value for an attribute",
    options: [
      "Index",
      "Trigger",
      "stored-procedure",
      "View"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Index\"."
  },
  {
    id: 353,
    question: "Select the most correct answer",
    options: [
      "An index is a data structure used to speed access to tuples of a relation, given values of one or more attributes",
      "The key for index can be any attribute or set of attributes, and need not be the key of the relation",
      "We can think of the index as a binary search tree of (key, locations) pairs in which a key a is associated with a set of locations of the tuples",
      "All of the others."
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others.\"."
  },
  {
    id: 354,
    question: "___ allow the database application to find data fast, without reading the whole table",
    options: [
      "Indexes",
      "Views",
      "Triggers",
      "Store-procedures"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Indexes'."
  },
  {
    id: 355,
    question: "What are the drawbacks of indexes?",
    options: [
      "Indexes require more disk space",
      "Indexes make UPDATE, INSERT, DELETE statement slower",
      "Indexes have no any drawback",
      "Indexes make SELECT statement slower",
      "(a) and (b) are true",
      "(a) and (c) are true",
      "(b) and (c) are true",
      "(b) and (d) are true"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 356,
    question: "Well-designed ____ can reduce disk I/O operations and consume fewer system resources therefore improving query performance",
    options: [
      "Triggers",
      "Indexes",
      "Views",
      "Stored Procedures"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Indexes\"."
  },
  {
    id: 357,
    question: "The benefits of stored procedures are:",
    options: [
      "They improve the security by letting the admin to LIMIT the access rights of users",
      "They can save a lot of storage space",
      "They can be reused many times",
      "They can store a part of the database in order to retrieve the data more quickly",
      "(a) and (c) are true",
      "(a) and (b) are true",
      "(a) and (d) are true",
      "(b) and (d) are true"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"They improve the security by letting the admin to LIMIT the access rights of users\"."
  },
  {
    id: 358,
    question: "Select the right statement to declare MovieStar to be a relation whose tuples are of type StarType. Note: StarType is a user-defined type that has its definition as follows: CREATE TYPE StarType AS ( name CHAR(30), address CHAR(100) );",
    options: [
      "CREATE TABLE MovieStar (name StarType );",
      "CREATE TABLE MovieStar (name StarType PRIMARY KEY );",
      "CREATE TABLE MovieStar OF StarType ();",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"CREATE TABLE MovieStar OF StarType ();\"."
  },
  {
    id: 359,
    question: "A ____ table is a table that is embedded within another table",
    options: [
      "Nested",
      "Primitive",
      "Parent",
      "Child"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Nested\"."
  },
  {
    id: 360,
    question: "A database of _____ data model is a collection of nodes, each node is either a leaf or interior",
    options: [
      "semi-structured",
      "relational",
      "network",
      "object-relational"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'semi-structured'."
  },
  {
    id: 361,
    question: "Select the well-formed XML.",
    options: [
      "<? xml version = \"1.0\" ?>",
      "<? xml version = \"1.0\" ?>",
      "<? xml version = \"1.0\" ?>",
      "All of the others."
    ],
    answer: 0,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 362,
    question: "A _____ specifies which characters are \"less than\" which other characters",
    options: [
      "Domains",
      "Character set",
      "Collation",
      "Stored procedure"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Collation\"."
  },
  {
    id: 363,
    question: "A ____ is a powerful tool for creating and managing large amounts of data efficiently and allowing it to persist over long periods of time, safely",
    options: [
      "DBMS",
      "Database",
      "Excel",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"DBMS\"."
  },
  {
    id: 364,
    question: "What is the hierarchical data model?",
    options: [
      "A hierarchical data model is a data model in which the data is organized into a tree-like structure",
      "A hierarchical data model is a data model in which the data is organized into a table-like structure",
      "A hierarchical data model is a data model in which the data is organized into a graph-like structure",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"A hierarchical data model is a data model in which the data is organized into a tree-like structure\"."
  },
  {
    id: 365,
    question: "In _____ Data Model, the data and relations between them are organized in tables",
    options: [
      "Relational",
      "Network",
      "Flat-file",
      "Object-oriented",
      "Tree-based"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Relational\"."
  },
  {
    id: 366,
    question: "Why the intersection operator is not called a primitive relational algebra operator?",
    options: [
      "Because the intersection operator can be expressed through the union operator and the difference operator",
      "Because the intersection operator can be expressed through the selection operator and the projection operator",
      "Because the intersection operator can be expressed through the product operator and the projection operator",
      "Because the intersection operator can be expressed through the selection operator and the product operator"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Because the intersection operator can be expressed through the union operator and the difference operator\"."
  },
  {
    id: 367,
    question: "In SQL , the command/statement that let you add an attribute to a relation schema is .......",
    options: [
      "Insert",
      "Update",
      "Alter",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Alter\"."
  },
  {
    id: 368,
    question: "To update a relation's schema, which one of the following statements can be used?",
    options: [
      "ALTER TABLE",
      "SELECT",
      "INSERT",
      "UPDATE"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"ALTER TABLE\"."
  },
  {
    id: 369,
    question: "Which one of the following is NOT a DML command?",
    options: [
      "DELETE",
      "ALTER TABLE",
      "INSERT",
      "UPDATE"
    ],
    answer: 1,
    explanation: "DML (Data Manipulation Language) là ngôn ngữ thao tác dữ liệu, gồm các lệnh thao tác trên các hàng dữ liệu như SELECT, INSERT, UPDATE, DELETE."
  },
  {
    id: 370,
    question: "What is a functional dependency?",
    options: [
      "A functional dependency (A->B) occurs when the attribute A uniquely determines B",
      "A functional dependency (A->B) occurs when the attribute B uniquely determines A"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"A functional dependency (A->B) occurs when the attribute A uniquely determines B\"."
  },
  {
    id: 371,
    question: "3NFconcept is related to (choose 1 answer only):",
    options: [
      "Atomic definition",
      "Full dependency definition",
      "Transitive dependency definition",
      "Super Key definition",
      "All of the others"
    ],
    answer: 4,
    explanation: "Chuẩn hóa dữ liệu (Normalization) giúp loại bỏ dư thừa và bất thường dữ liệu. Đáp án đúng là: 'All of the others'."
  },
  {
    id: 372,
    question: "The relation R(ABCD) has following FDs: {ACD -> B ; AC -> D ; D -> C ; AC -> B} Choose the correct statement about R:",
    options: [
      "R is in 3NF",
      "R is in 2NF only, not higher",
      "R is in 1NF only, not higher",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"R is in 3NF\"."
  },
  {
    id: 373,
    question: "Let R(A,B,C,D) with the following FDs: {AB->C, AC->B, AD->C} Choose a correct statement about R:",
    options: [
      "R is in BCNF",
      "R is in 3NF",
      "R is in 2NF",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"R is in 2NF\"."
  },
  {
    id: 374,
    question: "Which of the following statements is correct?",
    options: [
      "All relations in 3NF are also in BCNF",
      "For any relation schema, there is a dependency-preserving decomposition into 3NF",
      "All relations in 2NF are also in BCNF"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"For any relation schema, there is a dependency-preserving decomposition into 3NF\"."
  },
  {
    id: 375,
    question: "Which of the following statements is true?",
    options: [
      "BCNF condition guarantees the non existence of the anomalies.",
      "In BCNF condition, the left side of every non trivial FD must be a super key.",
      "Any two-attribute relation is in BCNF.",
      "All of the others."
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others.\"."
  },
  {
    id: 376,
    question: "How to eliminate anomalies when we design a database?",
    options: [
      "We should decompose relation to eliminate anomalies",
      "We should join relations to eliminate anomalies",
      "We should union relations to eliminate anomalies",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'We should decompose relation to eliminate anomalies'."
  },
  {
    id: 377,
    question: "What is the goal of decomposition when designing a database?",
    options: [
      "The goal of decomposition is to replace a relation by several relations that do not exhibit anomalies",
      "The goal of decomposition is to increase the speed of the database",
      "The goal of decomposition is to increase the security of the database",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'The goal of decomposition is to replace a relation by several relations that do not exhibit anomalies'."
  },
  {
    id: 378,
    question: "Look at the following statements:",
    options: [
      "We should pick the right kind of elements",
      "When an entity has no non-primary key attribute, we should convert that entity to an attribute",
      "Use weak entities when-ever possible",
      "Always make redundancies",
      "(a) and (b) are correct",
      "(a) and (c) are correct",
      "(a) and (d) are correct",
      "(b) and (c) are correct"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"We should pick the right kind of elements\"."
  },
  {
    id: 379,
    question: "Consider the Datalog rule H(x,y) <- S(x, y) AND x > 2 AND y < 6. Relation S(x, y) has 3 tuples (2, 3), (3, 5), and (4, 6). What is about H?",
    options: [
      "H has a tuple (3, 5)",
      "H has a tuple (2, 3)",
      "H has 2 tuples (2, 3) and (3, 5)",
      "H has 3 tuples (2, 3) and (3, 5) and (4, 6)"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"H has a tuple (3, 5)\"."
  },
  {
    id: 380,
    question: "Suppose that tuple t appears, respectively, x, y, and z times in the relations X, Y, and Z. Let t appear w times in the relation: X union (Y intersect Z). Which of the following inequalities is true ?",
    options: [
      "w <= x+y",
      "w <= y+z",
      "w >= z",
      "w <= max(x,y)"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"w <= x+y\"."
  },
  {
    id: 381,
    question: "Suppose the relation S(B,C,D) has tuples: B C D ------------------------------------ a 4 6 c 6 8 c 5 5 e 9 9 F 10 10 c 7 9 Which one of the followings will appear in the result of the following query: SELECT B, SUM(C) FROM S GROUP BY B",
    options: [
      "(c,11)",
      "(c,13)",
      "(c,12)",
      "(c,18)"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"(c,18)\"."
  },
  {
    id: 382,
    question: "Suppose the relation S(B,C,D) has tuples: B C D ------------------------------------ a 4 6 c 6 8 c 5 5 e 9 9 f 10 10 c 7 9 What row that appears in the result of the following query: SELECT SUM(C), SUM(D) FROM S WHERE D < 9 AND D > 5",
    options: [
      "(10,11)",
      "(10,12)",
      "(10,13)",
      "(10,14)"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"(10,14)\"."
  },
  {
    id: 383,
    question: "Here are two relations, R(A,B), S(C,D). Their current values are: R A B ------------------- 1 4 2 5 8 6 4 7 S C D ------------------- 0 1 1 0 2 1 5 8 Compute the result of the query: SELECT A, B, C, D FROM R RIGHT OUTER JOIN S ON R.A = S.C Identify, in the list below, 2 rows that appears in the result.",
    options: [
      "(null, null, 0, 1)",
      "(null, null, 5, 8)",
      "(8, 6, null, null)",
      "(4, 7, null, null)"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '(null, null, 0, 1)'."
  },
  {
    id: 384,
    question: "Here are three relations, R(A,B), S(C,D). Their current values are: R A B ------------------- 1 4 2 5 3 6 4 7 S C D ------------------- 0 1 1 0 2 1 Compute the result of the query: SELECT A, B, C, D FROM R LEFT OUTER JOIN S ON R.A = S.C Identify, in the list below, the row that appears in the result.",
    options: [
      "(4, 7, null, null)",
      "(4, 7, 0, 1)",
      "(4, 7, 1, 0)",
      "(4, 7, 2, 1)"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: '(4, 7, null, null)'."
  },
  {
    id: 385,
    question: "A tuple which fails to participate in a join is called:",
    options: [
      "dangling tuple",
      "child tuple",
      "parent tuple",
      "neighbor tuple"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: 'dangling tuple'."
  },
  {
    id: 386,
    question: "(TRUE OR NULL) return:",
    options: [
      "TRUE",
      "FALSE",
      "NULL",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 387,
    question: "Choose one correct statement:",
    options: [
      "Two null values are equal",
      "Comparisons between two null values, or between a NULL and any other value, return unknown",
      "Comparisons between two null values, or between a NULL and any other value, return FALSE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"Comparisons between two null values, or between a NULL and any other value, return unknown\"."
  },
  {
    id: 388,
    question: "For what values of x, y, and z, including NULL, does the Boolean expression x <= 100 AND NOT(y >= 15 OR z = 35) have the truth value UNKNOWN? Identify one of those values from the list below.",
    options: [
      "x = NULL, y = 0, z = 4.",
      "x = -2, y = -2, z = -2.",
      "x = 3, y = 0, z = 7.",
      "x = 2, y = -1, z = 6."
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 389,
    question: "A database transaction, by definition, must be ACID (atomic, consistent, isolated and durable). What does \"Isolated\" mean?",
    options: [
      "\"Isolated\" means that: Transactions provide an \"all-or-nothing\" proposition, stating that each work-unit performed in a database must either complete in its entirety or have no effect whatsoever",
      "\"Isolated\" means that: Transactions must not violate any integrity constraints during its execution",
      "\"Isolated\" means that: Transactions that have committed will survive permanently",
      "\"Isolated\" means that: how/when the changes made by one operation in one transaction become visible to other concurrent operations in other transactions"
    ],
    answer: 3,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 390,
    question: "What one is a wildcard used for pattern matching?",
    options: [
      "\"%\" (for multi-character substitution)",
      "\"?\" (for single character substitution)",
      "\"?\" (for multi-character substitution)"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"\"%\" (for multi-character substitution)\"."
  },
  {
    id: 391,
    question: "Suppose we have a relation instance R(A,B,C) as following: R A B C ---------------------------------- 1 2 3 4 5 6 7 8 9 Which is the result of the query: SELECT SUM(B) FROM R WHERE C > 10",
    options: [
      "0",
      "NULL",
      "3",
      "10"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"NULL\"."
  },
  {
    id: 392,
    question: "Choose the most correct statement about PRIMARY KEY:",
    options: [
      "The PRIMARY KEY constraint uniquely identifies each record in a database table",
      "Primary keys must contain unique values",
      "A primary key column cannot contain NULL values",
      "Each table should have a primary key, and each table can have only ONE primary key",
      "All of the others"
    ],
    answer: 4,
    explanation: "Đáp án chính xác là phương án E: \"All of the others\"."
  },
  {
    id: 393,
    question: "Foreign key constraints are created by using \"_____\" keyword to refer to the primary key of another table",
    options: [
      "REFERENCES",
      "POINT TO",
      "REFER",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"REFERENCES\"."
  },
  {
    id: 394,
    question: "The most useful index on a relation is an index on its key. This is because:",
    options: [
      "The index on non key attribute(s) runs slower",
      "The search operation based on the primary key is commonly used.",
      "The index on non key attribute(s) makes update operations to the relation more complex and time-consuming",
      "All of the others"
    ],
    answer: 1,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 395,
    question: "The SQL operations that are performed while a connection is active form a ____",
    options: [
      "Session",
      "Catalog",
      "Module",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Session\"."
  },
  {
    id: 396,
    question: "In PSM, the difference between a stored procedure and a function is that:",
    options: [
      "A function has the return statement.",
      "We can declare local variables in a function.",
      "Loops are not allowed in a function.",
      "All of the others."
    ],
    answer: 0,
    explanation: "Trong SQL/PSM, Exception Handler có thể khai báo các hành động tiếp theo như UNDO, EXIT hoặc CONTINUE khi gặp biệt lệ."
  },
  {
    id: 397,
    question: "The aim for the Object-relational database is to bridge the gap between conceptual data modelling techniques such as Entity-relationship diagram (ERD) and object-relational mapping (ORM), which often use classes and inheritance, and relational databases, which do not directly support them",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 398,
    question: "Choose the correct statement:",
    options: [
      "A User-Defined Type (UDT) in SQL can be the type of a table",
      "A UDT can be the type of an attribute belonging to some table",
      "The form of UDT definition is: CREATE TYPE T AS (<primitive type | attribute declarations>)",
      "All of the others"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"All of the others\"."
  },
  {
    id: 399,
    question: "______ is a set of markup declarations that define a document type for SGML-family markup languages (SGML, XML, HTML)",
    options: [
      "Document Type Definition",
      "Document Definition Language",
      "Document Manipulation Language",
      "Document Control Language"
    ],
    answer: 0,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 400,
    question: "A ____ document defines the XML document structure with a list of legal elements and attributes",
    options: [
      "XML",
      "DTD",
      "XSLT",
      "SGML"
    ],
    answer: 1,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 401,
    question: "A ____ is the framework under which data may exist and SQL operations on data may be executed",
    options: [
      "SQL Environment",
      "SQL Statement",
      "SQL Parser",
      "SQL Optimizer"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"SQL Environment\"."
  },
  {
    id: 402,
    question: "What is a graph database?",
    options: [
      "A graph database is a database that uses tree structures with nodes to represent and store information",
      "A graph database is a database that uses table structures to represent and store information",
      "A graph database is a database that uses graph structures with nodes, edges and properties to represent and store information",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'A graph database is a database that uses graph structures with nodes, edges and properties to represent and store information'."
  },
  {
    id: 403,
    question: "What is a database?",
    options: [
      "A database is a collection of information that is organized so that it can easily be accessed, managed, and updated",
      "A database is a collection of data files",
      "A database is a collection of records",
      "A database is a collection of tuples"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'A database is a collection of information that is organized so that it can easily be accessed, managed, and updated'."
  },
  {
    id: 404,
    question: "A ______ is a collection of programs that enables user to create and maintain databases. In other words, it is general-purpose software that provides the users with the processes of defining, constructing and manipulating the databases for various applications",
    options: [
      "MSSQL",
      "DBMS",
      "DBS",
      "DB2"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'DBMS'."
  },
  {
    id: 405,
    question: "Today, the two important data models are:",
    options: [
      "The semi-structured data model (including XML and related standards) and the network data model",
      "The relational data model (including object-relational extensions) and the semi-structured data model (including XML and related standards)",
      "The network data model and the flat file data model",
      "The flat file data model and the semi-structured data model (including XML and related standards)"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"The relational data model (including object-relational extensions) and the semi-structured data model (including XML and related standards)\"."
  },
  {
    id: 406,
    question: "A person who is responsible for the structure or schema of the database is called:",
    options: [
      "an end user",
      "a database administrator",
      "a database analyst",
      "all of the others"
    ],
    answer: 1,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'a database administrator'."
  },
  {
    id: 407,
    question: "A database administrator (DBA) is a person that is also known by the title:",
    options: [
      "Database Analyst",
      "Database Tuner",
      "Database Coordinator or Database Programmer",
      "Database Modeller"
    ],
    answer: 2,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'Database Coordinator or Database Programmer'."
  },
  {
    id: 408,
    question: "Which is the subset of SQL commands used to manipulate Database structures, including tables?",
    options: [
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "DCL (Data Control Language)",
      "All of the others"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'DDL (Data Definition Language)'."
  },
  {
    id: 409,
    question: "\"R(A,B,C,D)\" is an example of:",
    options: [
      "A schema",
      "A relation",
      "A relation instance",
      "A schema instance"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"A schema\"."
  },
  {
    id: 410,
    question: "Which statement is used to remove a column named D from the relation R?",
    options: [
      "ALTER TABLE R DROP COLUMN D;",
      "ALTER TABLE R DROP COLUMN D [DataType];",
      "ALTER TABLE R DELETE COLUMN D;",
      "ALTER TABLE R DELETE COLUMN D [DataType];"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"ALTER TABLE R DROP COLUMN D;\"."
  },
  {
    id: 411,
    question: "What is a primary key?",
    options: [
      "A primary key is the field(s) in a table that uniquely defines that table in a database",
      "A primary key is the field(s) in a table that is used to establishes a relationship between two tables",
      "A primary key is the field(s) in a table that uniquely defines the row in the table",
      "A primary key is the field(s) in a table that is used to establishes a relationship between two databases"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"A primary key is the field(s) in a table that uniquely defines the row in the table\"."
  },
  {
    id: 412,
    question: "Which statement is used to add a column named D into the relation R?",
    options: [
      "ALTER TABLE R ADD D [DataType];",
      "ALTER TABLE R ADD ATTRIBUTE D [DataType];",
      "ALTER TABLE R ADD PROPERTY D [DataType];"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"ALTER TABLE R ADD D [DataType];\"."
  },
  {
    id: 413,
    question: "The relational operator that adds all possible pairs of rows from two tables is known as the .... operator.",
    options: [
      "union",
      "product",
      "join",
      "selection"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"product\"."
  },
  {
    id: 414,
    question: "Given the relation schema R(A,B,C) and functional dependencies F = {AB-> C, B->A, C->B}. Which attribute(s) is/are prime?",
    options: [
      "only A",
      "only B",
      "A and B",
      "B and C"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"B and C\"."
  },
  {
    id: 415,
    question: "Given the relation R(ABCDE) with the following FD's: D -> C, CE ->A, D ->A, and AE ->D Which of the following attribute set is a key?",
    options: [
      "ABCDE",
      "CDE",
      "ABE",
      "BD"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"ABE\"."
  },
  {
    id: 416,
    question: "A set of attributes forms a ____ for a relation if we do not allow 2-tuples in a relation instance to have the same values in all that attributes",
    options: [
      "Key",
      "Foreign Key",
      "Index Key",
      "Trigger Key"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Key\"."
  },
  {
    id: 417,
    question: "Suppose we have a relation R(ABCD) with FD's: BC -> A ; AD -> C ; CD -> B ; BD -> C",
    options: [
      "R is in BCNF",
      "R is not in BCNF",
      "All of the others",
      "None of the othersss"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"R is not in BCNF\"."
  },
  {
    id: 418,
    question: "The relation R(ABCD) has following FDs: { AB -> C ; ABD -> C ; ABC -> D ; AC -> D} Choose a correct statement about R?",
    options: [
      "R is in 3NF",
      "R is not in 3NF",
      "R is in BCNF"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"R is not in 3NF\"."
  },
  {
    id: 419,
    question: "Normalization is a process of analyzing the given relation schema based on their Functional Dependencies (FDs) and primary keys to achieve the following:",
    options: [
      "Minimizing redundancy",
      "Minimizing insertion anomalies",
      "All of the others",
      "Minimizing deletion and update anomalies"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"All of the others\"."
  },
  {
    id: 420,
    question: "What is \"normalization\"?",
    options: [
      "Normalizing data means eliminating redundant information from a table and organizing the data so that future changes to the table are easier",
      "Normalizing data means minimizing columns from a table and organizing the data so that future changes to the table will be made more quickly",
      "Normalizing data means removing columns from a table and organizing the data so that future changes to the table will be made more quickly",
      "Normalizing data means adding more columns to a table and organizing the data so that future changes to the table will be made more quickly"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Normalizing data means eliminating redundant information from a table and organizing the data so that future changes to the table are easier\"."
  },
  {
    id: 421,
    question: "Regardless of whatever any other transaction is doing, a transaction must be able to continue with the exact same data set it started with. The above describes which property of a transaction?",
    options: [
      "Atomic",
      "Isolation",
      "Consistency",
      "Durability"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  },
  {
    id: 422,
    question: "Pay attention into the following query: SELECT * FROM R WHERE A LIKE '%a%'; So, in the above case, the wildcard % represents what?",
    options: [
      "% (percent sign) represents zero, one, or more character",
      "% (percent sign) represents exactly 1 character"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"% (percent sign) represents zero, one, or more character\"."
  },
  {
    id: 423,
    question: "With SQL, how do you select all the records from a table named \"Persons\" where the value of the column \"FirstName\" starts with an \"a\"?",
    options: [
      "SELECT * FROM Persons WHERE FirstName='a'",
      "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
      "SELECT * FROM Persons WHERE FirstName='%a%'",
      "SELECT * FROM Persons WHERE FirstName LIKE 'a%'"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là phương án D: \"SELECT * FROM Persons WHERE FirstName LIKE 'a%'\"."
  },
  {
    id: 424,
    question: "What does the keyword ESCAPE mean?",
    options: [
      "The keyword ESCAPE is used to match any string that contains the characters \"%\" or \"_\"",
      "There is no keyword named ESCAPE",
      "The keyword ESCAPE is used to match any string that contains the characters \"?\" or \"*\"",
      "The keyword ESCAPE is used to match any string that contains the characters \"@\" or \"$\""
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"The keyword ESCAPE is used to match any string that contains the characters \"%\" or \"_\"\"."
  },
  {
    id: 425,
    question: "The SQL BETWEEN operator:",
    options: [
      "Specifies a range to test.",
      "Specifies which tables we are selecting from.",
      "Specifies that a column is a primary key.",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Specifies a range to test.\"."
  },
  {
    id: 426,
    question: "Database integrity ensures that:",
    options: [
      "data entered into the database is accurate, valid, and consistent",
      "data entered into the database is accurate, and consistent",
      "data entered into the database is valid, and consistent",
      "data entered into the database is accurate, and valid"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'data entered into the database is accurate, valid, and consistent'."
  },
  {
    id: 427,
    question: "What is a view?",
    options: [
      "A view is a database diagram",
      "A view is a special stored procedure executed when certain event occurs",
      "A view is a virtual table which results of executing a pre-compiled query. A view is not a part of the physical database schema, while the regular tables are.",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"A view is a virtual table which results of executing a pre-compiled query. A view is not a part of the physical database schema, while the regular tables are.\"."
  },
  {
    id: 428,
    question: "What structure can you implement for the database to speed up table reads?",
    options: [
      "indexes",
      "triggers",
      "store-procedures",
      "synonyms"
    ],
    answer: 0,
    explanation: "Hệ quản trị CSDL (DBMS) cung cấp công cụ lưu trữ, truy vấn và quản lý dữ liệu an toàn, hiệu quả. Đáp án đúng là: 'indexes'."
  },
  {
    id: 429,
    question: "Often, a DBMS allows us to build a single index on ____ attribute(s) (choose the most correct answer)",
    options: [
      "only one",
      "two",
      "three",
      "multiple"
    ],
    answer: 0,
    explanation: "Chỉ mục (Index) là cấu trúc dữ liệu (thường là B-Tree) giúp tăng tốc độ tìm kiếm và truy xuất dữ liệu trên bảng hoặc view."
  },
  {
    id: 430,
    question: "Suppose an updatable view ParamountMovies is associated with Movies relation. Choose a correct answer.",
    options: [
      "Drop Movies relation also delete the view ParamountMovies",
      "Drop ParamountMovies also delete Movies",
      "An update on ParamountMovies is translated into Movies",
      "None of the othersss"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"An update on ParamountMovies is translated into Movies\"."
  },
  {
    id: 431,
    question: "Why we should use stored procedures?",
    options: [
      "They allow faster execution",
      "They can reduce network traffic",
      "They allow modular programming",
      "They can be used as a security mechanism",
      "All of the others"
    ],
    answer: 4,
    explanation: "Đáp án chính xác là phương án E: \"All of the others\"."
  },
  {
    id: 432,
    question: "In UML, a _____ between classes is called an association",
    options: [
      "binary relationship",
      "multi-way relationship",
      "none of the others"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"binary relationship\"."
  },
  {
    id: 433,
    question: "When an entity is called \"weak\"?",
    options: [
      "When it is used to represent weak objects, such as patients, elders",
      "When all of its attributes can not identify itself",
      "When It always needs support from other entity",
      "When It is not really necessary in the ERD",
      "(a) and (b) are correct",
      "(b) and (c) are correct",
      "(c) and (d) are correct",
      "(d) and (a) are correct"
    ],
    answer: 1,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 434,
    question: "Consider the following statement: \"When drawing ERD, if an entity has no non-key attribute and it is the 'one' in many-one relationship, then we should set it to the attribute of other entities\" That above statement describes which principle?",
    options: [
      "Avoid Redundancy Principle",
      "Picking the right kind of element principle",
      "Limit the use of weak entity sets principle",
      "Faithfulness principle"
    ],
    answer: 1,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 435,
    question: "When drawing an ERD:",
    options: [
      "Entity sets and their attributes should reflect reality",
      "Redundancy is not important, so we can ignore it",
      "Avoid introducing more elements into the design than is absolutely necessary",
      "Choosing the right relationships",
      "(a) and (b) and (c) are correct",
      "(a) and (c) and (d) are correct",
      "(a) and (b) and (d) are correct",
      "(b) and (c) and (d) are correct"
    ],
    answer: 1,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 436,
    question: "A weak entity",
    options: [
      "does not depend on other entities",
      "does not have enough key attribute(s)",
      "is an entity that has not any key-attribute",
      "None of the othersss"
    ],
    answer: 1,
    explanation: "Mô hình ER (Entity-Relationship) gồm 3 thành phần chính: Tập thực thể (Entity sets), Thuộc tính (Attributes) và Mối quan hệ (Relationships)."
  },
  {
    id: 437,
    question: "Here are three relations, R(A,B), S(C,D), and T(E,F). Their current values are: R A B ------------------- 0 1 1 0 1 1 S C D ------------------- 0 1 1 0 1 1 T E F ------------------- 0 1 1 0 1 1 Compute the result of the query: SELECT A, F, SUM(C), SUM(D) FROM R, S, T WHERE B = C AND D = E GROUP BY A, F HAVING COUNT(*) > 1 Identify, in the list below, the row that appears in the result.",
    options: [
      "(1,1,2,1)",
      "(1,1,2,2)",
      "(1,1,1,1)",
      "None of the othersss"
    ],
    answer: 1,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 438,
    question: "Choose the correct statement",
    options: [
      "Except for COUNT, aggregate functions ignore null values",
      "Except for SUM, aggregate functions ignore null values",
      "Except for AVG, aggregate functions ignore null values",
      "Except for MIN, aggregate functions ignore null values",
      "Except for MAX, aggregate functions ignore null values"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"Except for COUNT, aggregate functions ignore null values\"."
  },
  {
    id: 439,
    question: "What is the difference between Where and Having Clause?",
    options: [
      "WHERE is for Rows and HAVING is for Groups",
      "WHERE is for Groups and HAVING is for Rows",
      "WHERE and HAVING are the same",
      "We can use aggregation functions in WHERE clause"
    ],
    answer: 0,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 440,
    question: "What does the following SQL statement do: SELECT Customer, COUNT(Order) FROM Sales GROUP BY Customer HAVING COUNT(Order) > 5",
    options: [
      "Selects the total number of orders from the Sales table, if this number is greater than 5",
      "Selects all Customers from the Sales table",
      "Selects all customers from table Sales that have made more than 5 orders.",
      "None of the otherss three"
    ],
    answer: 2,
    explanation: "Thứ tự các mệnh đề chuẩn trong SQL: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY. Mệnh đề HAVING đặt sau GROUP BY để lọc các nhóm."
  },
  {
    id: 441,
    question: "What is a \"join\"?",
    options: [
      "'join' used to connect two or more tables logically with or without common field(s) a",
      "'join' used to connect two or more tables logically with common field(s)",
      "'join' used to connect two or more tables logically without common field(s)",
      "'join' used to connect two or more tables logically with aliases"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: ''join' used to connect two or more tables logically with or without common field(s) a'."
  },
  {
    id: 442,
    question: "When join R and S, we want to display all the records in R we must use:",
    options: [
      "LEFT OUTER JOIN a",
      "RIGHT OUTER JOIN",
      "INNER JOIN",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: 'LEFT OUTER JOIN a'."
  },
  {
    id: 443,
    question: "Relation R(x,y) currently consists of only one tuple (NULL, NULL). Which of the following queries will produce a nonempty output? That is, at least one tuple will be produced, although the tuple(s) may have NULL's.",
    options: [
      "SELECT * FROM R WHERE x IS NULL",
      "SELECT * FROM R WHERE x = NULL",
      "SELECT * FROM R WHERE x = y",
      "SELECT * FROM R WHERE x <> 10"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 444,
    question: "(TRUE AND NULL) returns: ???",
    options: [
      "NULL",
      "TRUE",
      "FALSE",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Trong SQL, giá trị NULL biểu diễn trạng thái chưa xác định (UNKNOWN). Mọi phép toán số học hoặc so sánh với NULL đều trả về UNKNOWN hoặc NULL."
  },
  {
    id: 445,
    question: "In order to modify or delete an existing constraint, it is necessary that:",
    options: [
      "the constraint has a name",
      "the constraint has an ID",
      "the constraint has some attributes"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"the constraint has a name\"."
  },
  {
    id: 446,
    question: "Look at the following tables and then choose the correct statment: ARTISTS Airtist_id Airtist_Name ----------------------------------- 1 Bono 2 Cher ALBUM artist_id Album_name ------------------------------------ 3 Eat the rich",
    options: [
      "The above picture is an example of a database that has not enforced referential integrity",
      "The above picture is an example of a database that has not enforced entity integrity",
      "The above picture is an example of a database that has not enforced domain integrity",
      "All of the others"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"The above picture is an example of a database that has not enforced entity integrity\"."
  },
  {
    id: 447,
    question: "The IN SQL keyword",
    options: [
      "Is used with the DISTINCT SQL keyword only",
      "Is used with the INSERT SQL keyword only",
      "Determines if a value any of the values in a list or a sub-query",
      "Defines the tables we are selecting or deleting data from"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"Determines if a value any of the values in a list or a sub-query\"."
  },
  {
    id: 448,
    question: "Select the well-formed XML",
    options: [
      "All of the others",
      "",
      "",
      ""
    ],
    answer: 1,
    explanation: "Trong XML / DTD: DTD định nghĩa cấu trúc tài liệu XML; dấu ? biểu diễn 0 hoặc 1 lần xuất hiện, + là 1 hoặc nhiều lần, * là 0 hoặc nhiều lần."
  },
  {
    id: 449,
    question: "To apply a selection to bag:",
    options: [
      "We apply the selection condition to each tuple independently.",
      "None of the othersss.",
      "We apply the selection condition to each attribute independently.",
      "All of the other."
    ],
    answer: 0,
    explanation: "Đáp án chính xác là phương án A: \"We apply the selection condition to each tuple independently.\"."
  },
  {
    id: 450,
    question: "Give the relation Employee(SSN,FNAME,LNAME,SALARY).Select the right query below to find the employee(s) who has the lowest salary in the company",
    options: [
      "SELECT LNAME,FNAME,SALARY FROM Employee WHERE SALARY IN ( SELECT MIN(SALARY) FROM Employee)",
      "SELECT LNAME,FNAME,SALARY FROM Employee WHERE SALARY >=ALL( SELECT MIN(SALARY) FROM Employee)",
      "SELECT LNAME,FNAME,SALARY FROM Employee WHERE SALARY < MAX ( SELECT MIN(SALARY) FROM Employee)",
      "None of the othersss"
    ],
    answer: 0,
    explanation: "Để tìm nhân viên có mức lương thấp nhất, sử dụng truy vấn con kết hợp toán tử IN: WHERE SALARY IN (SELECT MIN(SALARY) FROM Employee)."
  },
  {
    id: 451,
    question: "Suppose relations R(A<B) and S(B,C,D) are as follows: R= A B 1 2 3 4 5 6 S= B C D 4 5 1 6 7 2 8 9 3 Compute the full outer join on B, where R is the left operand and S is the right operand. Find the correct statement in the list below.",
    options: [
      "The full outer has 6 tuples.",
      "The full outer has 3 tuples.",
      "The full outer has 4 tuples.",
      "The full outer has 5 tuples."
    ],
    answer: 2,
    explanation: "Phép nối (Join): Kết quả được tính toán dựa trên điều kiện ghép nối giữa các thuộc tính. Đáp án chính xác là: 'The full outer has 4 tuples.'."
  },
  {
    id: 452,
    question: "Consider the distributive law, that holds for set relation: (R U S)- T =(R-T)U(S-T) The above distributive still hold for bag relations?",
    options: [
      "TRUE",
      "FALSE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là phương án B: \"FALSE\"."
  },
  {
    id: 453,
    question: "What SQL keyword can be use to return data from two non-related tables as a combined set of rows?",
    options: [
      "DISTINCT ALL",
      "DISTINCT",
      "UNION ALL",
      "COMBINED"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là phương án C: \"UNION ALL\"."
  },
  {
    id: 454,
    question: "Every row and value must agree with all constraints right after the transaction is complete. The above describes which property of a transaction?",
    options: [
      "Isolation",
      "Consistency",
      "Atomic.",
      "Durability"
    ],
    answer: 1,
    explanation: "Giao dịch (Transaction) phải thỏa mãn 4 tính chất ACID: Atomicity (Nguyên tử), Consistency (Nhất quán), Isolation (Cô lập) và Durability (Bền vững)."
  }
];
