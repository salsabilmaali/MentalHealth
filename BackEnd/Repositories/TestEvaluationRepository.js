const testEvaluation=require("../Models/TestAutoEvaluation"); 
const db=require("../config");
class TestEvaluationRepository{
    constructor(){
        this.db=db;
    }
    async findAllTestEvaluations(){
        return new Promise((resolve,reject)=>{
            this.db.query("SELECT * FROM testautoEvaluation",(error,results)=>{
                if(error){
                    reject(new Error(`Repository error: ${error.message}`));
                }
                else{
                    try{
                        const testEvaluations=results.map(row=>new testEvaluation(
                            row.idTestAuto,
                            row.idUser,
                            row.score,
                            row.type,
                            row.interpretation
                        ));
                        resolve(testEvaluations);
                    }
                    catch(e){
                        resolve(results);
                    }
                }
            });
        });
    }
    async findByIdTestEvaluation(id){
        return new Promise((resolve,reject)=>{
            this.db.query("SELECT * FROM testautoEvaluation WHERE idTestAuto=?",[id],(error,results)=>{
                if(error){
                    reject(new Error(`Repository error: ${error.message}`));
                }
                else{
                    try{
                        const testEvaluation=results.map(row=>new testEvaluation(
                             row.idTestAuto,
                            row.idUser,
                            row.score,
                            row.type,
                            row.interpretation
                        ));
                        resolve(testEvaluation);
                    }
                    catch(e){
                        resolve(results);
                    }
                }
            });
        });
    }
    async addTestEvaluation(testEvaluation){
        return new Promise((resolve,reject)=>{
            this.db.query("INSERT INTO testautoEvaluation (type,score,interpretation,idUser) VALUES (?,?,?)",[testEvaluation.type,testEvaluation.score,testEvaluation.interpretation,testEvaluation.idUser],(error,results)=>{
                if(error){
                    reject(new Error(`Repository error: ${error.message}`));
                }
                else{
                    resolve(results);
                }
            });
        });
    }
    async updateTestEvaluation(id,testEvaluation){
        return new Promise((resolve,reject)=>{
            this.db.query("UPDATE testautoEvaluation SET idUser=?,type=?,score=? ,interpretation=? WHERE idTestAuto=?",[testEvaluation.idUser,testEvaluation.type,testEvaluation.score,testEvaluation.interpretation,id],(error,results)=>{
                if(error){
                    reject(new Error(`Repository error: ${error.message}`));
                }
                else{
                    if(results.affectedRows===0){
                        reject(new Error("TestEvaluation not found or no changes made"));
                    }
                    else{
                        resolve(testEvaluation);
                    }
                }
            });
        });
    }
    async deleteTestEvaluation(id){
        return new Promise((resolve,reject)=>{
            this.db.query("DELETE FROM testautoEvaluation WHERE idTestAuto=?",[id],(error,results)=>{
                if(error){
                    reject(new Error(`Repository error: ${error.message}`));
                }
                else{
                    resolve(results);
                }
            });
        });
    }
}
module.exports=TestEvaluationRepository;
