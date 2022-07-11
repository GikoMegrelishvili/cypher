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
  @Input() isEditing: boolean = true;

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

  constructor(private _annotationsFacade: AnnotationsFacade) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.lyrics || !this.lyrics?.lyricsHtml) return;
    this.htmlContent = this.lyrics?.lyricsHtml;
    const lyricsElement = document.getElementById('lyrics');
    if (lyricsElement) {
      lyricsElement.innerHTML = this.lyrics?.lyricsHtml;
    }
  }
  onEditClick() {
    this.isEditing = true;
  }
  onStopEditClick() {
    this.isEditing = false;
  }
  public addAnnotation(): void {
    // console.log(this.lyrics);
  }
  public createAnnotiation(): void {
    this._annotationsFacade
      .getCreatedAnnotiationId({
        lyricsId: this.lyrics.songId ?? '',
        annotations: [],
        annotatedText: this.returnSelectedText(),
      })
      .then((id) => (this.selectedAnnotiationId = id));
  }
  returnSelectedText() {
    return '';
  }

  public markContent(): void {
    const range = this.getRange();
    if (this.markerEvent !== 'mark') {
      const marker = this.getCreatedMarker();
      // marker.textContent = textSeleted;
      range?.surroundContents(marker);
      return;
    }
  }
  getCreatedMarker() {
    const marker = document.createElement('mark');
    marker.setAttribute('class', this.songColor);
    marker.setAttribute('id', 'Trolfeis107');
    return marker;
  }
  getRange() {
    const selection = window.getSelection();
    const selectionRange = window?.getSelection()?.getRangeAt(0);
    const textSeleted = selection?.toString();
    const range = selectionRange?.cloneRange();
    return range;
  }
  onAnnotationClick() {
    this.markContent();
  }
}
