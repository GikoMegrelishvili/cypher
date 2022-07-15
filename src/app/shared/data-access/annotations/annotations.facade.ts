import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AnnotationModel } from './models/annotation.model';
import { AnnotationsResponseModel } from './models/annotations-response.model';
import { AnnotationsState } from './state/annotations.state';

@Injectable({ providedIn: 'root' })
export class AnnotationsFacade {
  constructor(private _state: AnnotationsState) {}

  getAnnotationById$(annotationId: string) {
    return this._state.getAnnotationById$(annotationId);
  }
  getAnnotationsBySongId$(songId: string) {
    return this._state.getAnnotationsBySongId$(songId);
  }
  getCreatedAnnotiationId(annotation: AnnotationsResponseModel) {
    return this._state.getCreatedEmptyAnnotiationId(annotation);
  }
}
