import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";

export const Empresa = connectionDB.define("empresas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cnpj: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: DataTypes.STRING(15),
    },
    email: {
        type: DataTypes.STRING(100),
    },
});
