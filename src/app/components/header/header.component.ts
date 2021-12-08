import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public trocaIcone() {
    const menu = document.getElementById('menu-button')?.classList;
    if (menu?.contains('fa-bars')) {
      menu.toggle('fa-bars');
      menu.toggle('fa-times');
    } else {
      menu?.toggle('fa-times');
      menu?.toggle('fa-bars');
    }
  }
}
