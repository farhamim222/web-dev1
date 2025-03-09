const request = require("supertest"); // ✅ Import this
const app = require("../app"); // ✅ Ensure this is correctly imported

describe("User Authentication", () => {
  it("should return an error for invalid login credentials", async () => {
    const res = await request(app).post("/api/users/login").send({
      email: "wrong@example.com",
      password: "wrongpassword",
    });

    expect(res.statusCode).toEqual(401);
  });
});
