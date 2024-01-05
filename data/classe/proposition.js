
class Proposition {

    id_proposition;
    description;
    id_question;
    static index = 0;


    constructor(id_proposition,description, id_question){

        this.id_proposition = id_proposition;

        this.description = description;

        this.id_question = id_question;

        Proposition.index ++;

    }


}


module.exports = Proposition;

