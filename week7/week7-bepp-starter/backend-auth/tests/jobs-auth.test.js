const request = require("supertest");
const app = require("../app");

let token; // Store token globally for all tests

beforeAll(async () => {
  const loginResponse = await request(app)
    .post("/api/users/login")
    .send({
      email: "test@example.com",  // Ensure this user exists in your DB!
      password: "password123"
    });

  console.log("🔹 Login Response:", loginResponse.body); // Debugging

  token = loginResponse.body.token;

  if (!token) {
    throw new Error("❌ Failed to get token! Check user login and database.");
  }
});

describe("Protected Jobs API", () => {
  it("should create a new job when authenticated", async () => {
    const res = await request(app)
      .post("/api/jobs")
      .set("Authorization", `Bearer ${token}`) // ✅ Ensure token is added
      .send({ title: "Software Engineer", description: "Job description here" });

    console.log("🔹 Create Job Response:", res.body); // Debugging

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("title", "Software Engineer");
  });
});
