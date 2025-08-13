import { DataTypes } from "sequelize";
import { connectionDB } from "../config/database.js";
import { Produtor } from "./Produtor.js";
import { Campanha } from "./Campanha.js";
import { Tecnico } from "./Tecnico.js";

export const ProdutorCampanha = connectionDB.define("produtores_campanhas", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    data_transferencia: { type: DataTypes.DATE },
    produtor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "produtores",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    data_transferencia: { type: DataTypes.DATE },
    produtor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "produtores",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    tecnico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tecnicos",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    campanha_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "campanhas",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
});

ProdutorCampanha.belongsTo(Produtor, { foreignKey: "produtor_id", as: "produtor" });
ProdutorCampanha.belongsTo(Campanha, { foreignKey: "campanha_id", as: "campanha" });
ProdutorCampanha.belongsTo(Tecnico, { foreignKey: "tecnico_id", as: "tecnico" });

await ProdutorCampanha.sync({ alter: true });
