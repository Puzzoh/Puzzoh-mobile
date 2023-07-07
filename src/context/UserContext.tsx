import React from "react";
import { createContext } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { gql, useQuery, useMutation } from "@apollo/client";
import { getUser } from "../graphql/queries";

const UserContext = createContext(null);

export const UserProvider = ({ children, userID }) => {
  if (!userID) {
    return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
  }

  const { user, loading, error } = fetchUserInfo(userID);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%",
          zIndex: 0,
        }}
      >
        <Text>{error.message}</Text>
      </View>
    );
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const fetchUserInfo = (userID) => {
  const GET_USER_INFO = gql(getUser);
  const { loading, error, data, refetch } = useQuery(GET_USER_INFO, {
    variables: {
      id: userID,
      //   skip: !userID,
    },
  });

  const user = data?.getUser || null;

  if (loading) {
    return { loading: true };
  }

  if (error) {
    return { error };
  }

  return { user };
};

export default UserContext;
