import TencicoService from "../services/TencicoService.js";

export default {
    async create(req, res) {
        try {
            const tecnico = await TencicoService.create(req.body);

            return res.status(201).json(tecnico);
        } catch (erro) {
            res.status(400).json({ error: erro.message });
        }
    },
};
