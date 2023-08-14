import { openUserDb } from './talkIDB.core'

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
