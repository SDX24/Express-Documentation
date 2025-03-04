# Troubleshooting

| Issue      | Possible Cause | Action |
| :---------- | :----------------------------------- | :----------- |
| `Error: Cannot find module 'express'`       | Express is not installed or `node_modules` is missing  | Run `npm install express` to install Express. If the issue continue, try deleting `node_modules` and `package-lock.json`, then run `npm install` again. |
| 404 Not Found for a defined route  | The port you are trying to use is already in use | Change the port number in `app.listen(PORT)`, or stop the process using the port (`npx kill-port 3000`). |
| Static Files (CSS, JS, images) are not loading  | Static file directory is not set correctly. | Ensure you have `app.use(express.static("public"))` and the static files are inside the `public` folder. |
| Middleware is not working as expected | Middleware is not placed in the correct order. | Ensure middleware is added before defining routes that depend on it |
| `req.body` is undefined in POST requests | `express.json()` middleware is missing. | Add `app.use(express.json())` and `app.use(express.urlencoded({ extended: true}))` before defining routes. |