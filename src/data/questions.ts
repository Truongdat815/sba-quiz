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
    explanation: "ReactJS is an open-source JavaScript library focused on building interactive user interfaces (UIs)."
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
    explanation: "The Virtual DOM calculates minimal diffs and updates only changed elements in the real DOM, boosting performance."
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
    explanation: "Virtual DOM is a cornerstone core feature of React for high-performance UI rendering."
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
    explanation: "The dependency array tells React to re-trigger the useEffect callback only when specified values change."
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
    explanation: "onClick={handleClick()} executes the function immediately during rendering instead of passing a function handler."
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
    explanation: "Curly braces {} are used in JSX to embed any valid JavaScript expression or variable."
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
    explanation: "Responsiveness allows components to dynamically adapt to varying screen widths and viewports."
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
    explanation: "React-Bootstrap provides reusable, styled Bootstrap components designed specifically for React."
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
    explanation: "<Button> is a standard React-Bootstrap UI component."
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
    explanation: "In functional components, state updates are performed using the updater function provided by useState()."
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
    explanation: "Direct state mutation in functional components does not notify React, so the update is ignored and no re-render happens."
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
    explanation: "useEffect is designed specifically for side effects in React functional components."
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
    explanation: "Props are passed as attributes when instantiating component tags in JSX."
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
    explanation: "In ES6 JavaScript modules, 'export default MyComponent;' exports the main symbol."
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
    explanation: "useMemo caches the result of expensive calculations between re-renders."
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
    explanation: "Client-side routing allows navigating between pages without requesting full HTML pages from the server."
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
    explanation: "In React Router v6, useParams() returns an object of key/value pairs of dynamic URL parameters."
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
    explanation: "Route parameters are prefixed with a colon in path strings, e.g. path=\"/users/:id\"."
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
    explanation: "Content-Type: application/json tells the client that the payload is JSON formatted."
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
    explanation: "Backend servers store/process data, execute business logic, and handle API endpoints."
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
    explanation: "HTTP (Hypertext Transfer Protocol) transfers data across the web between clients and servers."
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
    explanation: "'await' pauses the execution of async functions until the Promise settles."
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
    explanation: "'new Promise((resolve, reject) => ...)' constructs a new JavaScript Promise object."
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
    explanation: "A wildcard route <Route path=\"*\" element={<NotFound />} /> matches any URL not explicitly defined."
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
    explanation: "@RequestBody maps the incoming HTTP request payload body to a Java object parameter."
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
    explanation: "PUT is designed to replace an entire resource payload, whereas PATCH updates selected fields."
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
    explanation: "@PathVariable extracts placeholders from the URI path template (e.g. /api/users/{id})."
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
    explanation: "REST API documentation describes endpoints, methods, and payloads, not internal database schemas."
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
    explanation: "@ApiResponses and @ApiResponse document HTTP response codes and descriptions in Swagger/OpenAPI."
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
    explanation: "The tags attribute in @Tag annotations groups related API endpoints together in Swagger 3."
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
    explanation: "spring-boot-starter-test contains testing libraries like JUnit, Hamcrest, Mockito, and Spring Test."
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
    explanation: "Slice avoids executing an extra count query, making it faster than Page when total element count is unnecessary."
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
    explanation: "Unit testing tests individual methods or classes in isolation."
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
    explanation: "JPA simplifies mapping Java objects to database tables for persistent data operations."
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
    explanation: "JPA provides an Object-Relational Mapping (ORM) framework to map OOP classes to relational database tables."
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
    explanation: "ReactJS powers the client-side single page application (SPA) user interface and user interactions."
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
    explanation: "axios.put() (for full updates) or axios.patch() (for partial updates) update existing server resources."
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
    explanation: "Spring Security provides comprehensive authentication (who you are) and authorization (what you can do) controls."
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
    explanation: "The JWT header contains metadata specifying the token type (JWT) and signing algorithm (e.g. HS256)."
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
    explanation: "After setting up dependencies, building the JWT utility token provider class is the core second step."
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
    explanation: "Optimistic locking checks for version conflicts before writing changes, preventing concurrent overwrite conflicts."
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
    explanation: "hbm2ddl automatically generates or updates DDL database table schemas from entity mappings."
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
    explanation: "org.hibernate.Transaction manages database transaction boundaries (begin, commit, rollback)."
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
    explanation: "<mapping resource=\"...\"> specifies the XML file mapping a Java persistent class to a relational table."
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
    explanation: "db.collection.find() selects documents from a MongoDB collection."
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
    explanation: "MongoTemplate is the primary implementation of MongoOperations for low-level MongoDB document operations."
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
    explanation: "Spring Data JPA parses findByPublishedDateAfterOrderByTitleAsc derived query method names."
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
    explanation: "MongoTemplate offers fine-grained control and flexibility for custom criteria and complex aggregation operations."
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
    explanation: "MongoDB Atlas is the fully-managed multi-cloud database service created by MongoDB."
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
    explanation: "User credentials in the connection URI authenticate the client application with the MongoDB Atlas cluster."
  }
];
