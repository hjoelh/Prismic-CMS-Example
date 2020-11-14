import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: PrismicLink({
    uri: process.env.URL,
    accessToken: process.env.SECRET,
  }),
  cache: new InMemoryCache(),
});

// https://hjoelh-blog.prismic.io/graphql?access_token=MTYwNTI3MTQ4NDAwNi5YNjJsWGhNQUFDSUFETDJS.YVtKdUpQM--_ve-_vS0Z77-977-977-977-977-9IhQm77-977-9A--_vVnvv73vv70L77-9IUlf77-9&state=Tzjvv713FhoF77-9f--_vUMO77-977-9aDo

const fetchData = async (query: any) => {
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

export const getPostByID = async (uid) => {
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
