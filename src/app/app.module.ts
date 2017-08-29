import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogbookTableComponent } from './logbook-table/logbook-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LogbookTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
