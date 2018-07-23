import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { MainInfoComponent } from './menu/main-info/main-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
