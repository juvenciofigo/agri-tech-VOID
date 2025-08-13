import { Campanha } from "../models/index.js";

export default {
    async create({ nome, empresa_id, data_inicio, data_fim }) {
        try {
            const campanha = await Empresa.create({
                nome,
                empresa_id,
                data_inicio,
                data_fim,
            });

            const result = {
                id: campanha.id,
                nome: campanha.nome,
                empresa_id: campanha.empresa_id,
                data_inicio: campanha.data_inicio,
                data_fim: campanha.data_fim,
            };

            return result;
        } catch (error) {
            console.error("Erro ao criar campanha:", error);
            throw error;
        }
    },
};
