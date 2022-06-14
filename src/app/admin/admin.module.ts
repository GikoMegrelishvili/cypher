import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './containers/auth/auth.component';
import { RegisterComponent } from './containers/register/register.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
