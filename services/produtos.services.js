import { Produtos } from "../model/produto.model.js"

export const produtoService = {
    getAll: async (req, res) => {
        const produtos = await Produtos.findAll();

        return res.status(200).json(produtos);
    }
}