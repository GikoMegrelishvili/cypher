import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongModel, SongsFacade } from 'src/app/shared/data-access/songs';
import { LyricsModel } from './models/lyrics.model';
import { LyricsState } from './state/lyrics.state';

@Injectable({ providedIn: 'root' })
export class LyricsFacade {
  constructor(private _state: LyricsState, private _songsFacade: SongsFacade) {}

  public addLyrics(lyrics: LyricsModel): void {
    this._state.addLyrics(lyrics);
  }
  public updateLyrics(songId: string, lyrics: any): void {
    this._state.updateLyrics('5', lyrics);
  }
  public getSongLyrics$(songId: string): Observable<LyricsModel> {
    return this._state.getSongLyrics(songId);
  }
  public getSong$(songId: string): Observable<SongModel> {
    return this._songsFacade.getSong$(songId);
  }
}
