import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WebAppRoutingModule } from "./web-app-routing.module";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    WebAppRoutingModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class WebAppModlue { };
