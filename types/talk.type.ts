export type TalkUser = {
  userId: string
  name: string
  profileImg: File | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type TalkInfo = {
  title: string
  backgroundImg: File | null
  time: string
}

export type TalkChatContentType = 'TEXT' | 'IMAGE'

export type TalkChatContent = {
  contentType: TalkChatContentType
  text: string | null
  image: string | null
  unreadUsersCount: number // 읽지 않은 유저 수
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type TalkChat = {
  user: TalkUser
  content: TalkChatContent
  chatId: string
}
