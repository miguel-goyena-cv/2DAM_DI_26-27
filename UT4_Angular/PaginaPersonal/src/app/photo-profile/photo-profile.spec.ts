import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoProfile } from './photo-profile';

describe('PhotoProfile', () => {
  let component: PhotoProfile;
  let fixture: ComponentFixture<PhotoProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
