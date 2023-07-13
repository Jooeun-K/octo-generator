import { openDB } from 'idb';

export const uploadImageToArticle = async (file: File, data?: Object) => {
  const db = await openDB("my_articles", undefined, {
      async upgrade(db, oldVersion, newVersion, transaction, event) {
          const store = db.createObjectStore('articles', {
              keyPath: 'id',
              autoIncrement: true,
          });
          store.createIndex('uid', 'uid');
      },
  })

  // Add an article:
  await db.add('articles', {
      date: new Date(),
      uid: crypto.randomUUID(),
      file: file,
      ...data
  });
}