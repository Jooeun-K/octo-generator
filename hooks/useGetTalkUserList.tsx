import { TalkUser } from '@/types/talk.type'
import { getTalkUserList } from '@/utils/talkIDB.get'
import { useCallback, useState } from 'react'

const useGetTalkUserList = () => {
  const [talkUsers, setTalkUsers] = useState<TalkUser[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchTalkUserList = useCallback(async () => {
    setIsLoading(true)
    const talkUsers = await getTalkUserList()
    setTalkUsers(talkUsers)
    setIsLoading(false)
  }, [])

  return {
    talkUsers,
    fetchTalkUserList,
    isLoading,
  }
}

export default useGetTalkUserList
