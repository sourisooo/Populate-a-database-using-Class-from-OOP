

class Utilisateur{

id_utilisateur;
nom;
prénom;
email;
mot_de_passe;
static index=0;

constructor(id_utilisateur, nom, prénom, email, mot_de_passe){

    this.id_utilisateur = id_utilisateur;

    this.nom = nom;

    this.email = email;

    this.prénom = prénom;

    this.mot_de_passe = mot_de_passe;

    Utilisateur.index ++;



}


}

module.exports = Utilisateur;