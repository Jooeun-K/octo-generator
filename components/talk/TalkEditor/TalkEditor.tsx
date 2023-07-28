import ContentForm from './ContentForm/ContentForm'
import FileForm from './FileForm/FileForm'
import InfoForm from './InfoForm/InfoForm'
import { StyledWrapper } from './TalkEditor.styles'

const TalkEditor = () => {
  return (
    <StyledWrapper>
      <InfoForm />
      <ContentForm />
      {/* <FileForm /> */}
    </StyledWrapper>
  )
}

export default TalkEditor
