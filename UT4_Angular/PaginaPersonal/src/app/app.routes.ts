import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { ContactForm } from './contact-form/contact-form';
import { ContactPage } from './contact-page/contact-page';

export const routes: Routes = [
    { path: '', component: Profile },
    { path: 'informacion-perfil', component: Profile },
    { path: 'informacion-contacto', component: ContactPage },
];

