class users
{
    constructor(id, name, prenom, email, password, role) {
        this.__id = id;
        this.__name =name;
        this.__prenom = prenom;
        this.__email = email;
        this.__password = password;
        this.__role = role;
    }
    get Id() {
        return this.__id;
    }
    get name(){
        return this.__name;
    }
    get prenom(){
        return this.__prenom;
    }
    get email(){
        return this.__email;
    }
    get password(){
        return this.__password;
    }
    get role(){
        return this.__role;
    }
    set name(name){
        this.__name=name;
    } 
    set prenom(prenom){
        this.__prenom=prenom;
    }
    set email(email){
        this.__email=email;
    }
    set password(password){
        this.__password=password;
    }
    set role(role){
        this.__role=role;
    }


}module.exports = users;