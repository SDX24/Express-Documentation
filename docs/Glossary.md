# Glossary

| Term      | Definiton                          |
| :---------- | :----------------------------------- |
| API       | An API allows different applications to communicate with each other. In Express, APIs are used to handle requests from users and send responses back to them.  |
| Backend       | The backend is the part of a web application that runs on a server. It processes user requests, connects to databases, and sends responses. Express is a tool used to build backend applications. |
| Middleware    | Middleware is a function that runs between a request being received and the response being sent. It can be used for tasks like checking user authentication, logging activity, or handling errors. |
| Routing    | Routing is how Express determines what should happen when a user visits a specific URL. |
| Static Files    | Static files are files like HTML, CSS, images, and JavaScript that don’t change and are sent directly to the user. Express can serve these files using `express.static("public")`. |
| Dynamic Files    | Dynamic files are files that change based on user input or other variables. These are often generated using a view engine like EJS or Pug, allowing for content updates without reloading the entire page. |
| EJS (Embedded JavaScript Templates)    | EJS is a templating engine that lets you embed JavaScript into HTML. It allows dynamic content rendering using `<%= variable %>` syntax. |
| Status Codes    | Status codes are numbers in HTTP responses that indicate whether a request was successful or not. |
| Error Handling    | Error handling is the process of catching and responding to errors in an Express app. A common way to handle errors is using middleware.
| Server    | A computer program or device that provides a service to another computer program and its user, also known as the client |