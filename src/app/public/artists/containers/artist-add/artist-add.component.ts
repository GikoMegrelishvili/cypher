import { Component, OnInit } from '@angular/core';
import { ArtistFacade } from 'src/app/shared/data-access/artists';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.scss'],
})
export class ArtistAddComponent implements OnInit {
  constructor(private _artistFacade: ArtistFacade) {}

  ngOnInit(): void {}

  public onArtistAdd(): void {
    this._artistFacade.addArtist({
      firstName: 'Levan',
      lastName: 'Kukhaleishvili',
      email: 'levan.kukhaleishvili@gmail.com',
      imageUrl:'https://firebasestorage.googleapis.com/v0/b/cypher-d1750.appspot.com/o/images%2F346c897baf88bc84e545c559869853e0.png?alt=media&token=f8e98600-f33e-4e6f-a8d5-a35eff921bf1',
      pseudonyms: ['MC Kushi','MC Kuxi'],
    });
  }
}
