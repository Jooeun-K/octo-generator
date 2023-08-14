import { useEffect, useState } from 'react'
import { Container, ContentHead } from './ContentForm.styles'
import { getTalkInfo } from '@/utils/talkIDB.get'
import { TalkInfo } from '@/types/talk.type'
import useGetTalkInfo from '@/hooks/useGetTalkInfo'

const ContentForm = () => {
  return (
    <Container>
      <ContentHead>대화 내용 추가 및 편집</ContentHead>
    </Container>
  )
}

export default ContentForm
