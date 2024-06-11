// import { Usuarios } from "../model/usuarios.model.js"
import db from "../model/index.js";

const Usuarios = db.Usuarios

export const usuarioService = {
    
    
    getAll: async (req,res) => {
        const usuarios = await Usuarios.findAll();
        
        return res.status(200).json(usuarios);
    },

    createUsuario: async (req, res) => {
            
        try {
            const usuario = req.body;
            //const { nome, descricao, desconto, preco, ativo, categoria, id } = req.body;
            //const { id, ...produto} = req.body;

            // Criação do produto no banco de dados
            // const novoProduto = await Produtos.create({nome, descricao, desconto, preco, ativo, categoria, id });
            const novoUsuario = await Usuarios.create(usuario);
            
            return res.status(201).json(novoUsuario);

        } catch (error) {

            res.status(500).json({ error: `Erro ao criar o Usuario: ${error}` });
        }
    },

    updateusuarioId: async (req, res) => {
        const id = req.params.id;
      
        // Obtem os dados do produto atualizado do corpo da requisição
        const dadosUsuarioAtualizado = req.body;
      
        try {
          // Atualiza o produto usando o Sequelize
          const usuariosAtualizados = await Usuarios.update(
            dadosUsuarioAtualizado,  // Objeto com as alterações
            { where: { id } }      // Filtro para atualizar o produto com o ID especificado
          );
      
          if (!usuariosAtualizados) {
            // Atualização bem-sucedida
            return res.status(200).json({
                message: `Usuario com ID ${id} nao atualizado.`
            });  // Retorna o produto atualizado
          } 
          
            return res.status(200).json({
                message: `Usuario com ID ${id} atualizado.`,
                dadosUsuarioAtualizado
            });

        } catch (error) {
          console.error('Erro ao atualizar usuario:', error);
          return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
      },

      deleteUsuarioId: async (req, res) => {
        const id = req.params.id;

        const dadosUsuarioAtualizado = req.body;

        try {
            const usuario = await Usuarios.findByPk(id);
        
            if (!usuario) {
              return res.status(404).json({ message: 'Usuario não encontrado' });
            }
        
            await usuario.destroy();
        
            return res.status(200).json({ message: 'Usuario deletado com sucesso' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao deletar Usuario' });
          }
    },

}