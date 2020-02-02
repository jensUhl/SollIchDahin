import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule } from 'ngx-bootstrap';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModulesComponent } from './components/modules/modules.component';
import { RwthModuleComponent } from './components/rwth-module/rwth-module.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { HttpModule } from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CalculatorComponent,
    ProfileComponent,
    ModulesComponent,
    RwthModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    FormsModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatIconModule,
    NgFlashMessagesModule,
    HttpModule,
    JwtModule

  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
