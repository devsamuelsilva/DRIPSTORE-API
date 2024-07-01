import express from 'express'
//import { produtoService } from '../services/produtos.service.js'
//import { verifySignUp } from '../middleware/verifySignUp.js';
import { authService } from '../services/auth.services.js';

var routerAuth = express.Router()

routerAuth
    .get('/', authService.getAll)
    //cadastrar
    .post('/signup', authService.signup)
    //logar
    .post('/signin', authService.signin)
    //deslogar
    //.post("/logout", authService.logout);


export default routerAuth;