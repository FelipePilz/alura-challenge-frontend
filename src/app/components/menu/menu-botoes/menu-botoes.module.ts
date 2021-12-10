import { RouterModule } from '@angular/router';
import { MenuBotoesComponent } from './menu-botoes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuBotoesComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuBotoesComponent],
})
export class MenuBotoesModule {}
