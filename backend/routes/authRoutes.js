const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ==========================
// REGISTER
// ==========================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    // 🆕 If user does NOT exist → create automatically
    if (!user) {
      const hashed = await bcrypt.hash(password, 10);

      user = await User.create({
        name: email.split("@")[0] || "User",
        email,
        password: hashed,
      });

      console.log("🆕 First time login → user created");
    } else {
      // 🔐 If user exists → check password
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
    }

    // 🎟 Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { name: user.name, email: user.email }
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ==========================
// LOGIN
// ==========================
router.post("/login", async (req, res) => {
  try {
    console.log("LOGIN ROUTE HIT");

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: { name: user.name, email: user.email }
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;