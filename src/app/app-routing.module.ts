import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes
  = [
    {
      path: '',
      loadChildren: () => import('./web-app/web-app.module').then(m => m.WebAppModule)
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
