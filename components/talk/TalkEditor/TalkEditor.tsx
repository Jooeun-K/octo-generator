import TalkContent from "./ContentForm/ContentForm";
import TalkInfo from "./InfoForm/InfoForm";
import { StyledWrapper } from "./TalkEditor.styles";

const TalkEditor = () => {
  return (
    <StyledWrapper>
      <TalkInfo />
      <TalkContent />
    </StyledWrapper>
  );
};

export default TalkEditor;
