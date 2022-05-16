import request from "supertest";

import { app } from "../../../../shared/infra/http/app";

describe("[E2E] - Authenticate User", () => {
  it("should be able to authenticate an user", async () => {
    const user = {
      name: "Test",
      email: "test@test.com",
      password: "1234",
    };

    await request(app).post("/user").send({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const response = await request(app).post("/auth").send({
      email: user.email,
      password: user.password,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent email", async () => {
    const user = {
      name: "Test",
      email: "test2@test.com",
      password: "1234",
    };

    await request(app).post("/user").send({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const response = await request(app).post("/auth").send({
      email: "email-wrong",
      password: user.password,
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email or passowrd incorrect");
  });

  it("should not be able to authenticate with incorrect password", async () => {
    const user = {
      name: "Test",
      email: "test3@test.com",
      password: "1234",
    };

    await request(app).post("/user").send({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const response = await request(app).post("/auth").send({
      email: user.email,
      password: "password-wrong",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email or passowrd incorrect");
  });
});
