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
class TestEvaluationController{
    constructor(TestEvaluationService){
        this.TestEvaluationService=TestEvaluationService;
    }
    async getAllTestEvaluations(req,res){
        try{
            const testEvaluations=await this.TestEvaluationService.getAllTestEvaluations();
            return successResponse(res,'TestEvaluations retrieved successfully',testEvaluations);
        }
        catch(error){
            return errorResponse(res,error.message,500);
        }
    }
    async getTestEvaluationById(req,res){
        try{
            const testEvaluation=await this.TestEvaluationService.getTestEvaluationById(req.params.id);
            return successResponse(res,'TestEvaluation retrieved successfully',testEvaluation);
        }
        catch(error){
            return errorResponse(res,error.message,500);
        }
    }
    async addTestEvaluation(req,res){
        try{
            const testEvaluation=await this.TestEvaluationService.addTestEvaluation(req.body);
            return successResponse(res,'TestEvaluation added successfully',testEvaluation);
        }
        catch(error){
            return errorResponse(res,error.message,500);
        }
    }
    async updateTestEvaluation(req,res){
        try{
            const testEvaluation=await this.TestEvaluationService.updateTestEvaluation(req.params.id,req.body);
            return successResponse(res,'TestEvaluation updated successfully',testEvaluation);
        }
        catch(error){
            return errorResponse(res,error.message,500);
        }
    }
    async deleteTestEvaluation(req,res){
        try{
            const testEvaluation=await this.TestEvaluationService.deleteTestEvaluation(req.params.id);
            return successResponse(res,'TestEvaluation deleted successfully',testEvaluation);
        }
        catch(error){
            return errorResponse(res,error.message,500);
        }
    }
}
module.exports = TestEvaluationController;