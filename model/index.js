//utilizando o padrao de projeto singleton
import { Perfil } from "./perfil.model.js";
import { Produtos } from "./produto.model.js";
import { Usuarios } from "./usuarios.model.js";


const db = {};

db.Produtos = Produtos
db.Usuarios = Usuarios
db.Perfil = Perfil


export default db;