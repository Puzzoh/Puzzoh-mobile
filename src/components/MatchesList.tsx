import React from "react";
import { FlatList } from "react-native";
import MatchesListItem from "./MatchesListItem";
import { listUsers } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";

const MatchesList = () => {
  const GET_PEOPLE_MATCHES = gql(listUsers);

  const { error, data } = useQuery(GET_PEOPLE_MATCHES);
  const people = data?.listUsers?.items;

  return (
    <FlatList
      data={people}
      renderItem={({ item }) => <MatchesListItem user={item} />}
      style={{ backgroundColor: "white" }}
      horizontal={true}
    />
  );
};

export default MatchesList;
