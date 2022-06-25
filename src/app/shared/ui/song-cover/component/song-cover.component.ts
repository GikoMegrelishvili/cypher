import { Component, Input, OnInit } from '@angular/core';
import { SongModel } from 'src/app/shared/data-access/songs/models/song.model';

@Component({
  selector: 'app-song-cover',
  templateUrl: './song-cover.component.html',
  styleUrls: ['./song-cover.component.scss'],
})
export class SongCoverComponent implements OnInit {
  @Input() song!: SongModel | null;
  constructor() {}
  ngOnInit(): void {}
}
