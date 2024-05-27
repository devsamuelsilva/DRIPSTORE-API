import express from 'express'
import { produtoService } from '../services/produtos.services.js';

export const produtoRoute = (app) => {
    var route = express.Router();

    route.get('/', produtoService.getAll);
    route.get('/status/:ativo', produtoService.getByAtivo);
    route.get('/:id', produtoService.getById);
    // Rota para criação de produto
    route.post('/', produtoService.createProduto);

    //Rota para atualizar o Id do produto
    route.put('/atualizar/:id', produtoService.updateProdutoId);

    route.delete('/delete/:id', produtoService.deleteProdutoId);

    route.get('/ordenar/2', produtoService.organizandoPorId);

    app.use('/api/produto', route);

}