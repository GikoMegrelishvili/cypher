import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
})
export class OverviewPageComponent implements OnInit {
  @ViewChild('image', { static: true }) image!: ElementRef;

  constructor(private _router: Router) {}

  ngOnInit(): void {}
}
