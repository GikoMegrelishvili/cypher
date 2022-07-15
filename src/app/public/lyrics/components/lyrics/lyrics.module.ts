import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HeroIconModule } from 'ng-heroicon';
import { AnnotationsModule } from '../annotations/annotations.module';
import { LyricsComponent } from './component/lyrics.component';

@NgModule({
  declarations: [LyricsComponent],
  imports: [
    CommonModule,
    HeroIconModule,
    AngularEditorModule,
    FormsModule,
    AnnotationsModule,
  ],
  exports: [LyricsComponent],
})
export class LyricsComponentModule {}
