import Home from "../components/home";
import Footer from "../components/footer";
import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../Prismic/API";

export default function Index({ posts }: any) {
  return (
    <>
      <Home title="Prismic Headless CMS example" 
            posts={posts} />

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsForHome();
  return {
    props: { posts: posts },
  };
};
