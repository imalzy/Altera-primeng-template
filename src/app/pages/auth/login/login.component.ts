import { SessionService } from './../service/session.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

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
  loginForm: FormGroup;
  private ngUnsubsribe = new Subject();
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private authService: AuthService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.actRoute.queryParams.subscribe((param) => {
      if (param) {
        this.loginForm.get('email').patchValue(param?.email);
      }
    });
  }

  onSubmit(): void {
    // this.route.navigate(['/dashboard']);
    // this.authService.login(this.loginForm.value).subscribe(res=>{
    //   console.log(res)
    //   if(res){
    //     localStorage.setItem('jwt_token', res?.data);
    //     this.route.navigate(['/dashboard']);
    //   }
    // })

    this.authService
      .login(this.loginForm.value)
      .pipe(
        switchMap((res) => {
          if (res) {
            localStorage.setItem('jwt_token', res?.data);
          }
          return this.authService.getUserInfo();
        }),
        takeUntil(this.ngUnsubsribe)
      )
      .subscribe((res) => {
        if (res) {
          this.sessionService.createSession(res);
          this.route.navigate(['/dashboard']);
        }
      });
  }
}
