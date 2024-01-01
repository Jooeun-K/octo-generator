import { TalkChat, TalkInfo, TalkUser } from '@/types/talk.type'
import { createContext } from 'react'

type MyInfoType = {
  id: string
  name: string
}

export type TalkContextType = {
  talkUsers: TalkUser[]
  talkInfo: TalkInfo
  talkChatList: TalkChat[]
  myInfo: MyInfoType
  fetchTalkUserList: () => void
  fetchTalkInfo: () => void
  fetchTalkChatList: () => void
  changeMyInfo: (info: MyInfoType) => void
}

const initialTalkContext: TalkContextType = {
  talkUsers: [],
  talkInfo: {
    backgroundImg: null,
    title: '',
    time: '',
  },
  talkChatList: [],
  myInfo: { id: '', name: '' },
  fetchTalkUserList: () => {},
  fetchTalkInfo: () => {},
  fetchTalkChatList: () => {},
  changeMyInfo: () => {},
}

export const TalkContext = createContext<TalkContextType>(initialTalkContext)

const useTalkContext = () => {
  return TalkContext
}

export default useTalkContext
