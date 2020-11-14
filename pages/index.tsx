import { GetStaticProps } from "next";
import Footer from "../components/footer";
import { getAllPostsForHome } from "../Prismic/API";
import Link from 'next/link';

const Home = ({posts}: any) => {
  return (
    <>
   
      <h1>GraphQL Prismic BLOG w/ typescript</h1>     


      {posts.map((e: any) => {
       return(
         <>
        <h1>
         <Link href={`/${e.node._meta.id}`}>
          {e.node.title[0].text}


          </Link>
  
        
        </h1>
        <img src={e.node.image.url} alt=""/>
        <p>{e.node.content[0].text}</p>
        </>
       )
      })}



      <Footer />
    </>
  );
};




export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsForHome(); 
  return {
    props: { posts }
  };
};





export default Home;
