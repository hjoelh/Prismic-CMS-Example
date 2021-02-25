import Home from "../components/home";
import Footer from "../components/footer";
import { GetStaticProps } from "next";
import { fetchData } from "../Prismic/API";

export default function Index({ posts }: any) {
  return (
    <>
      <Home title="Prismic Headless CMS" posts={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { allPosts } = await fetchData(`
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

  return {
    props: { posts: allPosts.edges },
  };
};
