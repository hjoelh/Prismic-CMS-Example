import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <p>
        <span> Powered by </span> Next.js + TypeScript + Prismic
      </p>
    </Foot>
  );
}

const Foot = styled.div`
  color: white;
  background: black;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
  position: fixed;
  width: 100vw;
  bottom: 0;
  span {
    color: #aeaeae;
  }
`;
