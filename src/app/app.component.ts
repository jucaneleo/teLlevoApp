import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: 'about', icon: 'mail' },
    { title: 'Bienvenida', url: 'bienvenida', icon: 'paper-plane' },
    { title: 'Coversor', url: 'coversor', icon: 'heart' },
    { title: 'Cerrar sesion', url: 'login', icon: 'heart' },
  ];
  constructor() {}
}
