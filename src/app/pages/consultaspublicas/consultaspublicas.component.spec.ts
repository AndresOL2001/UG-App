import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaspublicasComponent } from './consultaspublicas.component';

describe('ConsultaspublicasComponent', () => {
  let component: ConsultaspublicasComponent;
  let fixture: ComponentFixture<ConsultaspublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaspublicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaspublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
