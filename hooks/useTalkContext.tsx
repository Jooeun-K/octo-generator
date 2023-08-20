import { TalkChat, TalkInfo, TalkUser } from '@/types/talk.type'
import { createContext } from 'react'

export type TalkContextType = {
  talkUsers: TalkUser[]
  talkInfo: TalkInfo
  talkChatList: TalkChat[]
  fetchAllTalkUser: () => void
  fetchTalkInfo: () => void
  fetchTalkChatList: () => void
}

const initialTalkContext: TalkContextType = {
  talkUsers: [],
  talkInfo: {
    backgroundImg: null,
    title: '',
    time: '',
  },
  talkChatList: [],
  fetchAllTalkUser: () => {},
  fetchTalkInfo: () => {},
  fetchTalkChatList: () => {},
}

export const TalkContext = createContext<TalkContextType>(initialTalkContext)

const useTalkContext = () => {
  return TalkContext
}

export default useTalkContext
