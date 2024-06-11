import { Component } from '@angular/core';
import { ClientesServiceService } from '../clientes-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

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

  eliminar(id : number){
    Swal.fire({
      title: "Seguro que deseas eliminar este cliente?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) =>{
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.cs.eliminarCliente(id);
      } else if (result.isDenied) {
        Swal.fire("El registro se cancelo", "", "warning");
      }
    });
  }

}
