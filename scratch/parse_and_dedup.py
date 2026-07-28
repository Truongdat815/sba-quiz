import json
import re

# Raw text from user prompts
raw_text_1 = """
Which React feature allows writing HTML-like syntax inside JavaScript?
A. DOM Script
B. JSX
C. TypeScript
D. HTML Parser
JSX


What is the main building block used to create UI in React?
A. Controllers
B. Templates
C. Components
D. Modules
Components


Which hook is used to read values from a React context?
A. useState()
B. useContext()
C. useRef()
D. useEffect()
useContext()


Which hook is used for performing side effects such as data fetching?
A. useEffect()
B. useCallback()
C. useMemo()
D. useLayoutEffect()
useEffect()


Which rule of hooks is correct?
A. Hooks inside loops
B. Hooks in normal functions
C. Hooks at the top level
D. Hooks inside conditions
Hooks at the top level


Which hook manages local component state?
A. useState()
B. useLocalStore()
C. useMemory()
D. useValue()
useState()


What does useReducer() return?
A. state and dispatch
B. state only
C. reducer and state
D. dispatch only
state and dispatch


What is the main purpose of a custom hook?
A. Manipulate DOM
B. Reuse logic
C. Replace Redux
D. Handle routing
Reuse logic


What are props?
A. Internal state
B. External data
C. DOM methods
D. Component methods
External data


Props in React are:
A. Mutable
B. Read-only
C. Write-only
D. Temporary
Read-only


Which type supports lifecycle methods?
A. Functional
B. Hook
C. Class
D. Stateless
Class


Which lifecycle method runs after first render?
A. componentDidUpdate
B. componentDidMount
C. componentWillUnmount
D. constructor
componentDidMount


Which attribute required for lists?
A. id
B. index
C. value
D. key
key


Which router wraps app?
A. RouterProvider
B. BrowserRouter
C. PageRouter
D. Route
BrowserRouter


Which component holds routes?
A. RouteList
B. Switch
C. Routes
D. Router
Routes


element prop defines?
A. Route style
B. URL path
C. Component to render
D. Request method
Component to render


Hook for navigation?
A. useRoute()
B. useNavigate()
C. useNavLink()
D. useSwitch()
useNavigate()


Hook for dynamic params?
A. useLocation()
B. useInfo()
C. useParams()
D. useRouteMatch()
useParams()


Component for redirect?
A. Switch
B. Redirect
C. Navigate
D. Route
Navigate


Advantage of SPA?
A. Full reload
B. Fast navigation
C. No JS
D. Better SEO
Fast navigation


CSR describes?
A. Server renders HTML
B. Browser renders UI
C. HTML by PHP
D. Rendering only server
Browser renders UI


Realtime tech?
A. Axios
B. Fetch
C. WebSockets
D. HTTP GET
WebSockets


Update resource?
A. GET
B. POST
C. PUT
D. CONNECT
PUT


Delete resource?
A. REMOVE
B. DELETE
C. ERASE
D. PURGE
DELETE


Primary REST format?
A. XML
B. CSV
C. JSON
D. TXT
JSON


201 status means?
A. OK
B. Created
C. No content
D. Server error
Created


@RestController does?
A. Declares controller
B. RestBody
C. API mapping
D. Entity mapping
API mapping


@PathVariable does?
A. Extract query
B. Extract path
C. Extract body
D. Extract header
Extract path


@RequestBody does?
A. Bind JSON
B. Bind XML
C. Bind header
D. Bind path
Bind JSON


@GetMapping does?
A. Maps POST
B. Maps GET
C. Maps DELETE
D. Maps PUT
Maps GET


Business logic layer?
A. Controller
B. Service
C. Repository
D. Client
Service


Database layer?
A. Service
B. Repository
C. Controller
D. Middleware
Repository


Purpose of @ResponseStatus?
A. Add headers
B. Set status code
C. Map controller
D. Validate request
Set status code


Tool for testing REST?
A. React DevTools
B. Postman
C. Bootstrap
D. Axios
Postman


Parse JSON using Fetch?
A. parseJson()
B. toJSON()
C. text()
D. json()
json()


Library simplifies HTTP?
A. Axios
B. Lodash
C. Redux
D. Vite
Axios


Advantage of Axios?
A. No promises
B. Auto JSON parsing
C. UI elements
D. No JS needed
Auto JSON parsing


Responsive container?
A. .grid
B. .container-fluid
C. .box
D. .layout
.container-fluid


Grid layout components?
A. Box
B. Layout
C. Row & Col
D. GridView
Row & Col


Bootstrap message component?
A. WarningPanel
B. Alert
C. Notice
D. Card
Alert


Bootstrap grouped content?
A. Panel
B. Card
C. Box
D. Group
Card


Virtual DOM improves?
A. SEO
B. Server load
C. UI render
D. Database
UI render


One-way data binding?
A. UI updates state
B. State updates UI
C. One direction
D. Auto props
One direction


Lifting state up?
A. Performance
B. Share state
C. Remove props
D. Global state
Share state


useRef stores?
A. Files
B. DOM ref
C. State
D. CSS
DOM ref


Memoize computations?
A. useCallback
B. useEffect
C. useMemo
D. useReducer
useMemo


Render child routes?
A. Children
B. Outlet
C. Render
D. Next
Outlet


REST stands for?
A. SOAP
B. Representational State Transfer
C. Microservices
D. GraphQL
Representational State Transfer


Client error?
A. 100
B. 200
C. 404
D. 503
404


Statelessness means?
A. Server stores session
B. Each request has all info
C. Tracks previous
D. Browser stores state
Each request has all info


Which Hook is used for memoizing expensive computations?
A. useMemo()
B. useCallback()
C. useReducer()
D. useRef()
useMemo()


What is the advantage of using a SPA architecture with React and Spring Boot?
A. Increased server load
B. Improved user experience due to faster client-side rendering
C. Reduced application security
D. Increased backend complexity
Improved user experience due to faster client-side rendering


In React Router v6, which component is used to programmatically navigate to a different route?
A. <Link>
B. <Route>
C. <Switch>
D. <Navigate>
<Navigate>


Which of the following is a valid way to handle a Promise rejection?
A. promise.error(err => {})
B. promise.reject(err => {})
C. promise.catch(err => {})
D. promise.fail(err => {})
promise.catch(err => {})


Which class in Spring Data MongoDB provides a template for performing low-level MongoDB operations?
A. MongoRepository
B. MongoClient
C. MongoTemplate
D. SimpleMongoRepository
MongoTemplate


What is a collection in MongoDB?
A. A single document
B. A group of related documents
C. A database server
D. A query result
A group of related documents


What is the primary role of a backend server in a typical React application?
A. Render React components
B. Store/process data & handle API requests
C. Define client-side routing
D. Manage component state
Store/process data & handle API requests


What is the purpose of @SpringBootTest annotation?
A. Mock dependencies
B. Run unit tests
C. Load full Spring context for integration tests
D. Define data models
Load full Spring context for integration tests


What is the primary purpose of client-server communication in a React application?
A. Define CSS
B. Fetch & send data between client and server
C. Manage component state
D. Handle server-side rendering
Fetch & send data between client and server


What is the purpose of the React-Bootstrap <Container> component?
A. Manage DB connections
B. Provide responsive layout container
C. Define CSS
D. Replace React Router
Provide responsive layout container


Which architectural style does REST belong to?
A. Monolithic
B. Microservices
C. Representational State Transfer
D. SOA
Representational State Transfer


What is a key advantage of server-side routing?
A. Faster CSR
B. Better SEO and initial page load
C. Reduced server load
D. Simplified client code
Better SEO and initial page load


What is the benefit of using <Link> over <a> in React Router?
A. Full page reload
B. Prevent reload & allow client-side routing
C. <a> handles routing automatically
D. No difference
Prevent reload & allow client-side routing


How can you customize title/description of API in Swagger 3?
A. @Operation
B. @Schema
C. @OpenAPIDefinition
D. @ApiResponse
@OpenAPIDefinition


Which is a valid way to update state in a Functional Component?
A. this.state="new"
B. this.setState("new")
C. const [setS]=useState("old")
D. state.update("new")
C. const [s,setS]=useState("old"); setS("new");


Which Spring Data JPA interface performs CRUD operations?
A. CrudRepository
B. ServiceRepository
C. ControllerRepository
D. EntityRepository
CrudRepository


Purpose of hibernate.dialect property?
A. Specify DB driver
B. Define SQL dialect
C. Map Java classes
D. Configure session factory
Define SQL dialect


How does MongoRepository simplify data access?
A. Complex aggregations
B. Auto-generate CRUD methods
C. Manage DB connection
D. Handle BSON manually
Auto-generate CRUD methods


Benefit of separating layers in 3-layer architecture?
A. Increased complexity
B. Reduced maintainability
C. Improved organization & reusability
D. Tighter coupling
Improved organization & reusability


Which tool inspects React component hierarchy/state?
A. Browser DevTools
B. React Developer Tools
C. Node debugger
D. CSS inspector
React Developer Tools


What is the role of Hibernate Session object?
A. Manage transactions
B. Interact with DB & perform CRUD
C. Store configs
D. Cache queries
Interact with DB & perform CRUD


What is the purpose of React components?
A. Create reusable UI blocks
B. Handle backend logic
C. Manage SQL connections
D. Serve HTML from server
A. Create reusable UI blocks


Which hook is used to manage internal state?
A. useState()
B. useEffect()
C. useMemo()
D. useRef()
A. useState()


Which hook performs side effects?
A. useCallback()
B. useEffect()
C. useLayout()
D. useData()
B. useEffect()


Which hook reads context values?
A. useParams()
B. useContext()
C. useRef()
D. useReducer()
B. useContext()


What does Virtual DOM improve?
A. SEO
B. Database access
C. UI performance
D. Server rendering
C. UI performance


Which file defines all main routes in React Router v6?
A. App.js
B. index.js
C. routes.js
D. AppRoutes.jsx
D. AppRoutes.jsx


Which React Router component renders child routes?
A. <Child>
B. <Outlet>
C. <SubRoute>
D. <Switch>
B. <Outlet>


What is a SPA?
A. An app that reloads pages
B. A single HTML shell updated dynamically
C. A backend REST API
D. An SSR-only site
B. A single HTML shell updated dynamically


What is the main limitation of SPA?
A. Slow navigation
B. Poor SEO if not optimized
C. No CSS
D. Cannot call APIs
B. Poor SEO if not optimized


Which HTTP method is idempotent?
A. POST
B. PUT
C. PATCH
D. CONNECT
B. PUT


Which HTTP code means "Created"?
A. 200
B. 201
C. 404
D. 503
B. 201


Which annotation creates a REST controller?
A. @Controller
B. @RestController
C. @ResponseBody
D. @Service
B. @RestController


Which annotation binds JSON to a Java object?
A. @PathVariable
B. @RequestParam
C. @RequestBody
D. @ModelAttribute
C. @RequestBody


Which annotation maps GET requests?
A. @PostMapping
B. @GetMapping
C. @PutMapping
D. @Mapping
B. @GetMapping


Which layer contains business logic?
A. Repository
B. Service
C. Controller
D. Model
B. Service


Which layer handles database operations?
A. Controller layer
B. Service layer
C. Repository layer
D. Entity layer
C. Repository layer


What is Swagger used for?
A. Logging
B. API documentation
C. SQL queries
D. Testing UI
B. API documentation


Swagger UI is accessed by default at:
A. /docs
B. /documentation
C. /swagger-ui/index.html
D. /openapi
C. /swagger-ui/index.html


What is JWT mainly used for?
A. Data storage
B. Authentication
C. CSS styling
D. Routing
B. Authentication


Which security method is most secure?
A. HTTP Basic
B. Session ID
C. JWT over HTTPS
D. No authentication
C. JWT over HTTPS


Which authentication uses cookies?
A. Digest Auth
B. JWT
C. OAuth2
D. Session-based auth
D. Session-based auth


Which Spring annotation defines security configuration?
A. @Bean
B. @Configuration
C. @SecurityScheme
D. @EnableWebSecurity
D. @EnableWebSecurity


Which MongoDB structure stores documents?
A. Table
B. Collection
C. Schema
D. Sequence
B. Collection


MongoDB stores data in:
A. Rows
B. Nodes
C. JSON-like documents
D. CSV files
C. JSON-like documents


Which MongoDB CRUD operation inserts a document?
A. updateOne()
B. deleteOne()
C. insertOne()
D. findOne()
C. insertOne()


What is Hibernate used for?
A. Create HTML
B. Map Java objects to DB tables
C. Build REST APIs
D. Create CSS
B. Map Java objects to DB tables


What file configures Hibernate?
A. hibernate.xml
B. config.properties
C. hibernate.cfg.xml
D. database.xml
C. hibernate.cfg.xml


Which annotation maps a class to a DB table?
A. @Entity
B. @Table
C. @Model
D. @Database
A. @Entity


Which annotation maps a primary key?
A. @Column
B. @Id
C. @PK
D. @Key
B. @Id
"""

