import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactList } from './contact-list';
import { ContactService } from '../services/contact-service';
import { ContactModel } from '../models/ContactModel';

describe('ContactList', () => {
  let component: ContactList;
  let fixture: ComponentFixture<ContactList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactList],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show contacts added after the list is initialized', () => {
    const contact = new ContactModel('new@example.com', 'New message');

    TestBed.inject(ContactService).anadirContacto(contact);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(contact.email);
    expect(fixture.nativeElement.textContent).toContain(contact.description);
  });
});
