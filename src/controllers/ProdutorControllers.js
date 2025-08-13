import ProdutorService from "../services/ProdutorService.js";

export default {
    async create(req, res) {
        try {
            const produtor = await ProdutorService.create(req.body);

            return res.status(201).json(produtor);
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    },
    async atribuir(req, res) {
        try {
            const atribuicao = await ProdutorService.atribuir(req.body);

            return res.status(201).json({ message: "Atribuicao feita com sucesso", atribuicao });
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    },
    async transferir(req, res) {
        try {
            const atribuicao = await ProdutorService.transferir(req.body);

            return res.status(201).json({ message: "Atribuicao feita com sucesso", atribuicao });
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    },
    async getProdutores(req, res) {
        try {
            const produtores = await ProdutorService.getProdutores(req.params);

            return res.status(201).json(produtores);
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    },
};
