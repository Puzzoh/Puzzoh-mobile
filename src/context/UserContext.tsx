import { createContext } from "react";
import fetchUserInfo from "./fetchUserInfo";
import { ActivityIndicator, View, Text } from "react-native";
import React from "react";

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

export default UserContext;
