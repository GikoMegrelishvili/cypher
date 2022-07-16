import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, take } from 'rxjs';
import { LyricsModel } from '../models/lyrics.model';

@Injectable({ providedIn: 'root' })
export class LyricsState {
  constructor(private _fireStore: AngularFirestore) {}

  public getAllLyrics(): Observable<LyricsModel[]> {
    return this._fireStore
      .collection<LyricsModel>('lyrics')
      .valueChanges({ idField: 'id' });
  }
  public getSongLyrics(songId: string): Observable<LyricsModel> {
    return this._fireStore
      .collection<LyricsModel>('lyrics', (ref) =>
        ref.where('songId', '==', songId)
      )
      .valueChanges({ idField: 'id' })
      .pipe(map((lyrics: LyricsModel[]) => lyrics[0]));
  }
  public postLyrics(songId: string, lyrics: LyricsModel): void {
    this._fireStore.collection('lyrics').add({
      songId: songId,
      lyrics,
    });
  }
  public updateLyrics(lyricsId: string, lyricsHtml: any): void {
    this._fireStore.doc(`lyrics/${lyricsId}`).update({
      lyricsHtml,
    });
  }
  public addLyrics(lyrics: LyricsModel): void {
    this._fireStore.collection('lyrics').add(lyrics);
  }
}
