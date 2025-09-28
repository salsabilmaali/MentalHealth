
let mysql=require('mysql')
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pfedb",
})
con.connect(function (err){
    if (err)
        console.error("Error connecting to MySQL server: ", err);
    else
        console.log("Connected to MySQL server!");
  
})
module.exports=con;