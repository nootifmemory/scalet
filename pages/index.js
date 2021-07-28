import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/pages/page"
import Sidebar from "../components/sidebar";


export default function Home({res}) {
  return (
      <Layout >
        <Head>
          <title>Young Wild and Free</title>
        </Head>
        <Sidebar data={res}/>
        <Page data={res} />
      </Layout>
  );
}

export async function getStaticProps() {
  var data =await fetch("https://jsonplaceholder.typicode.com/posts")
  var res = await data.json()
  return {
    props : {
    res
    }
}
}