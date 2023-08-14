import { TalkUser } from '@/types/talk.type'
import { getAllTalkUser, getTalkUser } from '@/utils/talkIDB.get'
import { useCallback, useState } from 'react'

const useGetAllTalkUser = () => {
  const [talkUsers, setTalkUsers] = useState<TalkUser[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchAllTalkUser = useCallback(async () => {
    setIsLoading(true)
    const talkUsers = await getAllTalkUser()
    setTalkUsers(talkUsers)
    setIsLoading(false)
  }, [])

  return {
    talkUsers,
    fetchAllTalkUser,
    isLoading,
  }
}

export default useGetAllTalkUser
