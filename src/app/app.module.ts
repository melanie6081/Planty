import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConnexionComponent } from "./connexion/connexion.component";
import { FormsModule } from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge'

@NgModule({
    declarations:[],
    imports:[CommonModule,FormsModule, ConnexionComponent, MatSnackBarModule, MatBadgeModule]
    })

export class AppModule{}