import TalkEditor from "@/components/talk/TalkEditor/TalkEditor";
import TalkPreview from "@/components/talk/TalkPreview/TalkPreview";
import { StyledContainer } from "./styles";

const Talk = () => {
  return (
    <StyledContainer>
      <TalkPreview />
      <TalkEditor />
    </StyledContainer>
  );
};

export default Talk;
