import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ArtistFacade } from 'src/app/shared/data-access/artists';
import { LyricsModel } from 'src/app/shared/data-access/lyrics/models/lyrics.model';
import { SongsFacade } from 'src/app/shared/data-access/songs';
import { SongModel } from 'src/app/shared/data-access/songs/models/song.model';
import { LyricsFacade } from '../../../../shared/data-access/lyrics/lyrics.facade';

@Component({
  selector: 'app-lyrics-page',
  templateUrl: './lyrics-page.component.html',
  styleUrls: ['./lyrics-page.component.scss'],
})
export class LyricsPageComponent implements OnInit {
  public songId!: string;
  public lyrics$ = new Observable<any>();
  public song$ = new Observable<SongModel>();


  private _subs = new Subscription();

  markerEvent: any;
  colorMarker = '#FFFF00';

  constructor(
    private _facade: LyricsFacade,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setIdFromParams();
  }
  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
  public setIdFromParams(): void {
    this._activatedRoute.params.subscribe((res: any) => {
      this.songId = res.id;
      this.song$ = this._facade.getSong$(this.songId);
      this.lyrics$ = this._facade.getSongLyrics$(this.songId);
    });
  }

  public markContent(): void {
    const selection = window.getSelection();
    const selectionRange = window?.getSelection()?.getRangeAt(0);
    const textSeleted = selection?.toString();
    const range = selectionRange?.cloneRange();
    console.log(selection);
    if (this.markerEvent !== 'mark') {
      const marker = document.createElement('mark');
      marker.setAttribute('class', this.colorMarker);
      marker.setAttribute('id', 'Trolfeis107');
      marker.addEventListener('click', () => {
        console.log(marker.id);
      });
      // marker.textContent = textSeleted;
      range?.surroundContents(marker);
      return;
    }
  }
}
