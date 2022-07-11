import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AnnotationModel } from '../models/annotation.model';

@Injectable({ providedIn: 'root' })
export class AnnotationsState {
  private _annotations$ = new BehaviorSubject<AnnotationModel[]>([]);

  constructor(private _fireStore: AngularFirestore) {}

  public getAllArtists$(): Observable<AnnotationModel[]> {
    return this._annotations$.asObservable();
  }
  getCreatedEmptyAnnotiationId(annotation: AnnotationModel): Promise<string> {
    return this._fireStore
      .collection('annotations')
      .add(annotation)
      .then((res) => {
        return res.id;
      });
  }
  public getAnnotation$(id: string) {
    return this._fireStore
      .doc<AnnotationModel>(`annotations/${id}`)
      .valueChanges({ idField: 'id' });
  }

  public addAnotation(annotation: AnnotationModel): void {
    this._fireStore
      .collection('annotations')
      .add(annotation)
      .then((res) => {
        console.log(res.id);
      });
  }

  public updateAnnotation(id: string, annotation: AnnotationModel): void {
    this._fireStore.doc(`annotations/${id}`).update(annotation);
  }
}
