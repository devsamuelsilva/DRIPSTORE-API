import express from 'express'
import { usuarioService } from '../services/usuario.services.js';

var usuarioRoute = express.Router();

usuarioRoute
    .get('/', usuarioService.getAll)

    //Rota para criar um usuario implementando as informacoes no postman
    .post('/', usuarioService.createUsuario)

    //Rota para atualizar o produto pelo ID
    .put('/atualizar/:id', usuarioService.updateusuarioId)

    //Rota para deletar o Usuario
    .delete('/delete/:id', usuarioService.deleteUsuarioId);

export default usuarioRoute;

