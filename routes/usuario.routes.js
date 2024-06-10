import express from 'express'
import { produtoService } from '../services/produtos.services.js';
import { usuarioService } from '../services/usuario.services.js';

export const usuarioRoute = (app) => {
    var route = express.Router();

    route.get('/', usuarioService.getAll);

    app.use('/api/usuario', route);

}