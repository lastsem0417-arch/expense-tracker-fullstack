require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ================= ROUTES =================

// USER ROUTES
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

// INCOME ROUTES
const incomeRoutes = require("./routes/incomeRoutes");
app.use("/api/income", incomeRoutes);

// EXPENSE ROUTES
const expenseRoutes = require("./routes/expenseRoutes");
app.use("/api/expenses", expenseRoutes);

// AUTH ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ================= DATABASE =================

mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB Connected Successfully");
})
.catch((error) => {
console.log("MongoDB Connection Error:", error);
});

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});