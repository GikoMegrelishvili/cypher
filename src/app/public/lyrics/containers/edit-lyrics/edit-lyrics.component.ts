import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';
import { EventEmitter, Output } from '@angular/core';
import { LyricsFacade } from '../../../../shared/data-access/lyrics/lyrics.facade';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-edit-lyrics',
  templateUrl: './edit-lyrics.component.html',
  styleUrls: ['./edit-lyrics.component.scss'],
})
export class EditLyricsComponent implements OnInit {
  text: string =
    'On August 1, we went on vacation to Barcelona, Spain. Our flight took off at 11:00 am.';

  annotations: Annotation[] = [
    new Annotation(3, 11, 'Date', '#0069d9'),
    new Annotation(36, 45, 'City', '#dc3545'),
    new Annotation(47, 52, 'Country', '#28a745'),
    new Annotation(77, 85, 'Time', '#5a6268'),
  ];

  public songId: string = '5';
  // form: FormGroup = new FormGroup({
  //   htmlContent: new FormControl(''),
  // });
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  markerEvent: any;
  colorMarker = '#FFFF00';

  constructor(
    private _facade: LyricsFacade,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setIdFromParams();
    this._facade.getSongLyrics$(this.songId).subscribe((res: any) => {
      // console.log(res);
      this.htmlContent = res[0]?.lyrics;
      // console.log(this.htmlContent);
      // this.form.setValue({
      //   htmlContent: res[0].lyrics.htmlContent,
      // });
    });
  }
  public setIdFromParams(): void {
    this._activatedRoute.params.subscribe((res: any) => {
      this.songId = res.id;
    });
  }
  public onAddLyrics(): void {
    // this._facade.postLyrics(this.songId, this.form.value);
    this._facade.updateLyrics(this.songId, this.htmlContent);
  }

  onRichTextEditorChange(html: any): void {
    // console.log(html);
  }
  public onAnnotationsChange(anotations: any): void {
    // console.log(anotations);
  }

  public markContent(): void {
    const selection = window.getSelection();
    const selectionRange = window?.getSelection()?.getRangeAt(0);
    const textSeleted = selection?.toString();
    const range = selectionRange?.cloneRange();
    console.log(selection);
    console.log(textSeleted);
    if (this.markerEvent !== 'mark') {
      const marker = document.createElement('mark');
      marker.style.backgroundColor = this.colorMarker;
      marker.setAttribute('id', 'Trolfeis107');
      marker.textContent = textSeleted??'';
      range?.surroundContents(marker);
      return;
    }
  }
}