raw_text_2 = """
Which package is commonly used for routing in React applications?
A. react-navigation
B. react-router-dom
C. react-router-native
D. react-router-core
B. react-router-dom


Which of the following is the correct way to handle a successful fetch request?
A. fetch(url).then(response => response.json()).then(data => console.log(data));
B. fetch(url).then(data => data.json()).then(console.log(data));
C. fetch(url).data().then(console.log);
D. fetch(url).json().then(data => console.log(data));
A. fetch(url).then(response => response.json()).then(data => console.log(data));


What is the purpose of the @RequestParam annotation?
A. Maps headers to method parameters
B. Binds form data to method parameters
C. Maps path variables to fields
D. Maps query parameters to method parameters
D. Maps query parameters to method parameters


Which Spring annotation is used to map HTTP GET requests to a method?
A. @RequestGet
B. @Get
C. @HttpGet
D. @GetMapping
D. @GetMapping


Which HTTP methods are supported by Axios?
A. Only GET and POST in the browser
B. GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
C. GET, POST only
D. GET, POST, DELETE only
B. GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD


How can you specify the response status code in a REST controller?
A. By using HttpServletResponse
B. You cannot control the status code
C. By using @ResponseStatus annotation
D. By returning an int
C. By using @ResponseStatus annotation


What is the primary purpose of a RESTful web service in Spring Boot?
A. To render HTML content
B. To provide data through JSON or XML over HTTP
C. To connect to a database
D. To secure the application with OAuth2
B. To provide data through JSON or XML over HTTP


Which of the following annotations would you use to return a specific HTTP status from a method?
A. @RestStatus
B. @StatusCode
C. @ResponseStatus
D. @HttpStatus
C. @ResponseStatus


Which annotation combination is used for a method that handles POST requests and accepts a request body?
A. @PostMapping and @RequestBody
B. @GetMapping and @PathVariable
C. @PostMapping and @RequestParam
D. @PostMapping and @ResponseBody
A. @PostMapping and @RequestBody


How do SPAs affect analytics and tracking tools like Google Analytics?
A. Analytics tools natively support SPAs without setup
B. They simplify tracking because everything is on one page
C. SPAs automatically log page views
D. They require manual tracking for route changes
D. They require manual tracking for route changes


Which of the following is TRUE about React Router v6?
A. Route components are automatically lazy-loaded
B. React Router only supports hash-based routing
C. <Switch> is still used to group routes
D. Routes must be wrapped in <Router> or <BrowserRouter>
D. Routes must be wrapped in <Router> or <BrowserRouter>


How do you send POST data using Axios?
A. axios.write('url', data)
B. axios.sendPost('url', data)
C. axios.post('url', data)
D. axios.get('url', data)
C. axios.post('url', data)


What is the purpose of the @RequestBody annotation?
A. Maps the request body to a Java object
B. Binds a query parameter to a method
C. Injects beans into controller
D. Validates request parameters
A. Maps the request body to a Java object


What is returned by an Axios request?
A. String
B. Object
C. Array
D. Promise
D. Promise


Which HTTP method is used by default when making a fetch request?
A. POST
B. GET
C. DELETE
D. PUT
B. GET


What is a primary advantage of Single Page Applications (SPAs) compared to traditional multi-page applications?
A. They offer faster transitions between pages after the first load
B. They require no JavaScript
C. They offer faster initial page loads
D. They reduce server-side processing for all requests
A. They offer faster transitions between pages after the first load


What does the fetch() function in JavaScript return?
A. An XMLHttpRequest object
B. A Promise
C. A callback function
D. A JSON object
B. A Promise


Which of the following best explains why SPAs provide a better user experience?
A. They enable seamless navigation without full reloads
B. They are always faster than any server-rendered app
C. They use server-side rendering for every page
D. They refresh the entire browser page on each request
A. They enable seamless navigation without full reloads


What security issue is more pronounced in SPAs due to heavy client-side processing?
A. Server misconfiguration
B. SSL certificate expiration
C. Database injection
D. Cross-Site Scripting (XSS)
D. Cross-Site Scripting (XSS)


How can you handle errors in an Axios request?
A. Using .error()
B. Using .catch()
C. Using .handle()
D. Using .fail()
B. Using .catch()


What is the purpose of the <Outlet /> component in nested routes?
A. It renders the matched child route element
B. It fetches external data
C. It acts as a fallback route
D. It redirects to the home page
A. It renders the matched child route element


What is one disadvantage of SPAs in terms of browser history and navigation?
A. They provide better back/forward navigation than traditional sites
B. They cannot support routing
C. They use standard browser navigation without modification
D. Manual configuration is needed to manage browser history correctly
D. Manual configuration is needed to manage browser history correctly


Which annotation would you use to create a REST endpoint that consumes only XML data?
A. @RequestMapping(produces = "application/xml")
B. @GetMapping(consumes = "application/json")
C. @PostMapping(produces = "application/json")
D. @PostMapping(consumes = "application/xml")
D. @PostMapping(consumes = "application/xml")


What is the correct annotation to define a method that handles both JSON request and response formats?
A. @JsonRequest
B. @PostMapping with @RequestBody and @ResponseBody
C. @Consumes and @Produces
D. @RequestBody
B. @PostMapping with @RequestBody and @ResponseBody


What is the effect of using @RestController instead of @Controller?
A. It forces methods to return HTML views
B. It applies @ResponseBody to all methods by default
C. It disables automatic serialization
D. It disables exception handling
B. It applies @ResponseBody to all methods by default


What does "unidirectional data flow" in React mean?
A. Data flows only from server to client
B. Data is shared globally across all components
C. Data flows from parent to child via props
D. Data flows only from child to parent
C. Data flows from parent to child via props


How can you set a default base URL in Axios?
A. axios.defaults.baseURL = 'https://api.example.com'
B. axios.configure.baseURL = 'https://api.example.com'
C. axios.setBaseURL('https://api.example.com')
D. axios.baseURL('https://api.example.com')
A. axios.defaults.baseURL = 'https://api.example.com'


Which of the following is the correct way to pass props from parent to child in React?
A. <Child prop=value />
B. <Child {prop} />
C. Child.prop = value
D. prop.Child = value
A. <Child prop=value />


What does useEffect do in React?
A. Modifies props
B. Runs side effects like fetching data
C. Stores component state
D. Renders the component conditionally
B. Runs side effects like fetching data


What is JSX in React?
A. A programming language
B. A template engine
C. A syntax extension for JavaScript
D. A CSS preprocessor
C. A syntax extension for JavaScript


Which hook is used for managing state in a functional component?
A. useClass
B. useEffect
C. useState
D. useReducer
C. useState


What is the correct way to lift state up in React?
A. Store state in the child component
B. Pass callback from parent to child
C. Use Redux
D. Store state in a global object
B. Pass callback from parent to child


Which lifecycle method is replaced by useEffect in functional components?
A. componentWillMount
B. componentDidMount
C. shouldComponentUpdate
D. getDerivedStateFromProps
B. componentDidMount


Which of the following is used to handle routing in React apps?
A. React DOM
B. React Router
C. React Navigation
D. React Redux
B. React Router


How to update state in React?
A. Directly assign new value to state
B. Use setState or useState setter
C. Call render() method
D. Use forceUpdate() method
B. Use setState or useState setter


What is a controlled component in React?
A. Component that stores data in global variables
B. Component that doesn't use state
C. Component whose input value is controlled by React state
D. Component with internal timer
C. Component whose input value is controlled by React state


Which of the following is true about keys in React lists?
A. Keys must be random numbers
B. Keys help React identify which items changed
C. Keys are required only for the first element
D. Keys are the same as props
B. Keys help React identify which items changed


What is the purpose of React Fragment (<></>)?
A. Wrap multiple elements without adding extra DOM nodes
B. Replace div tags in HTML
C. Create new component instances
D. Improve routing
A. Wrap multiple elements without adding extra DOM nodes


Which of the following is NOT a valid React Hook?
A. useReducer
B. useMemo
C. useFetch
D. useEffect
C. useFetch


Which statement is true about useState?
A. It can only store numbers
B. It returns the state value and a function to update it
C. It is used only in class components
D. It creates side effects
B. It returns the state value and a function to update it


In React, how do you conditionally render content?
A. Using if-else outside JSX
B. Using ternary operator or && in JSX
C. Using switch-case only
D. React does not support conditional rendering
B. Using ternary operator or && in JSX


What is the virtual DOM in React?
A. A browser feature
B. An actual copy of the DOM
C. A lightweight copy of the real DOM used for performance
D. A styling framework
C. A lightweight copy of the real DOM used for performance


Which method is used to pass data from child to parent in React?
A. Using props
B. Using callbacks passed from parent
C. Using context
D. Direct variable reference
B. Using callbacks passed from parent


Which hook is used for performance optimization by memoizing values?
A. useEffect
B. useState
C. useMemo
D. useReducer
C. useMemo


In React Router, what does the <Switch> component do?
A. Groups multiple routes
B. Switches between states
C. Renders the first matching route
D. Used to toggle views
C. Renders the first matching route


What does lifting state up mean in React?
A. Moving state from parent to child
B. Moving state to global context
C. Moving state to the nearest common ancestor
D. Moving state to Redux store
C. Moving state to the nearest common ancestor


Which of the following is true about controlled components?
A. Their state is managed by the DOM
B. Their state is managed by React
C. They use refs to access values
D. They can't be used in forms
B. Their state is managed by React


Which annotation is used to describe the request body content in an OpenAPI operation?
A. @ApiBody
B. @RequestContent
C. @RequestBody (from swagger package)
D. @RequestDoc
C. @RequestBody (from swagger package)


What is the purpose of the @DBRef annotation in Spring Data MongoDB?
A. To map embedded documents
B. To index a document
C. To define a relationship between documents via reference
D. To ignore the field during persistence
C. To define a relationship between documents via reference


How does MongoDB ensure high availability with replication?
A. By using SQL mirroring
B. By using cron jobs for backup
C. Through replica sets with automatic failover
D. By distributing indexes across servers
C. Through replica sets with automatic failover


In Spring Boot, which starter dependency is used to include MongoDB support?
A. spring-boot-mongodb
B. spring-boot-starter-data-mongodb
C. spring-boot-starter-data-jpa
D. spring-boot-starter-mongo
B. spring-boot-starter-data-mongodb


What Spring configuration property changes the default OpenAPI endpoint?
A. swagger.api.url
B. openapi.swagger.path
C. spring.openapi.path
D. springdoc.api-docs.path
D. springdoc.api-docs.path


What is the purpose of HttpSession.invalidate() in session-based security?
A. Remove the current session and all its attributes
B. Restart the session with the same session ID
C. Encrypt the session data
D. Extend session timeout
A. Remove the current session and all its attributes


How do you group APIs in Swagger UI using Springdoc OpenAPI?
A. Using @Group
B. Using @Tag(name = 'GroupName')
C. Using @SwaggerGroup
D. Using application.yaml grouping
B. Using @Tag(name = 'GroupName')


What happens if a client sends a request without an Authorization header and the server requires Basic Auth?
A. Server responds with 200 OK and empty body
B. Server responds with 401 Unauthorized and WWW-Authenticate header
C. Server closes the connection immediately
D. Server automatically redirects to login page
B. Server responds with 401 Unauthorized and WWW-Authenticate header


What does @SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT) do?
A. Starts the application with no web environment
B. Fails the test if no port is provided manually
C. Disables the web server
D. Starts the embedded server on a random port
D. Starts the embedded server on a random port


Which dependency is commonly used in Spring Boot to integrate OpenAPI 3?
A. springdoc-openapi-ui
B. spring-boot-devtools
C. springfox-swagger2
D. spring-boot-starter-jdbc
A. springdoc-openapi-ui


Which command is used to insert a single document into a collection?
A. db.collection.create()
B. db.collection.insertOne()
C. db.collection.insertDocument()
D. db.collection.add()
B. db.collection.insertOne()


You want to inject a TestRestTemplate in a @SpringBootTest. What is required?
A. Use @MockBean
B. Use webEnvironment = WebEnvironment.NONE
C. Use @WebMvcTest
D. Use webEnvironment = WebEnvironment.RANDOM_PORT
D. Use webEnvironment = WebEnvironment.RANDOM_PORT


What does the MongoTemplate class provide in Spring Data MongoDB?
A. Mapping of SQL queries to documents
B. Automatic index creation
C. A low-level interface to MongoDB operations
D. Automatic data validation
C. A low-level interface to MongoDB operations


Which class is used to create complex criteria queries with MongoTemplate?
A. Criteria
B. QueryDSL
C. MongoQuery
D. CriteriaBuilder
A. Criteria


Which annotation is used to define a MongoDB document in Spring Data MongoDB?
A. @Collection
B. @MongoEntity
C. @Document
D. @Entity
C. @Document


Which interface in Spring Data MongoDB is used to perform CRUD operations?
A. JpaRepository
B. MongoRepository
C. Repository
D. CrudRepository
B. MongoRepository


When used with JUnit 5, which annotation is commonly paired with @SpringBootTest?
A. @MockBean
B. @ExtendWith(SpringExtension.class)
C. @DataJpaTest
D. @TestConfiguration
B. @ExtendWith(SpringExtension.class)


How can a server prompt the browser to show a login dialog for Basic Auth?
A. By including WWW-Authenticate: Basic realm='RealmName' in a 401 response
B. By sending a Set-Cookie header with a token
C. By returning 403 with Login-Required: true
D. By using JavaScript redirect
A. By including WWW-Authenticate: Basic realm='RealmName' in a 401 response


Which annotation is used to describe the request body content in an OpenAPI operation?
A. @ApiBody
B. @RequestBody (from swagger package)
C. @RequestDoc
D. @RequestContent
B. @RequestBody (from swagger package)


In Basic Authentication, what does the format of the Authorization header look like?
A. Authorization: Bearer (token)
B. Authorization: Basic (base64(username:password))
C. Authorization: Token username:password
D. Auth: Basic (JWT)
B. Authorization: Basic (base64(username:password))


Which of the following best describes a compound index?
A. An index with a TTL (Time To Live)
B. A temporary index created at runtime
C. An index on an embedded document only
D. An index on multiple fields in a document
D. An index on multiple fields in a document


Which property is used in application.properties to set the MongoDB database name?
A. spring.data.mongo.name
B. spring.mongodb.dbname
C. spring.data.mongodb.database
D. spring.mongo.database
C. spring.data.mongodb.database


How can you hide an endpoint from OpenAPI documentation?
A. Disable the controller
B. Use @IgnoreMapping
C. Add @Hidden annotation
D. Rename the method
C. Add @Hidden annotation


When using MongoTemplate, how would you insert a new document?
A. mongoTemplate.create(object)
B. mongoTemplate.insert(object)
C. mongoTemplate.save(object)
D. mongoTemplate.add(object)
C. mongoTemplate.save(object)


Which configuration allows @SpringBootTest to test controller endpoints using real HTTP calls?
A. webEnvironment = NONE
B. webEnvironment = MOCK
C. useMockMvc = true
D. webEnvironment = DEFINED_PORT
D. webEnvironment = DEFINED_PORT


Which of the following is used to create an index on a field in MongoDB?
A. db.collection.setIndex()
B. db.collection.index()
C. db.collection.createIndex()
D. db.collection.makeIndex()
C. db.collection.createIndex()


In MongoDB, which of the following allows for joining documents from two collections?
A. $merge
B. $match
C. $unwind
D. $lookup
D. $lookup


Which of the following is TRUE about MongoDB schema?
A. MongoDB supports relational schema only
B. Collections in MongoDB can have documents with different fields
C. MongoDB requires a fixed schema
D. All fields in documents must be predefined
B. Collections in MongoDB can have documents with different fields


Which HTTP header is commonly used to transmit the session ID?
A. Authorization
B. Cookie
C. X-Session-Token
D. Set-Header
B. Cookie


Which of the following is used to return only selected fields in a MongoDB query?
A. $select
B. ReturnFields
C. Projection
D. Subset
C. Projection


Which index type is used to ensure that a field's value is unique across documents?
A. Compound index
B. Unique index
C. Hashed index
D. Text index
B. Unique index


Which of the following is false about Basic Authentication?
A. It does not require session on server
B. It is stateless
C. It can be used with REST APIs
D. It is considered more secure than OAuth2
D. It is considered more secure than OAuth2


Which of the following annotations can be used instead of @SpringBootTest for testing only the web layer?
A. @Configuration
B. @DataJpaTest
C. @WebMvcTest
D. @EnableAutoConfiguration
C. @WebMvcTest


Which annotation would you use to create a REST endpoint that consumes only XML data?
A. @PostMapping(consumes = 'application/xml')
B. @GetMapping(consumes = 'application/json')
C. @RequestMapping(produces = 'application/xml')
D. @PostMapping(produces = 'application/json')
A. @PostMapping(consumes = 'application/xml')


What does the fetch() function in JavaScript return?
A. A Promise
B. A JSON object
C. An XMLHttpRequest object
D. A callback function
A. A Promise


What does ResponseEntity provide in a REST controller method?
A. A flexible way to set body, status, and headers
B. Only status codes
C. A way to redirect to views
D. Only body
A. A flexible way to set body, status, and headers


Why are SPAs considered ideal for building responsive web applications?
A. They automatically convert to mobile apps
B. They provide dynamic and fast content updates
C. They completely avoid CSS
D. They can only be accessed on mobile devices
B. They provide dynamic and fast content updates


Which of the following is the correct way to make a GET request using Axios?
A. axios.get('https://api.example.com/data')
B. axios.send('GET', 'https://api.example.com/data')
C. axios.fetch('https://api.example.com/data')
D. fetch.axios('https://api.example.com/data')
A. axios.get('https://api.example.com/data')


Which HTTP methods are supported by Axios?
A. GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
B. Only GET and POST in the browser
C. GET, POST only
D. GET, POST, DELETE only
A. GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD


Which Spring annotation is used to map HTTP GET requests to a method?
A. @HttpGet
B. @Get
C. @GetMapping
D. @RequestGet
C. @GetMapping


What is the purpose of the @RequestBody annotation?
A. Validates request parameters
B. Binds a query parameter to a method
C. Injects beans into controller
D. Maps the request body to a Java object
D. Maps the request body to a Java object


How do SPAs typically reduce server load?
A. By disabling server-side APIs
B. By caching everything on the server
C. By offloading routing and rendering to the client
D. By avoiding use of databases
C. By offloading routing and rendering to the client


Which of the following is TRUE about React Router v6?
A. < Switch > is still used to group routes
B. Routes must be wrapped in < Router > or < BrowserRouter >
C. Route components are automatically lazy-loaded
D. React Router only supports hash-based routing
B. Routes must be wrapped in <Router> or <BrowserRouter>


Which annotation combination is used for a method that handles POST requests and accepts a request body?
A. @PostMapping and @RequestParam
B. @PostMapping and @ResponseBody
C. @GetMapping and @PathVariable
D. @PostMapping and @RequestBody
D. @PostMapping and @RequestBody


How can you bind a custom header value from a request to a method parameter?
A. @HeaderParam
B. @RequestHeader
C. @RequestBody
D. @RequestParam
B. @RequestHeader
"""

