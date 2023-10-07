import { TransactionRepository } from "../repositories";
import { v4 as uuidv4 } from 'uuid';
import { formatXlsxinJson } from "../server";

class TransactionService {
  public static async importTransactions(filePath: string): Promise<void> {
    try {
      const responseData = await formatXlsxinJson(filePath);
      const transaction = responseData.data
      transaction.forEach(async (transaction: any) => {
        if (transaction.id === null) {
          transaction.id = uuidv4();
        }
        
        const existingTransaction = await TransactionRepository.getById(
          transaction.id
        );

        if (existingTransaction) {
          await TransactionRepository.update(existingTransaction.id, {
            ...existingTransaction.toJSON(),
            ...transaction,
          });
          console.log(`Transaction updated: ${transaction.id}`);
        } else {
          const newTransaction = await TransactionRepository.create(transaction);
          console.log(`Transaction imported: ${newTransaction.id}`);
        }
      });


    } catch (error: any) {
      console.error(error.message);
    }
  }

  public static async getAllTransactions(): Promise<any> {
    return await TransactionRepository.getAll();
  }

  public static async deleteTransaction(id: string): Promise<number> {
    return await TransactionRepository.delete(id);
  }
}

export { TransactionService };
