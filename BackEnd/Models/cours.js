class cours{
    constructor(idCours, description, titre, duree) {
        this.__idCours = idCours;
        this.__description = description;
        this.__titre = titre;
        this.__duree = duree;
    }

    get IdCours() {
        return this.__idCours;
    }
    get Description() {
        return this.__description;
    }
    get Titre() {
        return this.__titre;
    }
    get Duree() {
        return this.__duree;
    }
}
module.exports=cours;