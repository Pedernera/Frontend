export class skill{
    id? : number;
    nomSkill:string;
    porcentaje:number;
    nivel:string;
    categoria:string;
    color:string;
    constructor(nomSkill:string,porcentaje:number,nivel:string, categoria:string,color:string){
        this.nomSkill= nomSkill;
        this.porcentaje = porcentaje;
        this.nivel = nivel;
        this.categoria = categoria;
        this.color = color;
    }
}