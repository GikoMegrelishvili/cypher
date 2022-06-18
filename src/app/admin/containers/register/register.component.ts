import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = this.returnInitializedForm();

  constructor(private _fb: FormBuilder, private _store: AngularFirestore) {}

  ngOnInit(): void {}

  public onAddUser(): void {
    if (this.form.invalid) return;
    console.log('Request');
    this._store.collection('admins').add(this.form.value);
  }

  private returnInitializedForm(): FormGroup {
    return this._fb.group({
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
          // Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }
}
