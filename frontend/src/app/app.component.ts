import { Component, OnInit } from '@angular/core';
import { rwth_modules } from './rwth-modules';
import { ModuleService } from './services/module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private moduleService: ModuleService) {
    // var testModule = {
    //   id: 4,
    //   name: "TEST4"
    // }
    // this.moduleService.addModule(testModule).subscribe(data => console.log(data));
    for (var key in rwth_modules) {
      //console.log('test');
      //console.log(modul);
      //   const mod = {
      //     id: rwth_modules[key].id,
      //     name: rwth_modules[key].name
      //   }
      //   this.moduleService.addModule(mod).subscribe(data => console.log(data));

      // }
    }
  }


}
