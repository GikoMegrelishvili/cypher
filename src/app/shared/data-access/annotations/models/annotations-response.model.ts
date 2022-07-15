import { AnnotationModel } from './annotation.model';

export interface AnnotationsResponseModel {
  id?: string;
  songId?: string;
  annotatedText: string;
  annotations: AnnotationModel[];
}
