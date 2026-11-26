import { Injectable, Service, signal } from '@angular/core';
import { ContactModel } from '../models/ContactModel';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //static readonly urlContacts = 'https://6790ccf7af8442fd7377c747.mockapi.io/contacts';
  static readonly urlContacts = 'http://localhost:3000/contacts';

  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnContacts: Observable<any> = this.updateSubject.asObservable();


  constructor(private http: HttpClient) { }


  anadirContacto(contacto: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(ContactService.urlContacts, contacto);
  }

  listarContactos(): Observable<HttpResponse<ContactModel[]>> {
    return this.http
      .get<ContactModel[]>(ContactService.urlContacts, { observe: 'response' });
  }

  notifyUpdateContact(data: any) {
    this.updateSubject.next(data)
  }

}
