import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloumComponent } from './moduloum.component';

describe('ModuloumComponent', () => {
  let component: ModuloumComponent;
  let fixture: ComponentFixture<ModuloumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
