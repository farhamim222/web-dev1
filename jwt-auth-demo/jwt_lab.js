const jwt = require('jsonwebtoken'); // Import jsonwebtoken library

// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: "exampleUser"
  };

  const secretKey = "yourSecretKey"; // Replace with a strong secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  console.log("🔐 Generated JWT Token:", token);
  return token; // Return the token for further use
}

// Function to verify a JWT (validates the token)
function verifyJWT(token) {
  const secretKey = "yourSecretKey"; // Same secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("❌ JWT Verification Failed:", err.message);
    } else {
      console.log("✅ JWT Verified. Decoded Data:", decoded);
    }
  });
}

// Function to decode a JWT (extracts payload WITHOUT verification)
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log("📜 Decoded JWT:", decoded);
}

// Generate a token
const generatedToken = createJWT();

// Verify the token (ensures it's valid)
verifyJWT(generatedToken);

// Decode the token (extracts data without checking validity)
decodeJWT(generatedToken);
