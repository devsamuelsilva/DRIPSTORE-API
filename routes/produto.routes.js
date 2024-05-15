import express from 'express'
import { produtoService } from '../services/produtos.services.js';

export const produtoRoute = (app) => {
    var route = express.Router();

    route.get('/', produtoService.getAll);
    route.get('/:id', produtoService.getById);
    // Rota para criação de produto
    route.post('/', produtoService.createProduto);

    app.use('/api/produto', route);

}