# 💰 Smart Expense Tracker

A full-stack expense management web application built with **Angular, Node.js, Express.js, and MongoDB**.
This application allows users to track their daily expenses, visualize spending patterns, and manage their monthly budget through a modern dashboard.

---

# 🚀 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Token Authentication
* Secure Session using LocalStorage

### 💳 Expense Management

* Add Expense
* Edit Expense
* Delete Expense
* Search Expenses
* Filter Expenses by Month

### 📊 Dashboard Analytics

* Total Expense Overview
* Total Transactions Count
* Category-wise Pie Chart
* Monthly Expense Bar Chart
* Budget Progress Tracker
* Recent Expenses Table

### 🎨 UI Features

* Modern Navigation Bar
* Responsive Dashboard Layout
* Interactive Charts using Chart.js
* Clean and minimal UI design

---

# 🧠 Tech Stack

## Frontend

* Angular
* TypeScript
* HTML
* CSS
* Chart.js

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* bcrypt
* JSON Web Token (JWT)

---

# 📂 Project Structure

```
Expense-tracker/

│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Expense.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── expenseRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   └── expense-tracker-ui/
│       ├── src/
│       ├── angular.json
│       └── package.json
│
└── README.md
```

---

# 🖥️ Application Pages

* Login Page
* Register Page
* Dashboard Page
* Add Expense Page
* Expense List Page

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
cd expense-tracker
```

---

## 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend server:

```
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

## 3️⃣ Setup Frontend

```
cd frontend/expense-tracker-ui
npm install
ng serve
```

Frontend will run on:

```
http://localhost:4200
```

---

# 📡 API Endpoints

## Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

## Expense Routes

| Method | Endpoint                      | Description       |
| ------ | ----------------------------- | ----------------- |
| POST   | /api/expenses/add             | Add new expense   |
| GET    | /api/expenses                 | Get all expenses  |
| PUT    | /api/expenses/:id             | Update expense    |
| DELETE | /api/expenses/:id             | Delete expense    |
| GET    | /api/expenses/analytics/total | Get total expense |

---

# 📈 Future Improvements

* Protected Routes using Auth Guard
* User-specific expenses
* Expense Export (CSV / PDF)
* Dark Mode
* Budget Alerts
* Receipt Image Upload
* Expense Calendar View
* AI-based Expense Insights

---

# 👨‍💻 Author

**Aryan Singh**
BCA Student
RK Desai College

---

# 📜 License

This project is developed for **educational and portfolio purposes**.
