import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// Task 1: Application Configuration
// Create a new React application using Typescript and Vite.
// If you are unfamiliar with Vite, please refer to the following link for more information: https://vitejs.dev/guide/
// Configure the application with MUI, ensuring that all components within the application (e.g. buttons, text fields, dialogs) use MUI components. If you are unfamiliar with MUI, please refer to the following link for more information: https://mui.com/material-ui/getting-started/overview/
// Task 2: First Page of the Application
// Create a form to collect the following information from the user:
// Name
// Phone number
// Email
// Upon completion, save the user details in localstorage and route the user to the second page.
// If the user attempts to access the second page without providing the necessary information, redirect them back to the first page with a message indicating that they must enter their details before accessing the page.
// Task 3: Second Page of the Application[Component 1]
// Fetch a list of JSON details from an API. You may use any API that returns a list of data. One example is https://jsonplaceholder.typicode.com/posts
// Convert the retrieved JSON data into a model/interface in Typescript. If you are unfamiliar with models or interfaces in Typescript, please refer to the following link for more information: https://www.educative.io/blog/typescript-interfaces
// Display the data in a table using the following package: https://mui.com/x/react-data-grid/
// Task 4: Second Page of the Application[Component 2]
// This component is the most important component, any error or issue within this component will discard your submission instantly.
// Create another component below the table from the given json
// [
// 	{
//   	"department": "customer_service",
//   	"sub_departments": [
//     	"support",
//     	"customer_success"
//   	]
// 	},
// 	{
//   	"department": "design",
//   	"sub_departments": [
//     	"graphic_design",
//     	"product_design",
//     	"web_design"
//   	]
// 	}
//   ]You can hardcode the given json in your application
// The component will be the list of department and each department has sub departments
// Sub departments can be expanded and collapsed by the user
// There must be an icon on the right/left side of the department through which users can expand or collapse the sub departments.
// Users can select department or sub departments.
// If user select a department then all of the sub departments must get selected in the UI
// If user select all sub departments of a department then the parent department must get selected as well in the UI
//  i have implemented the Task1 task2 task3 u have to code task 4 correctly