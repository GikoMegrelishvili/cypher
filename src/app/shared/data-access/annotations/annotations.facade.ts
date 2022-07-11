import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AnnotationModel } from './models/annotation.model';
import { AnnotationsState } from './state/annotations.state';

@Injectable({ providedIn: 'root' })
export class AnnotationsFacade {
  constructor(private _state: AnnotationsState) {}

  public addAnnotation(annotation: AnnotationModel): void {
    this._state.addAnotation(annotation);
  }
  public getAnnotation$(annotationId: string) {
    return this._state.getAnnotation$(annotationId);
  }
  public getCreatedAnnotiationId(annotation: AnnotationModel): Promise<string> {
    return this._state.getCreatedEmptyAnnotiationId(annotation);
  }
}
