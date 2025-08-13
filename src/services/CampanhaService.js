import CampanhaRepository from "../repositories/CampanhaRepository.js";
import EmpresaService from "../repositories/EmpresaRepository.js";

export default {
    async create(data) {
        const empresa = await EmpresaService.findById(data.email);
        if (!empresa) throw new Error("Empresa não encontrada");
        return await CampanhaRepository.create(data);
    },
};
