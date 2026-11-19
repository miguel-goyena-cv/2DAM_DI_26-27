import { Component, Signal, signal } from '@angular/core';
import { PhotoProfile } from '../photo-profile/photo-profile';
import { PhotoProfileModel } from '../models/PhotoProfileModel';
import { ProfileService } from '../services/profile-service';

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
  tituloImagen = "Profesor";
  photos = signal<PhotoProfileModel[]>([]);

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getFotoPerfil()
    .subscribe({
      next: body => {
        console.log('Body:', body);
        this.photos.set(body);
      },
      error: error => console.error('Error al cargar las fotos del perfil', error)
    });
    alert("Lo saco antes de recibir la peticion");
  }


  ocultarMyJob() {
    if (!this.myJobHidden()) {
      this.textoBoton.set("Mostrar JOB");
    }
    else {
      this.textoBoton.set("Ocultar JOB");
    }
    this.myJobHidden.set(!this.myJobHidden());

  }

  alertMensaje(mensaje: string) {
    alert('Miguel DICE: ' + mensaje);
  }

}
