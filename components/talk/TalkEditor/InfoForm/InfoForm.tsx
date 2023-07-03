import Input from "@/components/common/Input/Input";
import Button from "@/components/common/button/Button";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import {
  InfoHead,
  NoUser,
  TitleRow,
  UserList,
  UserListItem,
  UsersRow,
} from "./InfoForm.styles";

// IDB reference:
// https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-IndexedDB-%EC%8B%A4%EC%A0%84-%EC%82%AC%EC%9A%A9%EB%B2%95-idb

// localStorage 활용해서 선 구현

type UserDocument = {
  uid: string;
  name: string;
  profile?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

const initialUser: UserDocument = {
  uid: "",
  name: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const TalkInfo = () => {
  const [newUser, setNewUser] = useState<UserDocument>(initialUser);
  const [talkUsers, setTalkUsers] = useState<UserDocument[]>([]);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const talkUsers = localStorage.getItem("TALK_USER");
    setTalkUsers(JSON.parse(talkUsers || "[]"));
  }, []);

  const onChangeInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.id} : ${e.target.value}`);
  };

  const onChangeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const addTalkUser = () => {
    const name = nameInputRef.current?.value;
    if (!name) return alert("톡방 멤버 이름을 입력해주세요.");

    const prevUserStr = localStorage.getItem("TALK_USER");
    const prevUser = prevUserStr ? JSON.parse(prevUserStr) : [];
    const newUser = {
      ...initialUser,
      name,
      uid: self.crypto.randomUUID(),
    };
    const totalUser = [...prevUser, newUser];

    setTalkUsers(totalUser);
    localStorage.setItem("TALK_USER", JSON.stringify(totalUser));

    nameInputRef.current.value = "";
  };

  const onDeleteTalkUser = (uid: string) => {
    const prevUserStr = localStorage.getItem("TALK_USER");
    const prevUser = prevUserStr ? JSON.parse(prevUserStr) : [];
    const resultUser = prevUser.filter((user: UserDocument) => user.uid !== uid);
    setTalkUsers(resultUser);
    localStorage.setItem("TALK_USER", JSON.stringify(resultUser));
  };

  const handleSubmitTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("title!!");
  };

  const handleSubmitName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTalkUser();
  };

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
            <Button
              type="submit"
              buttonType="PRIMARY_FILLED"
              buttonSize="SMALL"
              css={{ minWidth: "90px" }}
            >
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
            <Button
              type="submit"
              buttonType="PRIMARY_FILLED"
              buttonSize="SMALL"
              css={{ minWidth: "90px" }}
            >
              멤버 추가
            </Button>
          </UsersRow>
        </form>
        <UserList>
          {talkUsers.map((user) => (
            <UserListItem key={user.uid}>
              <button onClick={() => onDeleteTalkUser(user.uid)}>
                <span className="text">{user.name}</span>
                <span className="delete">X</span>
              </button>
            </UserListItem>
          ))}
          {talkUsers.length === 0 && <NoUser>톡방 멤버가 없습니다.</NoUser>}
        </UserList>
      </div>
    </div>
  );
};

export default TalkInfo;
