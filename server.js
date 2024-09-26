import express from 'express'
import { connect } from './DB/db.js'
import  cors  from 'cors'
import { usuarioService } from './services/usuario.services.js';
import { routes } from './routes/index.js';
import db from './model/index.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5174',
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST = 'localhost'
const PORT = 3000

connect();

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
    status: 200
  })
})

routes(app);

export const iniciarPerfis = async () => {
  const perfis = await db.perfil.findAll();
  //console.log('perfis:', perfis)

  // TODO testar usando o bulkCreate
  if (perfis.length === 0) {
    db.perfil.create({
      id: 1,
      nome: "usuario",
      codigo: 'USER'
    });

    db.perfil.create({
      id: 2,
      nome: "moderador",
      codigo: 'MOD'
    });

    db.perfil.create({
      id: 3,
      nome: "admin",
      codigo: 'ADMIN'
    });
  }

}

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})