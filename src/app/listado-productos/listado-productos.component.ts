import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosServiceService } from '../productos-service.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  constructor(private ps : ProductosServiceService){
    ps.obtenerListaProductos();
  }

  // TODO: Nos traemos la lista de todos los productos

  // gets

  get listadoProductos(){
    return this.ps.listaProductos;
  }
}
