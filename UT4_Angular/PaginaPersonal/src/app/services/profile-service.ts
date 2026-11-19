import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { PhotoProfileModel } from '../models/PhotoProfileModel';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    getFotoPerfil(): Observable<PhotoProfileModel[]> {
        return this.http
        .get<PhotoProfileModel[]>('https://6790ccf7af8442fd7377c747.mockapi.io/profiles');
    }

}
