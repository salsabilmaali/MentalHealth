const UserRepository = require("../Repositories/UserRepository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository(); // Create instance
    }

    async getAllUsers() {
        try {
            return await this.userRepository.findAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async getUserById(id) {
        try {
            return await this.userRepository.findById(id);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
    async addUser(user){
        try{
            return await this.userRepository.addUser(user);
        }
        catch(error){
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async updateUser(id,user){
        try{
            return await this.userRepository.updateUser(id,user);
        }
        catch(error){
            throw new Error(`Service error:${error.message}` )
        }
    }
    async deleteUser(id){
        try{
            return await this.userRepository.deleteUser(id);
        }
        catch(error){
            throw new Error(`Service error:${error.message}` )
        }
    }
}
module.exports = UserService;