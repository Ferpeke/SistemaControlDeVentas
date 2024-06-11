import { Routes } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { ClienteCompraDetallesComponent } from './cliente-compra-detalles/cliente-compra-detalles.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';

export const routes: Routes = [
    {path : "clientes", component: ListadoClientesComponent},
    {path : "clientes/alta", component: AltaClienteComponent},
    {path : "clientes/detalle/:id", component: ClienteCompraDetallesComponent},
    {path : "", redirectTo : "/clientes", pathMatch : "full"},
    {path : "productos", component: ListadoProductosComponent },
    {path : "productos/alta", component: AltaProductoComponent},
    {path : "clientes/detalles/:id", component: DetalleClienteComponent},
    {path : "clientes/editar/:id", component: EdicionClienteComponent}
];
