import { CommunityModule } from './components/community/community.module';
import { CodeEditorModule } from './components/code-editor/code-editor.module';
import { MenuModule } from './components/menu/menu.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MenuModule,
    CodeEditorModule,
    CommunityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
