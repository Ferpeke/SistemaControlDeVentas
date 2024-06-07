import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  public urlService: String  = "http://localhost:8082/";

  public listaProductos: any[];
  constructor(private http: HttpClient, private router : Router) { 
    this.listaProductos = [];
  }

  // TODO: Métodos para la tabla productos
  
  obtenerListaProductos() : void {
    this.http.get(this.urlService + 'api/productos').subscribe((respuesta : any) => {
      console.log(respuesta);
      this.listaProductos = respuesta;
    });
  }

  obtenerListaCategorias() : void {
    this.http.get(this.urlService + 'api/productos/lista/categrias').subscribe((respuesta : any) => {
      console.log(respuesta);
      this.listaProductos = respuesta;
    });
  }

  guardarProducto(nombre : string, descripcion : string, stock : number, precio : number, categoria : string) : void {
    this.http.post(this.urlService + "api/productos",{
      "nombre": nombre,
      "descripcion": descripcion,
      "stock": stock,
      "precio": precio,
      "categoria": categoria
    },).subscribe((respuesta)=>{
      console.log(respuesta);
      Swal.fire({
        title: "Producto guardado",
        icon:"success",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            //this.obtenerListaClientes();
            this.router.navigate(['productos']);
        } else if (result.isDenied) {
          Swal.fire("El registro se cancelo", "", "warning");
        }
      });
    });
  }

}


