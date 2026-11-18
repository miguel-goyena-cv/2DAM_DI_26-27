import { Component, Signal, signal } from '@angular/core';
import { PhotoProfile } from '../photo-profile/photo-profile';
import { PhotoProfileModel } from '../models/PhotoProfileModel';

@Component({
  imports: [PhotoProfile],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile {

  myName: String = "Miguel Goyena";
  myJob: String = "Profesor 4V";
  myJobHidden = signal(false);
  textoBoton = signal("Ocultar JOB");
  tituloImagen ="Profesor";
  photos: PhotoProfileModel[] = [];

  constructor() {
    let fotoContento = new PhotoProfileModel("Estoy Contento", "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-173524.jpg?semt=ais_hybrid&w=740&q=80", "Yujuu");
    let fotoTriste = new PhotoProfileModel("Estoy Triste", "https://static.vecteezy.com/system/resources/previews/053/232/166/non_2x/sad-boy-cartoon-avatar-illustration-free-vector.jpg", "Buuua");
    this.photos = [fotoContento, fotoTriste];
  }

  ocultarMyJob(){
    if (!this.myJobHidden()){
      this.textoBoton.set("Mostrar JOB");
    }
    else{
      this.textoBoton.set("Ocultar JOB");
    }
    this.myJobHidden.set(!this.myJobHidden());
    
  }

  alertMensaje(mensaje: string){
    alert('Miguel DICE: ' + mensaje);
  }

}
