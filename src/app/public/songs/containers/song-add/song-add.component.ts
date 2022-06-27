import { Component, OnInit } from '@angular/core';
import { SongsFacade } from 'src/app/shared/data-access/songs';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.scss'],
})
export class SongAddComponent implements OnInit {

  constructor(private _songsFacade: SongsFacade) {}

  ngOnInit(): void {}

  public onAddSong(): void {
    this._songsFacade.addSong({
      artistsIds: [
        'uXGsYK4NL3dcKcacoFrd',
        'ct1f1ZfcXqAayF7lNt0C',
        'np5z6dF8mcQaSn2KpufE',
        'O2y9nhRZGT47x5WrtGmQ',
      ],
      artistName: 'Akacia Cypher',
      songName: 'Akacia Rakacia',
      coverImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/cypher-d1750.appspot.com/o/Cover.jpg?alt=media&token=ab06394b-7c91-46a7-bff5-bbda2c0ccbb6',
    });
  }
}
