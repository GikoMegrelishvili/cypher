import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AddArtistComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, CoreModule],
})
export class AdminModule {}
