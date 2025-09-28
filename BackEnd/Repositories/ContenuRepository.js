const db = require('../config');
const Contenu = require('../Models/Contenu');

class ContenuRepository {
    constructor() {
        this.db = db;
    }

async findAllContenus() {
    console.log("Méthode findAllContenus appelée");

    return new Promise((resolve, reject) => {
        this.db.query(
            "SELECT * FROM contenu",
            (error, results) => {
                if (error) {
                    console.error(" Erreur SQL :", error);
                    reject(error);
                } else {
                    console.log("Résultats SQL :", results);
                    resolve(results);
                }
            }
        );
    });
}


    async findByIdContenu(id) {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM contenu WHERE idContenu = ?", [id], (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else {
                    try {
                        const contenu = results.map(row => new Contenu(
                            row.idContenu,
                            row.titre,
                            row.type,
                            row.datePub,
                            row.idUser,
                            row.status
                        ));
                        resolve(contenu);
                    } catch (e) {
                        resolve(results);
                    }
                }
            });
        });
    }

    async addContenu(contenu) {
        return new Promise((resolve, reject) => {
            console.log('Contenu à insérer :', contenu);
            this.db.query("INSERT INTO contenu (titre, type, datePub, idUser) VALUES (?, ?, ?, ?)", 
                [contenu.titre, contenu.type, contenu.datePub, contenu.idUser], 
                (error, results) => {
                    if (error) {
                        console.error("Erreur SQL lors de l'insertion :", error);
                        reject(error);
                    } else {
                        resolve(results.insertId);
                    }
                });
        });
    }

    async updateContenu(id, contenu) {
        return new Promise((resolve, reject) => {
            this.db.query("UPDATE contenu SET type=?, titre=?, datePub=?, idUser=? WHERE idContenu=?", 
                [contenu.type, contenu.titre, contenu.datePub, contenu.idUser, id], 
                (error, results) => {
                    if (error) {
                        reject(new Error(`Repository error: ${error.message}`));
                    } else {
                        resolve(results.affectedRows > 0);
                    }
                });
        });
    }

    async deleteContenu(id) {
        return new Promise((resolve, reject) => {
            this.db.query("DELETE FROM contenu WHERE idContenu=?", [id], (error, results) => {
                if (error) {
                    reject(new Error(`Repository error: ${error.message}`));
                } else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    }
}

module.exports = ContenuRepository;