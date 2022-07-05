import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private _fb: FormBuilder,
    private _fireStore: AngularFirestore,
    private _authServ: AuthService,
    private _router: Router,
    private _fireAuth: AngularFireAuth
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

  public onAddUser(): void {
    if (this.form.invalid) {
      return;
    }
    this._authServ.signUp(this.form.value);
    this._fireAuth.authState.subscribe((user) => {
      // console.log(user);
      // console.log(user?.uid);
      this._fireStore.collection('users').doc(user?.uid).set({
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password,
      });
    });
    this._router.navigate(['../../home']);
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
