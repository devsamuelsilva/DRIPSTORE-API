import { DataTypes } from "sequelize";
import { sequelize } from "../DB/database.js";

export const Usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_cadastro: {
        type: DataTypes.DATE,
        alowNull: false,
        defaultValue: new Date()
    },
    data_atualizacao: {
        type: DataTypes.DATE,
        alowNull: false,
        defaultValue: new Date()
    }
}, {
    timestamps: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',
})