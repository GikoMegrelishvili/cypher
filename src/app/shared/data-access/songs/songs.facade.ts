import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SongModel } from './models/song.model';
import { SongsState } from './state/songs.state';

@Injectable({ providedIn: 'root' })
export class SongsFacade {
  constructor(private _state: SongsState) {}

  public getAllSongs$(): Observable<SongModel[]> {
    return this._state.getAllSongs$();
  }
  public getSong$(songId: string): Observable<SongModel | any> {
    return this._state.getSong$(songId);
  }
  public addSong(song: SongModel): void {
    this._state.addSong(song);
  }
  public editSong(songId: string, song: SongModel): void {
    this._state.editSong(songId, song);
  }
}
