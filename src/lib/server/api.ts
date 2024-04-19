import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "http://localhost:8888/graphql",
  }),
  ssrMode: true,
});

const query = client.query.bind(client);

export { query, client };
export { gql } from "./gql";
