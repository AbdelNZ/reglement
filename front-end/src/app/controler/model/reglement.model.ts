export class Reglement {
    id : string ;
    id_insc :string;
    mois : string ;
    montant : number;
    dateReglement : Date;
    montant : number;

}

constructor(obj: any = {}) {

this.id = obj.id;
this.id_insc = obj.id_insc;
this.mois = obj.mois;
this.montant = obj.montant;
this.dateReglement = obj.dateReglement;
this.montant=obj.montant;



}