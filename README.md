# Expense Tracker Application

A full-stack Expense Tracker application built with React.js (frontend) and Node.js + Express.js (backend), with MongoDB for data storage. This application allows users to track expenses, visualize data with charts, and manage their accounts with authentication.

## Features

### Frontend
- **Expense Form:**
  - Fields: Amount, Description, Date, Category.
  - Input validation for all fields.
  
- **Expense List:**
  - Dynamic table to display expenses with sorting by date and category.
  - Pagination for large datasets.
  - Inline editing for expense entries.

- **Filters & Search:**
  - Filter by category, date range, and payment method.

- **Graphs/Charts:**
  - Line chart for monthly expense comparison.
  - Pie chart for category breakdown.
  - Dynamic filtering for time period and category-based data.

- **State Management:**
  - Global state using React Context API.

- **Styling & Responsiveness:**
  - Styled Components for maintainable CSS-in-JS design.
  - Fully responsive for mobile devices.

### Backend
- **RESTful API:**
  - Expense CRUD (Create, Read, Update, Delete) operations.
  - JWT-based authentication and role-based access control (RBAC).
  - Bulk expense upload via CSV and bulk deletion.
  - Data filtering, sorting, and pagination.
  - MongoDB aggregation for monthly and category-wise expense statistics.

- **Authentication & Authorization:**
  - JWT tokens with role-based access control for users and admins.
  - Secure password hashing with bcrypt.

- **Optimization:**
  - Caching for frequently accessed data using Redis or in-memory caching.


## Technology Stack

### Frontend
- React.js
- Axios for API integration
- Styled Components for styling
- React Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose for database operations
- JWT for authentication
- Bcrypt.js for password encryption

## Installation & Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or hosted)

### Backend Setup
1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone 
   cd backend
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file and add the following environment variables:
     ```bash
     MONGO_URL=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     PORT=5000
     ```

4. Start the server:
   ```bash
   npm run start
   ```

**Frontend Setup**

1. Navigate to the frontend folder:
  ```bash
    cd frontend
  ```

2. Install dependencies:
  ```bash
  npm install
  ```
3. Start the frontend development server:
  ```bash
    npm run start
  ```
