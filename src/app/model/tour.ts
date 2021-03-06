import { Famille } from './famille';

export class Tour {

    numero:number;
    semaine:number;
    famille: Famille;

    
    constructor(numero:number, semaine:number, famille:Famille){
        this.numero = numero;
        this.semaine = semaine;
        this.famille = famille;
    }

}
