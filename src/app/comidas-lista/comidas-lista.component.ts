import { Component, OnInit } from '@angular/core';
import { Typecomidas } from '../type-comidas';
import { COMIDA} from '../model-comidas';
@Component({
selector: 'app-comidas-lista',
templateUrl: './comidas-lista.component.html',
styleUrls: ['./comidas-lista.component.css']
})
export class ComidasListaComponent implements OnInit {
comidas = COMIDA;
selectedcomida: Typecomidas;
constructor() { }
ngOnInit() {
}
onSelect(comidas: Typecomidas): void {
this.selectedcomida = comidas;
}
}