// import { Perfil } from "../model/perfil.model.js"
import db from "../model/index.js";

const Perfil = db.perfil

export const perfilService = {
    
    
    getAll: async (req,res) => {
        const perfil = await Perfil.findAll();
        
        return res.status(200).json(perfil);
    },


}