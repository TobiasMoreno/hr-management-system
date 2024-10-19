# Human Resources Management System (HRMS) - Frontend

This is the **frontend** for the **Human Resources Management System (HRMS)** built using **Angular**. The application is fully **responsive**, providing a user-friendly interface for managing employees, vacation requests, performance evaluations, and other HR-related functionalities. This frontend interacts with a **Spring Boot** backend and connects to a **MySQL** database. This backend is made with docker so it can be easily used.

## Key Features

- **Responsive Design**: The application is optimized for use on all devices, ensuring a seamless experience across desktops, tablets, and mobile phones.
- **Employee Management**: Interface for administrators, managers, and employees to handle employee data.
- **Vacation Requests**: Easy-to-use UI for employees to submit requests and managers/administrators to approve or reject them.
- **Performance Evaluations**: Managers can evaluate employees directly from the frontend.
- **Role-Based Access**: Different user views based on their role (Administrator, Manager, Employee) to ensure proper access to features.
- **Routing and Services**: Dynamic navigation with route management and reusable services for API calls to the backend.

## Technologies Used

- **Angular**: Frontend framework for building a modular, scalable UI.
- **TypeScript**: Main programming language used for the Angular application.
- **HTML5/CSS3**: Structure and style for the application.
- **Bootstrap and Material Angular**: Ensures responsive design and modern UI components.

## Installation and Usage

To clone and run the frontend locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/TobiasMoreno/hr-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hr-management-system
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   ng serve
   ```

5. The frontend will be available at `http://localhost:4200/`.

## Project Structure

```plaintext
public
├── assets/               # Static assets (images, fonts, etc.)
│   └── img/               
│
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── services/         # Services to handle HTTP requests to the backend
│   ├── modules/          # Feature-specific modules (Employee, etc.)
│   ├── app.component 
│   ├── routes.ts         # Routing configuration
│   
├── environments 
└── styles.css            # Global styles           
```
