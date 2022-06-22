import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { HomePageComponent } from '../public/home/home-page/home-page.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NavigationComponent],
})
export class CoreModule {}
