import { sequelize } from "./config/database";
import app from "./app";

const PORT = Number(process.env.PORT) || 4002;

sequelize.sync().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on ${PORT}`);
  });
});
