import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenida', url: 'bienvenida', icon: 'heart' },
    { title: 'Coversor', url: 'coversor', icon: 'paper-plane' },
    { title: 'About', url: 'about', icon: 'paper-plane' },
    { title: 'Cerrar sesion', url: 'login', icon: 'close' },
  ];
  constructor() {}
}
