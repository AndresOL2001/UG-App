import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { consultasComponent } from './consultas.component';


describe('ConsultasComponent', () => {
  let component: consultasComponent;
  let fixture: ComponentFixture<consultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ consultasComponent ],
        schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(consultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
