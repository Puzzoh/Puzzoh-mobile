import React, { useEffect } from "react";
import { configureApolloClient } from "./ApolloConfig";
import { ApolloProvider } from "@apollo/client";

const client = configureApolloClient();

const RootProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default RootProvider;
