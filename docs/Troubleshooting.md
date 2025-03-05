# Troubleshooting

| Issue      | Possible Cause | Action |
| :---------- | :----------------------------------- | :----------- |
| `Error: Cannot find module 'express'`       | Express is not installed or `node_modules` is missing  | Run `npm install express` to install Express. If the issue continue, try deleting `node_modules` and `package-lock.json`, then run `npm install` again. |
| 404 Not Found for a defined route  | The port you are trying to use is already in use | Change the port number in `app.listen(PORT)`, or stop the process using the port (`npx kill-port 3000`). |
| Static Files (CSS, JS, images) are not loading  | Static file directory is not set correctly. | Ensure you have `app.use(express.static("public"))` and the static files are inside the `public` folder. |
| Middleware is not working as expected | Middleware is not placed in the correct order. | Ensure middleware is added before defining routes that depend on it |
| `req.body` is undefined in POST requests | `express.json()` middleware is missing. | Add `app.use(express.json())` and `app.use(express.urlencoded({ extended: true}))` before defining routes. |
| `Error: Cannot find module 'dotenv'` | `dotenv` package is not installed | Run `npm install dotenv` to install the package. |
| Environment variables not working | `.env` file is not loaded or variables are not defined correctly | Ensure you have `require('dotenv').config()` at the top of your `server.js` file and check the `.env` file for correct variable definitions. |
| Deployment fails on Render | Incorrect build or start commands | Ensure the build command is `npm install` and the start command is `node server.js` in Render settings. |
| Application not running on Render | Environment variable `HOSTED` is not set | Ensure you have set the `HOSTED` environment variable to `yes` in Render settings. |
| `Error: listen EADDRINUSE: address already in use` | Port 3000 is already in use | Change the port number in `app.listen(PORT)` to a different port or stop the process using port 3000 (`npx kill-port 3000`). |