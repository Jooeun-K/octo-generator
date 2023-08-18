import { FormEvent, useEffect, useRef, useState } from 'react'
import { Container, ContentHead } from './ContentForm.styles'
import { getTalkInfo } from '@/utils/talkIDB.get'
import { TalkInfo } from '@/types/talk.type'
import useGetTalkInfo from '@/hooks/useGetTalkInfo'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import useGetAllTalkUser from '@/hooks/useGetAllTalkUser'

const ContentForm = () => {
  const contentInputRef = useRef<HTMLInputElement>(null)
  const userSelectRef = useRef<HTMLSelectElement>(null)
  const { talkUsers, fetchAllTalkUser } = useGetAllTalkUser()

  useEffect(() => {
    fetchAllTalkUser()
  }, [])

  const onSubmitContent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = contentInputRef.current?.value
    const user = userSelectRef.current?.value
    alert(`${user} : ${content}`)
  }

  return (
    <Container>
      <ContentHead>대화 내용 추가 및 편집</ContentHead>
      <form onSubmit={onSubmitContent}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <select style={{ padding: 10 }} ref={userSelectRef}>
            {talkUsers.map((el) => (
              <option value={el.name} key={el.userId}>
                {el.name}
              </option>
            ))}
          </select>
          <Input
            type="text"
            id="content"
            placeholder="대화 내용"
            inputType="PRIMARY"
            label="대화 내용"
            ref={contentInputRef}
          />
          <Button type="submit" buttonType="PRIMARY_OUTLINED" buttonSize="SMALL">
            등록
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default ContentForm
