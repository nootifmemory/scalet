import Image from "next/image";
import Avatar from "../public/icon.png";
import Link from "next/link";

export default function Sidebar({ data }) {

  const count = data.length;
  return (
    <div className="sidebar">
      <div className="img-wraper">
        <Image
          className="image"
          itemProp="image"
          src={Avatar}
          alt="Wharang"
          layout="fill"
        />
      </div>
      <div className="name" itemProp="name">
        <p>Wharang</p>
      </div>
      <div className="divider"></div>
      <nav className="state">
        <div className="state posts">
          <Link href="/#" passHref={true}>
            <span className="item">posts {count}</span>
          </Link>
        </div>
        <div className="state tags">
          <Link href="/tags/" passHref={true}>
            <span className="item">tags {count}</span>
          </Link>
        </div>
      </nav>
      <div className="menu" itemProp="menu">
        <div className="item">
          <Link href="/" passHref>
            <p>Home Page</p>
          </Link>
          <Link href="/#work" passHref>
            <p>Work</p>
          </Link>
          <Link href="/tags" passHref>
            <p>Tags</p>
          </Link>
          <Link href="/#about" passHref>
            <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
