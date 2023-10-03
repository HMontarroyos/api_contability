import { Sequelize } from 'sequelize-typescript';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  models: [__dirname + '../models'],
  dialectOptions: {
    typeCast: (field: { type: string; string: () => any; }, next: () => any) => {
      if (field.type === 'UUID') {
        return field.string();
      }
      return next();
    },
  },
});

export { sequelize };