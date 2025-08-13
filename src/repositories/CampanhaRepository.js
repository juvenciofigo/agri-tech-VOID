import { Campanha } from "../models/index.js";

export default {
    async create({ nome, empresa_id, data_inicio, data_fim }) {
        try {
            if (data_fim && new Date(data_fim) < new Date(data_inicio)) {
                return res.status(400).json({
                    error: "Data de fim dever ser seuperio a data de inicio",
                });
            }

            const campanha = await Campanha.create({
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
    async findById(id) {
        try {
            const campanha = await Campanha.findByPk(id);
            return campanha;
        } catch (error) {
            console.error("Erro ao buscar campanha", error);
            throw error;
        }
    },
};
