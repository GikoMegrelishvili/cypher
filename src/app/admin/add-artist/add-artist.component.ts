import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtistServiceService } from '../artist-service.service';
import { Artists } from './artist.model';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {

  artistForm! : Artists;
  constructor(private _service:ArtistServiceService) { }

  ngOnInit(): void {
  }

  addArtist(regForm: NgForm){
    this.artistForm = regForm.form.value;
    this.artistForm.role.push(1);
    console.log(regForm.form.value);
    this._service.addArtist(this.artistForm);

  }
}
