import { UserModule } from './../../user/user.module';
import { MenuBotoesModule } from './../menu-botoes/menu-botoes.module';
import { MenuMobileComponent } from './menu-mobile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MenuMobileComponent],
  imports: [CommonModule, MenuBotoesModule, UserModule],
  exports: [MenuMobileComponent],
})
export class MenuMobileModule {}
