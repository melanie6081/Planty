import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    {path : 'connexion', component:ConnexionComponent},
    {path : '', redirectTo: '/connexion', pathMatch: 'full'}
];



