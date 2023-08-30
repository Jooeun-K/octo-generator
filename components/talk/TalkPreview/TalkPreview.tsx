import { toPng } from 'html-to-image'
import { useCallback, useContext, useEffect, useRef } from 'react'
import { ButtonBox, PreviewBody, PreviewHead, PreviewInput, StyledPreview, StyledWrapper } from './TalkPreview.styles'
import { TalkContext } from '@/hooks/useTalkContext'
import Button from '@/components/common/Button/Button'

const generateDateTimeString = (date: Date) => {
  const dateString = new Intl.DateTimeFormat('ko', {
    dateStyle: 'medium',
  })
    .format(date)
    .replaceAll('. ', '-')
    .replace('.', '_')
  const timeString = new Intl.DateTimeFormat('en', {
    timeStyle: 'medium',
  })
    .format(date)
    .replaceAll(':', '-')
    .replace(' ', '-')
  return dateString + timeString
}

const TalkPreview = () => {
  const previewRef = useRef<HTMLDivElement>(null)
  const { talkInfo, talkChatList, talkUsers, fetchTalkInfo, fetchTalkChatList } = useContext(TalkContext)

  useEffect(() => {
    fetchTalkInfo()
    fetchTalkChatList()
  }, [])

  const onClickExportImage = useCallback(() => {
    if (!previewRef.current) return

    toPng(previewRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const date = generateDateTimeString(new Date())
        const link = document.createElement('a')
        link.download = `[${date}] octo-talk.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [previewRef])

  return (
    <StyledWrapper>
      <StyledPreview ref={previewRef}>
        <PreviewHead>
          <div className="leftBox">leftBox</div>
          <h2 className="titleBox">
            <span className="title">{talkInfo.title}</span>
            <span className="member">{talkUsers.length || ''}</span>
          </h2>
          <div className="rightBox">rightBox</div>
        </PreviewHead>
        <PreviewBody>
          {talkChatList.length !== 0 ? (
            talkChatList.map((chat) => (
              <div key={chat.chatId}>
                {chat.user.name} : {chat.content.text}
              </div>
            ))
          ) : (
            <div>대화 내용이 존재하지 않습니다.</div>
          )}
        </PreviewBody>
        <PreviewInput>입력란</PreviewInput>
      </StyledPreview>
      <ButtonBox>
        <Button type="button" onClick={onClickExportImage} buttonType="PRIMARY_FILLED">
          이미지 다운로드
        </Button>
      </ButtonBox>
    </StyledWrapper>
  )
}

export default TalkPreview
