export class Proyecto{
    id?:number;
    nomProyecto:string;
    descripcionPro:string;
    imgProyecto:string;
    urlImg:string;
    linkGithub:string;
    linkLive:any;
    constructor(nomProyecto:string, descripcionPro:string, imgProyecto:string,urlImg:string, linkGithub:string, linkLive:any){
        this.nomProyecto = nomProyecto;
        this.descripcionPro = descripcionPro;
        this.imgProyecto = imgProyecto;
        this.urlImg = urlImg;
        this.linkGithub = linkGithub;
        this.linkLive = linkLive;
    }
}


