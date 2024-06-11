import express from 'express'
import { perfilService } from '../services/perfil.services.js';

var perfilRoute = express.Router();

    perfilRoute
    .get('/', perfilService.getAll);

    // app.use('/api/perfil', route);

export default perfilRoute;