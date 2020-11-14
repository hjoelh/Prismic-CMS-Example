import { GetStaticProps } from "next";
import Footer from "../components/footer";
import { getAllPostsForHome } from "../Prismic/API";
import Link from "next/link";
import styled from "styled-components";

export default function Home ({ posts }: any){
  return (
    <>
      <h1>Web Development Notes...</h1>
      <Main>
        {posts.map((e: any) => {
          return (
            <Post>
              <img src={e.node.image.url} alt="" />
              <h2>
                <Link href={`/${e.node._meta.id}`}>{e.node.title[0].text}</Link>
              </h2>
            </Post>
          );
        })}
      </Main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsForHome();
  return {
    props: { posts },
  };
};


const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Post = styled.section`
  margin: 25px;
`;
