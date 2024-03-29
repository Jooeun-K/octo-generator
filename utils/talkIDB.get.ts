import { TalkInfo } from '@/types/talk.type'
import { TALK_INFO_KEY, openChatDb, openInfoDb, openUserDb } from './talkIDB.core'

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
    return
  }

  return info
}

export const getTalkChat = async (chatId: string) => {
  const db = await openChatDb()
  const chat = await db.getFromIndex('chat', 'chatId', chatId)
  return chat
}

export const getTalkChatList = async () => {
  const db = await openChatDb()
  const chats = await db.getAll('chat')
  return chats
}
