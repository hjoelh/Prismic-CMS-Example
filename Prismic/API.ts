import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

const URL: string = "https://hjoelh-blog.prismic.io/graphql";
const SECRET: string =
  "MC5YNjF5dUJNQUFDRUFDOVh5.77-977-9NmPvv70JSz7vv70s77-977-977-977-9D--_vSZKHgDvv71X77-9JCRR77-9IUh7IQk";

const client = new ApolloClient({
  link: PrismicLink({
    uri: URL,
    accessToken: SECRET,
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

  return res.data
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
          id
        }
      }
    }
  }
}
`);
  return data.allPosts.edges;
};

export const getPostByID = async (id: string) => {
  const data = await fetchData(`
 {
  allPosts(id:"${id}"){
    edges{
      node{
        title
        image
        content
        _meta {
          id
        }
      }
    }
  }
}
`);
const document: object = data.allPosts.edges[0].node
 return document;
};





export const getAllPostIDs = async () => {
  const data = await fetchData(`
  query{
    allPosts{
      edges{
        node{
          _meta {
            id
          }
        }
      }
    }
  }
 `);
  return data.allPosts.edges;
};

