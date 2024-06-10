import express from 'express'
import { usuarioService } from '../services/usuario.services.js';

export const usuarioRoute = (app) => {
    var route = express.Router();

    route.get('/', usuarioService.getAll);

    app.use('/api/usuario', route);

}