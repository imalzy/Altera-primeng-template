import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl('', Validators.required),
      retryPassword: new FormControl(
        '',
        Validators.compose([Validators.required, confirmPasswordValidator])
      ),
    });
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    const data = this.registrationForm.value;
    delete data.retryPassword;

    this.authService.register(data).subscribe((res) => {
      console.log(res);
      if (res) {
        this.router.navigate(['/auth/login'], {
          queryParams: { email: this.registrationForm.get('email').value },
        });
      }
      this.submitted = false
    });
  }
}

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('retryPassword');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return { passwordsNotMatching: true };
};
