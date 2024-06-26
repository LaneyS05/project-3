React Admin Dashboard App with Theming, Tables, Charts, Calendar, Kanban, and More
This project is a comprehensive React admin dashboard application featuring a variety
of components including theming options, tables, charts, calendar functionality, kanban boards, and more.
Additionally, we have integrated a PostgreSQL backend to efficiently manage and retrieve data for enhanced functionality.

Feel free to adjust the wording or add more details as needed!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributors

- warlie3d ([GitHub Profile] (https://github.com/warlie3d)),
- LaneyS05 ([GitHub Profile] (https://github.com/LaneyS05)),
- C4ntinflas ([GitHub Profile] (https://github.com/C4ntinflas)),

## License

MIT License

## videos inspired from

https://www.youtube.com/watch?v=jx5hdo50a2M

# Laney's code

This is some Of what Laney Staggs worked on

## Node.js Project Setup Guide

This guide provides steps to set up a Node.js project with necessary dependencies, such as cors and dotenv, and instructions for creating tables in PostgreSQL using pgAdmin.

## Tools Required

Node.js and npm (Node Package Manager)
PostgreSQL
pgAdmin (optional, for managing PostgreSQL databases)
npx sequelize-cli db:seed:all

## Dependencies

The following npm packages will be used in this project:

- cors: Middleware for enabling Cross-Origin Resource Sharing in Express.js.
- dotenv: Module for loading environment variables from a .env file.
- Sequelize for the database

## Features

- Display orders, employees, and customers data in a tabular format using Syncfusion GridComponent.
- Allow sorting, filtering, searching, editing, and deleting data entries.
- Custom image templates for displaying images in the grid.

# Backend (Node.js Express)

## API Endpoints

### Orders API (/orders):

- GET /orders: Fetch all orders data.

### Employees API (/auth/employees):

- POST /auth/employees: Create a new employee.
- GET /employees: Fetch all employees.

### Customers API (/customers):

- GET /customers: Fetch all customers data.