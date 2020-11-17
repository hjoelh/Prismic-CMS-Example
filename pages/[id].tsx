import { GetStaticPaths } from "next";
import { getAllPostIDs, getPostByID } from "../Prismic/API";
import Template from "../components/post";

export default function Post({ post }:any) {
  return <Template post={post} />;
}

export const getStaticProps = async ({params}: any) => {
  const id: string = params.id
  const post = await getPostByID(id);
  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIDs();
  return {
    paths: paths.map((e: any) => `/${e.node._meta.uid}`),
    fallback: false,
  };
};

