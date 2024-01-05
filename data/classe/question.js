

class Question {

    id_question;
    description;
    wiki;
    anecdote;
    id_difficulté;
    id_quiz;
    static index=0;


    constructor(id_question,description,wiki, anecdote,id_difficulté,id_quiz){

        this.id_question=id_question;
        this.description=description;
        this.wiki=wiki;
        this.anecdote=anecdote;
        this.id_difficulté=id_difficulté;
        this.id_quiz=id_quiz;

        Question.index ++;

    }




}


module.exports = Question;