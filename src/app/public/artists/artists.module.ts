import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsListComponent } from './containers/artists-list/artists-list.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistBoxComponent } from './components/artist-box/artist-box.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ArtistsListComponent, ArtistBoxComponent],
  imports: [CommonModule, ArtistsRoutingModule, CoreModule],
})
export class ArtistsModule {}
