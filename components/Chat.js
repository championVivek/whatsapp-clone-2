import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { auth, db } from "../firebase";
import getReceipientEmail from "../utils/getReceipientEmail";
import { useRouter } from "next/router";

function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [receipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getReceipientEmail(users, user))
  );

  //When user enter a chat in a row
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  const receipient = receipientSnapshot?.docs?.[0]?.data();

  const receipientEmail = getReceipientEmail(users, user);

  return (
    <Container onClick={enterChat}>
      {receipient ? (
        <UserAvatar src={receipient?.photoURL} />
      ) : (
        <UserAvatar>{receipientEmail[0]}</UserAvatar>
      )}
      <p>{receipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
