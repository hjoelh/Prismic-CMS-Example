import { GetStaticPaths } from "next";
import { fetchData } from "../Prismic/API";
import Template from "../components/post";

export default function Post({ post }: any) {
  return <Template post={post} />;
}

export const getStaticProps = async ({ params }: any) => {
  const data = await fetchData(`
  {
   allPosts(uid:"${params.id}"){
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
 }`);
  return {
    props: { post: data.allPosts.edges[0].node },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchData(`
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
  return {
    paths: paths.allPosts.edges.map((e: any) => `/${e.node._meta.uid}`),
    fallback: false,
  };
};
