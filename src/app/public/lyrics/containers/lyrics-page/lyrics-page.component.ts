import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { AnnotationsFacade } from 'src/app/shared/data-access/annotations';
import { AnnotationsResponseModel } from 'src/app/shared/data-access/annotations/models/annotations-response.model';
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
  public annotations$ = new Observable<any>();

  private _subs = new Subscription();

  songColor = 'rgb(199 194 255)';
  // isEditing: boolean = true;

  // markerEvent: any;
  // colorMarker = '#FFFF00';

  // selectedAnnotationId;

  constructor(
    private _lyricsFacade: LyricsFacade,
    private _annotationsFacade: AnnotationsFacade,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._setIdFromParams();
  }
  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
  // onCreateAnnotation(): void {}
  // onEditLyrics(value: boolean): void {
  //   this.isEditing = value;
  // }

  // createAnnotiation(): void {
  //   this._annotationsFacade
  //     .getCreatedAnnotiationId({
  //       songId: this.songId ?? '',
  //       annotations: [],
  //       annotatedText: this.returnSelectedText(),
  //     })
  //     .then((id) => (this.selectedAnnotationId = id));
  // }

  // markContent(): void {
  //   const range = this.getRange();
  //   if (this.markerEvent !== 'mark') {
  //     const marker = this.getCreatedMarker();
  //     return;
  //   }
  // }
  // getCreatedMarker() {
  //   const marker = document.createElement('mark');
  //   marker.setAttribute('class', this.songColor);
  //   marker.setAttribute('id', 'Trolfeis107');
  //   return marker;
  // }
  // getRange() {
  //   const selection = window.getSelection();
  //   const selectionRange = window?.getSelection()?.getRangeAt(0);
  //   const textSeleted = selection?.toString();
  //   const range = selectionRange?.cloneRange();
  //   return range;
  // }
  _setIdFromParams(): void {
    this._activatedRoute.params.subscribe((res: any) => {
      this.songId = res.id;
      this.song$ = this._lyricsFacade.getSong$(this.songId);
      this.lyrics$ = this._lyricsFacade.getSongLyrics$(this.songId);
      this.annotations$ = this._annotationsFacade.getAnnotationsBySongId$(
        this.songId
      );
    });
  }
}
