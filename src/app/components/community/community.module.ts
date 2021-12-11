import { UserModule } from './../user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunityComponent } from './community.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CommunityComponent],
  imports: [CommonModule, ReactiveFormsModule, UserModule],
  exports: [CommunityComponent],
})
export class CommunityModule {}
