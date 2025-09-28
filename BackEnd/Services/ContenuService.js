const ContenuRepository=require('../Repositories/ContenuRepository');
class ContenuService {
    constructor() {
        this.ContenuRepository=new ContenuRepository();
    }
    async getAllContenus(){
        try{
            const contenus=await this.ContenuRepository.findAllContenus();
            return contenus
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async getContenuById(id) {
        try {
            return await this.ContenuRepository.findByIdContenu(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async addContenu(contenu) {
        try {
            return await this.ContenuRepository.addContenu(contenu);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async updateContenu(id, contenu) {
        try {
            return await this.ContenuRepository.updateContenu(id, contenu);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async deleteContenu(id) {
        try {
            return await this.ContenuRepository.deleteContenu(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}
module.exports=ContenuService;