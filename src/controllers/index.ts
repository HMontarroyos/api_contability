import { Request, Response } from "express";
import multer from "multer";
import path from "path";
import { TransactionService } from "../services";


const upload = multer({ dest: "uploads/" });

class TransactionController {
  public static async list(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await TransactionService.getAllTransactions();
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public static async import(req: Request, res: Response): Promise<void> {
    try {
      upload.single("file")(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: "Error uploading file" });
        }

        if (!req.file || !req.file.path) {
          return res.status(400).json({ error: "No file uploaded" });
        }

        const filePath = req.file.path;
        const extname = path.extname(req.file.originalname);

        if (extname !== ".xlsx") {
          return res
            .status(400)
            .json({ error: "The file must be of type xlsx." });
        }

        await TransactionService.importTransactions(filePath);
        res.json({ message: "Transactions imported successfully" });
      });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const deletedCount = await TransactionService.deleteTransaction(id);

      if (deletedCount === 0) {
        res
          .status(404)
          .json({ error: `Transaction with ID ${id} does not exist` });
        return;
      }

      res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { TransactionController };
