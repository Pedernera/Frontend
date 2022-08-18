export class Educacion {
    id? : number;
    tituloEdu : string;
    nomInstituto: string;
    fechaInicioEdu: Date;
    fechaFinalEdu: any;
    constructor(tituloEdu: string, nomInstituto: string, fechaInicioEdu: Date, fechaFinalEdu:any){
        this.tituloEdu = tituloEdu;
        this.nomInstituto = nomInstituto;
        this.fechaInicioEdu= fechaInicioEdu;
        this.fechaFinalEdu = fechaFinalEdu;
    }
}
