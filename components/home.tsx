import Link from "next/link";
import styled from "styled-components";

type homeProps = {
  title: string;
  posts: [];
};

export default function Home({ posts, title }: homeProps) {
  return (
    <HomeWrap>
      <h1>{title}</h1>
      {posts.map((e: any) => {
        return (
          <Post key={e.node._meta.uid}>
            <Img src={e.node.image.url} alt="" />
            <h2>
              <Link href={`/${e.node._meta.uid}`}>{e.node.title[0].text}</Link>
            </h2>
          </Post>
        );
      })}
    </HomeWrap>
  );
}

//styles

const HomeWrap = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Post = styled.section`
  margin: 35px;
`;

const Img = styled.img`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transition: 175ms;
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  max-height: 100%;
  max-width: 100%;
`;
