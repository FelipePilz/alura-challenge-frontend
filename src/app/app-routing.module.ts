import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'editor-de-codigo',
  },
  {
    path: 'editor-de-codigo',
    component: CodeEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
