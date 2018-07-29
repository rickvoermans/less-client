import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { MainInfoComponent } from './menu/main-info/main-info.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { CurrentComponent } from './pages/current/current.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainInfoComponent,
    TabMenuComponent,
    CurrentComponent,
    GoalsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
