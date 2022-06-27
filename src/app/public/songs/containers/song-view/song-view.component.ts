import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SongsFacade } from 'src/app/shared/data-access/songs';

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.scss'],
})
export class SongViewComponent implements OnInit {
  private _songs$ = this._songsFacade.getAllSongs$();
  constructor(
    private _songsFacade: SongsFacade,
    private _activatedRoute: ActivatedRouteSnapshot
  ) {}

  ngOnInit(): void {
    this._songs$.subscribe((res) => console.log(res));
  }

  private getIdFromParams(): void {}
}
