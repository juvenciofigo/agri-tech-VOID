import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";

export const Produtor = connectionDB.define("produtores", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    localizacao: { type: DataTypes.STRING },
});