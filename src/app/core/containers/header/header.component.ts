import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  @ViewChild('icon', { static: true }) icon!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  navOpen() {
    this.nav.nativeElement.classList.toggle('active');
  }
}
