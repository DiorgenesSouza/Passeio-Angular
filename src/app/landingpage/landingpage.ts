import { Component, inject } from '@angular/core'; // Adicionamos o inject aqui
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle-service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {
  // Injetamos os serviços de forma moderna
  private loginService = inject(AuthgoogleService);
  private router = inject(Router);

  // Agora o "profilesignal" consegue ler o loginService sem erro!
  public profilesignal = this.loginService.profile;

  // O construtor fica vazio ou pode ser removido
  constructor() {}

  navegar() {
    this.router.navigate(['/paginas/galeria']);
  } 

  logarComGoogle() {
    this.loginService.login();
  }

  isLoggedIn(): boolean {
    return !!this.profilesignal();
  }
}