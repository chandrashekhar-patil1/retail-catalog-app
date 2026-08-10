const request = require("supertest");
const app = require("./server");

describe("Retail Catalog API", () => {

    test("Home API should return running status", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body.message)
            .toBe("Simple Retail Catalog API");
    });

});