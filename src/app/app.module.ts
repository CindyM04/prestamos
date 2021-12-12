/* -- MODULOS --*/
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
/* -- COMPONENTES -- */

import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { InputRangoComponent } from './componentes/input-rango/input-rango.component';




@NgModule({
  declarations: [
    AppComponent,
    //FormsModule,
    RegistroComponent,
    ListadoComponent,
    InputRangoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule ,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
