import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import UserContext from "../context/UserContext";

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

const LIST_CHAT_ROOMS = gql(listChatRooms);

export const getCommonChatRoomWithUser = async (userID) => {
  const currUser = useContext(UserContext);

  const { data } = useQuery(LIST_CHAT_ROOMS, {
    variables: {
      id: currUser.id,
    },
  });

  console.log("hey");
};
