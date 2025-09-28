class SessionChat{
    constructor (idSessionChat, dateDebutChat, dateFinChat, contenu) {
        this.__idSessionChat = idSessionChat;
        this.__dateDebutChat = dateDebutChat;
        this.__dateFinChat = dateFinChat;
        this.__contenu = contenu;
    }
    get idSessionChat() {
        return this.__idSessionChat;
    }
    get dateDebutChat() {
        return this.__dateDebutChat;
    }
    get dateFinChat() {
        return this.__dateFinChat;
    }
    get contenu() {
        return this.__contenu;
    }
    set dateDebutChat(dateDebutChat) {
        this.__dateDebutChat = dateDebutChat;
    }
    set dateFinChat(dateFinChat) {
        this.__dateFinChat = dateFinChat;
    }
    set contenu(contenu) {
        this.__contenu = contenu;
    }
}
module.exports=SessionChat;