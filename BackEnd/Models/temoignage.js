class temoignage{
    constructor(idTemoignage, status, contenu, dateTemoignage, ){
        this.__idTemoignage = idTemoignage;
        this.__status = status;
        this.__contenu = contenu;
        this.__dateTemoignage = dateTemoignage;       
    }

    get IdTemoignage() {
        return this.__idTemoignage;
    }
    get Status() {
        return this.__status;
    }
    get Contenu() {
        return this.__contenu;
    }
    get DateTemoignage() {
        return this.__dateTemoignage;
    }
    set Status(status) {
        this.__status = status;
    }
    set Contenu(contenu) {
        this.__contenu = contenu;
    }
    set DateTemoignage(dateTemoignage) {
        this.__dateTemoignage = dateTemoignage;
    }

}
module.exports=temoignage;