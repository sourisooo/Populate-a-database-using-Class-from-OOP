

class Thème {

id_thème;
nom;
static index=0;

constructor(id_thème, nom){

    this.id_thème=id_thème;
    this.nom=nom;

    Thème.index++;
    
}




}


module.exports = Thème;