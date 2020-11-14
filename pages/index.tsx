import { GetStaticProps } from "next";
import Footer from "../components/footer";
import { getAllPostsForHome } from "../Prismic/API";
import Link from "next/link";
import styled from "styled-components";
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
