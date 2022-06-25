import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-box',
  templateUrl: './artist-box.component.html',
  styleUrls: ['./artist-box.component.scss']
})
export class ArtistBoxComponent implements OnInit {

  constructor() { }


  @Input() artist:any;

  ngOnInit(): void {
    console.log(this.artist);
  }



}
