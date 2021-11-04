import Head from "next/head";
import Layout from "../../components/layout";
import Post from "../../components/pages/post";
import Sidebar from "../../components/sidebar";
import Pagination from "../../components/pagination";
import Footer from "../../components/footer/footer";

export default function Posts({ res, ress }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Young Wild and Free</title>
        </Head>
        <Pagination />
        <Sidebar data={ress} />
        <Post data={res} />
      </Layout>
      <Footer data={ress} />
    </>
  );
}

export async function getServerSideProps ({req,params}) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  var data = await fetch("http://nootif.tk/api/hello");
  var ress = await data.json();
  const res = ress.slice(0, 10)[params.id - 1];
  return {
    props: {
      res,
      ress,
    },
  };
}
