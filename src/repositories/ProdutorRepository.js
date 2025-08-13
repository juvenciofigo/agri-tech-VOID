import { Campanha } from "../models/Campanha.js";
import { Produtor } from "../models/Produtor.js";
import { ProdutorCampanha } from "../models/ProdutorCampanha.js";
import { Tecnico } from "../models/Tecnico.js";

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

    async findById(id) {
        try {
            const produtor = await Produtor.findByPk(id);
            return produtor;
        } catch (error) {
            console.error("Erro ao procurar produtor", error);
            throw error;
        }
    },

    async atribuir({ produtor_id, tecnico_id, campanha_id }) {
        try {
            // Cria o registro
            const atribuicao = await ProdutorCampanha.create({
                produtor_id,
                tecnico_id,
                campanha_id,
                data_registro: new Date(),
            });

            // Busca com os dados do relacionamento
            const atribuicaoCompleta = await ProdutorCampanha.findOne({
                where: { id: atribuicao.id },
                include: [
                    { model: Produtor, as: "produtor" },
                    { model: Tecnico, as: "tecnico" },
                ],
            });

            return {
                message: "Atribuição feita com sucesso",
                atribuicao: atribuicaoCompleta,
            };
        } catch (error) {
            console.error("Erro ao fazer atribuição", error);
            throw error;
        }
    },

    async transferir({ produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id }) {
        try {
            const posicaoAtual = await ProdutorCampanha.findOne({
                where: { produtor_id, tecnico_id: tecnico_antigo_id, campanha_id },
            });

            if (!posicaoAtual) {
                throw new Error("Posição atual não encontrada");
            }

            await posicaoAtual.update({
                tecnico_id: tecnico_novo_id,
                data_transferencia: new Date(),
            });

            // Buscar com dados relacionados
            const dadosAtualizados = await ProdutorCampanha.findOne({
                where: { id: posicaoAtual.id },
                include: [
                    { model: Produtor, as: "produtor" },
                    { model: Tecnico, as: "tecnico" },
                    { model: Campanha, as: "campanha" },
                ],
            });

            return {
                message: "Produtor transferido com sucesso",
                produtor: dadosAtualizados,
            };
        } catch (error) {
            console.error("Erro ao fazer atribuição", error);
            throw error;
        }
    },
};
