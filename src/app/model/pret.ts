export class Pret {
    id: number;
    somme: number;
    taux:number;
    interets:number;
    restant:number;
    rembourse:number;

    constructor(id:number, somme: number, taux:number, interets:number, restant:number, rembourse:number){
        this.id = id;
        this.somme = somme;
        this.taux = taux;
        this.interets = interets;
        this.restant = restant;
        this.rembourse = rembourse;
    }
}
