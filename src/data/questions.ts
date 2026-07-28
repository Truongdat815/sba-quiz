export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation?: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is ReactJS primarily used for?",
    options: [
      "Creating user interfaces",
      "Managing relational databases",
      "Operating systems",
      "File system operations"
    ],
    answer: 0,
    explanation: "ReactJS là thư viện JavaScript mã nguồn mở chuyên dùng để xây dựng giao diện người dùng (UI) tương tác."
  },
  {
    id: 2,
    question: "What is the benefit of using React's Virtual DOM?",
    options: [
      "Improved database performance",
      "Faster UI updates by minimizing direct DOM manipulation",
      "Enhanced server security",
      "Simplified network configuration"
    ],
    answer: 1,
    explanation: "Virtual DOM giúp tính toán sự thay đổi tối thiểu (diffing) và chỉ cập nhật đúng phần tử thay đổi trên DOM thực, giúp tăng hiệu năng UI."
  },
  {
    id: 3,
    question: "Which of the following is a core feature of React?",
    options: [
      "Two-way data binding",
      "Virtual DOM",
      "Server-side rendering only",
      "SQL database integration"
    ],
    answer: 1,
    explanation: "Virtual DOM là tính năng nền tảng cốt lõi của React giúp render giao diện nhanh chóng."
  },
  {
    id: 4,
    question: "What is the purpose of the dependency array in useEffect?",
    options: [
      "To define CSS styles.",
      "To specify when the effect should run.",
      "To manage database connections.",
      "To render the UI."
    ],
    answer: 1,
    explanation: "Mảng phụ thuộc (dependency array) xác định điều kiện khi nào callback trong useEffect được chạy lại."
  },
  {
    id: 5,
    question: "Which of the following is NOT a valid way to handle events in React?",
    options: [
      "onClick={handleClick}",
      "onClick={handleClick()}",
      "onClick={() => handleClick()}",
      "onClick={(e) => handleClick(e)}"
    ],
    answer: 1,
    explanation: "Cú pháp onClick={handleClick()} sẽ gọi hàm ngay lập tức khi render thay vì truyền hàm xử lý sự kiện (event handler)."
  },
  {
    id: 6,
    question: "In JSX, how do you add a JavaScript variable to a rendered element?",
    options: [
      "Using double quotes: \"variable\"",
      "Using angle brackets: <variable>",
      "Using curly braces: {variable}",
      "Using parentheses: (variable)"
    ],
    answer: 2,
    explanation: "Cặp dấu ngoặc nhọn {} trong JSX được sử dụng để nhúng biểu thức hoặc biến JavaScript."
  },
  {
    id: 7,
    question: "What does the \"responsive\" aspect of React-Bootstrap mean?",
    options: [
      "Components automatically adjust their appearance based on screen size.",
      "Components can only be used on mobile devices.",
      "Components require manual adjustment for each screen size.",
      "Components primarily handle database interactions."
    ],
    answer: 0,
    explanation: "Tính năng responsive giúp các component tự động điều chỉnh kích thước và giao diện thích ứng với nhiều màn hình khác nhau."
  },
  {
    id: 8,
    question: "Why is React-Bootstrap typically used in React projects?",
    options: [
      "To replace JavaScript entirely.",
      "To provide pre-built, responsive UI components.",
      "To manage server-side logic.",
      "To create database queries."
    ],
    answer: 1,
    explanation: "React-Bootstrap cung cấp các component UI giao diện chuẩn Bootstrap được tối ưu cho React."
  },
  {
    id: 9,
    question: "Which of the following is a React-Bootstrap component?",
    options: [
      "<Button>",
      "<Service>",
      "<Router>",
      "<Data>"
    ],
    answer: 0,
    explanation: "<Button> là component nút bấm chuẩn được cung cấp bởi thư viện React-Bootstrap."
  },
  {
    id: 10,
    question: "How do you update state in a Functional Component?",
    options: [
      "By directly modifying the state variable.",
      "By calling this.setState().",
      "By calling the setter function returned by useState().",
      "By using props.setState()."
    ],
    answer: 2,
    explanation: "Trong Functional Component, ta sử dụng hàm cập nhật (setter function) được trả về từ Hook useState()."
  },
  {
    id: 11,
    question: "What happens if you directly modify the state variable returned by useState() in a Functional Component?",
    options: [
      "The component re-renders.",
      "An error is thrown.",
      "The change is ignored.",
      "The component updates, but it is not recommended."
    ],
    answer: 2,
    explanation: "Gán hoặc chỉnh sửa trực tiếp biến state sẽ không kích hoạt quá trình re-render của React nên thay đổi sẽ bị bỏ qua."
  },
  {
    id: 12,
    question: "Which React Hook is used to perform side effects like fetching data or DOM manipulation?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    answer: 1,
    explanation: "useEffect là Hook chuyên dùng để quản lý các side effect như gọi API, tương tác DOM hoặc thiết lập timer."
  },
  {
    id: 13,
    question: "How are props passed to a child component in React?",
    options: [
      "As arguments to global window functions",
      "As attributes on the component HTML-like tag",
      "Through standard CSS rules",
      "By editing browser headers"
    ],
    answer: 1,
    explanation: "Props được truyền từ component cha xuống component con dưới dạng các thuộc tính (attributes) trên thẻ JSX."
  },
  {
    id: 14,
    question: "What is the standard syntax to export a component as the default export?",
    options: [
      "export component MyComponent;",
      "export default MyComponent;",
      "export { MyComponent as default };",
      "module.exports = default MyComponent;"
    ],
    answer: 1,
    explanation: "Cú pháp 'export default MyComponent;' được dùng trong ES6 module để xuất ra thành phần mặc định."
  },
  {
    id: 15,
    question: "Which hook is used to optimize expensive calculations?",
    options: [
      "useState",
      "useEffect",
      "useMemo",
      "useCallback"
    ],
    answer: 2,
    explanation: "useMemo được dùng để ghi nhớ (cache) kết quả của các phép tính toán phức tạp giữa các lần re-render."
  },
  {
    id: 16,
    question: "What is a key advantage of client-side routing?",
    options: [
      "Improved SEO.",
      "Faster initial page load times.",
      "Smoother user experience due to reduced server requests.",
      "Enhanced server security."
    ],
    answer: 2,
    explanation: "Client-side routing cho phép chuyển trang mượt mà không cần tải lại toàn bộ HTML từ server."
  },
  {
    id: 17,
    question: "How do you access route parameters in a component rendered by React Router v6?",
    options: [
      "Using this.props.params.",
      "Using useParams() Hook.",
      "Using props.match.params.",
      "Using context.params."
    ],
    answer: 1,
    explanation: "Trong React Router v6, ta dùng Hook useParams() để lấy các tham số tĩnh/động trên URL path."
  },
  {
    id: 18,
    question: "How do you define a route parameter in a React Router path?",
    options: [
      "Using square brackets: [param]",
      "Using curly braces: {param}",
      "Using a colon: :param",
      "Using a question mark: ?param"
    ],
    answer: 2,
    explanation: "Tham số động trên đường dẫn route được bắt đầu bằng dấu hai chấm, ví dụ: path=\"/users/:id\"."
  },
  {
    id: 19,
    question: "Which HTTP header is used to specify the content type of a JSON response?",
    options: [
      "Content-Language",
      "Content-Encoding",
      "Content-Type: application/json",
      "Content-Length"
    ],
    answer: 2,
    explanation: "Header Content-Type: application/json cho client biết dữ liệu trả về thuộc định dạng JSON."
  },
  {
    id: 20,
    question: "What is the primary role of a backend server in a typical React application?",
    options: [
      "To render the React components.",
      "To store and process data, and handle API requests.",
      "To define client-side routing.",
      "To manage local component state."
    ],
    answer: 1,
    explanation: "Backend server chịu trách nhiệm xử lý logic nghiệp vụ, quản lý dữ liệu và cung cấp các REST API cho React."
  },
  {
    id: 21,
    question: "What is the primary purpose of HTTP?",
    options: [
      "To define CSS styles.",
      "To transfer data over the internet, especially between web browsers and servers.",
      "To manage database connections.",
      "To handle client-side rendering exclusively."
    ],
    answer: 1,
    explanation: "HTTP (Hypertext Transfer Protocol) là giao thức truyền tải dữ liệu trên Internet giữa trình duyệt và máy chủ."
  },
  {
    id: 22,
    question: "Which keyword is used to pause the execution of an async function until a Promise is resolved?",
    options: [
      "async",
      "promise",
      "await",
      "callback"
    ],
    answer: 2,
    explanation: "Từ khóa 'await' tạm dừng việc thực thi hàm async cho đến khi Promise được giải quyết (resolved)."
  },
  {
    id: 23,
    question: "What is the syntax for creating a new Promise?",
    options: [
      "new Promise(callback)",
      "createPromise(callback)",
      "Promise.create(callback)",
      "Promise.new(callback)"
    ],
    answer: 0,
    explanation: "Cú pháp 'new Promise(callback)' được dùng để khởi tạo một đối tượng Promise mới trong JavaScript."
  },
  {
    id: 24,
    question: "How do you handle 404 Not Found pages in React Router?",
    options: [
      "By using the <NotFound> component.",
      "By adding a <Route path=\"*\" element={<NotFound />} /> as the last route.",
      "By using the notFound prop on the <Routes> component.",
      "By using the useNotFound() hook."
    ],
    answer: 1,
    explanation: "Sử dụng đường dẫn đại diện path=\"*\" ở cuối để khớp với mọi URL không nằm trong danh sách khai báo."
  },
  {
    id: 25,
    question: "Which annotation is used to map HTTP request bodies to method parameters in Spring Boot REST?",
    options: [
      "@PathVariable",
      "@RequestParam",
      "@RequestBody",
      "@RequestHeader"
    ],
    answer: 2,
    explanation: "Annotation @RequestBody dùng để tự động ánh xạ nội dung request body (JSON) thành tham số đối tượng Java."
  },
  {
    id: 26,
    question: "When should you use PUT instead of PATCH?",
    options: [
      "When updating only part of a resource",
      "When replacing the entire resource",
      "When deleting a resource",
      "When creating new resource"
    ],
    answer: 1,
    explanation: "Phương thức PUT được dùng để ghi đè/thay thế toàn bộ tài nguyên, trong khi PATCH dùng để cập nhật một phần."
  },
  {
    id: 27,
    question: "In Spring Boot REST, which annotation is used to extract path variables from the URL?",
    options: [
      "@RequestBody",
      "@RequestParam",
      "@PathVariable",
      "@RequestHeader"
    ],
    answer: 2,
    explanation: "Annotation @PathVariable dùng để lấy giá trị của biến nằm trực tiếp trên đường dẫn URL."
  },
  {
    id: 28,
    question: "Which of the following is NOT a key element typically found in Spring REST documentation?",
    options: [
      "The HTTP method (e.g., GET, POST)",
      "The endpoint URL",
      "The request and response payloads",
      "The underlying database schema"
    ],
    answer: 3,
    explanation: "Tài liệu REST API mô tả phương thức, endpoint và payload, không bao gồm cấu trúc bảng CSDL nội bộ."
  },
  {
    id: 29,
    question: "How would you document the different possible responses for an endpoint, such as 200 OK or 404 Not Found?",
    options: [
      "By using the @ApiResponses and @ApiResponse annotations on the controller method.",
      "By listing them in the method's Javadoc comments.",
      "By configuring them in the application.yml file.",
      "By creating separate methods for each possible response code."
    ],
    answer: 0,
    explanation: "Sử dụng các annotation @ApiResponses và @ApiResponse để tài liệu hóa các mã phản hồi HTTP trong Swagger/OpenAPI."
  },
  {
    id: 30,
    question: "How can you group related API endpoints in Swagger 3?",
    options: [
      "By using different @Schema annotations.",
      "By using the tags attribute in @Tag annotations.",
      "By using different @OpenAPIDefinition annotations.",
      "By using different @ApiResponse annotations."
    ],
    answer: 1,
    explanation: "Thuộc tính tags trong annotation @Tag dùng để nhóm các API liên quan trong tài liệu Swagger 3."
  },
  {
    id: 31,
    question: "Which Spring Boot module provides support for integration testing?",
    options: [
      "spring-boot-starter-web",
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-test",
      "spring-boot-starter-security"
    ],
    answer: 2,
    explanation: "Module spring-boot-starter-test tích hợp sẵn các công cụ testing như JUnit, Mockito, Hamcrest và Spring Test."
  },
  {
    id: 32,
    question: "When should you use the Slice interface in Spring Data JPA?",
    options: [
      "When you need the total number of elements and total pages.",
      "When you want to avoid counting all elements and improve performance.",
      "When you need to sort the results with detailed page information.",
      "When you only need the data and a \"previous\" indicator."
    ],
    answer: 1,
    explanation: "Interface Slice giúp tăng hiệu năng vì không phải thực thi câu lệnh đếm tổng số bản ghi (COUNT query) như Page."
  },
  {
    id: 33,
    question: "Which type of testing verifies the functionality of individual units of code?",
    options: [
      "Integration testing.",
      "End-to-end testing.",
      "Unit testing.",
      "Performance testing."
    ],
    answer: 2,
    explanation: "Kiểm thử đơn vị (Unit testing) kiểm tra tính đúng đắn của từng hàm/lớp mã nguồn độc lập."
  },
  {
    id: 34,
    question: "What is the primary reason for connecting a RESTful web service to JPA?",
    options: [
      "To increase API complexity.",
      "To simplify data persistence and retrieval.",
      "To hide database interactions.",
      "To reduce API functionality."
    ],
    answer: 1,
    explanation: "JPA đơn giản hóa công việc truy xuất và lưu trữ dữ liệu vào cơ sở dữ liệu quan hệ."
  },
  {
    id: 35,
    question: "How does JPA help in managing database interactions?",
    options: [
      "By requiring manual SQL queries for every operation.",
      "By providing an object-relational mapping (ORM) layer.",
      "By hiding all data from the application.",
      "By increasing the number of database connections."
    ],
    answer: 1,
    explanation: "JPA đóng vai trò là tầng ánh xạ đối tượng - quan hệ (ORM) chuyển đổi giữa các lớp Java và bảng CSDL."
  },
  {
    id: 36,
    question: "What is the primary role of ReactJS in a Spring Boot + React SPA architecture?",
    options: [
      "To handle server-side logic and database interactions.",
      "To create the user interface and handle client-side interactions.",
      "To manage application security.",
      "To define REST API endpoints."
    ],
    answer: 1,
    explanation: "ReactJS đóng vai trò xây dựng giao diện người dùng và xử lý tương tác phía client trong mô hình SPA."
  },
  {
    id: 37,
    question: "Which Axios method is typically used to update an existing resource in a RESTful API?",
    options: [
      "axios.get()",
      "axios.post()",
      "axios.put() or axios.patch()",
      "axios.delete()"
    ],
    answer: 2,
    explanation: "Sử dụng axios.put() (thay thế toàn bộ) hoặc axios.patch() (cập nhật một phần) để sửa đổi tài nguyên."
  },
  {
    id: 38,
    question: "What is the purpose of Spring Boot Security?",
    options: [
      "To manage database connections.",
      "To provide authentication and authorization functionality.",
      "To handle HTTP requests and responses.",
      "To manage application configuration."
    ],
    answer: 1,
    explanation: "Spring Boot Security cung cấp các tính năng bảo mật gồm xác thực (authentication) và phân quyền (authorization)."
  },
  {
    id: 39,
    question: "What is the purpose of the JWT header?",
    options: [
      "To store user data.",
      "To store the signing algorithm and token type.",
      "To store the signature.",
      "To store the expiration time."
    ],
    answer: 1,
    explanation: "Header của JWT chứa thông tin cấu hình như loại token (JWT) và thuật toán ký mã hóa (vd: HS256)."
  },
  {
    id: 40,
    question: "What is the second step in implementing JWT in Spring REST?",
    options: [
      "Create a JWT utility class for generating and validating tokens.",
      "Configure Spring Security.",
      "Implement user authentication.",
      "Create a database schema."
    ],
    answer: 0,
    explanation: "Xây dựng lớp tiện ích JWT (JWT Utility Class) để tạo và xác thực token là bước thứ 2 quan trọng."
  },
  {
    id: 41,
    question: "Which statement about optimistic locking in JPA is true?",
    options: [
      "It prevents concurrent data conflicts",
      "It improves UI rendering",
      "It replaces caching",
      "It manages database indexes"
    ],
    answer: 0,
    explanation: "Optimistic locking trong JPA kiểm tra phiên bản dữ liệu để ngăn chặn các xung đột khi có nhiều người ghi dữ liệu đồng thời."
  },
  {
    id: 42,
    question: "Which key feature of Hibernate provides automatic table creation and schema generation?",
    options: [
      "Caching.",
      "hbm2ddl (DDL auto feature)",
      "Automatic dirty checking.",
      "Transaction management."
    ],
    answer: 1,
    explanation: "Tính năng hbm2ddl của Hibernate tự động tạo hoặc cập nhật cấu trúc bảng CSDL dựa trên các Entity."
  },
  {
    id: 43,
    question: "Which interface in Hibernate is used to manage database transactions?",
    options: [
      "Session.",
      "Transaction.",
      "SessionFactory.",
      "Configuration."
    ],
    answer: 1,
    explanation: "Interface Transaction trong Hibernate được dùng để điều khiển các giao dịch CSDL (begin, commit, rollback)."
  },
  {
    id: 44,
    question: "What does the <mapping resource=\"User.hbm.xml\"> tag in hibernate.cfg.xml specify?",
    options: [
      "The database connection URL.",
      "The database dialect.",
      "The location of a Hibernate mapping file that defines how a Java class is mapped to a database table.",
      "The location of the Hibernate configuration file."
    ],
    answer: 2,
    explanation: "Thẻ <mapping resource=\"...\"> khai báo file cấu hình ánh xạ giữa lớp Java và bảng tương ứng trong CSDL."
  },
  {
    id: 45,
    question: "Which MongoDB command is used to retrieve documents from a collection?",
    options: [
      "update()",
      "find()",
      "insertOne()",
      "deleteMany()"
    ],
    answer: 1,
    explanation: "Lệnh db.collection.find() trong MongoDB được sử dụng để tìm kiếm và lấy ra các document trong collection."
  },
  {
    id: 46,
    question: "Which class in Spring Data MongoDB provides a template for performing low-level MongoDB operations?",
    options: [
      "MongoRepository",
      "MongoClient",
      "MongoTemplate",
      "SimpleMongoRepository"
    ],
    answer: 2,
    explanation: "Lớp MongoTemplate cung cấp các phương thức thao tác mức thấp linh hoạt với dữ liệu MongoDB."
  },
  {
    id: 47,
    question: "Given a Book entity, which derived query method correctly finds all books published after a certain date and sorts them by title?",
    options: [
      "List<Book> findByPublishedDateAfterOrderByTitleAsc(LocalDate date);",
      "List<Book> findAllBooksAfterDateAndSortByTitle(LocalDate date);",
      "List<Book> findByPublishedDate(LocalDate date, Sort sort);",
      "List<Book> queryAfterPublishedDateSortedByTitle(LocalDate date);"
    ],
    answer: 0,
    explanation: "Tên hàm findByPublishedDateAfterOrderByTitleAsc được Spring Data JPA tự động phân tích thành câu truy vấn lọc ngày và sắp xếp tăng dần theo tiêu đề."
  },
  {
    id: 48,
    question: "What is a key advantage of using MongoTemplate?",
    options: [
      "Automatic generation of CRUD methods.",
      "Flexibility for complex queries and operations.",
      "Simplified data model definition.",
      "Built-in transaction management."
    ],
    answer: 1,
    explanation: "MongoTemplate mang lại sự linh hoạt cao khi cần viết các câu truy vấn phức tạp hoặc gom nhóm dữ liệu (aggregation)."
  },
  {
    id: 49,
    question: "What is MongoDB Atlas?",
    options: [
      "A local installation of MongoDB.",
      "A cloud-hosted database service by MongoDB.",
      "A Java driver for MongoDB.",
      "A tool for managing relational databases."
    ],
    answer: 1,
    explanation: "MongoDB Atlas là dịch vụ cơ sở dữ liệu đám mây (Cloud Database Service) được quản lý chính thức bởi MongoDB."
  },
  {
    id: 50,
    question: "When configuring the connection string for MongoDB Atlas in Spring Boot, what is the purpose of including the username and password?",
    options: [
      "To specify the local database path.",
      "To authenticate the application with the MongoDB Atlas cluster.",
      "To configure the JDBC driver.",
      "To define the data model."
    ],
    answer: 1,
    explanation: "Username và password trong chuỗi kết nối dùng để xác thực quyền truy cập của ứng dụng với cluster MongoDB Atlas trên đám mây."
  }
];
