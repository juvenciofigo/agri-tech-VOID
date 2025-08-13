import ProdutorRepository from "../repositories/ProdutorRepository.js";

export default {
    async create(data) {
        if (!data.nome || !data.localizacao) {
            throw new Error("Nome e localizacao são obrigatórios");
        }

        return await ProdutorRepository.create(data);
    },
    async atribuir(data) {
        
        if (!data.produtor_id || !data.tecnico_id || !data.campanha_id) {
            throw new Error("Id do produtor, id do tecnico e id da campanha sao obrigatorios!");
        }

        // Verificar se o produtor existe
        const produtor = await Produtor.findByPk(produtor_id);
        if (!produtor) {
            throw new Error("Nome e localizacao são obrigatórios");
        }

        // Verificar se o técnico existe
        const tecnico = await Tecnico.findByPk(tecnico_id);
        if (!tecnico) {
            throw new Error("Nome e localizacao são obrigatórios");
        }

        // Verificar se a campanha existe
        const campanha = await Campanha.findByPk(campanha_id);
        if (!campanha) {
            throw new Error("Nome e localizacao são obrigatórios");
        }

        // Verificar se o técnico pertence à campanha
        if (tecnico.campanha_id !== campanha_id) {
            throw new Error("Nome e localizacao são obrigatórios");
        }

        return await ProdutorRepository.create(data);
    },
};
