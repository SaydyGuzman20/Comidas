import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComidasListaComponent } from './comidas-lista/comidas-lista.component';
import {ComidasDetalleComponent } from './comidas-detalle/comidas-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    ComidasListaComponent,
    ComidasDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
