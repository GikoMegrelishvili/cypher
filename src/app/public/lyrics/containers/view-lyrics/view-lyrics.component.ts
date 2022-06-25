import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistFacade } from 'src/app/shared/data-access/artists';
import { SongsFacade } from 'src/app/shared/data-access/songs';
import { SongModel } from 'src/app/shared/data-access/songs/models/song.model';
import { LyricsFacade } from '../../../../shared/data-access/lyrics/lyrics.facade';

@Component({
  selector: 'app-view-lyrics',
  templateUrl: './view-lyrics.component.html',
  styleUrls: ['./view-lyrics.component.scss'],
})
export class ViewLyricsComponent implements OnInit {
  public lyrics$: any;
  public lyrics: any;
  public songId = '5';
  public song$: Observable<SongModel> = this._facade.getSong$(this.songId);
  constructor(private _facade: LyricsFacade) {}

  ngOnInit(): void {
    this._facade.getSongLyrics$(this.songId).subscribe((res: any) => {
      this.setLyricsHtml(res[0].lyrics);
    });
  }
  private setLyricsHtml(lyrics: any) {
    this.lyrics = lyrics;
    const lyricsElement = document.getElementById('lyrics');
    if (lyricsElement) lyricsElement.innerHTML = this.lyrics;
  }
}
