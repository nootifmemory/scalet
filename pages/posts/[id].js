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

export async function getStaticProps({ params }) {
  var data = await fetch("http://localhost:3000/api/hello");
  var ress = await data.json();
  const res = ress.slice(0, 10)[params.id - 1];
  return {
    props: {
      res,
      ress,
    },
  };
}

export async function getStaticPaths() {
  var data = await fetch("http://localhost:3000/api/hello");
  var res = await data.json();
  const path = await res.map((post) => ({
    params: { id: post.id.toString() },
  }));
  const paths = path.slice(0, 10);
  return {
    fallback: false,
    paths,
  };
}
