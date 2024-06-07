import { Routes } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

export const routes: Routes = [
    {path : "clientes", component: ListadoClientesComponent},
    {path : "clientes/alta", component: AltaClienteComponent},
    {path : "", redirectTo : "/clientes", pathMatch : "full"}
];
