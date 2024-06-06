import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  constructor(private http: HttpClient) {  }
  // TODO: Metodos 

    // Metodo que al realizar una peticion get al API, para obtener la lista de clientes
    // Método que hace lo que anteriormente haciamos en HTTPie
    obtenerListaClientes(): void {
      this.http.get('http://localhost:8082/api/clientes').subscribe((respuesta : any) => {
        console.log(respuesta);
      });
    }
}
