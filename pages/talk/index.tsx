import TalkEditor from '@/components/talk/TalkEditor/TalkEditor'
import TalkPreview from '@/components/talk/TalkPreview/TalkPreview'
import useGetAllTalkUser from '@/hooks/useGetAllTalkUser'
import useGetTalkInfo from '@/hooks/useGetTalkInfo'
import { styled } from '@/styles/stitches.config'
import { TalkInfo, TalkUser } from '@/types/talk.type'
import { createContext } from 'react'

const StyledContainer = styled('div', {
  width: '75vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  paddingTop: 30,
  margin: '0 auto',
})

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

const Talk = () => {
  const { talkUsers, fetchAllTalkUser } = useGetAllTalkUser()
  const { talkInfo, fetchTalkInfo } = useGetTalkInfo()

  return (
    <TalkContext.Provider value={{ talkUsers, talkInfo, fetchAllTalkUser, fetchTalkInfo }}>
      <StyledContainer>
        <TalkPreview />
        <TalkEditor />
      </StyledContainer>
    </TalkContext.Provider>
  )
}

export default Talk
