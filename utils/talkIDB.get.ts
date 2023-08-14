import { TalkInfo } from '@/types/talk.type'
import { TALK_INFO_KEY, openInfoDb, openUserDb } from './talkIDB.core'

export const getTalkUser = async (userId: string) => {
  const db = await openUserDb()
  const user = await db.getFromIndex('users', 'userId', userId)
  return user
}

export const getAllTalkUser = async () => {
  const db = await openUserDb()
  const users = await db.getAll('users')
  return users
}

export const getTalkInfo = async () => {
  const db = await openInfoDb()
  const info = await db.get('info', TALK_INFO_KEY)

  if (!info) {
    alert('톡방 정보를 불러올 수 없습니다.')
    return
  }

  return info
}
