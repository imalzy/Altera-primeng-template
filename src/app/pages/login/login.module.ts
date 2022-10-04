import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.route';
import { NgPrimeModule } from 'src/app/shared/ngprime.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
