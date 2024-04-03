import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConnexionComponent } from "./connexion/connexion.component";
import { FormsModule } from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
    declarations:[],
    imports:[CommonModule,FormsModule, ConnexionComponent, MatSnackBarModule, MatBadgeModule, HttpClientModule]
    })

export class AppModule{}