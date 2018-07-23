import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { MainInfoComponent } from './menu/main-info/main-info.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { PageCurrentComponent } from './pages/page-current/page-current.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainInfoComponent
    TabViewComponent,
    PageCurrentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
