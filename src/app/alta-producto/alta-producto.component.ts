import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductosServiceService } from '../productos-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  // Atributos
  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("descripcion")
  referenciaDescripcion!: ElementRef;

  @ViewChild("stock")
  referenciaStock!: ElementRef;

  @ViewChild("precio")
  referenciaPrecio!: ElementRef;

  @ViewChild("categoria")
  refereciaCategoria!: ElementRef;

  constructor(private ps : ProductosServiceService){
    ps.obtenerListaCategorias();
  }

  // TODO: Nos traemos el listado de Categorias
  get lisCategorias(){
    return this.ps.listaProductos;
  }

  guardarProducto() {
    const nombre = this.referenciaNombre.nativeElement.value;
    const descripcion = this.referenciaDescripcion.nativeElement.value;
    const stock = this.referenciaStock.nativeElement.value;
    const precio = this.referenciaPrecio.nativeElement.value;
    const categoria = this.refereciaCategoria.nativeElement.value;
    this.ps.guardarProducto(nombre, descripcion, stock, precio, categoria);
  }
}
