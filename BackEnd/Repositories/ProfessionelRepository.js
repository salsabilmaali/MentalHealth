const db=require ("../config");
const Professionel = require("../Models/Professionel");
class ProfessionelRepository {
    constructor() {
        this.db = db;
    }

    async findAllProfessionels() {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM professionel", (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else {
                    try {
                        const professionels = results.map(row => new Professionel(
                            row.idProfessionel,
                            row.name,
                            row.prenom,
                            row.email,
                            row.password,
                            row.role
                        ));
                        resolve(professionels);
                    } catch (e) {
                        resolve(results);
                    }
                }
            });
        });
    }

    async findByIdProfessionel(id) {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM professionel WHERE idProfessionel = ?", [id], (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else {
                    try {
                        const professionel = results.map(row => new Professionel(
                            row.nom,
                            row.prenom,
                            row.experience,
                            row.langue,
                            row.specialite,
                            row.idProfessionel

                        ));
                        resolve(professionel);
                    } catch (e) {
                        resolve(results);
                    }
                }
            });
        });
    }

    async addProfessionel(professionel) {
        return new Promise((resolve, reject) => {
            this.db.query("INSERT INTO professionel (nom, prenom, specialite, experience, langue) VALUES (?, ?, ?, ?, ?)", 
            [professionel.nom, professionel.prenom, professionel.specialite, professionel.experience, professionel.langue], 
            (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else {
                    resolve(results.insertId);
                }
            });
        });
    }

    async updateProfessionel(id, professionel) {
        return new Promise((resolve, reject) => {
            this.db.query("UPDATE professionel SET nom=?, prenom=?, experience=?, specialite=?, langue=? WHERE idProfessionel=?", 
            [professionel.nom, professionel.prenom, professionel.experience, professionel.specialite, professionel.langue, id], 
            (error, results) => {
                if (error)
                    reject(new Error(`Repository error: ${error.message}`));
                else
                    resolve(results.affectedRows);
            });
        });
    }
}
module.exports=ProfessionelRepository;