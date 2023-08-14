import { TalkInfo, TalkUser } from '@/types/talk.type'
import { DBSchema, openDB } from 'idb'

interface TalkDb extends DBSchema {
  users: {
    key: number
    value: TalkUser
    indexes: { userId: string }
  }
  info: {
    key: number
    value: TalkInfo
  }
}

interface InfoDb extends DBSchema {
  info: {
    key: number
    value: TalkInfo
  }
}

export const openUserDb = async () => {
  return await openDB<TalkDb>('octo-talk', undefined, {
    async upgrade(db, oldVersion, newVersion, transaction, event) {
      const store = db.createObjectStore('users', {
        keyPath: 'index',
        autoIncrement: true,
      })
      store.createIndex('userId', 'userId')
    },
  })
}

export const openInfoDb = async () => {
  return await openDB<TalkDb>('octo-talk', undefined, {
    async upgrade(db, oldVersion, newVersion, transaction, event) {
      db.createObjectStore('info')
    },
  })
}
