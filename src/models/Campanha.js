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
    empresa_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});
