import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
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
  public form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private _fb: UntypedFormBuilder,
    private _store: AngularFirestore,
    private _authServ: AuthService,
    private _router: Router
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
    const { email, password } = this.form.value;
    this._authServ.signUp(email, password).subscribe(() => {
      this._router.navigate(['../../home']);
      return this._store.collection('admins').add(this.form.value);
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
    this._router.navigate(['../../admin/auth']);
  }
}
