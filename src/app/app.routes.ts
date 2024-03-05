import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "projecten", component: ProjectenComponent },
    { path: "Contact", component: ContactComponent },

];
