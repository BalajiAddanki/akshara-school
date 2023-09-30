import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes
  = [
    { path: '', 
    loadChildren:()=> import ('./web-app/web-app.module').then(m=>m.WebAppModlue) 
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
