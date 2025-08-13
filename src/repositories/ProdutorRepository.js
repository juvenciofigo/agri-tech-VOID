import { Produtor } from "../models/Produtor.js";
import { ProdutorCampanha } from "../models/ProdutorCampanha.js";

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
            const atribuicao = await ProdutorCampanha.create({
                produtor_id,
                tecnico_id,
                campanha_id,
                data_registro: new Date(),
            });

            return atribuicao;
        } catch (error) {
            console.error("Erro ao fazer atribuicao", error);
            throw error;
        }
    },

    async transferir({ produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id }) {
        console.log(false, produtor_id, tecnico_antigo_id, tecnico_novo_id, campanha_id);

        try {
            const posicaoAtual = await ProdutorCampanha.findOne({
                where: { produtor_id, tecnico_id: tecnico_antigo_id, campanha_id },
            });

            if (!posicaoAtual) {
                throw new Error("Posicao atual atual não encontrada");
            }

            const update = await posicaoAtual.update({
                tecnico_id: tecnico_novo_id,
                data_transferencia: new Date(),
            });
            console.log(false, update);

            return {
                message: "Produtor transferido com sucesso",
                produtor: update,
            };
        } catch (error) {
            console.error("Erro ao fazer atribuicao", error);
            throw error;
        }
    },
};
