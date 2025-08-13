import { Empresa } from "../models/index.js";

export default {
    async create({ nome, cnpj, telefone, email }) {
        try {
            const empresa = await Empresa.create({
                nome,
                cnpj,
                telefone,
                email,
            });

            const result = {
                id: empresa.id,
                nome: empresa.nome,
                cnpj: empresa.cnpj,
                telefone: empresa.telefone,
                email: empresa.email,
            };

            return result;
        } catch (error) {
            console.error("Erro ao criar empresa:", error);
            throw error;
        }
    },

    async findByEmail(email) {
        try {
            const empresa = await Empresa.findOne({
                where: { email },
            });
            return empresa;
        } catch (error) {
            console.error("Erro ao buscar empresa por email:", error);
            throw error;
        }
    },

    async findById(id) {
        try {
            const empresa = await Empresa.findByPk(id);
            return empresa;
        } catch (error) {
            console.error("Erro ao buscar empresa por email:", error);
            throw error;
        }
    },

    async findByCnpj(cnpj) {
        try {
            const empresa = await Empresa.findOne({
                where: { cnpj },
            });
            return empresa;
        } catch (error) {
            console.error("Erro ao buscar empresa por cnpj:", error);
            throw error;
        }
    },
};
