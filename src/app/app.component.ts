import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-17-02';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private keyc: KeycloakService
  ) {

  }


  ngOnInit(): void {
    let loggedUser = this.authService.getUsername();
    console.log(loggedUser);
    if (this.router.url == '/') {
      let roles = this.authService.getRoles();
      console.log(roles);
      this.router.navigate([""]);
    }

  }


}
