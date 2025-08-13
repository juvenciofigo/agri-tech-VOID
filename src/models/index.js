import { Empresa } from "./Empresa.js";
import { Campanha } from "./Campanha.js";
import { Tecnico } from "./Tecnico.js";
import { Produtor } from "./Produtor.js";
import { ProdutorCampanha } from "./ProdutorCampanha.js";

// Empresa.hasMany(Campanha, { foreignKey: "empresa_id" });
// Campanha.belongsTo(Empresa, { foreignKey: "empresa_id" });

// Campanha.hasMany(Tecnico, { foreignKey: "campanha_id" });
// Tecnico.belongsTo(Campanha, { foreignKey: "campanha_id" });

// Produtor.belongsToMany(Campanha, { through: ProdutorCampanha, foreignKey: "produtor_id" });
// Campanha.belongsToMany(Produtor, { through: ProdutorCampanha, foreignKey: "campanha_id" });

// Tecnico.hasMany(ProdutorCampanha, { foreignKey: "tecnico_id" });
// ProdutorCampanha.belongsTo(Tecnico, { foreignKey: "tecnico_id" });

// ProdutorCampanha.belongsTo(Produtor, { foreignKey: "produtor_id" });
// ProdutorCampanha.belongsTo(Campanha, { foreignKey: "campanha_id" });

export { Empresa, Campanha, Tecnico, Produtor, ProdutorCampanha };
