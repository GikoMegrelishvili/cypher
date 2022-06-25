import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss'],
})
export class ArtistsListComponent implements OnInit {
  constructor(private _db:AngularFirestore) {}

artistList!:any;


  ngOnInit(): void {
    this.getArtists();
  }


  getArtists(){

    this._db.collection('users').valueChanges().subscribe(res=>{
    this.artistList = res;
      console.log(res);
    })
  }
}
