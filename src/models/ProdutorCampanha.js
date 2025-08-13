import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";

export const ProdutorCampanha = connectionDB.define("produtores_campanhas", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    data_transferencia: { type: DataTypes.DATE },
});