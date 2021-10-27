import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTesteComponent } from './modulo-teste.component';

describe('ModuloTesteComponent', () => {
  let component: ModuloTesteComponent;
  let fixture: ComponentFixture<ModuloTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
