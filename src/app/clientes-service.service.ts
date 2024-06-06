import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {
  // Atributos
  // public urlService: string = "http://localhost:8082/"; // Ambiente local
  public urlService: string = "http://10.10.10.36:8082/"; // Ambiente local
  constructor(private http: HttpClient) {  }
  // TODO: Metodos 

    // Metodo que al realizar una peticion get al API, para obtener la lista de clientes
    // Método que hace lo que anteriormente haciamos en HTTPie
    obtenerListaClientes(): void {
      this.http.get(this.urlService + 'api/clientes').subscribe((respuesta : any) => {
        console.log(respuesta);
      });
    }
}
