import { TalkChat } from '@/types/talk.type'
import { getTalkChat, getTalkChatList } from '@/utils/talkIDB.get'
import { useCallback, useState } from 'react'

const useGetTalkChatList = () => {
  const [talkChatList, setTalkChatList] = useState<TalkChat[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchTalkChatList = useCallback(async () => {
    setIsLoading(true)
    const talkChatList = await getTalkChatList()
    if (!talkChatList) {
      console.error("Can't get talkChatList")
      setIsLoading(false)
      return
    }
    setTalkChatList(talkChatList)
    setIsLoading(false)
  }, [])

  return {
    talkChatList,
    fetchTalkChatList,
    isLoading,
  }
}

export default useGetTalkChatList
