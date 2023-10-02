import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { WebAppModule } from './web-app/web-app.module';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebAppModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
