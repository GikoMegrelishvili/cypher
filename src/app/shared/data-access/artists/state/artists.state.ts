import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ArtistModel } from '../models/artist.model';

@Injectable({ providedIn: 'root' })
export class ArtistsState {
  private _artists$ = new BehaviorSubject<ArtistModel[]>([]);

  constructor(private _fireStore: AngularFirestore) {}

  public getAllArtists$(): Observable<ArtistModel[]> {
    return this._artists$.asObservable();
  }
  public getArtist$(id: string): Observable<ArtistModel | any> {
    return this._artists$.pipe(
      map((artists: ArtistModel[]) => {
        return artists.find((artist: ArtistModel) => artist.id === id);
      })
    );
  }
  public addArtist(artist: ArtistModel): void {
    this._fireStore.collection('artists').add(artist);
  }
  public editArtist(artist: ArtistModel): void {
    this._fireStore.doc(`artists/${artist.id}`).update(artist);
  }
}
