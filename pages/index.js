import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/pages/page";
import Sidebar from "../components/sidebar";
import { getPosts } from "../lib/posts";
import Footer from "../components/footer/footer";

export default function Home({ res, posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Wharang || Homepage </title>
        </Head>
        <Sidebar data={res} />
        <Page data={res} />
      </Layout>
      <Footer data={res} />
    </>
  );
}

export async function getServerSideProps ({req}) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  var data = await fetch("https://nootif.tk/api/hello");
  var res = await data.json();
  // const posts = await getPosts()
  return {
    props: {
      res,
    },
  };
}
