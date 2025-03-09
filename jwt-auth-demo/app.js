const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const secretKey = "yourSecretKey"; // Keep this secret!

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/jwt-auth-demo")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// User Model
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

// ✅ Register a User (Hashes Password + Generates JWT)
app.post("/api/users", async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });

    res.status(201).json({ message: "✅ User registered!", token });
  } catch (error) {
    res.status(500).json({ error: "❌ Registration failed" });
  }
});

// ✅ Login (Checks Password + Generates JWT)
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "❌ Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "❌ Invalid credentials" });

    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });

    res.status(200).json({ message: "✅ Login successful!", token });
  } catch (error) {
    res.status(500).json({ error: "❌ Server error" });
  }
});

// 🔒 Middleware: Protect Routes using JWT
function authenticateJWT(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "❌ Access denied. No token provided." });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(403).json({ message: "❌ Invalid token." });

    req.user = decoded;
    next();
  });
}

// ✅ Protected Route (Only Accessible with Valid Token)
app.get("/api/protectedroute", authenticateJWT, (req, res) => {
  res.json({ message: `🔐 Welcome, ${req.user.username}! You accessed a protected route.` });
});

// Start the Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
