import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistFacade, ArtistModel } from 'src/app/shared/data-access/artists';
import { SongModel } from 'src/app/shared/data-access/songs/models/song.model';

@Component({
  selector: 'app-song-cover',
  templateUrl: './song-cover.component.html',
  styleUrls: ['./song-cover.component.scss'],
})
export class SongCoverComponent implements OnInit {
  @Input() song$!: Observable<SongModel | null>;

  song!: SongModel | null;
  artistsIds: string[] = [];
  singleArtistId!: string;
  artists: ArtistModel[] = [];

  constructor(private _artistFacade: ArtistFacade) {}

  ngOnInit(): void {
    this.song$.subscribe((song: any) => {
      this.artistsIds = song?.artistsIds;
      this.song = song;
      // console.log(this.song);
      // console.log(this.artistsIds);
      this.getArtistsById();
    });
  }

  getArtistsById() {
    this.artistsIds?.forEach((res: string) => {
      this.singleArtistId = res;
      this.getArtistArray();
    });
  }

  getArtistArray() {
    this._artistFacade.getArtist$(this.singleArtistId).subscribe((res: any) => {
      this.artists.push(res);
      console.log(res.pseudonyms[0]);
    });
  }
}
