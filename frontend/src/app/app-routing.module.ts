import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from '../app/components/calculator/calculator.component';
import { ModulesComponent } from '../app/components/modules/modules.component';
import { LandingComponent } from '../app/components/landing/landing.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { RwthModuleComponent } from './components/rwth-module/rwth-module.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sollich', component: CalculatorComponent, canActivate: [AuthGuard] },
  { path: 'module', component: ModulesComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfileComponent },
  { path: 'rwth-module', component: RwthModuleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
