export type TalkUser = {
  userId: string
  name: string
  profileImg: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type TalkInfo = {
  talkId: string
  name: string
  backgroundImg: string
  time: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type TalkChatContentType = 'TEXT' | 'IMAGE'

export type TalkChatContent = {
  contentType: TalkChatContentType
  text: string | null
  image: string | null
  unreadUsers: number // 읽지 않은 유저 수
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type TalkChat = {
  user: TalkUser
  content: TalkChatContent
}