import Input from '@/components/common/Input/Input'
import Button from '@/components/common/button/Button'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { InfoHead, NoUser, TitleRow, UserList, UserListItem, UsersRow } from './InfoForm.styles'
import { TalkUser } from '@/types/talk.type'
import { getAllTalkUser } from '@/utils/talkIDB.get'
import { createTalkUser, deleteTalkUser } from '@/utils/talkIDB.post'

// IDB reference:
// https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-IndexedDB-%EC%8B%A4%EC%A0%84-%EC%82%AC%EC%9A%A9%EB%B2%95-idb

type UserDocument = {
  uid: string
  name: string
  profile?: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

const initialUser: TalkUser = {
  userId: '',
  name: '',
  profileImg: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
}

const InfoForm = () => {
  const [newUser, setNewUser] = useState<TalkUser>(initialUser)
  const [talkUsers, setTalkUsers] = useState<TalkUser[]>([])
  const nameInputRef = useRef<HTMLInputElement>(null)

  const fetchAllUsers = async () => {
    const talkUsers = await getAllTalkUser()
    setTalkUsers(talkUsers)
    return talkUsers
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  const onChangeInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.id} : ${e.target.value}`)
  }

  const handleAddTalkUser = async () => {
    const name = nameInputRef.current?.value
    if (!name) return alert('톡방 멤버 이름을 입력해주세요.')

    // IDB를 사용하는 경우에 대한 로직
    const talkUserInfo: TalkUser = {
      name,
      userId: crypto.randomUUID(),
      profileImg: null,
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: new Date(),
    }

    await createTalkUser(talkUserInfo)
    fetchAllUsers()

    nameInputRef.current.value = ''
  }

  const handleDeleteTalkUser = async (uid: string) => {
    await deleteTalkUser(uid)
    fetchAllUsers()
  }

  const handleSubmitTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('title!!')
  }

  const handleSubmitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddTalkUser()
  }

  return (
    <div>
      <InfoHead>톡방 정보 입력</InfoHead>
      <div>
        <form onSubmit={handleSubmitTitle}>
          <TitleRow>
            <Input
              type="text"
              id="title"
              placeholder="톡방 이름을 입력해주세요"
              onChange={onChangeInfoInput}
              inputType="PRIMARY"
              label="톡방 이름"
            />
            <Button type="submit" buttonType="PRIMARY_FILLED" buttonSize="SMALL" css={{ minWidth: '90px' }}>
              입력하기
            </Button>
          </TitleRow>
        </form>
        <form onSubmit={handleSubmitName}>
          <UsersRow>
            <Input
              type="text"
              id="name"
              placeholder="톡방 멤버 이름을 입력해주세요"
              // onChange={onChangeUserInput}
              inputType="PRIMARY"
              label="톡방 멤버"
              ref={nameInputRef}
            />
            <Button type="submit" buttonType="PRIMARY_FILLED" buttonSize="SMALL" css={{ minWidth: '90px' }}>
              멤버 추가
            </Button>
          </UsersRow>
        </form>
        <UserList>
          {talkUsers.map((user) => (
            <UserListItem key={user.userId}>
              <button onClick={() => handleDeleteTalkUser(user.userId)}>
                <span className="text">{user.name}</span>
                <span className="delete">X</span>
              </button>
            </UserListItem>
          ))}
          {talkUsers.length === 0 && <NoUser>톡방 멤버가 없습니다.</NoUser>}
        </UserList>
      </div>
    </div>
  )
}

export default InfoForm
