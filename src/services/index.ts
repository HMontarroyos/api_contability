import fs from "fs";
import xlsx from "xlsx";
import { TransactionRepository } from "../repositories";

class TransactionService {
  public static async importTransactions(filePath: string): Promise<void> {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const results = xlsx.utils.sheet_to_json(sheet);

    const requiredFields = [
      "description",
      "transactionDate",
      "transactionType",
      "value",
      "recipient",
    ];

    for (const transactionData of results as any[]) {
      const invalidKeys = Object.keys(transactionData).filter(
        (key) => !requiredFields.includes(key)
      );

      if (invalidKeys.length > 0) {
        throw new Error(`Invalid keys found: ${invalidKeys.join(", ")}`);
      }

      const missingFields = requiredFields.filter(
        (field) => !transactionData.hasOwnProperty(field)
      );

      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
      }

      if (
        transactionData.transactionType !== "Débito" &&
        transactionData.transactionType !== "Crédito"
      ) {
        throw new Error(
          `Invalid transactionType: ${transactionData.transactionType}`
        );
      }

      if (isNaN(parseFloat(transactionData.value))) {
        throw new Error(`Invalid value: ${transactionData.value}`);
      }

      const existingTransaction = await TransactionRepository.getById(
        transactionData.id
      );

      const transaction = {
        description: transactionData.description,
        transactionDate: new Date(transactionData.transactionDate),
        transactionType: transactionData.transactionType,
        value: parseFloat(transactionData.value.toString()),
        recipient: transactionData.recipient || null,
      };

      if (existingTransaction) {
        await TransactionRepository.update(existingTransaction.id, {
          ...existingTransaction.toJSON(),
          ...transaction,
        });
        console.log(`Transaction updated: ${transactionData.id}`);
      } else {
        const newTransaction = await TransactionRepository.create(transaction);
        console.log(`Transaction imported: ${newTransaction.id}`);
      }
    }
    fs.unlinkSync(filePath);
  }

  public static async getAllTransactions(): Promise<any> {
    return await TransactionRepository.getAll();
  }

  public static async deleteTransaction(id: string): Promise<number> {
    return await TransactionRepository.delete(id);
  }
}

export { TransactionService };
