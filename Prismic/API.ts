import { PrismicLink } from "apollo-link-prismic";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: PrismicLink({
    uri: process.env.URL,
    accessToken: process.env.SECRET,
  }),
  cache: new InMemoryCache(),
});

export const fetchData = async (query: string) => {
  const fullQuery = {
    query: gql`
      ${query}
    `,
  };

  const res = await client.query(fullQuery);

  if (res.networkStatus !== 7) {
    console.log("Failed to fetch API");
  } else {
    return res.data;
  }
};
