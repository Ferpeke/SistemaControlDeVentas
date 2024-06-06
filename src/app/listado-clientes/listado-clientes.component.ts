import { Component } from '@angular/core';
import { ClientesServiceService } from '../clientes-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {

  constructor(private cs : ClientesServiceService){ // añadimos un modificador de acceso
    cs.obtenerListaClientes();
  }

  // TODO: Nos traemos el listado clientes
  //gets
  get listado(){
    return this.cs.listaClientes;
  }

}
