import ContentForm from './ChatForm/ChatForm'
import InfoForm from './InfoForm/InfoForm'
import { StyledWrapper } from './TalkEditor.styles'

const TalkEditor = () => {
  return (
    <StyledWrapper>
      <InfoForm />
      <ContentForm />
    </StyledWrapper>
  )
}

export default TalkEditor
