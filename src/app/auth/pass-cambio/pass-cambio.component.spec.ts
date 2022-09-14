import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCambioComponent } from './pass-cambio.component';

describe('PassCambioComponent', () => {
  let component: PassCambioComponent;
  let fixture: ComponentFixture<PassCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassCambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
