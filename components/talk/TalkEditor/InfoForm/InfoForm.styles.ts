import { styled } from "@/styles/stitches.config";

export const InfoHead = styled("h2", {
  fontSize: 20,
  borderBottom: "1px solid $GRAY400",
  padding: 10,
  marginBottom: 10,
});

export const TitleRow = styled("div", {
  display: "flex",
  gap: 10,
  alignItems: "center",
  padding: "10px 0",
});

export const UsersRow = styled("div", {
  display: "flex",
  gap: 10,
  alignItems: "center",
  padding: "10px 0",
});

export const UserList = styled("ul", {
  display: "flex",
  gap: 7,
  flexWrap: "wrap",
  padding: "10px",
});

export const UserListItem = styled("li", {
  display: "flex",
  alignItems: "center",
  background: "$PRIMARY100",
  border: "1px solid $PRIMARY200",
  borderRadius: 100,

  "& button": {
    padding: "7px 10px",
    background: "transparent",
    border: 0,
    outline: 0,
    color: "$PRIMARY600",
    fontSize: "0.8rem",
    cursor: "pointer",
  },

  "& .text": {},
  "& .delete": {
    marginLeft: 7,
  },
});

export const NoUser = styled("span", {
  display: "block",
  width: "100%",
  padding: "10px",
  fontSize: "0.8rem",
  color: "$WARNING500",
  textAlign: "center",
  border: "1px dashed $GRAY400",
});
