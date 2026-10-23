import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { ContactForm } from './contact-form/contact-form';

@Component({
  imports: [Profile, ContactForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PaginaPersonal');
}
