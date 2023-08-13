import { openDB } from 'idb'

export const openUserDb = async () => {
  const db = await openDB('talk_users', undefined, {
    async upgrade(db, oldVersion, newVersion, transaction, event) {
      const store = db.createObjectStore('users', {
        keyPath: 'index',
        autoIncrement: true,
      })
      store.createIndex('userId', 'userId')
    },
  })
  return db
}
