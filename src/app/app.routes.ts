import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PlantyappComponent } from './plantyapp/plantyapp.component';

export const routes: Routes = [
    {path : 'connexion', component:ConnexionComponent},
    {path : 'planty/:pseudo', component:PlantyappComponent},
    {path : '', redirectTo: '/connexion', pathMatch: 'full'}
];



