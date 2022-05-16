import request from "supertest";

import { app } from "../../../../shared/infra/http/app";

describe("[E2E] - Create a User", () => {
  it("should be able to create a new user", async () => {
    const user = {
      name: "Test",
      email: "test@test.com",
      password: "1234",
    };

    const response = await request(app).post("/user").send({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("password");
  });

  it("should not be able to create a new user with email exists", async () => {
    const user = {
      name: "Test",
      email: "test@test.com",
      password: "1234",
    };

    const response = await request(app).post("/user").send({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User already exists");
  });
});
