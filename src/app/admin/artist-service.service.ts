import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Artists } from './add-artist/artist.model';

@Injectable({
  providedIn: 'root',
})
export class ArtistServiceService {
  constructor(private _db: AngularFirestore) {}

  addArtist(artist: Artists) {
    this._db.collection('users').add(artist);
  }
}
