import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item[]>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title','asc'));

    this.items = this.itemsCollection
                  .snapshotChanges().pipe(
                    map(actions => actions.map(a=> {
                      const data = a.payload.doc.data() as Item;
                      data.id = a.payload.doc.id;
                      return data;
                    }))
                  )
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
    // If there is a red line under item, I don't know why.
    // But the program seems to be working fine
  }
}