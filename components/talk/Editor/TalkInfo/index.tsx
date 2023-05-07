import { ChangeEvent, useEffect, useState } from "react";

// IDB reference:
// https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-IndexedDB-%EC%8B%A4%EC%A0%84-%EC%82%AC%EC%9A%A9%EB%B2%95-idb

// localStorage 활용해서 선 구현

type UserType = {
  uid: string;
  name: string;
  profile?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

const initialUser: UserType = {
  uid: "",
  name: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

const TalkInfo = () => {
  const [newUser, setNewUser] = useState<UserType>(initialUser);
  const [talkUsers, setTalkUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const talkUsers = localStorage.getItem("TALK_USER");
    setTalkUsers(JSON.parse(talkUsers || "[]"));
  }, []);

  const onChangeInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.id} : ${e.target.value}`);
  };

  const onChangeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });
  };

  const onAddTalkUser = () => {
    if (!newUser.name) return alert("톡방 멤버 이름을 입력해주세요.");
    const prevUserStr = localStorage.getItem("TALK_USER");
    const prevUser = prevUserStr ? JSON.parse(prevUserStr) : [];
    const totalUser = [
      ...prevUser,
      { ...newUser, uid: self.crypto.randomUUID() },
    ];
    setTalkUsers(totalUser);
    localStorage.setItem("TALK_USER", JSON.stringify(totalUser));
  };

  const onDeleteTalkUser = (uid: string) => {
    const prevUserStr = localStorage.getItem("TALK_USER");
    const prevUser = prevUserStr ? JSON.parse(prevUserStr) : [];
    const resultUser = prevUser.filter((user: UserType) => user.uid !== uid);
    setTalkUsers(resultUser);
    localStorage.setItem("TALK_USER", JSON.stringify(resultUser));
  };

  return (
    <div>
      <h2>톡방 정보 입력</h2>
      <div>
        <div>
          <label htmlFor="talk_title">톡방 이름</label>
          <input
            type="text"
            id="talk_title"
            placeholder="톡방 이름을 입력해주세요"
            onChange={onChangeInfoInput}
          />
        </div>
        <div>
          <label htmlFor="talk_title">톡방 멤버</label>
          <button onClick={onAddTalkUser}>톡방 멤버 추가</button>
          <input
            type="text"
            id="name"
            placeholder="톡방 멤버 이름을 입력해주세요"
            onChange={onChangeUserInput}
          />
        </div>
        <div>
          {talkUsers.map((user) => (
            <div key={user.uid}>
              <span>{user.name}</span>
              <button onClick={() => onDeleteTalkUser(user.uid)}>X</button>
            </div>
          ))}
          {talkUsers.length === 0 && <span>톡방 멤버가 없습니다.</span>}
        </div>
      </div>
    </div>
  );
};

export default TalkInfo;
