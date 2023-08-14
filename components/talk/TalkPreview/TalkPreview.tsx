import { toPng } from 'html-to-image'
import { useCallback, useContext, useEffect, useRef } from 'react'
import styles from './style.module.css'
import { ButtonBox, StyledPreview, StyledWrapper } from './TalkPreview.styles'
import Button from '@/components/common/button/Button'
import useGetTalkInfo from '@/hooks/useGetTalkInfo'
import { TalkContext, TalkContextType } from '@/pages/talk'

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
  // const { talkInfo, fetchTalkInfo } = useGetTalkInfo()
  const { talkUsers, talkInfo, fetchTalkInfo } = useContext(TalkContext)

  useEffect(() => {
    fetchTalkInfo()
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
        <p>title: {talkInfo?.title}</p>
        <p>time: {talkInfo?.time}</p>
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
