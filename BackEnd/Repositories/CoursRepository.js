const db=require('../config');
const cours=require('../Models/Cours');
class CoursRepository {
    constructor(){
        this.db=db;
    }
    async getAllCours(){
        return new Promise((resolve, reject)=>{
            this.db.query("Select * from cours",(error,results)=>{
                if (error){
                    reject(new Error (`Repository error: ${error.message}`));
                }
                else 
                    resolve(results);
            })
        })
    }
    async getCoursById(id){
        return new Promise((resolve, reject)=>{
            this.db.query("Select * from cours where idCours=?",[id],(error,results)=>{
                if (error){
                    reject(new Error (`Repository error: ${error.message}`));
                }
                else 
                    resolve(results);
            })
        })
    }
    async addCours(cours){
        return new Promise((resolve, reject)=>{
            this.db.query("INSERT INTO cours (titre, description, duree, idContenu) VALUES (?, ?, ?, ?)", 
            [cours.titre, cours.description,cours.duree, cours.idContenu||null], 
            (error, results)=>{
                if (error){
                    reject(new Error (`Repository error: ${error.message}`));
                }
                else 
                    resolve(results.insertId);
            });
        });
    }
    async updateCours(id, cours){
        return new Promise((resolve, reject)=>{
            this.db.query("UPDATE cours SET titre=?, description=?, duree=?, idContenu=? WHERE idCours=?", 
            [cours.titre, cours.description, cours.duree, cours.idContenu, id], 
            (error, results)=>{
                if (error){
                    reject(new Error (`Repository error: ${error.message}`));
                }
                else if (results.affectedRows === 0) {
                    reject(new Error("Cours not found or no changes made"));
                } else {
                    resolve(cours);
                }
            });
        });
    }
    async deleteCours(id) {
        return new Promise((resolve, reject) => {
            this.db.query("DELETE FROM cours WHERE idCours = ?", [id], (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else if (results.affectedRows === 0) {
                    reject(new Error("Cours not found or no changes made"));
                } else {
                    resolve(true);
                }
            });
        });
    }
}
module.exports=CoursRepository;