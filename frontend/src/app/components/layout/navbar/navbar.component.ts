import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private validateService: ValidateService, private ngFlashMessageService: NgFlashMessageService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogoutClick() {
    this.auth.logout();
    this.ngFlashMessageService.showFlashMessage({
      messages: ['Sie haben sich abgemeldet!'],
      dismissible: false,
      timeout: 3000,
      type: 'success'
    });
    this.router.navigate(['/profil']);
    return false;

  }

}
