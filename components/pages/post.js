import Pagination from "../pagination";
export default function Post({ data }) {
  return (
    <>
      <div key={data.id} className="content">
        <h2 className="title">{data.title}</h2>
        <div className="body-content">
          <p className="body">{data.body}</p>
        </div>
      </div>
          <Pagination />
    </>
  );
}
