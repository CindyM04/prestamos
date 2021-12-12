import { ListKeyManager } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { ListadoComponent } from './componentes/listado/listado.component';
//import {environment} from '../environments/environment';

export type EditorType =  'listado'; // Esto ayuda para saber cual elegir con los botones del html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prestamos';
  editor: EditorType = 'listado';
  listado !: ListadoComponent;



  get muestraListado() {
    return this.editor === 'listado';
    this.listado.listar();
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}