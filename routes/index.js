import routerAuth from "./auth.routes.js";
//import perfilRoute from "./perfil.routes.js";
import produtoRoute from "./produto.routes.js";
import usuarioRoute from "./usuario.routes.js";

export const  routes = (app) => {
    app.use('/api/produto', produtoRoute);
    app.use('/api/usuarios', usuarioRoute);
    app.use('/api/auth', routerAuth);
    
}