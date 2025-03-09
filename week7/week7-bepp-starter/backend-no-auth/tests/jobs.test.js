const request = require("supertest");
const app = require("../app"); 

describe("Jobs API - Non-Protected Routes", () => {
  it("should return a list of jobs", async () => {
    const res = await request(app).get("/api/jobs");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return 404 for a non-existing route", async () => {
    const res = await request(app).get("/api/invalid-route");
    expect(res.statusCode).toBe(404);
  });
});
