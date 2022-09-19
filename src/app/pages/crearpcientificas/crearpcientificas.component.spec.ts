import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpcientificasComponent } from './crearpcientificas.component';

describe('CrearpcientificasComponent', () => {
  let component: CrearpcientificasComponent;
  let fixture: ComponentFixture<CrearpcientificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpcientificasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpcientificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
