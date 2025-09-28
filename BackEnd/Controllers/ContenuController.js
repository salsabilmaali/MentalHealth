const successResponse = (res, message, data = null) => {
    return res.status(200).json({
        success: true,
        message,
        data
    });
};

const errorResponse = (res, message, statusCode = 400) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};

class ContenuController {
    constructor(ContenuService) {
        this.ContenuService = ContenuService;
    }

    async getAllContenus(req, res) {
         try {
        const contenus = await this.ContenuService.getAllContenus();
        res.status(200).json({ data: contenus });
    } catch (err) {
    if (err instanceof Error) {
        console.error("❌ Erreur dans /getAllContenus :", err.message, "\nStack:", err.stack);
        res.status(500).json({
            error: "Erreur serveur",
            message: err.message,
        });
    } else {
        console.error("❌ Erreur inconnue dans /getAllContenus :", err);
        res.status(500).json({
            error: "Erreur serveur inconnue",
            raw: err,
        });
    }
}

    }
    

    async getContenuById(req, res) {
        try {
            const contenu = await this.ContenuService.getContenuById(req.params.id);
            return successResponse(res, 'Contenu retrieved successfully', contenu);
        } catch (error) {
            return errorResponse(res, error.message, 500);
        }
    }

    async addContenu(req, res) {
        try {
            const contenu = await this.ContenuService.addContenu(req.body);
            return successResponse(res, 'Contenu added successfully', contenu);
        } catch (error) {
            return errorResponse(res, error.message, 500);
        }
    }

    async updateContenu(req, res) {
        try {
            const contenu = await this.ContenuService.updateContenu(req.params.id, req.body);
            return successResponse(res, 'Contenu updated successfully', contenu);
        } catch (error) {
            return errorResponse(res, error.message, 500);
        }
    }

    async deleteContenu(req, res) {
        try {
            const contenu = await this.ContenuService.deleteContenu(req.params.id);
            return successResponse(res, 'Contenu deleted successfully', contenu);
        } catch (error) {
            return errorResponse(res, error.message, 500);
        }
    }
}
module.exports=ContenuController;