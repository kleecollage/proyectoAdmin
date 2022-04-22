import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {Empleado} from './Empleado';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/empleados';
  constructor(private ClienteHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?Insertar=1",datosEmpleado);

  }

}
