import { Component } from '@angular/core';
import { fadeIn } from 'src/assets/animations/fadeIn.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
})
export class AppComponent {
  constructor() {}
}
