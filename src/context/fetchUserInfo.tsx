import { gql, useQuery, useMutation } from "@apollo/client";
import { getUser } from "../graphql/queries";

export default function fetchUserInformation(userID) {
  if (!userID) {
    return { user: null, loading: false, error: null };
  }

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
}
