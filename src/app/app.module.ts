import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { PageCurrentComponent } from './pages/page-current/page-current.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TabViewComponent,
    PageCurrentComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
