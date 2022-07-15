import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ArtistFacade, ArtistModel } from 'src/app/shared/data-access/artists';
import { SongsFacade } from 'src/app/shared/data-access/songs';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.scss'],
})
export class SongAddComponent implements OnInit {
  public form: UntypedFormGroup = new UntypedFormGroup({});
  artists: ArtistModel[] = [];

  constructor(
    private _fb: FormBuilder,
    private _artistFacade: ArtistFacade,
    private _songsFacade: SongsFacade
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      artistName: new FormControl('', Validators.required),
      songName: new FormControl('', Validators.required),
      artistsIds: new FormControl('', Validators.required),
      coverImageUrl: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
    });
    this.getAllArtists();
  }

  getAllArtists() {
    this._artistFacade.getAllArtists$().subscribe((res: any) => {
      this.artists = res;
    });
  }

  onAddSong() {
    this._songsFacade.addSong(this.form.value);
  }
}
