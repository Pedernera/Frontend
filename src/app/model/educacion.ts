export class Educacion {
    id? : number;
    tituloEdu : string;
    nomInstituto: string;

    constructor(tituloEdu: string, nomInstituto: string){
        this.tituloEdu = tituloEdu;
        this.nomInstituto = nomInstituto;
    }
}
