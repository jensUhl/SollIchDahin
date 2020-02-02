import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModuleService, Module } from 'src/app/services/module.service';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

interface UserClass {
  name: string;
  day: number;
  month: number;
  hour: number;
  minute: number;
}

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  // Arrays for types
  username: string;
  userModules: Module[] = [{id: 1, name: 'Test'}];
  userClasses: UserClass[] = [];

  // Class Variables
  classId: number;
  className: string;
  classDate: number;
  classTime: number;

  constructor(private auth: AuthService, private moduleService: ModuleService) { }
  ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.moduleService.getUserModules(this.username).subscribe(data => {
        if (data && data.modules) {
          this.userModules = data.modules.modules;
        }
      });

    },
      err => {
        console.log(err);
        return false;
      });
  }


  onClickClass() {

    /*
    const newClass: UserClass = {
      name: 
      day: 
      month:
      hour:
      minute:
    }
    */

    /*
    const class = {
      id: this.classId;
      name: this.className;
      date: this.classDate;
      time: this.classTime;
    }
     */
  }

}
