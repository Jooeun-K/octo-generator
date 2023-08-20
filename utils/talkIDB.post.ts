import { TalkChat, TalkInfo, TalkUser } from '@/types/talk.type'
import { TALK_INFO_KEY, initTalkInfo, openChatDb, openInfoDb, openUserDb } from './talkIDB.core'

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

export const createNewTalkInfo = async (obj: TalkInfo) => {
  const db = await openInfoDb()
  await db.add('info', obj, TALK_INFO_KEY)
}

export const updateTalkTitle = async (title: string) => {
  const db = await openInfoDb()
  const prevInfo = await db.get('info', TALK_INFO_KEY)

  if (!prevInfo) {
    await createNewTalkInfo(initTalkInfo('title', title))
    return
  }

  const newInfo: TalkInfo = {
    ...prevInfo,
    title,
  }

  try {
    await db.put('info', newInfo, TALK_INFO_KEY)
  } catch (err) {
    console.log(err)
  }
}

export const updateTalkTime = async (time: string) => {
  const db = await openInfoDb()
  const prevInfo = await db.get('info', TALK_INFO_KEY)

  if (!prevInfo) {
    await createNewTalkInfo(initTalkInfo('time', time))
    return
  }

  const newInfo: TalkInfo = {
    ...prevInfo,
    time,
  }

  try {
    await db.put('info', newInfo, TALK_INFO_KEY)
  } catch (err) {
    console.log(err)
  }
}

export const createNewChat = async (chatObj: TalkChat) => {
  const db = await openChatDb()
  await db.add('chat', chatObj)
}

export const deleteChat = async (chatId: string) => {
  const db = await openChatDb()
  const key = await db.getKeyFromIndex('chat', 'chatId', chatId)

  if (!key) {
    console.warn('삭제할 채팅이 존재하지 않습니다.')
    return
  }

  try {
    await db.delete('chat', key)
  } catch (err) {
    console.error(err)
  }
}
