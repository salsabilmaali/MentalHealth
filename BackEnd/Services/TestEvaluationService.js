const TestEvaluationRepository = require("../Repositories/TestEvaluationRepository");

class TestEvaluationService {
    constructor() {
        this.testEvaluationRepository=new TestEvaluationRepository();
    }
    async getAllTestEvaluations() {
        try {
            return await this.testEvaluationRepository.findAllTestEvaluations();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async getTestEvaluationById(id) {
        try {
            return await this.testEvaluationRepository.findByIdTestEvaluation(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async addTestEvaluation(testEvaluation) {
        try {
            return await this.testEvaluationRepository.addTestEvaluation(testEvaluation);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async updateTestEvaluation(id,testEvaluation) {
        try {
            return await this.testEvaluationRepository.updateTestEvaluation(id,testEvaluation);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async deleteTestEvaluation(id) {
        try {
            return await this.testEvaluationRepository.deleteTestEvaluation(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports=TestEvaluationService;
