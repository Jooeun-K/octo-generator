import TalkEditor from '@/components/talk/TalkEditor/TalkEditor'
import TalkPreview from '@/components/talk/TalkPreview/TalkPreview'
import useGetAllTalkUser from '@/hooks/useGetAllTalkUser'
import useGetTalkChatList from '@/hooks/useGetTalkChatList'
import useGetTalkInfo from '@/hooks/useGetTalkInfo'
import useTalkContext from '@/hooks/useTalkContext'
import { styled } from '@/styles/stitches.config'

const StyledContainer = styled('div', {
  width: '95%',
  maxWidth: 800,
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  paddingTop: 30,
  margin: '0 auto',
})

const Talk = () => {
  const { talkUsers, fetchAllTalkUser } = useGetAllTalkUser()
  const { talkInfo, fetchTalkInfo } = useGetTalkInfo()
  const { talkChatList, fetchTalkChatList } = useGetTalkChatList()

  const TalkContext = useTalkContext()

  return (
    <TalkContext.Provider
      value={{ talkUsers, talkInfo, talkChatList, fetchAllTalkUser, fetchTalkInfo, fetchTalkChatList }}
    >
      <StyledContainer>
        <TalkPreview />
        <TalkEditor />
      </StyledContainer>
    </TalkContext.Provider>
  )
}

export default Talk
