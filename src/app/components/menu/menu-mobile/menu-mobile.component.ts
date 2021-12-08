import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  mostraMenu = false;
  abreMenu() {
    this.mostraMenu = !this.mostraMenu;
  }
}
