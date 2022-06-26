import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in.animations';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  animations: [fadeIn],
})
export class OverviewPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
