import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { MatTableDataSource } from '@angular/material/table';

export interface solicitud {
  id:number;
  nombre: string;
  correo: string;
  ceula: string;
  estado:string;
}
//const ELEMENT_DATA: PeriodicElement[] = []
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'cedula','estado','accion'];
  dataSource: solicitud[] = [];
 
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar (){
    this.http.get<any>("http://localhost:3000/solicitudes").subscribe(_res =>{
     this.dataSource = _res;
      
    });
  }
  pagar(){
    alert("Aqui se debe pagar");
  }
}
