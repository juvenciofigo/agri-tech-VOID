import CampanhaRepository from "../repositories/CampanhaRepository.js";
import TencicoRepository from "../repositories/TencicoRepository.js";

export default {
    async create(data) {
        if (!data.nome || !data.campanha_id) {
            return res.status(400).json({
                error: "Nome e campanha_id são obrigatórios",
            });
        }

        const campanha = await CampanhaRepository.findById(data.campanha_id);

        if (!campanha) throw new Error("Campanha não encontrada");

        return await TencicoRepository.create(data);
    },
};
