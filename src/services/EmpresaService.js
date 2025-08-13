import empresaRepository from "../repositories/EmpresaRepository.js";

export default {
    async create(data) {
        if (!data.nome || !data.cnpj || !data.email) {
            return res.status(400).json({
                error: "Nome, CNPJ e email são obrigatórios",
            });
        }

        const existEmail = await empresaRepository.findByEmail(data.email);
        if (existEmail) throw new Error("Email já cadastrado");

        const existCnpj = await empresaRepository.findByCnpj(data.cnpj);
        if (existCnpj) throw new Error("Cnpj já cadastrado");

        return await empresaRepository.create(data);
    },
};
