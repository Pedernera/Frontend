export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    fechaInicioExp: Date;
    fechaFinalExp: any;
    constructor(nombreExp: string, descripcionExp: string, fechaInicioExp: Date, fechaFinalExp:any){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinalExp = fechaFinalExp;
    }
}
