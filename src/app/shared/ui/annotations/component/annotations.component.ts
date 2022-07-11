import { Component, Input, OnInit } from '@angular/core';
import { AnnotationsFacade } from 'src/app/shared/data-access/annotations';

@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.scss'],
})
export class AnnotationsComponent implements OnInit {
  @Input() selectedAnnotiationId = '';
  constructor(private _facade: AnnotationsFacade) {}
  annotation$ = this._facade.getAnnotation$(this.selectedAnnotiationId);

  ngOnInit(): void {}
}
