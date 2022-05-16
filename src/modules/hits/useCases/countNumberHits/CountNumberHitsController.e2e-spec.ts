import request from "supertest";

import { app } from "../../../../shared/infra/http/app";

describe("[E2E] - Count Hits Access on website ton.com.br", () => {
  it("should be able to count hits of acces website ton.com.br", async () => {
    const response = await request(app).get("/hits/count").send();

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("value");
  });
});
