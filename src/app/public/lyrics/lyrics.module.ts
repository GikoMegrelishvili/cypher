import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLyricsComponent } from './containers/view-lyrics/view-lyrics.component';
import { EditLyricsComponent } from './containers/edit-lyrics/edit-lyrics.component';
import { LyricsRoutingModule } from './lyrics-routing.module';
import { NgxAnnotateTextModule } from 'ngx-annotate-text';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SongCoverModule } from 'src/app/shared/ui/song-cover/song-cover.module';
import { EditorModule } from 'src/app/shared/ui/editor/editor.module';
import { LyricsAddComponent } from './containers/lyrics-add/lyrics-add.component';
import { UtilsModule } from 'src/app/shared/utils/utis.module';

@NgModule({
  declarations: [ViewLyricsComponent, EditLyricsComponent, LyricsAddComponent],
  imports: [
    CommonModule,
    LyricsRoutingModule,
    NgxAnnotateTextModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SongCoverModule,
    EditorModule,
    UtilsModule,
  ],
})
export class LyricsModule {}
