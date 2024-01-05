

class Quiz {

id_quiz;
titre;
description;
id_utilisateur;
static index=0;

constructor(id_quiz,titre,description,d_utilisateur){

this.id_quiz=id_quiz;

this.titre=titre;

this.description=description;

this.id_utilisateur=id_utilisateur;;

Quiz.index++;

}



}

module.exports = Quiz;