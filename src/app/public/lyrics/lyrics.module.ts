import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { LyricsComponentModule } from 'src/app/public/lyrics/components/lyrics/lyrics.module';
import { LyricsPageComponent } from './containers/lyrics-page/lyrics-page.component';
import { HeroIconModule } from 'ng-heroicon';
import { LyricsComponent } from './components/lyrics/component/lyrics.component';
import { AnnotationsComponent } from './components/annotations/component/annotations.component';
import { AnnotationsModule } from './components/annotations/annotations.module';
import { ActionsComponent } from './components/actions/actions.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [EditLyricsComponent, LyricsAddComponent, LyricsPageComponent, ActionsComponent],
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
    LyricsComponentModule,
    AnnotationsModule,
    UtilsModule,
<<<<<<< HEAD
    HeroIconModule,
=======
    CoreModule,
>>>>>>> delman
  ],
})
export class LyricsModule {}
