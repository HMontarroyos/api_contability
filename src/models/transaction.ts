import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { v4 as uuidv4 } from 'uuid';

class Transaction extends Model {
  public id!: string;
  public description!: string;
  public transactionDate!: Date;
  public transactionType!: 'Débito' | 'Crédito';
  public value!: number;
  public recipient!: string | null;
}

Transaction.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transactionDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  transactionType: {
    type: DataTypes.ENUM('Débito', 'Crédito'),
    allowNull: false
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'transactions',
});

export { Transaction };
