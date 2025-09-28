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
class ProfessionelController{
    constructor(professionelService) {
        this.professionelService = professionelService;
    }
    async getProfessionels(req, res) {
        try{
            const professionel=await this.professionelService.getAllProfessionels();
            return successResponse(res, 'Professionel retrieved successfully', professionel);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async getProfessionelById(req, res) {
        try {
            const professionel=await this.professionelService.getProfessionelById(req.params.id);
            return successResponse(res, 'Professionel retrieved successfully', professionel);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async addProfessionel(req, res) {
        try {
            const professionel = await this.professionelService.addProfessionel(req.body);
            return successResponse(res, 'Professionel added successfully', professionel);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async updateProfessionel(req,res){
        try {
            const professionel=await this.professionelService.updateProfessionel(req.params.id,req.body);
            return successResponse(res, 'Professionel updated successfully', professionel);
        }
        catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async deleteProfessionel(req, res) {
        try {
            const professionel=await this.professionelService.deleteProfessionel(req.params.id);
            return successResponse(res, 'Professionel deleted successfully', professionel);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }


}
module.exports = ProfessionelController;