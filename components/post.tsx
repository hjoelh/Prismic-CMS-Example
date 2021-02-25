import styled from "styled-components";
import Button from "./button";
import Footer from "./footer";

export default function Template({ post }: any) {
  return (
    <>
      <LinkWrap>
        <Button content="Back to posts" color="black" link="/"></Button>
      </LinkWrap>

      <ImgWrap>
        <ImgPost src={post.image.postHeader.url} alt="" />
      </ImgWrap>

      <h1>{post.title[0].text}</h1>

      <PostWrap>
        {post.content.map((e: any, index: number) => {
          return <p key={index}>{e.text}</p>;
        })}
      </PostWrap>
      <Footer />
    </>
  );
}

// styles

const PostWrap = styled.main`
  max-width: 750px;
  margin: 25px auto;
  padding: 0 30px;
  word-wrap: break-word;
  p {
    margin: 20px 0;
    font-size: 1.2rem;
    line-height: 1.4em;
  }
`;

const ImgPost = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
`;

const ImgWrap = styled.div`
  height: 275px;
`;

const LinkWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  padding: 2px 0;
`;
