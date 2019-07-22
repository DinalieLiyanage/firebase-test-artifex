import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseUploadComponent } from './firebase-upload.component';

describe('FirebaseUploadComponent', () => {
  let component: FirebaseUploadComponent;
  let fixture: ComponentFixture<FirebaseUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
