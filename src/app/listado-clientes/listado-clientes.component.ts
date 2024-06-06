import { Component } from '@angular/core';
import { ClientesServiceService } from '../clientes-service.service';

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {

  constructor(cs : ClientesServiceService){
    cs.obtenerListaClientes();
  }
  
}
