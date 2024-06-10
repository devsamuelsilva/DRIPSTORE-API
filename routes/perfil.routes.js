import express from 'express'
import { perfilService } from '../services/perfil.services.js';

export const perfilRoute = (app) => {
    var route = express.Router();

    route.get('/', perfilService.getAll);

    app.use('/api/perfil', route);

}