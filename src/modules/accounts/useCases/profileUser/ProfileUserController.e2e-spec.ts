import request from "supertest";

import { app } from "../../../../app";

describe("[E2E] - Show Profile", () => {
  it("should be able to show profile user authenticated", async () => {
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

    const responseAuth = await request(app).post("/auth").send({
      email: user.email,
      password: user.password,
    });

    const responseProfile = await request(app)
      .get("/user/profile")
      .set({
        Authorization: `Bearer ${responseAuth.body.token}`,
      });

    expect(responseProfile.status).toBe(200);
  });
});
