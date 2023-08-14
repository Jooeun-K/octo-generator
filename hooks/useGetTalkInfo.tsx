import { TalkInfo } from '@/types/talk.type'
import { getTalkInfo } from '@/utils/talkIDB.get'
import { useCallback, useState } from 'react'

const initialTalkInfo: TalkInfo = {
  backgroundImg: null,
  title: '',
  time: '',
}

const useGetTalkInfo = () => {
  const [talkInfo, setTalkInfo] = useState<TalkInfo>(initialTalkInfo)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchTalkInfo = useCallback(async () => {
    setIsLoading(true)
    const talkInfo = await getTalkInfo()
    if (!talkInfo) {
      console.error("Can't get talkInfo")
      setIsLoading(false)
      return
    }
    setTalkInfo(talkInfo)
    setIsLoading(false)
  }, [])

  return {
    talkInfo,
    fetchTalkInfo,
    isLoading,
  }
}

export default useGetTalkInfo
