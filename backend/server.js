// Force Google DNS to fix querySrv issue
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// create app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://sharmasneha58991_db_user:Sneha2004@cluster0.fzwbuy6.mongodb.net/trendora?retryWrites=true&w=majority"
)
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err.message));

// rest of your code...


// ==========================
// Import Routes
// ==========================
const productRoutes = require("./routes/productRoutes");


// ==========================
// Use Routes
// ==========================
app.use("/api", productRoutes);


// ==========================
// Test Route
// ==========================
app.get("/", (req, res) => {

    res.send("🚀 Server is running");

});


// ==========================
// Start Server
// ==========================
const PORT = 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on port ${PORT}`);

});