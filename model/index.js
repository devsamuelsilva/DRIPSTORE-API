//utilizando o padrao de projeto singleton
import { Sequelize } from "sequelize";
import { sequelize } from "../DB/database.js";
import { Perfil } from "./perfil.model.js";
import { Produtos } from "./produto.model.js";
import { Usuarios } from "./usuarios.model.js";


sequelize.authenticate().then(() => {
    console.log('[INFO] Connection has been established successfully.');
  }).catch((error) => {
    console.error('[ERROR] Unable to connect to the database: ', error);
  });

const db = {};

db.sequelize = sequelize
db.Sequelize = Sequelize

db.produtos = Produtos
db.usuarios = Usuarios
db.perfil = Perfil

db.perfil.belongsToMany(db.usuarios, {
    through: "usuario_perfil"
  });
  db.usuarios.belongsToMany(db.perfil, {
    through: "usuario_perfil"
  });
  
  db.PERFIS = ["usuario", "admin", "moderador"];

export default db;