import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavBarComponent, ListadoClientesComponent,
    AltaClienteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClienteAngular';
}
