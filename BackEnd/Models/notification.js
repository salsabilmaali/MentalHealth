class notification{
    constructor(idNotification, contenu, dateNotification) {
        this.__idNotification = idNotification;
        this.__contenu = contenu;
        this.__dateNotification = dateNotification;
    }
    get IdNotification() {
        return this.__idNotification;
    }  
    get Contenu() {
        return this.__contenu;
    }
    get DateNotification() {
        return this.__dateNotification;
    }
    set Contenu(contenu) {
        this.__contenu = contenu;
    }
    set DateNotification(dateNotification) {
        this.__dateNotification = dateNotification;
    } 
}
module.exports=notification;