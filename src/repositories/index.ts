import { Transaction } from "../models/transaction";

class TransactionRepository {
  public static async create(transactionData: any): Promise<Transaction> {
    const newTransaction = new Transaction(transactionData);
    await newTransaction.save();
    return newTransaction;
  }

  public static async getAll(): Promise<Transaction[]> {
    return await Transaction.findAll();
  }

  public static async getById(id: string): Promise<Transaction | null> {
    return await Transaction.findByPk(id);
  }

  public static async update(
    id: string,
    updates: Partial<Transaction>
  ): Promise<[number, Transaction[]]> {
    return await Transaction.update(updates, {
      where: { id },
      returning: true,
    });
  }

  public static async delete(id: string): Promise<number> {
    const deletedCount = await Transaction.destroy({ where: { id } });
    return deletedCount;
  }
}

export { TransactionRepository };
