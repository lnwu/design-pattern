import { request } from "./request-object";
import { Request } from "./request-class";

test("should return response more than 500ms", async () => {
  const startTime = Date.now();
  await request("/user/1");
  const endTime = Date.now();

  const costTime = endTime - startTime;

  expect(costTime).toBeGreaterThanOrEqual(500);
});

test("should response quickly second time", async () => {
  await request("/user/1");
  const startTime = Date.now();
  await request("/user/1");
  const endTime = Date.now();

  const costTime = endTime - startTime;

  expect(costTime).toBeLessThan(50);
});

test("should response more than 500ms with class", async () => {
  const request = Request.getInstance();

  const startTime = Date.now();
  await request.request("/user/1");
  const endTime = Date.now();

  const costTime = endTime - startTime;

  expect(costTime).toBeGreaterThanOrEqual(500);
});

test("should response quickly second time with class", async () => {
  const request1 = Request.getInstance();
  await request1.request("/user/1");

  const startTime = Date.now();
  const request2 = Request.getInstance();
  await request2.request("/user/1");
  const endTime = Date.now();

  const costTime = endTime - startTime;

  expect(costTime).toBeLessThan(50);
});
