import { Produtor } from "../models/Produtor.js";

export default {
    async create({ nome, localizacao }) {
        try {
            const produtor = await Produtor.create({
                nome,
                localizacao,
            });

            const result = {
                id: produtor.id,
                nome: produtor.nome,
                localizacao: produtor.localizacao,
            };

            return result;
        } catch (error) {
            console.error("Erro ao cadastrar produtor", error);
            throw error;
        }
    },
};
