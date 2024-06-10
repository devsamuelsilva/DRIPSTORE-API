import { Perfil } from "../model/perfil.model.js"

export const perfilService = {
    
    
    getAll: async (req,res) => {
        const perfil = await Perfil.findAll();
        
        return res.status(200).json(perfil);
    },


}