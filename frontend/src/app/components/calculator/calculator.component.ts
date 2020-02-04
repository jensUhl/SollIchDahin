import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  user: object;

  // Variables for user input bases on feeling
  tired = 0;
  feeling = 0;
  motivation = 0;

  // Method to set parameters to neutral, i.e. 0
  setNeutral(num) {
    switch (num) {
      case 'tired': this.tired = 0; break;
      case 'feeling': this.feeling = 0; break;
      case 'motivation': this.motivation = 0; break;
      default: break;
    }
  }

  // Method to set parameters to negativ, i.e. -1
  setNegativ(num) {
    switch (num) {
      case 'tired': this.tired = -1; break;
      case 'feeling': this.feeling = -1; break;
      case 'motivation': this.motivation = -1; break;
      default: break;
    }
  }

  // Method to set parameters to positiv, i.e. 1 and 2 for motivation
  setPositiv(num) {
    switch (num) {
      case 'tired': this.tired = 1; break;
      case 'motivation': this.motivation = 2; break;
      default: break;
    }
  }

  // Method to calculate the answer for all classes today
  /*
  Note that the calculation is biased towards a positiv outcome. This is because we
  want this calculator to give a somewhat realistic answer and not just tell students
  they should not go to classes. That would we useless.
  */
  shouldI() {
    // for all classes of today
    const res = 5 + this.tired + this.feeling + this.motivation;

    if (res <= 3) {
      // negativ, do not go to class
      // change row class to bg-danger

    } else if (res > 3 && res < 6) {
      // neutral, decide own your own
      // change row class to bg-warning

    } else if (res >= 6 && res <= 10) {
      // positiv, should go to class
      // change row class to bg-success

    }
  }

  constructor(private auth: AuthService) { }


  ngOnInit() {
      this.auth.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
        err => {
          console.log(err);
          return false;
        });

    }

}

// Returns if a given date is today
const isToday = (date) => {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
};
