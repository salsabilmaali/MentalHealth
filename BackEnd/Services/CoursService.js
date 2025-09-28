const CoursRepository=require('../Repositories/CoursRepository');
class CoursService{
    constructor(){
        this.CoursRepository=new CoursRepository();
    }
    async getAllCours(){
        try{
            return await this.CoursRepository.getAllCours()
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async getCoursById(id){
        try{
            return await this.CoursRepository.getCoursById(id);
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async addCours(cours){
        try{
            return await this.CoursRepository.addCours(cours);
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async updateCours(id, cours){
        try{
            return await this.CoursRepository.updateCours(id, cours);
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async deleteCours(id){
        try{
            return await this.CoursRepository.deleteCours(id);
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }
}
module.exports=CoursService;