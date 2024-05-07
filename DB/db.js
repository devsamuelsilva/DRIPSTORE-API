import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'postgresql://dripstore_db_owner:0BCL1cqFKlQa@ep-rough-fog-a51z4whm.us-east-2.aws.neon.tech/dripstore_db?sslmode=require'
)

export const connect = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };

