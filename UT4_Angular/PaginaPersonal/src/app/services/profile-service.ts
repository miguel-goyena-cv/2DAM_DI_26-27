import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { PhotoProfileModel } from '../models/PhotoProfileModel';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    static readonly urlProfile = 'https://6790ccf7af8442fd7377c747.mockapi.io/profiles';
    //static readonly urlProfile = 'http://localhost:3000/profiles';

    constructor(private http: HttpClient) { }

    getFotoPerfil(): Observable<PhotoProfileModel[]> {
        return this.http
            .get<PhotoProfileModel[]>(ProfileService.urlProfile);
    }

}
