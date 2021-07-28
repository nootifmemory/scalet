import Image from "next/image";
import Link from "next/link";

export default function Page({ data }) {
  var beta = data.slice(0, 10);
  return (
    <div>
      <ul className="listpost">
        {beta.map(({ userId, id, title, body }) => (
          <li className="itempost" key={id}>
            <Link href={`/posts/${id}/#work`} passHref={true}>
              <div className="link">
                <div className="img-warper">
                  <Image
                    src={`https://source.unsplash.com/random/${1900 + id}x${
                      1200 + id
                    }`}
                    layout="fill"
                    alt=""
                  />
                </div>
                <div className="content-warper">
                  <h3 className="title">{title}</h3>
                  <p className="body">{body}</p>
                  <div className="tag">
                  <p >{userId}</p>

                  </div>
                  <div className="more">
                    <p >more...</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
