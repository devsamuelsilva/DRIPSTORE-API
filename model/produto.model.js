import { DataTypes } from "sequelize";
import { sequelize } from "../DB/database.js";


//model declarado de forma manual.
export const Produtos = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // autoIncrement: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        alowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        alowNull: false
    },
    desconto: {
        type: DataTypes.DECIMAL,
        alowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL,
        alowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        alowNull: false,
        defaultValue: true
    },
    categoria: {
        type: DataTypes.STRING,
        alowNull: false
    },
    data_cadastro: {
        type: DataTypes.DATE,
        alowNull: false,
        defaultValue: new Date()
    },
}, {
    timestamps: true,
    createdAt: 'data_cadastro',
    updatedAt: false,
})