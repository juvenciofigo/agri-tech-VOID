import CampanhaService from "../services/CampanhaService.js";

export default {
    async create(req, res) {
            try {
                const empresa = await CampanhaService.create(req.body);
    
                return res.status(201).json(empresa);
            } catch (erro) {
                res.status(400).json({ error: erro.message });
            }
        },
};
