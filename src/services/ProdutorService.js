import ProdutorRepository from "../repositories/ProdutorRepository.js";
import TencicoRepository from "../repositories/TencicoRepository.js";
import CampanhaRepository from "../repositories/CampanhaRepository.js";

export default {
    async create(data) {
        if (!data.nome || !data.localizacao) {
            throw new Error("Nome e localizacao são obrigatórios");
        }

        return await ProdutorRepository.create(data);
    },

    // Atribuicao
    async atribuir(data) {
        if (!data.produtor_id || !data.tecnico_id || !data.campanha_id) {
            throw new Error("Id do produtor, id do tecnico e id da campanha sao obrigatorios!");
        }

        // Verificar se o produtor existe
        const produtor = await ProdutorRepository.findById(data.produtor_id);
        if (!produtor) {
            throw new Error("Pordutor nao encontrado");
        }

        // Verificar se o técnico existe
        const tecnico = await TencicoRepository.findById(data.tecnico_id);
        if (!tecnico) {
            throw new Error("Tecnico nao encontrado");
        }

        // Verificar se a campanha existe
        const campanha = await CampanhaRepository.findById(data.campanha_id);
        if (!campanha) {
            throw new Error("Camanha nao encontrada");
        }

        // Verificar se o técnico pertence à campanha
        if (tecnico.campanha_id !== data.campanha_id) {
            throw new Error("Técnico não pertence à campanha mencionada");
        }

        return await ProdutorRepository.atribuir(data);
    },

    // transferir
    async transferir(data) {
        if (!data.produtor_id || !data.tecnico_antigo_id || !data.tecnico_novo_id || !data.campanha_id) {
            throw new Error("Todos os campos são obrigatórios");
        }

        // Verificar se o produtor existe
        const produtor = await ProdutorRepository.findById(data.produtor_id);
        if (!produtor) {
            throw new Error("Produtor não encontrado");
        }

        const tecnicoAntigo = await TencicoRepository.findById(data.tecnico_antigo_id);
        if (!tecnicoAntigo) {
            throw new Error("Tecnico antigo nao encontrado");
        }

        const tecnicoNovo = await TencicoRepository.findById(data.tecnico_novo_id);
        if (!tecnicoNovo) {
            throw new Error("Tecnico novo nao encontrado");
        }

        // Verificar se a campanha existe
        const campanha = await CampanhaRepository.findById(data.campanha_id);
        if (!campanha) {
            throw new Error("Camanha nao encontrada");
        }

        return await ProdutorRepository.transferir(data);
    },
};
