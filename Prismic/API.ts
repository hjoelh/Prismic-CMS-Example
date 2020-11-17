import { PrismicLink } from "apollo-link-prismic";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: PrismicLink({
    uri: process.env.URL,
    accessToken: process.env.SECRET,
  }),
  cache: new InMemoryCache(),
});

const fetchData = async (query: string) => {
  const fullQuery = {
    query: gql`
      ${query}
    `,
  };

  const res = await client.query(fullQuery);

  if (res.networkStatus !== 7) {
    console.log("Failed to fetch API");
  }

  return res.data;
};

export const getAllPostsForHome = async () => {
  const data = await fetchData(`
 {
  allPosts {
    edges {
      node {
        title
        image
        content
        _meta {
          uid
        }
      }
    }
  }
}
`);
  return data.allPosts.edges;
};

export const getPostByID = async (uid: string) => {
  const data = await fetchData(`
 {
  allPosts(uid:"${uid}"){
    edges{
      node{
        title
        image
        content
        _meta {
          uid
        }
      }
    }
  }
}
`);
  const document = data.allPosts.edges[0].node;
  return document;
};

export const getAllPostIDs = async () => {
  const data = await fetchData(`
  query{
    allPosts{
      edges{
        node{
          _meta {
            uid
          }
        }
      }
    }
  }
 `);
  return data.allPosts.edges;
};
