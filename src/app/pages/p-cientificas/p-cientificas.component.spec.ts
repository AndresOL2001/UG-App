import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCientificasComponent } from './p-cientificas.component';

describe('PCientificasComponent', () => {
  let component: PCientificasComponent;
  let fixture: ComponentFixture<PCientificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCientificasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCientificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
