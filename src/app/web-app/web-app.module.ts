import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAppRoutingModule } from './web-app-routing.module';
import { HeaderModule } from './header/header.module';
import { WebAppComponent } from './web-app.component';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [WebAppComponent],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    HeaderModule,
    FooterModule
  ],
  exports: [WebAppComponent]
})
export class WebAppModule { }
