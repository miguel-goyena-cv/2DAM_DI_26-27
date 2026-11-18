import { Injectable, Service, signal } from '@angular/core';
import { ContactModel } from '../models/ContactModel';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

  private contactosRealizados = signal<ContactModel[]>([
    new ContactModel("miguel_goyena@cuatrovientos.org", "Hello Miguel!!"),
    new ContactModel("aaaa@cuatrovientos.org", "Hello Quiero tu pasta!!!")
  ]);

  contactos = this.contactosRealizados.asReadonly();

  anadirContacto(contacto: ContactModel) {
    // Usamos .update() creando un nuevo array para que Angular detecte el cambio
    this.contactosRealizados.update(listaActual => [...listaActual, contacto]);
  }

  listarContactos(): ContactModel[] {
    return this.contactosRealizados();
  }
}
