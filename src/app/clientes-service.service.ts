import { HttpClient, HttpParams } from '@angular/common/http';
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
  public listaVentasDetalle : any[];
  public cliente : any;

  constructor(private http: HttpClient, private router : Router) { 
    this.listaClientes = [];
    this.listaVentasDetalle = [];
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

    obtenerVentas(id : any) : void {
      this.http.get(this.urlService + 'api/clientes/comprasDetalle/' + id).subscribe((respuesta : any) => {
        console.log(respuesta);
        this.listaVentasDetalle = respuesta;
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
              //this.obtenerListaClientes();
              this.router.navigate(['clientes']);
          } else if (result.isDenied) {
            Swal.fire("El registro se cancelo", "", "warning");
          }
        });
      });
    }

    // TODO: Método que realiza una peticion dele a la API para eliminar un cliente

    eliminarCliente(id : number) : void {
      const parametrosPeticion = new HttpParams().set("id", id);
      this.http.delete(this.urlService + "api/clientes/eliminar", {params : parametrosPeticion}).subscribe((respuesta : any) => {
        console.log(respuesta);
        Swal.fire({
          title: "Cliente eliminado",
          icon:"success",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
              this.obtenerListaClientes();
          } else if (result.isDenied) {
            Swal.fire("El registro se cancelo", "", "warning");
          }
        });
      });
    }

    // TODO: Método que realiza una peticion get a la api para recuperar un cliente por id
    obtenerCliente(id : number) : void {
      this.http.get(this.urlService + "api/clientes/obtener" + id).subscribe((respuesta : any) => {
        console.log(respuesta);
        this.cliente = respuesta;
      });
    }
    
    // TODO: Método para actulizar un cliente

    actualizarCliente(id: number, nombre : string, apPat: string, apMat: string, telefono : string, correo : string, numAfiliado: string) {
      this.http.put(this.urlService + "api/clientes/actulizar/" + id,{
        "id" : id,
        "nombre" : nombre,
        "apPaterno" : apPat,
        "apMaterno" : apMat,
        "telefono" : telefono,
        "correo" : correo,
        "numAfiliado" : numAfiliado
      },).subscribe(( respuesta : any) => {
        console.log(respuesta);
        Swal.fire({
          title: "Cliente Actualizado",
          icon:"success",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
              //this.obtenerListaClientes();
              this.router.navigate(['clientes']);
          } else if (result.isDenied) {
            Swal.fire("El registro se cancelo", "", "warning");
          }
        });
      });
    }

}
