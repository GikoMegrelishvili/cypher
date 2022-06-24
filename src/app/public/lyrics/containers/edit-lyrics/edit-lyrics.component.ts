import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';
import { EventEmitter, Output } from '@angular/core';

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

  form: FormGroup = new FormGroup({
    htmlContent: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {
    // this.form.controls['htmlContent'].valueChanges.subscribe((res) =>
    //   console.log(res)
    // );
  }
  onRichTextEditorChange(html: any): void {
    console.log(html);
  }
  public onAnnotationsChange(anotations: any): void {
    console.log(anotations);
  }
}
