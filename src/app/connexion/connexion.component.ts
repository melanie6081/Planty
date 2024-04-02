import { Component } from '@angular/core';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  user: User = new User()

  constructor(private router: Router) {}

  onSubmit() {
      this.router.navigate(['/planty', this.user.pseudo]);

  }

}
