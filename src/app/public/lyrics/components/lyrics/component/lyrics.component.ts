import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AnnotationsFacade } from 'src/app/shared/data-access/annotations';
import { LyricsModel } from 'src/app/shared/data-access/lyrics/models/lyrics.model';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit, OnChanges {
  @Input() lyrics!: LyricsModel;
  @Input() songColor = 'rgb(199 194 255)';
  @Input() isEditing: boolean = false;

  selectedAnnotiationId = '';
  htmlContent = '';
  markerEvent: any;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
  };

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.lyrics || !this.lyrics?.lyricsHtml) return;
    this.htmlContent = this.lyrics?.lyricsHtml;
    const lyricsElement = document.getElementById('lyrics');
    if (lyricsElement) {
      lyricsElement.innerHTML = this.lyrics?.lyricsHtml;
    }
  }
}
