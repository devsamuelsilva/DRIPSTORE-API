import express from 'express'
import { usuarioService } from '../services/usuario.services.js';

export const usuarioRoute = (app) => {
    var route = express.Router();

    route.get('/', usuarioService.getAll);

    //Rota para criar um usuario implementando as informacoes no postman
    route.post('/', usuarioService.createUsuario);

    //Rota para atualizar o produto pelo ID
    route.put('/atualizar/:id', usuarioService.updateusuarioId);

    //Rota para deletar o Usuario
    route.delete('/delete/:id', usuarioService.deleteUsuarioId);

    app.use('/api/usuario', route);

}