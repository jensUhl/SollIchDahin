import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {

    }
    user: Object;

    canActivate() {
        this.auth.getProfile().subscribe(profile => {
            this.user = profile.user;
        },
            err => {
                console.log(err);
                return false;
            })
        if (this.auth.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/profil']);
            return false;
        }
    }
}