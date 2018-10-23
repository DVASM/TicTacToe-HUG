// src/server/api.test.js
const request = require("supertest");
const api = require("./api");
describe("testing root path", () => {
    it("should return a 200 OK status code", async () => {
    const res = await request(api).get('/');
    expect(res.status).toBe(200);
    });
});