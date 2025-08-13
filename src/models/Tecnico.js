import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";

export const Tecnico = connectionDB.define("tecnicos", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
});