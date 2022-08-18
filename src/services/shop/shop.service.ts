import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
import { Item } from 'src/models/shop.model';
@Injectable()
export class ShopService {
  db: admin.firestore.Firestore;
  constructor() {
    this.db = firestore();
  }

  async addItem(item: Item) {
    if (item.id == undefined) {
      item.id = Date.now().toString();
    }
    await this.db.collection('shop').doc(item.id).set(item);
  }

  async getItemById(id: string) {
    let item = await this.db.collection('shop').doc(id).get();
    return item.data();
  }
  async getItemByName(name: string) {
    let items = await this.db
      .collection('shop')
      .where('name', '==', name)
      .get();
    return items.docs.map((doc) => doc.data());
  }
  async getItemByDescription(description: string) {
    let item = await this.db
      .collection('shop')
      .where('description', '==', description)
      .get();
    return item.docs.map((doc) => doc.data());
  }
  async getAllItems() {
    let items = await this.db.collection('shop').get();
    return items.docs.map((doc) => doc.data());
  }

  async updateItem(item: Item, id: string) {
    await this.db.collection('shop').doc(id).set(item);
  }

  async deleteItems(id: string) {
    await this.db.collection('shop').doc(id).delete();
  }
}