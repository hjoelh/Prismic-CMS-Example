import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../Prismic/API";

import Template from "../components/template";

export default function Home({ posts }: any) {
  return (
      <Template 
        title="Prismic Headless CMS"
        posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsForHome();
  return {
    props: { posts },
  };
};
