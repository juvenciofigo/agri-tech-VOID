import { Router } from "express";
import empresa from "../controllers/EmpresaControllers.js";
import campanha from "../controllers/CampanhaControllers.js";
import tecnico from "../controllers/CampanhaControllers.js";
import produtore from "../controllers/CampanhaControllers.js";
const router = Router();

// health
router.get("/test", (req, res) => res.send("ok"));

// Empresas
router.post("/empresa", empresa.create);

// Campanha
router.post("/campanha", campanha.create);

// Técnicos
router.post("/tecnicos", tecnico.create);

// Produtores
router.post("/tecnico", produtore.create);

export default router;
