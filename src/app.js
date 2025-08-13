import express from "express";
import "dotenv/config";
import router from "./routes/index.js";
import "./models/index.js";

const app = express();
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
