import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ArtistModel } from './models/artist.model';
import { ArtistsState } from './state/artists.state';

@Injectable({ providedIn: 'root' })
export class ArtistFacade {
  constructor(private _state: ArtistsState) {}

  public getAllArtists$(): Observable<ArtistModel[]> {
    return this._state.getAllArtists$();
  }
  public getArtist$(id: string): Observable<ArtistModel | any> {
    return this._state.getArtist$(id);
  }
  public addArtist(artist: ArtistModel): void {
    this._state.addArtist(artist);
  }
  public editArtist(artist: ArtistModel): void {
    this._state.editArtist(artist);
  }
}
