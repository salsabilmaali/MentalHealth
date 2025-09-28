const ProfessionelRepository=require('../Repositories/ProfessionelRepository');
class ProfessionelService {
    constructor() {
        this.professionelRepository=new ProfessionelRepository();
    }

    async getAllProfessionels() {
        try {
            return await this.professionelRepository.findAllProfessionels();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getProfessionelById(id) {
        try {
            return await this.professionelRepository.findByIdProfessionel(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async addProfessionel(professionel) {
        try {
            return await this.professionelRepository.addProfessionel(professionel);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async updateProfessionel(id, professionel) {
        try {
            return await this.professionelRepository.updateProfessionel(id, professionel);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async deleteProfessionel(id) {
        try {
            return await this.professionelRepository.deleteProfessionel(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports = ProfessionelService;
