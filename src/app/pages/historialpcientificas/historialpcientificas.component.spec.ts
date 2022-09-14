import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialpcientificasComponent } from './historialpcientificas.component';

describe('HistorialpcientificasComponent', () => {
  let component: HistorialpcientificasComponent;
  let fixture: ComponentFixture<HistorialpcientificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialpcientificasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialpcientificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
