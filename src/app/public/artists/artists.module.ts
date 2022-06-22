import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListComponent } from './containers/artists-list/artists-list.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistBoxComponent } from './components/artist-box/artist-box.component';

@NgModule({
  declarations: [ArtistsListComponent, ArtistBoxComponent],
  imports: [CommonModule, ArtistsRoutingModule],
})
export class ArtistsModule {}
