import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";
import { Empresa } from "./Empresa.js";

export const Campanha = connectionDB.define("campanhas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    data_fim: {
        type: DataTypes.DATE,
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "empresas",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
});

Campanha.belongsTo(Empresa, {
    foreignKey: "empresa_id",
    as: "empresa",
});
