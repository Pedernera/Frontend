export class persona{
    id?:number;
    nombre: string;
    apellido: string;
    img: string;
    posicion: string;
    sobreMi: string;

    constructor(nombre: string, apellido:string, img:string, posicion: string, sobreMi:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.posicion =posicion;
        this.sobreMi = sobreMi;
    }
    
}