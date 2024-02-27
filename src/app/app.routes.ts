import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectenComponent } from './projecten/projecten.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "projecten", component: ProjectenComponent },

];
