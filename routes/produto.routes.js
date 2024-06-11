import express from 'express'
import { produtoService } from '../services/produtos.services.js';

var produtoRoute = express.Router();

produtoRoute.get('/', produtoService.getAll)
    .get('/status/:ativo', produtoService.getByAtivo)
    .get('/:id', produtoService.getById)
    // Rota para criação de produto
    .post('/', produtoService.createProduto)

    //Rota para atualizar o Id do produto
    .put('/atualizar/:id', produtoService.updateProdutoId)

    .delete('/delete/:id', produtoService.deleteProdutoId)

    .get('/ordenar/2', produtoService.organizandoPorId)

    // app.use('/api/produto', route);

    export default produtoRoute;  // Exportando a rota para ser utilizada no arquivo principal do
