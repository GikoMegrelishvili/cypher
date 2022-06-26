import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/shared/data-access/artists';
import { SongModel } from 'src/app/shared/data-access/songs/models/song.model';

@Component({
  selector: 'app-song-cover',
  templateUrl: './song-cover.component.html',
  styleUrls: ['./song-cover.component.scss'],
})
export class SongCoverComponent implements OnInit {
  @Input() song!: SongModel | null;
  @Input() artists: ArtistModel[] = [
    {
      pseudonyms: ['MC Givi'],
    },
    {
      pseudonyms: ['MC Kuxi'],
    },
    {
      pseudonyms: ['MC Rajaka'],
    },
    {
      pseudonyms: ['Spanderako99'],
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
