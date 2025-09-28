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
class CoursController {
    constructor(CoursService){
        this.CoursService=CoursService;
    }
    async getAllCours(req, res) {
        try {
            const data=await this.CoursService.getAllCours();
            return successResponse(res, "Cours retrieved successfully", data);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async getCoursById(req, res) {
        try{
            const cours=await this.CoursService.getCoursById(req.params.id)
            return successResponse(res, "Cours retrieved successfully", cours);
        }
        catch(error){
            return errorResponse(res, error.message);
        }
    }
    async addCours(req, res) {
        try {
            const cours=await this.CoursService.addCours(req.body);
            return successResponse(res, "Cours added successfully", cours);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async updateCours(req, res) {
        try {
            const cours=await this.CoursService.updateCours(req.params.id, req.body);
            return successResponse(res, "Cours updated successfully", cours);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
    async deleteCours(req, res) {
        try {
            const cours=await this.CoursService.deleteCours(req.params.id);
            return successResponse(res, "Cours deleted successfully", cours);
        } catch (error) {
            return errorResponse(res, error.message);
        }
    }
}
module.exports=CoursController;