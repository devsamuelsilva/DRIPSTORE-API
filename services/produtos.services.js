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
        }
    }