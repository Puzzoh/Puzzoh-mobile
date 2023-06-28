import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";

const configureApolloClient = () => {
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

  return client;
};

export { configureApolloClient };
