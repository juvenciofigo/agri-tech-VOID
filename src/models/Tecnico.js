import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";
import { Campanha } from "./Campanha.js";

export const Tecnico = connectionDB.define("tecnicos", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    campanha_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "campanhas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
});

Tecnico.belongsTo(Campanha, { foreignKey: "campanha_id", as: "campanha" });