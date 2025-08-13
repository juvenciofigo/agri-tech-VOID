import { Router } from "express";
import empresas from "../controllers/EmpresaControllers.js";
import campanhas from "../controllers/CampanhaControllers.js";
import tecnicos from "../controllers/CampanhaControllers.js";
import produtores from "../controllers/CampanhaControllers.js";
const router = Router();

// health
router.get("/test", (req, res) => res.send("ok"));

// Empresas
router.post("/empresa", empresas.create);

// Campanha
router.post("/campanhas", campanhas.create);

// Técnicos
router.post("/tecnicos", tecnicos.create);

// Produtores
router.post("/tecnicos", produtores.create);

export default router;
