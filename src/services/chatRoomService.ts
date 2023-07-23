import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import UserContext from "../context/UserContext";
import { API, Auth, graphqlOperation } from "aws-amplify";

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

export const getCommonChatRoomWithUser = async (userID) => {
  const currUser = await Auth.currentAuthenticatedUser();

  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: currUser.attributes.sub })
  );

  const chatRooms = response.data?.getUser?.ChatRooms?.items || [];

  const chatRoom = chatRooms.find((chatRoomItem) => {
    return chatRoomItem.chatRoom.users.items.some(
      (userItem) => userItem.user.id == userID
    );
  });

  return chatRoom;
};
