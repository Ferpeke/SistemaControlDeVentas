import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesServiceService } from '../clientes-service.service';
import { get } from 'http';

@Component({
  selector: 'app-cliente-compra-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-compra-detalles.component.html',
  styleUrl: './cliente-compra-detalles.component.css'
})
export class ClienteCompraDetallesComponent {
  constructor(private service : ClientesServiceService, private route : ActivatedRoute ){
      service.obtenerVentas(this.route.snapshot.paramMap.get('id'));
    }
    
    get ventasDetalles() {
      return this.service.listaVentasDetalle;
    }
}
