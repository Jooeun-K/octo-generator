import TalkEditor from '@/components/talk/TalkEditor/TalkEditor'
import TalkPreview from '@/components/talk/TalkPreview/TalkPreview'
import { styled } from '@/styles/stitches.config'

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

const Talk = () => {
  return (
    <StyledContainer>
      <TalkPreview />
      <TalkEditor />
    </StyledContainer>
  )
}

export default Talk
