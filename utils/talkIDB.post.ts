import { TalkInfo, TalkUser } from '@/types/talk.type'
import { openInfoDb, openUserDb } from './talkIDB.core'

export const uploadTalkUserImage = async (file: File, userId: string) => {
  const db = await openUserDb()
  const targetUser = await db.getFromIndex('users', 'userId', userId)
  if (!targetUser) {
    console.warn('프로필을 업로드할 유저 정보를 조회할 수 없습니다.')
    return
  }

  const newUser: TalkUser = {
    ...targetUser,
    profileImg: file,
  }
  await db.put('users', newUser)
}

export const createTalkUser = async (userInfoObj: TalkUser) => {
  const db = await openUserDb()
  await db.add('users', userInfoObj)
}

export const deleteTalkUser = async (userId: string) => {
  const db = await openUserDb()
  const key = await db.getKeyFromIndex('users', 'userId', userId)

  if (!key) {
    console.warn('삭제할 유저가 존재하지 않습니다.')
    return
  }

  try {
    await db.delete('users', key)
  } catch (err) {
    console.error(err)
  }
}

export const updateTalkInfo = async (talkInfoObj: TalkInfo) => {
  const db = await openInfoDb()
  try {
    await db.put('info', talkInfoObj)
  } catch (err) {
    console.log(err)
  }
}
