import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
  form: FormGroup = new FormGroup({});
  constructor(
    private _store: AngularFirestore,
    private _fb: FormBuilder,
    private _authServ: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const { email, password } = this.form.value;
    this._authServ.signIn(email, password).subscribe(() => {
      this._router.navigate(['../../home']);
    });
  }

  changeRoute() {
    this._router.navigate(['../../admin/register']);
  }
}
