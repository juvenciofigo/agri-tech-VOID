import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";

export const Campanha = connectionDB.define("campanhas", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    data_inicio: { type: DataTypes.DATE, allowNull: false },
    data_fim: { type: DataTypes.DATE },
});
