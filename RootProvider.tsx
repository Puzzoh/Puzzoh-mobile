import React, { useEffect } from "react";
import { configureApolloClient } from "./ApolloConfig";
import { ApolloProvider } from "@apollo/client";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

const client = configureApolloClient();

const RootProvider = ({ children }) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={MyTheme}>{children}</NavigationContainer>
    </ApolloProvider>
  );
};

export default RootProvider;
