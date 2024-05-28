import { Produtos } from "../model/produto.model.js"

export const produtoService = {

        getAll: async (req,res) => {
            const produtos = await Produtos.findAll();
            
            return res.status(200).json(produtos);
        },

        getById: async (req, res) => {
            const id = req.params.id;
            const produto = await Produtos.findByPk(id);
            
            if(!produto){
                return res.status(404).json({
                    message: `Produto id: ${id} não encontrado`
                })
            };

            //const produtoJSON = JSON.parse(produto,2);
            return res.status(200).json(produto);
        },

        getByAtivo: async (req, res) => {
            const ativo = req.params.ativo === 'true' ? true : false;
            const produto = await Produtos.findAll({
              where: {ativo: ativo}
            });
            
            if(!produto){
                return res.status(404).json({
                    message: `Nao existe produtos que nao estao ATIVOS`
                })
            }

            return res.status(200).json(produto);
        },
        
        createProduto: async (req, res) => {
            
            try {
                const produto = req.body;
                //const { nome, descricao, desconto, preco, ativo, categoria, id } = req.body;
                //const { id, ...produto} = req.body;

                // Criação do produto no banco de dados
                // const novoProduto = await Produtos.create({nome, descricao, desconto, preco, ativo, categoria, id });
                const novoProduto = await Produtos.create(produto);
                
                return res.status(201).json(novoProduto);

            } catch (error) {

                res.status(500).json({ error: `Erro ao criar o produto: ${error}` });
            }
        },

        updateProdutoId: async (req, res) => {
            const id = req.params.id;
          
            // Obtem os dados do produto atualizado do corpo da requisição
            const dadosProdutoAtualizado = req.body;
          
            try {
              // Atualiza o produto usando o Sequelize
              const produtosAtualizados = await Produtos.update(
                dadosProdutoAtualizado,  // Objeto com as alterações
                { where: { id } }      // Filtro para atualizar o produto com o ID especificado
              );
          
              if (!produtosAtualizados) {
                // Atualização bem-sucedida
                return res.status(200).json({
                    message: `Produto com ID ${id} nao atualizado.`
                });  // Retorna o produto atualizado
              } 
              
                return res.status(200).json({
                    message: `Produto com ID ${id} atualizado.`
                });

            } catch (error) {
              console.error('Erro ao atualizar produto:', error);
              return res.status(500).json({ mensagem: 'Erro interno do servidor' });
            }
          },

        deleteProdutoId: async (req, res) => {
            const id = req.params.id;

            const dadosProdutoAtualizado = req.body;

            try {
                const produto = await Produtos.findByPk(id);
            
                if (!produto) {
                  return res.status(404).json({ message: 'Produto não encontrado' });
                }
            
                await produto.destroy();
            
                return res.status(200).json({ message: 'Produto deletado com sucesso' });
              } catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Erro ao deletar produto' });
              }
        },

        organizandoPorId: async (req,res) => {
            const produtos = await Produtos.findAll(
                {
                    order: [['id', 'ASC']]
                });
            
            return res.status(200).json(produtos);
        },
    }