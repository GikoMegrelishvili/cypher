import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({});
  constructor(
    private _store: AngularFirestore,
    private _fb: UntypedFormBuilder,
    private _authServ: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this._authServ.signIn(this.form.value);
    this._router.navigate(['../../home']);
  }

  changeRoute() {
    this._router.navigate(['../../user/register']);
  }
}
