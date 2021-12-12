import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

//import { InputRangoComponent } from '../componentes/input-rango/input-rango.component';
import { FormsModule, ReactiveFormsModule,FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';

//import { DataService } from  'src/app/service/data.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm !: FormGroup;
  
  constructor(private fb: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      cedula: ['', Validators.required]
     // monto: ['', Validators.required]
    });
  }

  onSubmit() {
/* poner una condicion para poner estaus /aporbado /o no de forma random */
    let informacion = this.registroForm.value;
    informacion.estado = this.valicacionRandom();
    //console.log(informacion);
    this.http.post<any>("http://localhost:3000/solicitudes",informacion).subscribe(_res=>{
      alert('Su solicitud ha sido procesada correctamente!!!');
      this.registroForm.reset();
    },_err=>{
      alert("Error");
    })

  }
  /*onInputChange(event: MatSliderChange) {
    console.log("This is emitted as the thumb slides");
    console.log(event.value);
  }*/
  valicacionRandom(){
    let valor = '';
     let array = ['Rechazada', 'Aprobada'];
     valor = array[(Math.random() * array.length)|0];

    return valor;
  }

}
