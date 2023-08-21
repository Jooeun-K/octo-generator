import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { ChangeEvent, FormEvent, MouseEvent, useContext, useEffect, useRef, useState } from 'react'
import {
  DeleteButton,
  InfoHead,
  NoUser,
  ProfileBox,
  ProfileUploadButton,
  TitleRow,
  UserList,
  UserListItem,
  UserName,
  UsersRow,
} from './InfoForm.styles'
import { TalkUser } from '@/types/talk.type'
import { createTalkUser, deleteTalkUser, updateTalkTitle, uploadTalkUserImage } from '@/utils/talkIDB.post'
import { generateImageUrl } from '@/utils/generateImageUrl'
import { TalkContext } from '@/hooks/useTalkContext'

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

const InfoForm = () => {
  const { fetchTalkInfo, talkUsers, fetchTalkUserList } = useContext(TalkContext)
  const [talkTitle, setTalkTitle] = useState('')
  const nameInputRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    fetchTalkUserList()
  }, [])

  const onChangeInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTalkTitle(e.target.value)
  }

  const handleAddTalkUser = async () => {
    const name = nameInputRef.current?.value
    if (!name) return alert('톡방 멤버 이름을 입력해주세요.')
    if (name.length < 2 || name.length > 15) return alert('톡방 멤버 이름은 2~10자로 입력해주세요.')

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
    fetchTalkUserList()

    nameInputRef.current.value = ''
  }

  const handleDeleteTalkUser = async (uid: string) => {
    const check = confirm('정말로 해당 유저를 삭제하시겠습니까?')
    if (check) {
      await deleteTalkUser(uid)
      fetchTalkUserList()
    }
  }

  const handleSubmitTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!talkTitle) return alert('톡방 이름을 입력해주세요.')
    if (talkTitle.length > 10) return alert('톡방 이름은 10자 이내로 입력해주세요.')

    updateTalkTitle(talkTitle)
      .then(() => {
        alert('톡방 이름이 변경되었습니다.')
        fetchTalkInfo()
        setTalkTitle('')
        return
      })
      .catch((err) => console.log(err))
  }

  const handleSubmitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddTalkUser()
  }

  const handleClickProfileButton = (e: MouseEvent<HTMLButtonElement>, idx: number) => {
    e.preventDefault()
    if (!fileRef.current) return
    fileRef.current[idx].click()
  }

  const handleChangeProfileImage = async (e: ChangeEvent<HTMLInputElement>, userId: string) => {
    if (!e.target?.files) return
    const file = e.target.files[0]
    await uploadTalkUserImage(file, userId)
    fetchTalkUserList()
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
              value={talkTitle}
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
              placeholder="톡방에 추가할 유저 이름을 입력해주세요"
              inputType="PRIMARY"
              label="톡방 멤버"
              ref={nameInputRef}
            />
            <Button type="submit" buttonType="PRIMARY_FILLED" buttonSize="SMALL" css={{ minWidth: '90px' }}>
              유저 추가
            </Button>
          </UsersRow>
        </form>
        <UserList>
          {talkUsers.map((user, idx) => (
            <UserListItem key={user.userId}>
              <ProfileBox>
                {user.profileImg ? (
                  <img src={generateImageUrl(user.profileImg)} alt={`${user.name} 프로필`} />
                ) : (
                  <ProfileUploadButton onClick={(e) => handleClickProfileButton(e, idx)} type="button">
                    프로필
                    <br />
                    업로드
                  </ProfileUploadButton>
                )}
              </ProfileBox>
              <UserName>{user.name}</UserName>
              <DeleteButton onClick={() => handleDeleteTalkUser(user.userId)}>삭제</DeleteButton>
              <input
                type="file"
                ref={(el: HTMLInputElement) => (fileRef.current[idx] = el)}
                style={{ display: 'none' }}
                onChange={async (e) => handleChangeProfileImage(e, user.userId)}
              />
            </UserListItem>
          ))}
          {talkUsers.length === 0 && <NoUser>톡방 멤버가 없습니다.</NoUser>}
        </UserList>
      </div>
    </div>
  )
}

export default InfoForm
