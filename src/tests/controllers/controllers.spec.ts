import request from "supertest";
import app from "../../app";
import { TransactionService } from "../../services";

describe("TransactionController", () => {
  describe("GET /transactions", () => {
    it("should return a list of transactions", async () => {
      const response = await request(app).get("/transactions");
      expect(response.status).toBe(200);
    });

    it("should handle errors", async () => {
      jest
        .spyOn(TransactionService, "getAllTransactions")
        .mockRejectedValue(new Error("Test Error"));
      const response = await request(app).get("/transactions");
      expect(response.status).toBe(500);
    });
  });

  describe("POST /import", () => {
    it("should handle file upload errors", async () => {
      const response = await request(app).post("/import");
      expect(response.status).toBe(400);
    });
  });

  describe("DELETE /transactions/:id", () => {
    it("should handle non-existent transaction", async () => {
      const id = "123456789";
      jest.spyOn(TransactionService, "deleteTransaction").mockResolvedValue(0);
      const response = await request(app).delete(`/transactions/${id}`);
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        error: `Transaction with ID ${id} does not exist`,
      });
    });
  });
});
