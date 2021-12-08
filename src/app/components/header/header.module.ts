import { MenuMobileModule } from './../menu/menu-mobile/menu-mobile.module';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MenuMobileModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
