import { TalkUser } from '@/types/talk.type'
import { openUserDb } from './talkIDB.core'

export const uploadUserImage = async (file: File, userId: string) => {
  const db = await openUserDb()
  const targetUser = await db.get('users', userId)
  const newUser = {
    ...targetUser,
    profileImg: file,
  }
  await db.put('users', newUser, userId)
}

export const createTalkUser = async (userInfoObj: TalkUser) => {
  const db = await openUserDb()
  await db.add('users', userInfoObj)
}

export const deleteTalkUser = async (userId: string | number) => {
  const db = await openUserDb()
  const result = await db.getFromIndex('users', 'userId', userId)
  try {
    await db.delete('users', result.index)
  } catch (err) {
    console.error(err)
  }
}
