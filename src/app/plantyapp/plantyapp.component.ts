import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RoundProgressComponent} from 'angular-svg-round-progressbar';
import { HttpClient } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';


/*import {MqttModule,
  IMqttMessage,
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
 } from 'ngx-mqtt';
 import { IClientSubscribeOptions } from 'mqtt-browser';
 import { Subscription } from 'rxjs';*/

@Component({
  selector: 'app-plantyapp',
  standalone: true,
  imports: [MatButton, MatIconButton, MatIconModule, MatProgressBarModule, RoundProgressModule, RoundProgressComponent, NgStyle, FormsModule, MatBadgeModule],
  templateUrl: './plantyapp.component.html',
  styleUrl: './plantyapp.component.css'
})
export class PlantyappComponent implements OnInit {
  pseudo: any;

  donnees: any;
  temperature: number= 0;
  humidite: number= 80;

  message: string = "";

  alertehum : number = 0;
  alertetempC : number = 0;
  alertetempF : number = 0;



// barre d'avancement humidité
  currentH = 50;
  maxH = 100;
  strokeH = 12;
  radiusH = 185;
  semicircleH = true;

  colorH = '#455874';
  backgroundH = '#eaeaea';
  durationH = 800;
  gradientH = false;
  realCurrentH = 0;

// barre d'avancement température
  current = 27;
  max = 50;
  stroke = 12;
  radius = 155;
  semicircle = true;
  
  color = '#45ccce';
  background = '#eaeaea';
  duration = 800;
  gradient = false;
  realCurrent = 0;


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private snackBar: MatSnackBar) { 
    this.pseudo = this.route.snapshot.params["pseudo"]
    console.log("user", this.pseudo)
    this.getItems();
    console.log(this.donnees)
  }

  onGet() {
    this.getItems();
  }

  getItems() {
    this.http.get('http://localhost:8080/')
      .subscribe(
        data => {
          this.donnees = data;
          console.log(this.donnees)
          this.humidite = parseInt(this.donnees["colineauber@yahoo.fr/capteur/humidite"]);
          this.temperature = parseInt(this.donnees["colineauber@yahoo.fr/capteur/temperature"]);
          console.log("humidite :", this.humidite)
          console.log("temperature :", this.temperature)
        }
      );
  }

  ngOnInit(): void {
    setInterval(() => {this.getItems();}, 5000);   
    setInterval(() => {this.alerte();}, )
  }

  deconnexion(){
    this.router.navigate(['']);
  }

  arroser(){
    let message = "L'arrosage de votre plante a bien été enclenché"
      this.popMessage(message)
  }

  popMessage(message: string): void {
    this.snackBar.open(message, "", { duration: 5000 });
  }

  alerte(){
    this.alertehum  = 0;
    this.alertetempC  = 0;
    this.alertetempF  = 0;
    if(this.humidite>70){
      this.alertehum  = 1;
    }
    if(this.humidite<=15){
      if (this.temperature>32){
        this.alertetempC = 1;
      }
      if (this.temperature<=0){
        this.alertetempC = 1;
      }

    }

  }

  notifH(){
    if (this.alertehum==1){
      let message = "!! Le niveau d'humidité de votre plante est trop élevé"
      this.popMessage(message)
    }
  }

  notifT(){
    if (this.alertetempC==1){
      let message = "!! Il fait trop chaud pour que nous puissions arroser vos plantes, mais la terre se fait sèche"
      this.popMessage(message)
    }
    if (this.alertetempF){
      let message = "!! Il fait trop chaud pour que nous puissions arroser vos plantes, mais la terre se fait sèche"
      this.popMessage(message)
    }
  }

  


}
