import { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { TransactionService } from "../services";
import { ApiError } from "../errors/ApiError";
import { validateError } from "../errors/ValidateError";

const upload = multer({ dest: "uploads/" });

class TransactionController {
  public static async list(req: Request, res: Response): Promise<void> {
    try {
      const transactions = await TransactionService.getAllTransactions();
      res.json(transactions);
    } catch (error: unknown) {
      validateError(error, res);
    }
  }

  public static async import(req: Request, res: Response): Promise<void> {
    try {
      upload.single("file")(req, res, async (err) => {
        if (err) {
          throw new ApiError("UploadingFileError", 400, "Error uploading file");
        }

        if (!req.file || !req.file.path) {
          throw new ApiError("NoFileUploadedError", 400, "No file uploaded");
        }

        const filePath = req.file.path;
        const extname = path.extname(req.file.originalname);

        if (extname !== ".xlsx") {
          throw new ApiError(
            "MimeTypeError",
            400,
            "The file must be of type xlsx."
          );
        }

        await TransactionService.importTransactions(filePath);

        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting temporary file:", err);
          }
        });
        res.json({ message: "Transactions imported successfully" });
      });
    } catch (error: unknown) {
      validateError(error, res);
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const deletedCount = await TransactionService.deleteTransaction(id);

      if (deletedCount === 0) {
        throw new ApiError(
          "DeletedCountError",
          404,
          `Transaction with ID ${id} does not exist`
        );
      }

      res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      validateError(error, res);
    }
  }
}

export { TransactionController };
