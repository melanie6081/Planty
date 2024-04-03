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
  imports: [MatButton, MatIconButton, MatIconModule, MatProgressBarModule, RoundProgressModule, RoundProgressComponent, NgStyle, FormsModule],
  templateUrl: './plantyapp.component.html',
  styleUrl: './plantyapp.component.css'
})
export class PlantyappComponent implements OnInit {
  pseudo: any;

  donnees: any;
  temperature: number= 0;
  humidite: number= 0;

  message: string = "";

  /*client: MqttService | undefined;
  isConnection = false;
  subscribeSuccess = false;*/

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { //, , private mqttService: MqttService
    //this.client = this.mqttService;
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

  /*private curSubscription: Subscription | undefined;

  connection = {
    hostname: 'broker.emqx.io',
    port: 8083,
    path: '/mqtt',
   clean: true, // Retain session
   connectTimeout: 4000, // Timeout period
   reconnectPeriod: 4000, // Reconnect period
   // Authentication information
   username: 'colineauber@yahoo.fr',
   password: 'plante',
  }

  receiveNews = '';


  // Create a connection
 createConnection() {
  // Connection string, which allows the protocol to specify the connection method to be used
  // ws Unencrypted WebSocket connection
  // wss Encrypted WebSocket connection
  // mqtt Unencrypted TCP connection
  // mqtts Encrypted TCP connection
  try {
    this.client?.connect(this.connection as IMqttServiceOptions)
 } catch (error) {
    console.log('mqtt.connect error', error);
 }
  this.client?.onConnect.subscribe(() => {
    this.isConnection = true
    console.log('Connection succeeded!');
 });
  this.client?.onError.subscribe((error: any) => {
    this.isConnection = false
    console.log('Connection failed', error);
 });
  this.client?.onMessage.subscribe((packet: any) => {
    this.receiveNews = this.receiveNews.concat(packet.payload.toString())
    console.log(`Received message ${packet.payload.toString()} from topic ${packet.topic}`)
 })
}

  subscription = {
    topicH: 'colineauber@yahoo.fr/capteur/humidite',
    qos: 0
  }
  
  //, {topicT: 'colineauber@yahoo.fr/capteur/temperature', qos}];



  doSubscribe() {
    const { topicH, qos } = this.subscription
    this.curSubscription = this.client?.observe(topicH, { qos } as IClientSubscribeOptions).subscribe((message: IMqttMessage) => {
      this.subscribeSuccess = true
      console.log('Subscribe to topics res', message.payload.toString())
   })

   }*/

  ngOnInit(): void {
    setInterval(() => {this.getItems();}, 5000);
    
  }

  deconnexion(){
    this.router.navigate(['']);
  }

  current = 27;
  max = 50;
  stroke = 15;
  radius = 180;
  semicircle = true;
  
  color = '#45ccce';
  background = '#eaeaea';
  duration = 800;
  gradient = false;
  realCurrent = 0;

  currentH = 50;
  maxH = 100;
  strokeH = 12;
  radiusH = 160;
  semicircleH = true;
  
  colorH = '#455874';
  backgroundH = '#eaeaea';
  durationH = 800;
  gradientH = false;
  realCurrentH = 0;


}
