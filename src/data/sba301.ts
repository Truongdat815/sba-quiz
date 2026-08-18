import { Question } from "./types";

export const SBA301_QUESTIONS: Question[] = [
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
  },
  {
    id: 51,
    question: "Which React feature allows writing HTML-like syntax inside JavaScript?",
    options: [
      "DOM Script",
      "JSX",
      "TypeScript",
      "HTML Parser"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'JSX'."
  },
  {
    id: 52,
    question: "What is the main building block used to create UI in React?",
    options: [
      "Controllers",
      "Templates",
      "Components",
      "Modules"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Components'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 53,
    question: "Which hook is used to read values from a React context?",
    options: [
      "useState()",
      "useContext()",
      "useRef()",
      "useEffect()"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'useContext()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 54,
    question: "Which hook is used for performing side effects such as data fetching?",
    options: [
      "useEffect()",
      "useCallback()",
      "useMemo()",
      "useLayoutEffect()"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'useEffect()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 55,
    question: "Which rule of hooks is correct?",
    options: [
      "Hooks inside loops",
      "Hooks in normal functions",
      "Hooks at the top level",
      "Hooks inside conditions"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Hooks at the top level'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 56,
    question: "Which hook manages local component state?",
    options: [
      "useState()",
      "useLocalStore()",
      "useMemory()",
      "useValue()"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'useState()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 57,
    question: "What does useReducer() return?",
    options: [
      "state and dispatch",
      "state only",
      "reducer and state",
      "dispatch only"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'state and dispatch'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 58,
    question: "What is the main purpose of a custom hook?",
    options: [
      "Manipulate DOM",
      "Reuse logic",
      "Replace Redux",
      "Handle routing"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Reuse logic'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 59,
    question: "What are props?",
    options: [
      "Internal state",
      "External data",
      "DOM methods",
      "Component methods"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'External data'."
  },
  {
    id: 60,
    question: "Props in React are:",
    options: [
      "Mutable",
      "Read-only",
      "Write-only",
      "Temporary"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Read-only'."
  },
  {
    id: 61,
    question: "Which type supports lifecycle methods?",
    options: [
      "Functional",
      "Hook",
      "Class",
      "Stateless"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Class'."
  },
  {
    id: 62,
    question: "Which lifecycle method runs after first render?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentWillUnmount",
      "constructor"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'componentDidMount'."
  },
  {
    id: 63,
    question: "Which attribute required for lists?",
    options: [
      "id",
      "index",
      "value",
      "key"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là D: 'key'."
  },
  {
    id: 64,
    question: "Which router wraps app?",
    options: [
      "RouterProvider",
      "BrowserRouter",
      "PageRouter",
      "Route"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'BrowserRouter'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 65,
    question: "Which component holds routes?",
    options: [
      "RouteList",
      "Switch",
      "Routes",
      "Router"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Routes'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 66,
    question: "element prop defines?",
    options: [
      "Route style",
      "URL path",
      "Component to render",
      "Request method"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Component to render'."
  },
  {
    id: 67,
    question: "Hook for navigation?",
    options: [
      "useRoute()",
      "useNavigate()",
      "useNavLink()",
      "useSwitch()"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'useNavigate()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 68,
    question: "Hook for dynamic params?",
    options: [
      "useLocation()",
      "useInfo()",
      "useParams()",
      "useRouteMatch()"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'useParams()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 69,
    question: "Component for redirect?",
    options: [
      "Switch",
      "Redirect",
      "Navigate",
      "Route"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Navigate'."
  },
  {
    id: 70,
    question: "Advantage of SPA?",
    options: [
      "Full reload",
      "Fast navigation",
      "No JS",
      "Better SEO"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Fast navigation'."
  },
  {
    id: 71,
    question: "CSR describes?",
    options: [
      "Server renders HTML",
      "Browser renders UI",
      "HTML by PHP",
      "Rendering only server"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Browser renders UI'."
  },
  {
    id: 72,
    question: "Realtime tech?",
    options: [
      "Axios",
      "Fetch",
      "WebSockets",
      "HTTP GET"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'WebSockets'."
  },
  {
    id: 73,
    question: "Update resource?",
    options: [
      "GET",
      "POST",
      "PUT",
      "CONNECT"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'PUT'."
  },
  {
    id: 74,
    question: "Delete resource?",
    options: [
      "REMOVE",
      "DELETE",
      "ERASE",
      "PURGE"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'DELETE'."
  },
  {
    id: 75,
    question: "Primary REST format?",
    options: [
      "XML",
      "CSV",
      "JSON",
      "TXT"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'JSON'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 76,
    question: "201 status means?",
    options: [
      "OK",
      "Created",
      "No content",
      "Server error"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Created'."
  },
  {
    id: 77,
    question: "@RestController does?",
    options: [
      "Declares controller",
      "RestBody",
      "API mapping",
      "Entity mapping"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'API mapping'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 78,
    question: "@PathVariable does?",
    options: [
      "Extract query",
      "Extract path",
      "Extract body",
      "Extract header"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Extract path'."
  },
  {
    id: 79,
    question: "@RequestBody does?",
    options: [
      "Bind JSON",
      "Bind XML",
      "Bind header",
      "Bind path"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là A: 'Bind JSON'."
  },
  {
    id: 80,
    question: "@GetMapping does?",
    options: [
      "Maps POST",
      "Maps GET",
      "Maps DELETE",
      "Maps PUT"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Maps GET'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 81,
    question: "Business logic layer?",
    options: [
      "Controller",
      "Service",
      "Repository",
      "Client"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Service'."
  },
  {
    id: 82,
    question: "Database layer?",
    options: [
      "Service",
      "Repository",
      "Controller",
      "Middleware"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Repository'."
  },
  {
    id: 83,
    question: "Purpose of @ResponseStatus?",
    options: [
      "Add headers",
      "Set status code",
      "Map controller",
      "Validate request"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Set status code'."
  },
  {
    id: 84,
    question: "Tool for testing REST?",
    options: [
      "React DevTools",
      "Postman",
      "Bootstrap",
      "Axios"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Postman'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 85,
    question: "Parse JSON using Fetch?",
    options: [
      "parseJson()",
      "toJSON()",
      "text()",
      "json()"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'parseJson()'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 86,
    question: "Library simplifies HTTP?",
    options: [
      "Axios",
      "Lodash",
      "Redux",
      "Vite"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'Axios'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 87,
    question: "Advantage of Axios?",
    options: [
      "No promises",
      "Auto JSON parsing",
      "UI elements",
      "No JS needed"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Auto JSON parsing'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 88,
    question: "Responsive container?",
    options: [
      ".grid",
      ".container-fluid",
      ".box",
      ".layout"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: '.container-fluid'."
  },
  {
    id: 89,
    question: "Grid layout components?",
    options: [
      "Box",
      "Layout",
      "Row & Col",
      "GridView"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Row & Col'."
  },
  {
    id: 90,
    question: "Bootstrap message component?",
    options: [
      "WarningPanel",
      "Alert",
      "Notice",
      "Card"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Alert'."
  },
  {
    id: 91,
    question: "Bootstrap grouped content?",
    options: [
      "Panel",
      "Card",
      "Box",
      "Group"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Card'."
  },
  {
    id: 92,
    question: "Virtual DOM improves?",
    options: [
      "SEO",
      "Server load",
      "UI render",
      "Database"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'UI render'."
  },
  {
    id: 93,
    question: "One-way data binding?",
    options: [
      "UI updates state",
      "State updates UI",
      "One direction",
      "Auto props"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'One direction'."
  },
  {
    id: 94,
    question: "Lifting state up?",
    options: [
      "Performance",
      "Share state",
      "Remove props",
      "Global state"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Share state'."
  },
  {
    id: 95,
    question: "useRef stores?",
    options: [
      "Files",
      "DOM ref",
      "State",
      "CSS"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'DOM ref'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 96,
    question: "Memoize computations?",
    options: [
      "useCallback",
      "useEffect",
      "useMemo",
      "useReducer"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'useMemo'."
  },
  {
    id: 97,
    question: "Render child routes?",
    options: [
      "Children",
      "Outlet",
      "Render",
      "Next"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Outlet'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 98,
    question: "REST stands for?",
    options: [
      "SOAP",
      "Representational State Transfer",
      "Microservices",
      "GraphQL"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Representational State Transfer'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 99,
    question: "Client error?",
    options: [
      "100",
      "200",
      "404",
      "503"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: '404'."
  },
  {
    id: 100,
    question: "Statelessness means?",
    options: [
      "Server stores session",
      "Each request has all info",
      "Tracks previous",
      "Browser stores state"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Each request has all info'."
  },
  {
    id: 101,
    question: "Which Hook is used for memoizing expensive computations?",
    options: [
      "useMemo()",
      "useCallback()",
      "useReducer()",
      "useRef()"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'useMemo()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 102,
    question: "What is the advantage of using a SPA architecture with React and Spring Boot?",
    options: [
      "Increased server load",
      "Improved user experience due to faster client-side rendering",
      "Reduced application security",
      "Increased backend complexity"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Improved user experience due to faster client-side rendering'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 103,
    question: "In React Router v6, which component is used to programmatically navigate to a different route?",
    options: [
      "<Link>",
      "<Route>",
      "<Switch>",
      "<Navigate>"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: '<Navigate>'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 104,
    question: "Which of the following is a valid way to handle a Promise rejection?",
    options: [
      "promise.error(err => {})",
      "promise.reject(err => {})",
      "promise.catch(err => {})",
      "promise.fail(err => {})"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'promise.catch(err => {})'."
  },
  {
    id: 105,
    question: "What is a collection in MongoDB?",
    options: [
      "A single document",
      "A group of related documents",
      "A database server",
      "A query result"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'A single document'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 106,
    question: "What is the purpose of @SpringBootTest annotation?",
    options: [
      "Mock dependencies",
      "Run unit tests",
      "Load full Spring context for integration tests",
      "Define data models"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Load full Spring context for integration tests'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 107,
    question: "What is the primary purpose of client-server communication in a React application?",
    options: [
      "Define CSS",
      "Fetch & send data between client and server",
      "Manage component state",
      "Handle server-side rendering"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Fetch & send data between client and server'."
  },
  {
    id: 108,
    question: "What is the purpose of the React-Bootstrap <Container> component?",
    options: [
      "Manage DB connections",
      "Provide responsive layout container",
      "Define CSS",
      "Replace React Router"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Provide responsive layout container'."
  },
  {
    id: 109,
    question: "Which architectural style does REST belong to?",
    options: [
      "Monolithic",
      "Microservices",
      "Representational State Transfer",
      "SOA"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Representational State Transfer'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 110,
    question: "What is a key advantage of server-side routing?",
    options: [
      "Faster CSR",
      "Better SEO and initial page load",
      "Reduced server load",
      "Simplified client code"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Better SEO and initial page load'."
  },
  {
    id: 111,
    question: "What is the benefit of using <Link> over <a> in React Router?",
    options: [
      "Full page reload",
      "Prevent reload & allow client-side routing",
      "<a> handles routing automatically",
      "No difference"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Prevent reload & allow client-side routing'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 112,
    question: "How can you customize title/description of API in Swagger 3?",
    options: [
      "@Operation",
      "@Schema",
      "@OpenAPIDefinition",
      "@ApiResponse"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: '@OpenAPIDefinition'."
  },
  {
    id: 113,
    question: "Which is a valid way to update state in a Functional Component?",
    options: [
      "this.state=\"new\"",
      "this.setState(\"new\")",
      "const [setS]=useState(\"old\")",
      "state.update(\"new\")"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'const [setS]=useState(\"old\")'."
  },
  {
    id: 114,
    question: "Which Spring Data JPA interface performs CRUD operations?",
    options: [
      "CrudRepository",
      "ServiceRepository",
      "ControllerRepository",
      "EntityRepository"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'CrudRepository'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 115,
    question: "Purpose of hibernate.dialect property?",
    options: [
      "Specify DB driver",
      "Define SQL dialect",
      "Map Java classes",
      "Configure session factory"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Define SQL dialect'."
  },
  {
    id: 116,
    question: "How does MongoRepository simplify data access?",
    options: [
      "Complex aggregations",
      "Auto-generate CRUD methods",
      "Manage DB connection",
      "Handle BSON manually"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Auto-generate CRUD methods'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 117,
    question: "Benefit of separating layers in 3-layer architecture?",
    options: [
      "Increased complexity",
      "Reduced maintainability",
      "Improved organization & reusability",
      "Tighter coupling"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Improved organization & reusability'."
  },
  {
    id: 118,
    question: "Which tool inspects React component hierarchy/state?",
    options: [
      "Browser DevTools",
      "React Developer Tools",
      "Node debugger",
      "CSS inspector"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'React Developer Tools'."
  },
  {
    id: 119,
    question: "What is the role of Hibernate Session object?",
    options: [
      "Manage transactions",
      "Interact with DB & perform CRUD",
      "Store configs",
      "Cache queries"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Interact with DB & perform CRUD'."
  },
  {
    id: 120,
    question: "What is the purpose of React components?",
    options: [
      "Create reusable UI blocks",
      "Handle backend logic",
      "Manage SQL connections",
      "Serve HTML from server"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là A: 'Create reusable UI blocks'."
  },
  {
    id: 121,
    question: "Which hook is used to manage internal state?",
    options: [
      "useState()",
      "useEffect()",
      "useMemo()",
      "useRef()"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'useState()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 122,
    question: "Which hook performs side effects?",
    options: [
      "useCallback()",
      "useEffect()",
      "useLayout()",
      "useData()"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'useEffect()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 123,
    question: "Which hook reads context values?",
    options: [
      "useParams()",
      "useContext()",
      "useRef()",
      "useReducer()"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'useContext()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 124,
    question: "What does Virtual DOM improve?",
    options: [
      "SEO",
      "Database access",
      "UI performance",
      "Server rendering"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'UI performance'."
  },
  {
    id: 125,
    question: "Which file defines all main routes in React Router v6?",
    options: [
      "App.js",
      "index.js",
      "routes.js",
      "AppRoutes.jsx"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'AppRoutes.jsx'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 126,
    question: "Which React Router component renders child routes?",
    options: [
      "<Child>",
      "<Outlet>",
      "<SubRoute>",
      "<Switch>"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '<Outlet>'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 127,
    question: "What is a SPA?",
    options: [
      "An app that reloads pages",
      "A single HTML shell updated dynamically",
      "A backend REST API",
      "An SSR-only site"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'A single HTML shell updated dynamically'."
  },
  {
    id: 128,
    question: "What is the main limitation of SPA?",
    options: [
      "Slow navigation",
      "Poor SEO if not optimized",
      "No CSS",
      "Cannot call APIs"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Poor SEO if not optimized'."
  },
  {
    id: 129,
    question: "Which HTTP method is idempotent?",
    options: [
      "POST",
      "PUT",
      "PATCH",
      "CONNECT"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'PUT'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 130,
    question: "Which HTTP code means \"Created\"?",
    options: [
      "200",
      "201",
      "404",
      "503"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '201'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 131,
    question: "Which annotation creates a REST controller?",
    options: [
      "@Controller",
      "@RestController",
      "@ResponseBody",
      "@Service"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '@RestController'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 132,
    question: "Which annotation binds JSON to a Java object?",
    options: [
      "@PathVariable",
      "@RequestParam",
      "@RequestBody",
      "@ModelAttribute"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: '@RequestBody'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 133,
    question: "Which annotation maps GET requests?",
    options: [
      "@PostMapping",
      "@GetMapping",
      "@PutMapping",
      "@Mapping"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '@GetMapping'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 134,
    question: "Which layer contains business logic?",
    options: [
      "Repository",
      "Service",
      "Controller",
      "Model"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Service'."
  },
  {
    id: 135,
    question: "Which layer handles database operations?",
    options: [
      "Controller layer",
      "Service layer",
      "Repository layer",
      "Entity layer"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Repository layer'."
  },
  {
    id: 136,
    question: "What is Swagger used for?",
    options: [
      "Logging",
      "API documentation",
      "SQL queries",
      "Testing UI"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'API documentation'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 137,
    question: "Swagger UI is accessed by default at:",
    options: [
      "/docs",
      "/documentation",
      "/swagger-ui/index.html",
      "/openapi"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: '/swagger-ui/index.html'."
  },
  {
    id: 138,
    question: "What is JWT mainly used for?",
    options: [
      "Data storage",
      "Authentication",
      "CSS styling",
      "Routing"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Authentication'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 139,
    question: "Which security method is most secure?",
    options: [
      "HTTP Basic",
      "Session ID",
      "JWT over HTTPS",
      "No authentication"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'JWT over HTTPS'."
  },
  {
    id: 140,
    question: "Which authentication uses cookies?",
    options: [
      "Digest Auth",
      "JWT",
      "OAuth2",
      "Session-based auth"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'Session-based auth'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 141,
    question: "Which Spring annotation defines security configuration?",
    options: [
      "@Bean",
      "@Configuration",
      "@SecurityScheme",
      "@EnableWebSecurity"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: '@EnableWebSecurity'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 142,
    question: "Which MongoDB structure stores documents?",
    options: [
      "Table",
      "Collection",
      "Schema",
      "Sequence"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Collection'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 143,
    question: "MongoDB stores data in:",
    options: [
      "Rows",
      "Nodes",
      "JSON-like documents",
      "CSV files"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'JSON-like documents'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 144,
    question: "Which MongoDB CRUD operation inserts a document?",
    options: [
      "updateOne()",
      "deleteOne()",
      "insertOne()",
      "findOne()"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'insertOne()'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 145,
    question: "What is Hibernate used for?",
    options: [
      "Create HTML",
      "Map Java objects to DB tables",
      "Build REST APIs",
      "Create CSS"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Map Java objects to DB tables'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 146,
    question: "What file configures Hibernate?",
    options: [
      "hibernate.xml",
      "config.properties",
      "hibernate.cfg.xml",
      "database.xml"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'hibernate.cfg.xml'."
  },
  {
    id: 147,
    question: "Which annotation maps a class to a DB table?",
    options: [
      "@Entity",
      "@Table",
      "@Model",
      "@Database"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: '@Entity'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 148,
    question: "Which annotation maps a primary key?",
    options: [
      "@Column",
      "@Id",
      "@PK",
      "@Key"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '@Id'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 149,
    question: "Which package is commonly used for routing in React applications?",
    options: [
      "react-navigation",
      "react-router-dom",
      "react-router-native",
      "react-router-core"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'react-router-dom'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 150,
    question: "Which of the following is the correct way to handle a successful fetch request?",
    options: [
      "fetch(url).then(response => response.json()).then(data => console.log(data));",
      "fetch(url).then(data => data.json()).then(console.log(data));",
      "fetch(url).data().then(console.log);",
      "fetch(url).json().then(data => console.log(data));"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'fetch(url).then(response => response.json()).then(data => console.log(data));'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 151,
    question: "What is the purpose of the @RequestParam annotation?",
    options: [
      "Maps headers to method parameters",
      "Binds form data to method parameters",
      "Maps path variables to fields",
      "Maps query parameters to method parameters"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'Maps query parameters to method parameters'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 152,
    question: "Which Spring annotation is used to map HTTP GET requests to a method?",
    options: [
      "@RequestGet",
      "@Get",
      "@HttpGet",
      "@GetMapping"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: '@GetMapping'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 153,
    question: "Which HTTP methods are supported by Axios?",
    options: [
      "Only GET and POST in the browser",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD",
      "GET, POST only",
      "GET, POST, DELETE only"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 154,
    question: "How can you specify the response status code in a REST controller?",
    options: [
      "By using HttpServletResponse",
      "You cannot control the status code",
      "By using @ResponseStatus annotation",
      "By returning an int"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'By using @ResponseStatus annotation'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 155,
    question: "What is the primary purpose of a RESTful web service in Spring Boot?",
    options: [
      "To render HTML content",
      "To provide data through JSON or XML over HTTP",
      "To connect to a database",
      "To secure the application with OAuth2"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'To provide data through JSON or XML over HTTP'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 156,
    question: "Which of the following annotations would you use to return a specific HTTP status from a method?",
    options: [
      "@RestStatus",
      "@StatusCode",
      "@ResponseStatus",
      "@HttpStatus"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: '@ResponseStatus'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 157,
    question: "Which annotation combination is used for a method that handles POST requests and accepts a request body?",
    options: [
      "@PostMapping and @RequestBody",
      "@GetMapping and @PathVariable",
      "@PostMapping and @RequestParam",
      "@PostMapping and @ResponseBody"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: '@PostMapping and @RequestBody'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 158,
    question: "How do SPAs affect analytics and tracking tools like Google Analytics?",
    options: [
      "Analytics tools natively support SPAs without setup",
      "They simplify tracking because everything is on one page",
      "SPAs automatically log page views",
      "They require manual tracking for route changes"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là D: 'They require manual tracking for route changes'."
  },
  {
    id: 159,
    question: "Which of the following is TRUE about React Router v6?",
    options: [
      "Route components are automatically lazy-loaded",
      "React Router only supports hash-based routing",
      "<Switch> is still used to group routes",
      "Routes must be wrapped in <Router> or <BrowserRouter>"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'Routes must be wrapped in <Router> or <BrowserRouter>'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 160,
    question: "How do you send POST data using Axios?",
    options: [
      "axios.write('url', data)",
      "axios.sendPost('url', data)",
      "axios.post('url', data)",
      "axios.get('url', data)"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'axios.post('url', data)'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 161,
    question: "What is the purpose of the @RequestBody annotation?",
    options: [
      "Maps the request body to a Java object",
      "Binds a query parameter to a method",
      "Injects beans into controller",
      "Validates request parameters"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'Maps the request body to a Java object'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 162,
    question: "What is returned by an Axios request?",
    options: [
      "String",
      "Object",
      "Array",
      "Promise"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'Promise'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 163,
    question: "Which HTTP method is used by default when making a fetch request?",
    options: [
      "POST",
      "GET",
      "DELETE",
      "PUT"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'GET'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 164,
    question: "What is a primary advantage of Single Page Applications (SPAs) compared to traditional multi-page applications?",
    options: [
      "They offer faster transitions between pages after the first load",
      "They require no JavaScript",
      "They offer faster initial page loads",
      "They reduce server-side processing for all requests"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là A: 'They offer faster transitions between pages after the first load'."
  },
  {
    id: 165,
    question: "What does the fetch() function in JavaScript return?",
    options: [
      "An XMLHttpRequest object",
      "A Promise",
      "A callback function",
      "A JSON object"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'A Promise'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 166,
    question: "Which of the following best explains why SPAs provide a better user experience?",
    options: [
      "They enable seamless navigation without full reloads",
      "They are always faster than any server-rendered app",
      "They use server-side rendering for every page",
      "They refresh the entire browser page on each request"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'They enable seamless navigation without full reloads'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 167,
    question: "What security issue is more pronounced in SPAs due to heavy client-side processing?",
    options: [
      "Server misconfiguration",
      "SSL certificate expiration",
      "Database injection",
      "Cross-Site Scripting (XSS)"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là D: 'Cross-Site Scripting (XSS)'."
  },
  {
    id: 168,
    question: "How can you handle errors in an Axios request?",
    options: [
      "Using .error()",
      "Using .catch()",
      "Using .handle()",
      "Using .fail()"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Using .catch()'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 169,
    question: "What is the purpose of the <Outlet /> component in nested routes?",
    options: [
      "It renders the matched child route element",
      "It fetches external data",
      "It acts as a fallback route",
      "It redirects to the home page"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'It renders the matched child route element'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 170,
    question: "What is one disadvantage of SPAs in terms of browser history and navigation?",
    options: [
      "They provide better back/forward navigation than traditional sites",
      "They cannot support routing",
      "They use standard browser navigation without modification",
      "Manual configuration is needed to manage browser history correctly"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là D: 'Manual configuration is needed to manage browser history correctly'."
  },
  {
    id: 171,
    question: "Which annotation would you use to create a REST endpoint that consumes only XML data?",
    options: [
      "@RequestMapping(produces = \"application/xml\")",
      "@GetMapping(consumes = \"application/json\")",
      "@PostMapping(produces = \"application/json\")",
      "@PostMapping(consumes = \"application/xml\")"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: '@PostMapping(consumes = \"application/xml\")'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 172,
    question: "What is the correct annotation to define a method that handles both JSON request and response formats?",
    options: [
      "@JsonRequest",
      "@PostMapping with @RequestBody and @ResponseBody",
      "@Consumes and @Produces",
      "@RequestBody"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '@PostMapping with @RequestBody and @ResponseBody'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 173,
    question: "What is the effect of using @RestController instead of @Controller?",
    options: [
      "It forces methods to return HTML views",
      "It applies @ResponseBody to all methods by default",
      "It disables automatic serialization",
      "It disables exception handling"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'It applies @ResponseBody to all methods by default'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 174,
    question: "What does \"unidirectional data flow\" in React mean?",
    options: [
      "Data flows only from server to client",
      "Data is shared globally across all components",
      "Data flows from parent to child via props",
      "Data flows only from child to parent"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Data flows from parent to child via props'."
  },
  {
    id: 175,
    question: "How can you set a default base URL in Axios?",
    options: [
      "axios.defaults.baseURL = 'https://api.example.com'",
      "axios.configure.baseURL = 'https://api.example.com'",
      "axios.setBaseURL('https://api.example.com')",
      "axios.baseURL('https://api.example.com')"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'axios.defaults.baseURL = 'https://api.example.com''. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 176,
    question: "Which of the following is the correct way to pass props from parent to child in React?",
    options: [
      "<Child prop=value />",
      "<Child {prop} />",
      "Child.prop = value",
      "prop.Child = value"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là A: '<Child prop=value />'."
  },
  {
    id: 177,
    question: "What does useEffect do in React?",
    options: [
      "Modifies props",
      "Runs side effects like fetching data",
      "Stores component state",
      "Renders the component conditionally"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Runs side effects like fetching data'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 178,
    question: "What is JSX in React?",
    options: [
      "A programming language",
      "A template engine",
      "A syntax extension for JavaScript",
      "A CSS preprocessor"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'A syntax extension for JavaScript'. JSX là cú pháp mở rộng cho phép viết HTML trực tiếp trong JavaScript."
  },
  {
    id: 179,
    question: "Which hook is used for managing state in a functional component?",
    options: [
      "useClass",
      "useEffect",
      "useState",
      "useReducer"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'useState'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 180,
    question: "What is the correct way to lift state up in React?",
    options: [
      "Store state in the child component",
      "Pass callback from parent to child",
      "Use Redux",
      "Store state in a global object"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Pass callback from parent to child'."
  },
  {
    id: 181,
    question: "Which lifecycle method is replaced by useEffect in functional components?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "shouldComponentUpdate",
      "getDerivedStateFromProps"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'componentDidMount'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 182,
    question: "Which of the following is used to handle routing in React apps?",
    options: [
      "React DOM",
      "React Router",
      "React Navigation",
      "React Redux"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'React Router'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 183,
    question: "How to update state in React?",
    options: [
      "Directly assign new value to state",
      "Use setState or useState setter",
      "Call render() method",
      "Use forceUpdate() method"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Use setState or useState setter'."
  },
  {
    id: 184,
    question: "What is a controlled component in React?",
    options: [
      "Component that stores data in global variables",
      "Component that doesn't use state",
      "Component whose input value is controlled by React state",
      "Component with internal timer"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Component whose input value is controlled by React state'."
  },
  {
    id: 185,
    question: "Which of the following is true about keys in React lists?",
    options: [
      "Keys must be random numbers",
      "Keys help React identify which items changed",
      "Keys are required only for the first element",
      "Keys are the same as props"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Keys help React identify which items changed'."
  },
  {
    id: 186,
    question: "What is the purpose of React Fragment (<></>)?",
    options: [
      "Wrap multiple elements without adding extra DOM nodes",
      "Replace div tags in HTML",
      "Create new component instances",
      "Improve routing"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là A: 'Wrap multiple elements without adding extra DOM nodes'."
  },
  {
    id: 187,
    question: "Which of the following is NOT a valid React Hook?",
    options: [
      "useReducer",
      "useMemo",
      "useFetch",
      "useEffect"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'useFetch'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 188,
    question: "Which statement is true about useState?",
    options: [
      "It can only store numbers",
      "It returns the state value and a function to update it",
      "It is used only in class components",
      "It creates side effects"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'It returns the state value and a function to update it'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 189,
    question: "In React, how do you conditionally render content?",
    options: [
      "Using if-else outside JSX",
      "Using ternary operator or && in JSX",
      "Using switch-case only",
      "React does not support conditional rendering"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Using ternary operator or && in JSX'."
  },
  {
    id: 190,
    question: "What is the virtual DOM in React?",
    options: [
      "A browser feature",
      "An actual copy of the DOM",
      "A lightweight copy of the real DOM used for performance",
      "A styling framework"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'A lightweight copy of the real DOM used for performance'."
  },
  {
    id: 191,
    question: "Which method is used to pass data from child to parent in React?",
    options: [
      "Using props",
      "Using callbacks passed from parent",
      "Using context",
      "Direct variable reference"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Using callbacks passed from parent'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 192,
    question: "Which hook is used for performance optimization by memoizing values?",
    options: [
      "useEffect",
      "useState",
      "useMemo",
      "useReducer"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'useMemo'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 193,
    question: "In React Router, what does the <Switch> component do?",
    options: [
      "Groups multiple routes",
      "Switches between states",
      "Renders the first matching route",
      "Used to toggle views"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Renders the first matching route'. React Router xử lý điều hướng trang phía client (CSR)."
  },
  {
    id: 194,
    question: "What does lifting state up mean in React?",
    options: [
      "Moving state from parent to child",
      "Moving state to global context",
      "Moving state to the nearest common ancestor",
      "Moving state to Redux store"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'Moving state to the nearest common ancestor'."
  },
  {
    id: 195,
    question: "Which of the following is true about controlled components?",
    options: [
      "Their state is managed by the DOM",
      "Their state is managed by React",
      "They use refs to access values",
      "They can't be used in forms"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Their state is managed by React'."
  },
  {
    id: 196,
    question: "Which annotation is used to describe the request body content in an OpenAPI operation?",
    options: [
      "@ApiBody",
      "@RequestContent",
      "@RequestBody (from swagger package)",
      "@RequestDoc"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: '@RequestBody (from swagger package)'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 197,
    question: "What is the purpose of the @DBRef annotation in Spring Data MongoDB?",
    options: [
      "To map embedded documents",
      "To index a document",
      "To define a relationship between documents via reference",
      "To ignore the field during persistence"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'To define a relationship between documents via reference'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 198,
    question: "How does MongoDB ensure high availability with replication?",
    options: [
      "By using SQL mirroring",
      "By using cron jobs for backup",
      "Through replica sets with automatic failover",
      "By distributing indexes across servers"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Through replica sets with automatic failover'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 199,
    question: "In Spring Boot, which starter dependency is used to include MongoDB support?",
    options: [
      "spring-boot-mongodb",
      "spring-boot-starter-data-mongodb",
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-mongo"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'spring-boot-starter-data-mongodb'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 200,
    question: "What Spring configuration property changes the default OpenAPI endpoint?",
    options: [
      "swagger.api.url",
      "openapi.swagger.path",
      "spring.openapi.path",
      "springdoc.api-docs.path"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'springdoc.api-docs.path'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 201,
    question: "What is the purpose of HttpSession.invalidate() in session-based security?",
    options: [
      "Remove the current session and all its attributes",
      "Restart the session with the same session ID",
      "Encrypt the session data",
      "Extend session timeout"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'Remove the current session and all its attributes'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 202,
    question: "How do you group APIs in Swagger UI using Springdoc OpenAPI?",
    options: [
      "Using @Group",
      "Using @Tag(name = 'GroupName')",
      "Using @SwaggerGroup",
      "Using application.yaml grouping"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Using @Tag(name = 'GroupName')'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 203,
    question: "What happens if a client sends a request without an Authorization header and the server requires Basic Auth?",
    options: [
      "Server responds with 200 OK and empty body",
      "Server responds with 401 Unauthorized and WWW-Authenticate header",
      "Server closes the connection immediately",
      "Server automatically redirects to login page"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Server responds with 401 Unauthorized and WWW-Authenticate header'."
  },
  {
    id: 204,
    question: "What does @SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT) do?",
    options: [
      "Starts the application with no web environment",
      "Fails the test if no port is provided manually",
      "Disables the web server",
      "Starts the embedded server on a random port"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'Starts the embedded server on a random port'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 205,
    question: "Which dependency is commonly used in Spring Boot to integrate OpenAPI 3?",
    options: [
      "springdoc-openapi-ui",
      "spring-boot-devtools",
      "springfox-swagger2",
      "spring-boot-starter-jdbc"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'springdoc-openapi-ui'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 206,
    question: "Which command is used to insert a single document into a collection?",
    options: [
      "db.collection.create()",
      "db.collection.insertOne()",
      "db.collection.insertDocument()",
      "db.collection.add()"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'db.collection.insertOne()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 207,
    question: "You want to inject a TestRestTemplate in a @SpringBootTest. What is required?",
    options: [
      "Use @MockBean",
      "Use webEnvironment = WebEnvironment.NONE",
      "Use @WebMvcTest",
      "Use webEnvironment = WebEnvironment.RANDOM_PORT"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'Use webEnvironment = WebEnvironment.RANDOM_PORT'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 208,
    question: "What does the MongoTemplate class provide in Spring Data MongoDB?",
    options: [
      "Mapping of SQL queries to documents",
      "Automatic index creation",
      "A low-level interface to MongoDB operations",
      "Automatic data validation"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'A low-level interface to MongoDB operations'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 209,
    question: "Which class is used to create complex criteria queries with MongoTemplate?",
    options: [
      "Criteria",
      "QueryDSL",
      "MongoQuery",
      "CriteriaBuilder"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'Criteria'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 210,
    question: "Which annotation is used to define a MongoDB document in Spring Data MongoDB?",
    options: [
      "@Collection",
      "@MongoEntity",
      "@Document",
      "@Entity"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: '@Document'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 211,
    question: "Which interface in Spring Data MongoDB is used to perform CRUD operations?",
    options: [
      "JpaRepository",
      "MongoRepository",
      "Repository",
      "CrudRepository"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'MongoRepository'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 212,
    question: "When used with JUnit 5, which annotation is commonly paired with @SpringBootTest?",
    options: [
      "@MockBean",
      "@ExtendWith(SpringExtension.class)",
      "@DataJpaTest",
      "@TestConfiguration"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: '@ExtendWith(SpringExtension.class)'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 213,
    question: "How can a server prompt the browser to show a login dialog for Basic Auth?",
    options: [
      "By including WWW-Authenticate: Basic realm='RealmName' in a 401 response",
      "By sending a Set-Cookie header with a token",
      "By returning 403 with Login-Required: true",
      "By using JavaScript redirect"
    ],
    answer: 0,
    explanation: "Đáp án chính xác là A: 'By including WWW-Authenticate: Basic realm='RealmName' in a 401 response'."
  },
  {
    id: 214,
    question: "In Basic Authentication, what does the format of the Authorization header look like?",
    options: [
      "Authorization: Bearer (token)",
      "Authorization: Basic (base64(username:password))",
      "Authorization: Token username:password",
      "Auth: Basic (JWT)"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'Authorization: Basic (base64(username:password))'."
  },
  {
    id: 215,
    question: "Which of the following best describes a compound index?",
    options: [
      "An index with a TTL (Time To Live)",
      "A temporary index created at runtime",
      "An index on an embedded document only",
      "An index on multiple fields in a document"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là D: 'An index on multiple fields in a document'."
  },
  {
    id: 216,
    question: "Which property is used in application.properties to set the MongoDB database name?",
    options: [
      "spring.data.mongo.name",
      "spring.mongodb.dbname",
      "spring.data.mongodb.database",
      "spring.mongo.database"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'spring.data.mongodb.database'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 217,
    question: "How can you hide an endpoint from OpenAPI documentation?",
    options: [
      "Disable the controller",
      "Use @IgnoreMapping",
      "Add @Hidden annotation",
      "Rename the method"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Add @Hidden annotation'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 218,
    question: "When using MongoTemplate, how would you insert a new document?",
    options: [
      "mongoTemplate.create(object)",
      "mongoTemplate.insert(object)",
      "mongoTemplate.save(object)",
      "mongoTemplate.add(object)"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'mongoTemplate.save(object)'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 219,
    question: "Which configuration allows @SpringBootTest to test controller endpoints using real HTTP calls?",
    options: [
      "webEnvironment = NONE",
      "webEnvironment = MOCK",
      "useMockMvc = true",
      "webEnvironment = DEFINED_PORT"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: 'webEnvironment = DEFINED_PORT'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 220,
    question: "Which of the following is used to create an index on a field in MongoDB?",
    options: [
      "db.collection.setIndex()",
      "db.collection.index()",
      "db.collection.createIndex()",
      "db.collection.makeIndex()"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'db.collection.createIndex()'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 221,
    question: "In MongoDB, which of the following allows for joining documents from two collections?",
    options: [
      "$merge",
      "$match",
      "$unwind",
      "$lookup"
    ],
    answer: 3,
    explanation: "Đáp án đúng là D: '$lookup'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 222,
    question: "Which of the following is TRUE about MongoDB schema?",
    options: [
      "MongoDB supports relational schema only",
      "Collections in MongoDB can have documents with different fields",
      "MongoDB requires a fixed schema",
      "All fields in documents must be predefined"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Collections in MongoDB can have documents with different fields'. Đây là câu lệnh / cấu trúc chuẩn trong cơ sở dữ liệu MongoDB."
  },
  {
    id: 223,
    question: "Which HTTP header is commonly used to transmit the session ID?",
    options: [
      "Authorization",
      "Cookie",
      "X-Session-Token",
      "Set-Header"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Cookie'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 224,
    question: "Which of the following is used to return only selected fields in a MongoDB query?",
    options: [
      "$select",
      "ReturnFields",
      "Projection",
      "Subset"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: 'Projection'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 225,
    question: "Which index type is used to ensure that a field's value is unique across documents?",
    options: [
      "Compound index",
      "Unique index",
      "Hashed index",
      "Text index"
    ],
    answer: 1,
    explanation: "Đáp án đúng là B: 'Unique index'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 226,
    question: "Which of the following is false about Basic Authentication?",
    options: [
      "It does not require session on server",
      "It is stateless",
      "It can be used with REST APIs",
      "It is considered more secure than OAuth2"
    ],
    answer: 3,
    explanation: "Đáp án chính xác là D: 'It is considered more secure than OAuth2'."
  },
  {
    id: 227,
    question: "Which of the following annotations can be used instead of @SpringBootTest for testing only the web layer?",
    options: [
      "@Configuration",
      "@DataJpaTest",
      "@WebMvcTest",
      "@EnableAutoConfiguration"
    ],
    answer: 2,
    explanation: "Đáp án đúng là C: '@WebMvcTest'. Đây là Hook/quy tắc chuẩn được định nghĩa trong React."
  },
  {
    id: 228,
    question: "What does ResponseEntity provide in a REST controller method?",
    options: [
      "A flexible way to set body, status, and headers",
      "Only status codes",
      "A way to redirect to views",
      "Only body"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'A flexible way to set body, status, and headers'. Đây là annotation / cấu trúc chuẩn trong Spring Boot REST API."
  },
  {
    id: 229,
    question: "Why are SPAs considered ideal for building responsive web applications?",
    options: [
      "They automatically convert to mobile apps",
      "They provide dynamic and fast content updates",
      "They completely avoid CSS",
      "They can only be accessed on mobile devices"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: 'They provide dynamic and fast content updates'."
  },
  {
    id: 230,
    question: "Which of the following is the correct way to make a GET request using Axios?",
    options: [
      "axios.get('https://api.example.com/data')",
      "axios.send('GET', 'https://api.example.com/data')",
      "axios.fetch('https://api.example.com/data')",
      "fetch.axios('https://api.example.com/data')"
    ],
    answer: 0,
    explanation: "Đáp án đúng là A: 'axios.get('https://api.example.com/data')'. Phương thức/giao thức này dùng để truyền nhận dữ liệu HTTP."
  },
  {
    id: 231,
    question: "How do SPAs typically reduce server load?",
    options: [
      "By disabling server-side APIs",
      "By caching everything on the server",
      "By offloading routing and rendering to the client",
      "By avoiding use of databases"
    ],
    answer: 2,
    explanation: "Đáp án chính xác là C: 'By offloading routing and rendering to the client'."
  },
  {
    id: 232,
    question: "How can you bind a custom header value from a request to a method parameter?",
    options: [
      "@HeaderParam",
      "@RequestHeader",
      "@RequestBody",
      "@RequestParam"
    ],
    answer: 1,
    explanation: "Đáp án chính xác là B: '@RequestHeader'."
  }
];
