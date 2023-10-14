import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/react-hooks";
import { URL } from "../Constants/index";

export const makeApolloClient = () => {
  // create an apollo link instance, a network interface for apollo client
  const link = new HttpLink({
    uri: URL,
  });

  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          subTaskByPapser: {
            merge(existing, incoming) {
              return { ...existing, ...incoming };
            },
          },
        },
      },
    },
  });

  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache,
  });
  return client;
};
