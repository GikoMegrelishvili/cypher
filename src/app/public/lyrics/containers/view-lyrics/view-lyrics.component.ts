import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ArtistModel } from 'src/app/shared/data-access/artists';
import { LyricsModel } from 'src/app/shared/data-access/lyrics/models/lyrics.model';
import { SongModel } from 'src/app/shared/data-access/songs/models/song.model';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { LyricsFacade } from '../../../../shared/data-access/lyrics/lyrics.facade';

@Component({
  selector: 'app-view-lyrics',
  templateUrl: './view-lyrics.component.html',
  styleUrls: ['./view-lyrics.component.scss'],
})
export class ViewLyricsComponent implements OnInit, OnDestroy {
  public songId!: string;
  public lyrics$ = new Observable<any>();
  public song$ = new Observable<SongModel>();

  private _subs = new Subscription();

  constructor(
    private _facade: LyricsFacade,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setIdFromParams();
    this.subscribe();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private subscribe(): void {
    this._subs.add(this.returnLyricsSub());
  }

  private returnLyricsSub() {
    return this.lyrics$.subscribe((lyrics: LyricsModel) => {
      const lyricsElement = document.getElementById('lyrics');
      if (lyricsElement) lyricsElement.innerHTML = lyrics.lyricsHtml;
    });
  }

  public setIdFromParams(): void {
    this._activatedRoute.params.subscribe((res: any) => {
      this.songId = res.id;
      this.song$ = this._facade.getSong$(this.songId);
      this.lyrics$ = this._facade.getSongLyrics$(this.songId);
    });
  }
}
