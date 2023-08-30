import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { Container, ContentHead } from './ChatForm.styles'
import { getTalkUser } from '@/utils/talkIDB.get'
import { TalkChatContent, TalkUser } from '@/types/talk.type'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { TalkContext } from '@/hooks/useTalkContext'
import { createNewChat, deleteChat } from '@/utils/talkIDB.post'
import ChatItem from '../ChatItem/ChatItem'

const ContentForm = () => {
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const userSelectRef = useRef<HTMLSelectElement>(null)
  const { talkUsers, talkChatList, fetchTalkChatList } = useContext(TalkContext)

  useEffect(() => {
    fetchTalkChatList()
  }, [fetchTalkChatList])

  const onSubmitContent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const text = contentRef.current?.value
    const userId = userSelectRef.current?.value
    const user = await getTalkUser(userId || '')
    console.log('user: ', user)

    if (!user || !text) return
    await createNewChat(initCreateNewChat(text, user))

    contentRef.current.value = ''
    fetchTalkChatList()
  }

  const onClickDelete = async (chatId: string) => {
    const check = confirm('정말로 해당 채팅을 삭제하시겠습니까?')
    if (check) {
      await deleteChat(chatId)
      fetchTalkChatList()
    }
  }

  return (
    <Container>
      <ContentHead>대화 내용 추가 및 편집</ContentHead>
      <form onSubmit={onSubmitContent}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <select style={{ padding: 10 }} ref={userSelectRef}>
            {talkUsers.map((el) => (
              <option value={el.userId} key={el.userId}>
                {el.name}
              </option>
            ))}
          </select>
          <textarea id="content" placeholder="대화 내용" ref={contentRef} style={{ resize: 'none' }} />
          <Button type="submit" buttonType="PRIMARY_FILLED" buttonSize="SMALL">
            등록
          </Button>
        </div>
      </form>
      <div>
        {talkChatList.map((el) => (
          <ChatItem key={el.chatId} talkChat={el} onClickDelete={onClickDelete} />
        ))}
      </div>
    </Container>
  )
}

export default ContentForm

const initialContentValue: TalkChatContent = {
  contentType: 'TEXT',
  text: '',
  image: '',
  unreadUsersCount: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
}

const initCreateNewChat = (text: string, user: TalkUser) => {
  const chatId = crypto.randomUUID()
  const newChat = {
    chatId,
    user,
    content: {
      ...initialContentValue,
      text: text,
    },
  }
  return newChat
}