def normalize_text(text):
    text = re.sub(r'\s+', ' ', text).strip().lower()
    text = re.sub(r'[^\w\s]', '', text)
    return text

def parse_blocks(raw_text):
    lines = [l.strip() for l in raw_text.split('\n') if l.strip()]
    parsed = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("Terms in this set") or line == "Original":
            i += 1
            continue
        
        # Check if line looks like a question
        # Look ahead for options A. B. C. D.
        if i + 4 < len(lines):
            optA = lines[i+1]
            optB = lines[i+2]
            optC = lines[i+3]
            optD = lines[i+4]
            
            if optA.startswith("A.") and optB.startswith("B.") and optC.startswith("C.") and optD.startswith("D."):
                q_text = line
                opts = [
                    re.sub(r'^[A-D]\.\s*', '', optA),
                    re.sub(r'^[A-D]\.\s*', '', optB),
                    re.sub(r'^[A-D]\.\s*', '', optC),
                    re.sub(r'^[A-D]\.\s*', '', optD)
                ]
                
                # Check for answer line at i+5
                ans_idx = 0
                if i + 5 < len(lines):
                    ans_line = lines[i+5]
                    # Could be "A. option text", "JSX", "useContext()", "components", "A", "B", etc.
                    ans_str = ans_line.strip()
                    matched = False
                    
                    # Try matching prefix A., B., C., D.
                    if ans_str.startswith("A.") or ans_str.startswith("A "):
                        ans_idx = 0
                        matched = True
                    elif ans_str.startswith("B.") or ans_str.startswith("B "):
                        ans_idx = 1
                        matched = True
                    elif ans_str.startswith("C.") or ans_str.startswith("C "):
                        ans_idx = 2
                        matched = True
                    elif ans_str.startswith("D.") or ans_str.startswith("D "):
                        ans_idx = 3
                        matched = True
                    elif ans_str.upper() in ["A", "B", "C", "D"]:
                        ans_idx = ["A", "B", "C", "D"].index(ans_str.upper())
                        matched = True
                    else:
                        # Try matching option text
                        norm_ans = normalize_text(ans_str)
                        for o_i, o_val in enumerate(opts):
                            if normalize_text(o_val) == norm_ans or norm_ans in normalize_text(o_val) or normalize_text(o_val) in norm_ans:
                                ans_idx = o_i
                                matched = True
                                break
                    
                    if matched:
                        i += 6
                    else:
                        i += 5
                else:
                    i += 5

                parsed.append({
                    "question": q_text,
                    "options": opts,
                    "answer": ans_idx
                })
                continue
        i += 1
    return parsed

items1 = parse_blocks(raw_text_1)
items2 = parse_blocks(raw_text_2)
all_parsed = items1 + items2

print(f"Parsed set 1: {len(items1)} questions")
print(f"Parsed set 2: {len(items2)} questions")
print(f"Total parsed: {len(all_parsed)}")

# Deduplicate
seen_questions = set()
unique_questions = []

# Load existing questions from questions.ts if needed
with open("src/data/questions.ts", "r", encoding="utf-8") as f:
    ts_content = f.read()

# Collect normalized text from current 50 questions
for q in all_parsed:
    norm_q = normalize_text(q["question"])
    if norm_q not in seen_questions and len(norm_q) > 5:
        seen_questions.add(norm_q)
        unique_questions.append(q)

print(f"Unique new questions: {len(unique_questions)}")

with open("scratch/parsed_questions.json", "w", encoding="utf-8") as f:
    json.dump(unique_questions, f, ensure_ascii=False, indent=2)
