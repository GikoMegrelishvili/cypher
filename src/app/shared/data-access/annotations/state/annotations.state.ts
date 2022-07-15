import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AnnotationModel } from '../models/annotation.model';
import { AnnotationsResponseModel } from '../models/annotations-response.model';

@Injectable({ providedIn: 'root' })
export class AnnotationsState {
  constructor(private _fireStore: AngularFirestore) {}

  getCreatedEmptyAnnotiationId(annotation: AnnotationsResponseModel) {
    return this._fireStore
      .collection('annotations')
      .add(annotation)
      .then((res) => {
        return res.id;
      });
  }
  getAnnotationsBySongId$(songId: string) {
    return this._fireStore
      .collection<AnnotationModel>(`annotations`, (ref) =>
        ref.where('songId', '==', songId)
      )
      .valueChanges({ idField: 'id' });
  }

  getAnnotationById$(id: string) {
    return this._fireStore
      .doc<AnnotationModel>(`annotations/${id}`)
      .valueChanges({ idField: 'id' });
  }
  updateAnnotation(id: string, annotation: AnnotationModel) {
    this._fireStore.doc(`annotations/${id}`).update(annotation);
  }
}
