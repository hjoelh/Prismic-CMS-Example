import { GetStaticProps, GetStaticPaths} from 'next'
import { getAllPostIDs, getPostByID } from '../Prismic/API'
import Link from 'next/link'



export default function Post({post}) {
  return (
    <>
    <h2>{post.title[0].text}</h2>
    <img src={post.image.url} alt=""/>
    <p>{post.content[0].text}</p>

    <Link href='/'>home</Link>
    
    </>
    )
}





export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPostByID(context.params.id)
  return {
    props: { post }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIDs();
  return {
    paths: paths.map((e) => `/${e.node._meta.id}`),
    fallback: false,
  }
}