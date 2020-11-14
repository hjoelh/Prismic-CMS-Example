import styled from "styled-components";
import Footer from "../components/footer";
import Button from "./button";
import Link from "next/link";

export default function Template(props) {
  return (
    <>
      {props.post ? ( // conditional render for Home or Post
        // POST
        <>

            <LinkWrap>
            <Button
              content="Back to posts"
              color="black"
              background="white"
              link="/" ></Button>
              </LinkWrap>

          <ImgWrap>
            <ImgPost src={props.post.image.postHeader.url} alt="" />
          </ImgWrap>

          <h1>{props.post.title[0].text}</h1>
          <PostWrap>
            {props.post.content.map((e) => {
              return <p>{e.text}</p>;
            })}
          </PostWrap>

        </>
      ) : (
        // HOME
        <HomeWrap>
          <h1>{props.title}</h1>
          {props.posts.map((e: any) => {
            return (
              <Post>
                <Img src={e.node.image.url} alt="" />
                <h2>
                  <Link href={`/${e.node._meta.uid}`}>
                    {e.node.title[0].text}
                  </Link>
                </h2>
              </Post>
            );
          })}
        </HomeWrap>
      )}

      <Footer />
    </>
  );
}

const HomeWrap = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

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
`
