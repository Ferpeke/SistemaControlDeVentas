import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {
  // Atributos
  public urlService: string = "http://localhost:8082/";
  //public urlService: string = "http://10.10.10.36:8082/"; // Ambiente Externo
  public listaClientes: any[];
  constructor(private http: HttpClient, private router : Router) { 
    this.listaClientes = [];
   }
  // TODO: Metodos 

    // Metodo que al realizar una peticion get al API, para obtener la lista de clientes
    // Método que hace lo que anteriormente haciamos en HTTPie
    obtenerListaClientes(): void {
      this.http.get(this.urlService + 'api/clientes').subscribe((respuesta : any) => {
        console.log(respuesta);
        this.listaClientes = respuesta;
      });
    }

    // TODO: Metodo que realiza una peticion get al API, para obtener insertar un nuevo cliente.

    guardarCliente(nombre : string, apPat: string, apMat: string, telefono : string, correo : string, numAfiliado: string) {
      this.http.post(this.urlService + "api/clientes",{
        "nombre" : nombre,
        "apPaterno" : apPat,
        "apMaterno" : apMat,
        "telefono" : telefono,
        "correo" : correo,
        "numAfiliado" : numAfiliado
      },).subscribe(( respuesta : any) => {
        console.log(respuesta);

        Swal.fire({
          title: "Cliente guardado",
          icon:"success",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
//            this.obtenerListaClientes();
              this.router.navigate(['clientes']);
          } else if (result.isDenied) {
            Swal.fire("El registro se cancelo", "", "warning");
          }
        });
      });
    }
}
