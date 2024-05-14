import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ContactComponent } from './contact/contact.component';
import { OverMijComponent } from './over-mij/over-mij.component';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    {path: "over-mij", component: OverMijComponent},
    { path: "projecten", component: ProjectenComponent },
    { path: 'project/:id', component: SingleProjectPageComponent },
    { path: "Contact", component: ContactComponent },

];
