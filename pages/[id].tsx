import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIDs, getPostByID } from "../Prismic/API";
import Template from "../components/template";

export default function Post({ post }) {
  return <Template post={post} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPostByID(context.params.id);
  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIDs();
  return {
    paths: paths.map((e) => `/${e.node._meta.uid}`),
    fallback: false,
  };
};
