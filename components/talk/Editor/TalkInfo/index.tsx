import { ChangeEvent } from "react";

// IDB reference:
// https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-IndexedDB-%EC%8B%A4%EC%A0%84-%EC%82%AC%EC%9A%A9%EB%B2%95-idb

const TalkInfo = () => {
  const onChangeInfoInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.id} : ${e.target.value}`);
  };
  return (
    <div>
      <h2>톡방 정보 입력</h2>
      <div>
        <p>
          <label htmlFor="talk_title">톡방 이름</label>
          <input
            type="text"
            id="talk_title"
            placeholder="톡방 이름을 입력해주세요"
            onChange={onChangeInfoInput}
          />
        </p>
        <p>
          <label htmlFor="talk_title">톡방 멤버</label>
          <input
            type="text"
            id="talk_member"
            placeholder="톡방 멤버를 입력해주세요"
            onChange={onChangeInfoInput}
          />
        </p>
      </div>
    </div>
  );
};

export default TalkInfo;
