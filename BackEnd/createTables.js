const con=require("./config");
const users=`CREATE TABLE IF NOT EXISTS users (
    idUser INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role ENUM('admin', 'user', 'anonyme')
  )`;
  con.query(users, function(err){
    if (err)
        console.error("Error creating users table: ", err);
    else
        console.log("Users table created successfully!");
  })


const temoignage=`CREATE TABLE IF NOT EXISTS temoignage (
    idTemoignage INT AUTO_INCREMENT PRIMARY KEY,
    contenu VARCHAR(1000),
    dateTemoigange DATE,
    status ENUM('published','unpublished')
  )`;
con.query(temoignage, function(err){
    if (err)
        console.error("Error creating Temoignage table: ", err);
    else
        console.log("temoignage table created successfully!");
  })


const contenu=`CREATE TABLE IF NOT EXISTS contenu (
    idContenu INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100),
    type VARCHAR(100),  
    datePub DATE,
    )`;
con.query(contenu, function(err){
    if (err)
        console.error("Error creating contenu table: ", err);
    else
        console.log("contenu table created successfully!");
  })


const cours=`CREATE TABLE IF NOT EXISTS cours (
    idCours INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(1000),
    tire VARCHAR(100),
    duree int NOT NULL
    )`;
con.query(cours, function(err){
    if (err)
        console.error("Error creating cours table: ", err);
    else
        console.log("cours table created successfully!");
  })

const SessionChat=`CREATE TABLE IF NOT EXISTS SessionChat (
    idSessionChat INT AUTO_INCREMENT PRIMARY KEY,
    dateDebutChat date,
    dateFinChat date,
    contenu VARCHAR(1000)
    )`;
con.query(SessionChat, function(err){
    if (err)
        console.error("Error creating Temoignage table: ", err);
    else
        console.log("SessionChat table created successfully!");
  })


  const Notification=`CREATE TABLE IF NOT EXISTS Notification (
    idNotification INT AUTO_INCREMENT PRIMARY KEY,
    dateNotification date,  
    contenu VARCHAR(1000)
    )`;
con.query(Notification, function(err){
    if (err)
        console.error("Error creating Notification table: ", err);
    else
        console.log("Notification table created successfully!");
  })


const ExpressionCreative=`CREATE TABLE IF NOT EXISTS ExpressionCreative (
    idExpressionCreative INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('image', 'video', 'audio', 'texte'),
    dateExp DATE
    )`;
con.query(ExpressionCreative, function(err){
    if (err)
        console.error("Error creating ExpressionCreative table: ", err);
    else
        console.log("ExpressionCreative table created successfully!");
  })


const TestAutoEvaluation=`CREATE TABLE IF NOT EXISTS TestAutoEvaluation (
    idTestAuto INT AUTO_INCREMENT PRIMARY KEY,
    type VaRCHAR(100),
    score int ,
    interpretation VARCHAR(1000)

    )`;
con.query(TestAutoEvaluation, function(err){
    if (err)
        console.error("Error creating TestAutoEvaluation table: ", err);
    else
        console.log("TestAutoEvaluation table created successfully!");
  })


const Professionel=`CREATE TABLE IF NOT EXISTS Professionel (
    idProfessionel INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    specialite VARCHAR(100),
    experience INT,
    langue VARCHAR(100)
    )`;
con.query(Professionel, function(err){
    if (err)
        console.error("Error creating Professionel table: ", err);
    else
        console.log("Professionel table created successfully!");
  })



/*const alterTemoignage=`ALTER TABLE temoignage
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE`;
con.query(alterTemoignage, function(err){
    if (err)
        console.error("Error altering  temoignage table: ", err);
    else
        console.log("modification temoignage successfully!");
  })
*/

/*const alterContenu=`ALTER TABLE contenu
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE SET NULL`;
con.query(alterContenu, function(err){
    if (err)
        console.error("Error altering  contenu table: ", err);
    else
        console.log("modification contenu successfully!");
  })
*/


/*const alterCours=`ALTER TABLE cours
ADD COLUMN idContenu INT,
ADD FOREIGN KEY (idContenu) REFERENCES contenu(idContenu) ON DELETE CASCADE`;
 con.query(alterCours, function(err){
    if (err)    
        console.error("Error altering  cours table: ", err);
    else
        console.log("modification cours successfully!");
  })*/

/*const alterSessionChat=`ALTER TABLE SessionChat
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE;`;
 con.query(alterSessionChat, function(err){
    if (err)    
        console.error("Error altering  SessionChat table: ", err);
    else
        console.log("modification SessionChat successfully!");
})
*/

/*const alterNotification=`ALTER TABLE Notification
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE;
`
con.query(alterNotification, function(err){
    if (err)    
        console.error("Error altering  Notification table: ", err);
    else
        console.log("modification Notification successfully!");
})
*/

/*const alterExpressionCreative=`
ALTER TABLE ExpressionCreative
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE;
`
con.query(alterExpressionCreative, function(err){
    if (err)    
        console.error("Error altering  ExpressionCreative table: ", err);
    else
        console.log("modification ExpressionCreative successfully!");
})

*/

/*const alterTestAutoEvaluation=`ALTER TABLE TestAutoEvaluation
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE;
`
con.query(alterTestAutoEvaluation, function(err){
    if (err)    
        console.error("Error altering  TestAutoEvaluation table: ", err);
    else
        console.log("modification TestAutoEvaluation successfully!");
})*/


/*const alterUsersCours=`CREATE TABLE IF NOT EXISTS user_cours (
    idUser INT,
    idCours INT,
    PRIMARY KEY (idUser, idCours),
    FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE,
    FOREIGN KEY (idCours) REFERENCES cours(idCours) ON DELETE CASCADE
);
`
con.query(alterUsersCours, function(err){
    if (err)
        console.error("Error creating user_cours table: ", err);
    else
        console.log("user_cours table created successfully!");
  })

const alterProfessionel=`ALTER TABLE Professionel
ADD COLUMN idUser INT,
ADD FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE;
`
con.query(alterProfessionel, function(err){
    if (err)
        console.error("Error altering Professionel table: ", err);
    else
        console.log("Professionel table altered successfully!");
  })*/
 const alterContenu=`ALTER TABLE contenu
 add column    imageUrl VARCHAR(255),
 add column    videoUrl VARCHAR(255),
 add column    description VARCHAR(255);
`
con.query(alterContenu, function(err){
    if (err)
        console.error("Error altering contenu table: ", err);
    else
        console.log("contenu table altered successfully!");
  })
con.end();


