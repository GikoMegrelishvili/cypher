import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  navOpen() {
    this.nav.nativeElement.classList.toggle('active');
  }
}
