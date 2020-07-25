export class Famille {

    id: number;
    nom: string;
    generation: number;
    classe: string;
    argentIG: number;
    chef: { prenom: string, nom: string, prenomConjoint: string, nomConjoint: string, nomOrigineConjoint: string};
    lMembres: { prenom: string, nom: string }[];
    lMembresOrigine: { prenom: string, nom: string }[];

    constructor(id: number, nom: string, generation: number, classe: string, argentIG: number,
        chef: { prenom: string, nom: string, prenomConjoint: string, nomConjoint: string, nomOrigineConjoint: string }, lMembres: { prenom: string, nom: string }[],
        lMembresOrigine: { prenom: string, nom: string }[]) {
        this.id = id;
        this.nom = nom;
        this.generation = generation;
        this.classe = classe;
        this.argentIG = argentIG;
        this.chef = chef;
        this.lMembres = lMembres;
        this.lMembresOrigine = lMembresOrigine;
    };

}
