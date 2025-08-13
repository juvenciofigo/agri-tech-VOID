import { connectionDB } from "../config/database.js";
import { Campanha } from "../models/Campanha.js";

export default {
    async create({ nome, cnpj, telefone, email }) {
        try {
            const existEmail = Campanha.findAll();
        } catch (error) {}
    },
};
