import request from "supertest";

import { app } from "../../../../shared/infra/http/app";

describe("[E2E] - Increase Hits on website ton.com.br", () => {
  it("should be able to increase hits of acces website ton.com.br", async () => {
    const countFirstResponse = await request(app).get("/hits/count").send();
    await request(app).get("/hits/increase").send();
    const resultIncreaseResponse = await request(app).get("/hits/count").send();

    expect(
      resultIncreaseResponse.body.value > countFirstResponse.body.value
    ).toBeTruthy();
  });
});
