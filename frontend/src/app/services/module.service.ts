import { Injectable } from '@angular/core';
import { HttpModule, Headers, Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Body } from '@angular/http/src/body';
import { BehaviorSubject } from 'rxjs';
import { Modul } from '../components/rwth-module/rwth-module.component';
import { AuthService } from './auth.service';

export interface Module {
  id: number;
  name: string;
}

export interface Class {
  id: number;
  name: string;
  date: number;
  time: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private myNewModule = new BehaviorSubject({ id: 0, name: "0" });
  // currentModule = this.myNewModule.asObservable();
  // userModules: Modul[] = []

  // setNewModule(module: Module) {
  //   this.userModules.push(module);
  //   this.myNewModule.next(module);
  // }

  constructor(private http: Http, private auth: AuthService) { }

  addModule(module) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(module.id);
    console.log(module.name);
    return this.http.post('http://localhost:3000/modules/addModule', { id: module.id, name: module.name }, { headers: headers }).pipe(map(res => { res.json(); console.log('request done successfully'); }));
  }

  getModule(name: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('name', name);
    return this.http.get('http://localhost:3000/modules/getModule', { headers: headers }).pipe(map(res => res.json()));
  }

  getAllModules() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/modules/getAllModules', { headers: headers }).pipe(map(res => res.json()));
  }

  addUserModule(newUserModul) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let newUserModule = {
      username: newUserModul.username,
      newModule: {
        id: newUserModul.newModule.id,
        name: newUserModul.newModule.name
      }
    };
    console.log(newUserModul);
    return this.http.post('http://localhost:3000/userModules/addModuleToUser', newUserModule, { headers: headers }).pipe(map(res => res.json()));
  }

  getUserModules(username) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let usernameQuery = { username: username };
    console.log(usernameQuery, 'ModuleService 72727272');
    return this.http.post('http://localhost:3000/userModules/getUserModules', usernameQuery, { headers: headers }).pipe(map(res => res.json()));

  }
}
