import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/module.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-rwth-module',
  templateUrl: './rwth-module.component.html',
  styleUrls: ['./rwth-module.component.css']
})
export class RwthModuleComponent implements OnInit {

  selectedModul: Modul;
  searchText;
  modules: Modul[] = [];
  username: string;


  constructor(private moduleService: ModuleService, private auth: AuthService) {
    // retreives all rwth modules from backend mongo db
    this.moduleService.getAllModules().subscribe(data => {
      for (var key in data.modules) {
        let itemModule: Modul = {
          id: data.modules[key].id,
          name: data.modules[key].name
        };
        this.modules.push(itemModule);
      }
    });

    this.auth.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    },
      err => {
        console.log(err);
        return false;
      });

  }
  ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      console.log(this.username);
    },
      err => {
        console.log(err);
        return false;
      });
  }


  onSelect(modul: Modul): void {
    window.alert('Das gewählte Modul wurde zu deinen Modulen hinzugefügt!');
    let newUserModul = {
      username: this.username,
      newModule: {
        id: modul.id,
        name: modul.name
      }
    };
    console.log(modul);
    this.moduleService.addUserModule(newUserModul).subscribe(data => {
      console.log('Modul wurde wirklich hinzugefügt');
    });
    // call service to send the selected module to the Module Site
    // this.moduleService.setNewModule(modul);

  }

}

export class Modul {
  id: number;
  name: string;
}
