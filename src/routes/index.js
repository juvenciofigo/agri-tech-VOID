import { Router } from "express";
import empresa from "../controllers/EmpresaControllers.js";
import campanha from "../controllers/CampanhaControllers.js";
import tecnico from "../controllers/TecnicoControllers.js";
import produtor from "../controllers/ProdutorControllers.js";
const router = Router();

// Test
router.get("/test", (req, res) => res.send("ok"));

// Empresas
router.post("/empresa", empresa.create);

// Campanha
router.post("/campanha", campanha.create);

// Técnicos
router.post("/tecnico", tecnico.create);

// Produtores
router.post("/produtor", produtor.create);
router.post("/produtores/atribuir", produtor.atribuir);

export default router;
