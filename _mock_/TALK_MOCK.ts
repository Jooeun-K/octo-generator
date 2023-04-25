
export const TALK_INFO = {
    talkId: "d1259df9-6991-4e52-b836-e2e9af55f342", // uuid
    title: "우당탕 친구들", // string
    background: "", // string, optional
    time: "", // text? dateTime?
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
}

/**
 * @title 유저 정보
 * @description
 * 톡방에 있는 유저 목록, max 10명
 */
export const TALK_USERS = [
    {
        userId: "0ba5fa92-092f-421a-8bf7-1165f11c4d3d", // uuid
        name: "정쌍복",
        profile: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    },
    {
        userId: "1d577721-1fca-488c-9b6e-c131bba7d44f", // uuid
        name: "아르뭉",
        profile: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    },
    {
        userId: "8b9d2447-593d-43db-89f1-662562e610d8", // uuid
        name: "쑥쑥이",
        profile: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    }
]

export const TALK_CHATS = [
    {
        user: {
            ...TALK_USERS[0],
        },
        content: {
            contentType: "TEXT", // enum 혹은 union으로 관리, TEXT | IMAGE
            text: "채팅방에 입력할 내용입니다.", // optional
            image: null, // optional
            unreadUsers: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        }
    },
    {
        user: {
            ...TALK_USERS[1],
        },
        content: {
            contentType: "TEXT", // enum 혹은 union으로 관리, TEXT | IMAGE
            text: "채팅방에 입력할 내용입니다. 2", // optional
            image: null, // optional
            unreadUsers: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        }
    },
    {
        user: {
            ...TALK_USERS[2],
        },
        content: {
            contentType: "IMAGE", // enum 혹은 union으로 관리, TEXT | IMAGE
            text: null, // optional
            image: "https://image.url/", // optional
            unreadUsers: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        }
    }
]
