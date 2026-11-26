import { Injectable, Service, signal } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


  anadirContacto(contacto: ContactModel): Observable<ContactModel>{
    return this.http.post<ContactModel>('https://6790ccf7af8442fd7377c747.mockapi.io/contacts', contacto);
  }

  listarContactos(): Observable<HttpResponse<ContactModel[]>> {
    return this.http
      .get<ContactModel[]>('https://6790ccf7af8442fd7377c747.mockapi.io/contacts', { observe: 'response' });
  }
}
