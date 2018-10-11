import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasListaComponent } from './comidas-lista.component';

describe('ComidasListaComponent', () => {
  let component: ComidasListaComponent;
  let fixture: ComponentFixture<ComidasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
