import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasDetalleComponent } from './comidas-detalle.component';

describe('ComidasDetalleComponent', () => {
  let component: ComidasDetalleComponent;
  let fixture: ComponentFixture<ComidasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
