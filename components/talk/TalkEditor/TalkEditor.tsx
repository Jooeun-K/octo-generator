import TalkContent from "./ContentForm/ContentForm";
import FileForm from "./FileForm/FileForm";
import TalkInfo from "./InfoForm/InfoForm";
import { StyledWrapper } from "./TalkEditor.styles";

const TalkEditor = () => {
  return (
    <StyledWrapper>
      <TalkInfo />
      <TalkContent />
      <FileForm />
    </StyledWrapper>
  );
};

export default TalkEditor;
