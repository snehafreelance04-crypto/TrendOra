require("dotenv").config();

// Force Google DNS (optional but safe for SRV issues)
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();


// middlewares
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://sharmasneha58991_db_user:Sneha2004@cluster0.fzwbuy6.mongodb.net/trendora?retryWrites=true&w=majority"
)
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err.message));

// ==========================
// Import Routes
// ==========================
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api", productRoutes);
app.use("/api/auth", authRoutes);

// ==========================
// Test Route
// ==========================
app.get("/", (req, res) => {
  res.send("🚀 Server is running");
});

// 404 JSON Handler
// ==========================
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
// ==========================
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// ==========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

