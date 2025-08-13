import CampanhaRepository from "../repositories/CampanhaRepository.js";
import EmpresaService from "../repositories/EmpresaRepository.js";

export default {
    async create(data) {
        if (!data.nome || !data.empresa_id || !data.data_inicio) {
            return res.status(400).json({
                error: "Nome, empresa_id e data_inicio são obrigatórios",
            });
        }

        const empresa = await EmpresaService.findById(data.empresa_id);
        if (!empresa) throw new Error("Empresa não encontrada");

        return await CampanhaRepository.create(data);
    },
};
