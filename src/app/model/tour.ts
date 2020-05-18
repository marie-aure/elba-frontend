import { Famille } from './famille';

export class Tour {

    numero:number;
    semaine:number;
    famille: {id: number,
    nom: string,
    generation: number,
    argentIG: number,
    chef: { prenom: string, nom: string, prenomConjoint: string, nomConjoint: string, nomOrigineConjoint: string}};

    /*
    ,

    ,
    lMembres: { prenom: string, nom: string }[],
    lMembresOrigine: { prenom: string, nom: string }[]
    */
    
    constructor(numero:number, semaine:number, famille:{id: number, nom: string, generation: number, argentIG: number,chef: { prenom: string, nom: string, prenomConjoint: string, nomConjoint: string, nomOrigineConjoint: string}}){
        this.numero = numero;
        this.semaine = semaine;
        this.famille = famille;
    }

    /*
    , ,
        chef: { prenom: string, nom: string, prenomConjoint: string, nomConjoint: string, nomOrigineConjoint: string }, lMembres: { prenom: string, nom: string }[],
        lMembresOrigine: { prenom: string, nom: string }[]
        */
}
