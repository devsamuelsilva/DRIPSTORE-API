import { Usuarios } from "../model/usuarios.model.js"

export const usuarioService = {
    
    
    getAll: async (req,res) => {
        const usuarios = await Usuarios.findAll();
        
        return res.status(200).json(usuarios);
    },


}