import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {pipe,throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators'

//@Injectable
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('Servidor corriendo');
  }
  registrar(solicitud: any){
    console.warn("esta registrando");
    console.warn(solicitud);
    return this.http.post<any>("http://localhost:3000/solicitudes", solicitud).pipe(map((res:any)=>{
      return res;
    }))
  }
}
