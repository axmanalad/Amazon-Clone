// Creates a new HTTP (hypertext transfer protocol) message to send to the backend.
const xhr = new XMLHttpRequest();

// This waits for the response to come back from the server.
xhr.addEventListener('load', () => {
  console.log(xhr.response); // This is the response from the server.
  // The response is the data that the server sends back.
  // It could be HTML, JSON, XML, or any other format.
});

// First param = type of request (GET, POST, PUT, DELETE)
// Second param = URL (uniform resource locator [ex. https://amazon.com]) to send the request to
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); // The send() method sends the request to the server.
// This is a Request-Response Cycle.
// It takes time for the request to travel across the Internet

// xhr.response will be undefined until the request is complete. (asynchronous code)
// xhr.response


// xhr.open('GET', 'https://supersimplebackend.dev/nonexistent');
// xhr.send(); // This will trigger a 404 Not Found error.

// Status Codes:
// If status code starts with 2, it indicates success.
// 2xx - Success (the request was successful and the server returned the requested data)
// Common status success codes:
// 200 - OK (the request was successful)
// 201 - Created (the request was successful and a new resource was created)
// 204 - No Content (the request was successful but there is no content to return)

// If status code starts with 4 or 5, it indicates an error.
// 4xx - Client Error (the request was invalid or could not be understood by the server)
// 5xx - Server Error (the server encountered an error while processing the request)
// Common status error codes:
// 404 - Not Found (the requested resource could not be found)
// 500 - Internal Server Error (the server encountered an error while processing the request)
// 400 - Bad Request (the request was invalid or could not be understood by the server)


// APIs
// Backend API
// API = Application Programming Interface
// An API is a set of rules and protocols for building and interacting with software applications; how we interact with something.
  // Allows different software applications to communicate with each other.
  // Can be used to access data or functionality from a server.
  // Can be used to create, read, update, or delete data on a server.

// REST API = Representational State Transfer API
// REST = a set of architectural principles for designing networked applications.
  // Use HTTP requests to access and manipulate data.
  // Stateless, meaning that each request from the client to the server must contain all the information needed to understand and process the request.
  // Use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.
  // Use standard HTTP status codes to indicate the success or failure of a request.
  // Use JSON (JavaScript Object Notation) or XML (eXtensible Markup Language) to represent data.
  // Designed to be simple, lightweight, and easy to use.
  // Commonly used to build web applications, mobile applications, and other software applications that need to communicate with a server.