// Helper functions for consistent API responses
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

class UserController {
    constructor(userService) {
        this.userService = userService; // Inject dependency
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            return successResponse(res, 'Users retrieved successfully', users);
        } catch (error) {
            console.error('Controller error in getAllUsers:', error);
            return errorResponse(res, error.message, 500);
        }
    }
    async getUserById(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            return successResponse(res, 'User retrieved successfully', user);
        } catch (error) {
            console.error('Controller error in getUserById:', error);
            return errorResponse(res, error.message, 500);
        }
    }
    async addUser(req,res){
        try {
            const user=await this.userService.addUser(req.body);
            return successResponse(res,'User added successfully',user);
        }
        catch(error){
            return errorResponse(res,error.message,500);
        }
    }
    async updateUser(req,res){
        try{
            const user=await this.userService.updateUser(req.params.id,req.body);
            return successResponse(res,"user updated sucessffully",user)

        }
        catch(error){
            return errorResponse(res,error.message,500)
        }
    }
    async deleteUser(req,res){
        try{
            const user=await this.userService.deleteUser(req.params.id);
            return successResponse(res,"user deleted sucessffully",user)

        }
        catch(error){
            return errorResponse(res,error.message,500)
        }
    }
}

module.exports = UserController;