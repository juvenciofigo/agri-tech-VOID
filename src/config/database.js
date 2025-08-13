import { Sequelize } from "sequelize";
import fs from "fs";
import { log } from "console";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// funcao para criar o banco de dados caso nao exista
async function createDatabase() {
    const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`);
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    await sequelize.close();
}

// conectar com o banco de dados
export const connectionDB = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
});

async function testConnection() {
    try {
        await connectionDB.authenticate();
        console.log("Conectado com o banco de dados");

        const sql = fs.readFileSync("migrations/init.sql", "utf-8");

        const queries = sql
            .split(";")
            .map((q) => q.trim())
            .filter((q) => q.length);

        for (const query of queries) {
            await connectionDB.query(query);
        }
    } catch (error) {
        console.error("Erro ao conectar:", error);
    }
}

await createDatabase();
await testConnection();
