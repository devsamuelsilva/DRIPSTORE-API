import { DataTypes } from "sequelize";
import { sequelize } from "../DB/database.js";

export const Perfil = sequelize.define('perfil', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigo: {
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