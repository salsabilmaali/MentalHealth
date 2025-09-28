class ExpressionCreative{
    constructor(idExpressionCreative, type, dateExp) {
        this.__idExpressionCreative = idExpressionCreative;
        this.__type=type;
        this.__dateExp=dateExp;
    }

    get IdExpressionCreative() {
        return this.__idExpressionCreative;
    }
    get Type() {
        return this.__type;
    }
    get DateExp() {
        return this.__dateExp;
    }
    set Type(type) {
        this.__type = type;
    }
    set DateExp(dateExp) {
        this.__dateExp = dateExp;
    }
}
module.exports=ExpressionCreative;