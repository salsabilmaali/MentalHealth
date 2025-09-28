class Professionel{
    constructor(idProfessionel, nom, prenom, experience, langue, specialite) {
        this.__idProfessionel = idProfessionel;
        this.__nom = nom;
        this.__prenom = prenom; 
        this.__experience = experience;
        this.__langue = langue;
        this.__specialite = specialite;
    }
    get idProfessionel() {
        return this.__idProfessionel;
    }
    get nom() {
        return this.__nom;
    }
    get prenom() {
        return this.__prenom;
    }
    get experience() {
        return this.__experience;
    }
    get langue() {
        return this.__langue;
    }
    get specialite() {
        return this.__specialite;
    }
    set nom(nom) {
        this.__nom = nom;
    }
    set prenom(prenom) {
        this.__prenom = prenom;
    }
    set experience(experience) {
        this.__experience = experience;
    }
    set langue(langue) {
        this.__langue = langue;
    }
    set specialite(specialite) {
        this.__specialite = specialite;
    }
    
}
module.exports=Professionel;