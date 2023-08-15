import { TalkInfo, TalkUser } from '@/types/talk.type'
import { createContext } from 'react'

export type TalkContextType = {
  talkUsers: TalkUser[]
  talkInfo: TalkInfo
  fetchAllTalkUser: () => void
  fetchTalkInfo: () => void
}

const initialTalkContext: TalkContextType = {
  talkUsers: [],
  talkInfo: {
    backgroundImg: null,
    title: '',
    time: '',
  },
  fetchAllTalkUser: () => {},
  fetchTalkInfo: () => {},
}

export const TalkContext = createContext<TalkContextType>(initialTalkContext)

const useTalkContext = () => {
  return TalkContext
}

export default useTalkContext
