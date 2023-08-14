import { TalkInfo, TalkUser } from '@/types/talk.type'
import { DBSchema, openDB } from 'idb'

interface TalkUserDb extends DBSchema {
  users: {
    key: number
    value: TalkUser
    indexes: { userId: string }
  }
}

interface TalkInfoDb extends DBSchema {
  info: {
    key: string
    value: TalkInfo
  }
}

export const openUserDb = async () => {
  return await openDB<TalkUserDb>('octo-talk-users-database', undefined, {
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
  return await openDB<TalkInfoDb>('octo-talk-info-database', undefined, {
    upgrade(db, oldVersion, newVersion, transaction, event) {
      db.createObjectStore('info')
    },
  })
}

export const TALK_INFO_KEY = 'DEFAULT_TALK_INFO_KEY'

export const initTalkInfo = (key: string, value: string | File) => {
  debugger
  const initialInfo: TalkInfo = {
    title: '',
    backgroundImg: null,
    time: '',
    [key]: value,
  }
  return initialInfo
}
