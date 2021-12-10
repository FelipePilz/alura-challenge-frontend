import { ButtonFilledModule } from './../button/button-filled/button-filled.module';
import { CodeEditorComponent } from './code-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CodeEditorComponent],
  imports: [CommonModule, ButtonFilledModule],
  exports: [CodeEditorComponent],
})
export class CodeEditorModule {}
