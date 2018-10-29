const request = require('supertest');
const app = require('../app');

describe("TEST /game/newgame", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).options("/game/newgame");
      expect(res.status).toBe(200);
    });
  });

  describe("TEST /api", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).options("/api");
      expect(res.status).toBe(404);
    });
  });

  describe("TEST /game/makemove", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).options("/game/makemove/0/0");
      expect(res.status).toBe(200);
    });
  });
