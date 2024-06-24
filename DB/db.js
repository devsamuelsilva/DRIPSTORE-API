import { iniciarPerfis } from "../server.js";
import { sequelize } from "./database.js";
import 'dotenv/config'

export const connect = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };

  sequelize.sync({force: true}).then(() => {
    iniciarPerfis();
    console.log('[INFO] DROP e resicronizacao com o DB.');
  })
  .catch((err) => {
    console.log(`[ERROR] Erro ao sincronizar o DB: ${err}`);
  })