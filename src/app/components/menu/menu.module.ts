import { MenuBotoesModule } from './menu-botoes/menu-botoes.module';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuBotoesModule],
  exports: [MenuComponent],
})
export class MenuModule {}
