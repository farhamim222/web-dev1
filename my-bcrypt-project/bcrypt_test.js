const bcrypt = require('bcrypt');

async function hashAndStorePassword() {
  const password = "chocolate123";
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log("Original Password:", password);
  console.log("Salt:", salt);
  console.log("Hashed Password:", hashedPassword);

  return hashedPassword;
}

async function checkPassword(storedHashedPassword) {
  const enteredPassword = "chocolate123";

  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);

  if (isMatch) {
    console.log("✅ Password is correct!");
  } else {
    console.log("❌ Password is incorrect!");
  }
}

(async () => {
  const storedHash = await hashAndStorePassword();
  await checkPassword(storedHash);
})();

  
