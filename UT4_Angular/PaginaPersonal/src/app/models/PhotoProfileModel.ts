export class PhotoProfileModel {

    name: string;
    photoSrc: string;
    messageClick: string;
   
    constructor(nombre: string, foto: string, mensajeClick: string) {
        this.name = nombre;
        this.photoSrc = foto;
        this.messageClick = mensajeClick;
    }
}
