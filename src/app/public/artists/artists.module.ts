import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListComponent } from './containers/artists-list/artists-list.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistBoxComponent } from './components/artist-box/artist-box.component';
import { ArtistEditComponent } from './containers/artist-edit/artist-edit.component';
import { ArtistAddComponent } from './containers/artist-add/artist-add.component';
import { ArtistViewComponent } from './containers/artist-view/artist-view.component';

@NgModule({
  declarations: [
    ArtistsListComponent,
    ArtistBoxComponent,
    ArtistEditComponent,
    ArtistAddComponent,
    ArtistViewComponent,
  ],
  imports: [CommonModule, ArtistsRoutingModule],
})
export class ArtistsModule {}
