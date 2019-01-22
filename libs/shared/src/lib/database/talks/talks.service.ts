import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Talk, talksCollectionId } from './talks.metadata';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TalksService {
  all$: Observable<Talk[]> = this.collection()
    .snapshotChanges()
    .pipe(
      map((list) => list.map((action) => action.payload.doc.data())),
      shareReplay(1),
    );

  constructor(private afs: AngularFirestore) {}

  private collection(queryFn?: QueryFn) {
    return this.afs.collection<Talk>(
      talksCollectionId,
      queryFn,
    );
  }
}
