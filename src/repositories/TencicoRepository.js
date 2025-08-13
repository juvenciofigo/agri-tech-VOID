import { Tecnico } from "../models/index.js";

export default {
    async create({ nome, campanha_id }) {
        try {
            const tecnico = await Tecnico.create({
                nome,
                campanha_id,
            });
            console.log("campanha",tecnico);
            

            const result = {
                id: tecnico.id,
                nome: tecnico.nome,
                campanha: tecnico.campanha_id,
            };

            return result;
        } catch (error) {
            console.error("Erro ao cadastrar tecnico:", error);
            throw error;
        }
    },
};
