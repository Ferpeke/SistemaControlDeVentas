import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientesServiceService } from '../clientes-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicion-cliente',
  standalone: true,
  imports: [],
  templateUrl: './edicion-cliente.component.html',
  styleUrl: './edicion-cliente.component.css'
})
export class EdicionClienteComponent {
   // Atributos 
   private params : any;
   private id : number = 0;
 
   constructor(private ruta : ActivatedRoute, private servicio: ClientesServiceService){
     this.params = this.ruta.params.subscribe( parametros => {
       this.id = parametros["id"];
       console.log(this.id);
       this.servicio.obtenerCliente(this.id);
     })
   }
 
   get cliente(){
     return this.servicio.cliente;
   }
  // Atributos
  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("apPaterno")
  referenciaApPaterno!: ElementRef;

  @ViewChild("apMaterno")
  referenciaApMaterno!: ElementRef;

  @ViewChild("telefono")
  referenciaTelefono!: ElementRef;

  @ViewChild("correo")
  referenciaCorreo!: ElementRef;

  @ViewChild("numAfiliado")
  referenciaNumAfiliado!: ElementRef;

  // TODO: metodo
  guardarCliente() {
    // Recuperamos los valores que vienen en las cajas
    const nombre = this.referenciaNombre.nativeElement.value;
    const apPaterno = this.referenciaApPaterno.nativeElement.value;
    const apMaterno = this.referenciaApMaterno.nativeElement.value;
    const telefono = this.referenciaTelefono.nativeElement.value;
    const correo = this.referenciaCorreo.nativeElement.value;
    const numAfiliado = this.referenciaNumAfiliado.nativeElement.value;
    this.servicio.actualizarCliente(this.id, nombre, apPaterno, apMaterno, telefono, correo, numAfiliado);
  }
}
