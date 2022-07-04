import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileViewComponent } from './containers/profile-view/profile-view.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileViewComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
