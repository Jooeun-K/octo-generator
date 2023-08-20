import { TalkChat } from '@/types/talk.type'
import { ContentBox, Item } from './ChatItem.styles'
import Button from '@/components/common/Button/Button'
import { deleteChat } from '@/utils/talkIDB.post'

interface ChatItemProps {
  talkChat: TalkChat
  onClickDelete: (chatId: string) => void
}

const ChatItem = ({ talkChat, onClickDelete }: ChatItemProps) => {
  return (
    <Item>
      <ContentBox>
        <span>{talkChat.user.name} : </span>
        <span>{talkChat.content.text}</span>
      </ContentBox>
      <Button buttonType="PRIMARY_OUTLINED" buttonSize="SMALL" onClick={() => onClickDelete(talkChat.chatId)}>
        삭제
      </Button>
    </Item>
  )
}

export default ChatItem
