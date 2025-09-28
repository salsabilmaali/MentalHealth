class TestAutoEvaluation{
    constructor(idTestAuto, type, score, interpretation) {
        this.__idTestAuto = idTestAuto;
        this.__type = type;
        this.__score = score;
        this.__interpretation = interpretation;
    }
    get idTestAuto() {
        return this.__idTestAuto;
    }

    get type() {
        return this.__type;
    }

    get score() {
        return this.__score;
    }

    get interpretation() {
        return this.__interpretation;
    }
    set type(type) {
        this.__type = type;
    }
    set score(score) {
        this.__score = score;
    }
    set interpretation(interpretation) {
        this.__interpretation = interpretation;
    }
}
module.exports=TestAutoEvaluation;