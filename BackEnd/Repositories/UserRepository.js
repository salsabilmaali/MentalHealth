const User = require("../Models/User"); 
const db = require("../config");

class UserRepository {
   constructor() {
       this.db=db;
   }

   async findAll() {
       return new Promise((resolve, reject) => {
           this.db.query("SELECT * FROM users", (error, results) => {
               if (error) {
                   reject(new Error(`Repository error: ${error.message}`));
               } else {
                  
                   try {
                       const users = results.map(row => new User(
                           row.idUser,
                           row.name,
                           row.prenom,
                           row.email,
                           row.password,
                           row.role
                       ));
                       resolve(users);
                   } catch (e) {
                       resolve(results);
                   }
               }
           });
       });
   }
   async findById(id) {
       return new Promise((resolve, reject) => {
           this.db.query("SELECT * FROM users WHERE idUser = ?", [id], (error, results) => {
               if (error) {
                   reject(new Error(`Repository error: ${error.message}`));
               } else {
                   // If User model exists, map results to User objects
                   // Otherwise, just return the raw results
                   try {
                       const user=results.map(row => new User(
                           row.idUser,
                           row.name,
                           row.prenom,
                           row.email,
                           row.password,
                           row.role
                       ));
                       resolve(user);
                   } catch (e) {
                       // If User model has issues, return raw results
                       resolve(results);
                   }
               }
           });
       });
   }
async addUser(user){     
    return new Promise((resolve, reject)=>{         
        this.db.query(             
            "INSERT INTO users (name, prenom, email, password, role) VALUES (?, ?, ?, ?, ?)",             
            [                 
                user.name,        // Changed back to user.name
                user.prenom,      // Changed back to user.prenom
                user.email,       // Changed back to user.email
                user.password,    // Changed back to user.password
                user.role||'user' // Changed back to user.role
            ],                 
            (error, results) => {                     
                if (error) {                         
                    reject(new Error(`Repository error: ${error.message}`));                     
                } else {                         
                    console.log("Insert results:", results);                          
                    const newUser = {
                        __id: results.insertId,
                        __name: user.name,        // Transform back to frontend format
                        __prenom: user.prenom,
                        __email: user.email,
                        __password: user.password,
                        __role: user.role
                    };
                    resolve(newUser);                     
                }                 
            }         
        );     
    }); 
}

async updateUser(id, user) {
    return new Promise((resolve, reject) => {
        this.db.query(
            "UPDATE users SET name=?, prenom=?, email=?, password=?, role=? WHERE idUser=?",
            [
                user.__name,
                user.__prenom,
                user.__email,
                user.__password,
                user.role,
                id
            ],
            (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else {
                    if (results.affectedRows === 0) {
                        reject(new Error("User not found or no changes made"));
                    } else {
                        resolve(user);
                    }
                }
            }
        );
    });
    };
   
    async deleteUser(id){
        return new Promise((resolve, reject)=>{
            this.db.query("DELETE FROM users WHERE idUser=?",[id],(error,results)=>{
                if (error){
                    reject(new Error(`Repository error: ${error.message}`));
                }
                else{
                    resolve(results);
                }
            })
        })
    }
}

module.exports = UserRepository;
