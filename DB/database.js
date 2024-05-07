import 'dotenv/config'
import { Sequelize } from 'sequelize'

const HOST = process.env.PGHOST;
const DATABASE = process.env.PGDATABASE;
const USER = process.env.PGUSER;
const PASSWORD = process.env.PGPASSWORD;

export const STRING_CONECCTION = `postgresql://${USER}:${PASSWORD}@${HOST}/${DATABASE}?sslmode=require`

export const sequelize = new Sequelize(STRING_CONECCTION)
