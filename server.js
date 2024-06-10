import express from 'express'
import { connect } from './DB/db.js'
import { produtoRoute } from './routes/produto.routes.js'
import  cors  from 'cors'
import { usuarioService } from './services/usuario.services.js';
import { usuarioRoute } from './routes/usuario.routes.js';
import { perfilRoute } from './routes/perfil.routes.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
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

produtoRoute(app);
usuarioRoute(app);
perfilRoute(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})