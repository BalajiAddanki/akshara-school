import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAppComponent } from './web-app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '', component: WebAppComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WebAppRoutingModule { }
