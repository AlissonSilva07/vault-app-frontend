import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BigRedButtonComponent } from './components/shared/big-red-button/big-red-button.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InputComponent } from './components/shared/input/input.component';
import { DiscreteButtonComponent } from './components/shared/discrete-button/discrete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BigRedButtonComponent,
    LoginComponent,
    InicioComponent,
    InputComponent,
    DiscreteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
