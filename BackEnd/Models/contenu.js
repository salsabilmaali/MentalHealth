class Contenu {
    constructor(idContenu, titre, type, datePub,idUser,status="unpublished") {
        this.idContenu = idContenu;
        this.titre = titre;
        this.type = type;
        this.datePub = datePub;
        this.idUser=idUser;
        this.status=status;
    }

    get IdContenu() {
        return this.idContenu;
    }
    
    get Titre() {
        return this.titre;
    }
    
    get Type() {
        return this.type;
    }
    
    get DatePub() {
        return this.datePub;
    }

    set Titre(titre) {
        this.titre = titre;
    }
    
    set Type(type) {
        this.type = type;
    }
    
    set DatePub(datePub) {
        this.datePub = datePub;
    }
}

module.exports = Contenu;