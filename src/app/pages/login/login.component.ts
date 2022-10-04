import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
      }

      :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }

      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private route:Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl(''),
      password: new FormControl(''),
    })
  }

  onSubmit():void{
    const auth = JSON.stringify(this.loginForm.value);
    localStorage.setItem('auth', auth);
    this.route.navigate(['/dashboard']);
  }
}
