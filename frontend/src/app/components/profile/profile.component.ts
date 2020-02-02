import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Register variables
  name_reg: string;
  username_reg: string;
  email_reg: string;
  password_reg: string;
  password_reg_cnf: string;

  // Login Variables
  username_log: string;
  password_log: string;

  constructor(private validateService: ValidateService, private ngFlashMessageService: NgFlashMessageService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name_reg,
      username: this.username_reg,
      email: this.email_reg,
      password: this.password_reg,
      password_cnf: this.password_reg_cnf
    };

    // Required fields
    if (!this.validateService.validateRegister(user)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Bitte fülle alle Felder aus!'],
        dismissible: false,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    // Validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Bitte gib eine gültige Email Adresse ein!'],
        dismissible: false,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    // Validate password
    if (!this.validateService.validatePassword(user.password, user.password_cnf)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Deine Passwörter stimmen nicht überein!'],
        dismissible: false,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    // Register User
    this.auth.registerUser(user).subscribe(data => {
      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Deine Registrierung wurde erfolgreich abgeschlossen!'],
          dismissible: false,
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/sollich']);
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Deine Registrierung konnte nicht abgeschlossen werden!'],
          dismissible: false,
          timeout: 3000,
          type: 'danger'
        });

      }
    });
  }

  onLoginSubmit() {
    const user = {
      username: this.username_log,
      password: this.password_log
    };
    this.auth.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.auth.storeUserData(data.token, data.user);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Du hast dich erfolgreich angemeldet'],
          dismissible: false,
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/sollich']);

      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: [data.msg],
          dismissible: false,
          timeout: 3000,
          type: 'danger'
        });

      }
    });
  }
}
