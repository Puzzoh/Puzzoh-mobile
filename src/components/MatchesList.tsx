import React, { useContext } from "react";
import { FlatList } from "react-native";
import MatchesListItem from "./MatchesListItem";
import { listUsers } from "../graphql/queries";
import { gql, useQuery } from "@apollo/client";
import UserContext from "../context/UserContext";

const MatchesList = () => {
  const GET_PEOPLE_MATCHES = gql(listUsers);

  const currUser = useContext(UserContext);

  const { loading, error, data, refetch } = useQuery(GET_PEOPLE_MATCHES, {
    variables: {
      filter: { id: { ne: currUser.id } },
    },
  });
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
