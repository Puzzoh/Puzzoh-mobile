import { AppRegistry } from "react-native";
import awsconfig from "./src/aws-exports";
import React, { useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import Amplify, { Auth } from "aws-amplify";
import App from "./App";

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const currUser = await Auth.currentAuthenticatedUser();
    const accessToken = currUser.signInUserSession.accessToken.jwtToken;
    // console.log(accessToken);
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
        "X-API-KEY": awsconfig.aws_appsync_apiKey,
      },
    };
  } catch (error) {
    console.log("Error fetching tokens:", error);
    return {
      headers: {
        ...headers,
        "X-API-KEY": awsconfig.aws_appsync_apiKey,
      },
    };
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]), //authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

useEffect(() => {
  console.log("hello world");
}, []);

const RootComponent = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default RootComponent;
AppRegistry.registerComponent("App", () => RootComponent);
