import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLyricsComponent } from './containers/view-lyrics/view-lyrics.component';
import { EditLyricsComponent } from './containers/edit-lyrics/edit-lyrics.component';



@NgModule({
  declarations: [
    ViewLyricsComponent,
    EditLyricsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LyricsModule { }
