import { Component, Input, OnInit } from '@angular/core';
import { AnnotationModel } from 'src/app/shared/data-access/annotations';

@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.scss'],
})
export class AnnotationsComponent implements OnInit {
  @Input() annotation!:AnnotationModel;
  ngOnInit(): void {}
}
