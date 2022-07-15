import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { SongModel } from '../models/song.model';

@Injectable({ providedIn: 'root' })
export class SongsState {
  private _songs$ = this._fireStore
    .collection('songs')
    .valueChanges({ idField: 'id' }) as Observable<SongModel[]>;

  constructor(
    private _fireStore: AngularFirestore,
    private _loadingService: LoadingService
  ) {}

  public getAllSongs$(): Observable<SongModel[]> {
    return this._songs$;
  }

  public getSong$(songId: string): Observable<SongModel | any> {
    return this._songs$.pipe(
      map((songs: SongModel[]) => {
        const songsMathched = songs.find(
          (song: SongModel) => song.id === songId
        );
        return songsMathched;
      })
    );
  }
  public addSong(song: SongModel): void {
    this._fireStore.collection('songs').add(song);
  }
  public editSong(songId: string, song: SongModel): void {
    this._fireStore.doc(`songs/${songId}`).update(song);
  }
}
