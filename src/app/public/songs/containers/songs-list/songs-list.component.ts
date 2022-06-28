import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongModel, SongsFacade } from 'src/app/shared/data-access/songs';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  songs: SongModel[] = [];

  constructor(private _songsFacade: SongsFacade, private _router: Router) {}

  ngOnInit(): void {
    this.getAllSong();
  }

  getAllSong() {
    this._songsFacade.getAllSongs$().subscribe((res: any) => {
      this.songs = res;
    });
  }
}
