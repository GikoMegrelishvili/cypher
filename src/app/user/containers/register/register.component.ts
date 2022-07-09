import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../user-services/auth.service';
import { UserDataService } from '../user-services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private _fb: FormBuilder,
    private _authServ: AuthService,
    private _router: Router,
    private _userDataServ: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            // Validators.pattern(
            //   '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
            // ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  onAddUser() {
    if (this.form.invalid) return;

    const { username, email, password } = this.form.value;
    this._authServ.signUp(email, password).subscribe((userCredential) => {
      const uid = userCredential.user?.uid;
      this._userDataServ.addUser({ uid, displayName: username, email });
      this._router.navigate(['/home']);
    });
  }

  passwordMatchingValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password?.value === confirmPassword?.value
      ? null
      : { notMatched: true };
  };

  changeRoute() {
    this._router.navigate(['../../user/auth']);
  }
}
