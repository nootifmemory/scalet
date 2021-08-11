import Link from "next/link";
import Image from "next/image";
import love from "../../public/love.png";
import Navigator from "./Navigator";

export default function Footer({ data }) {
  // console.log(data);
  return (
    <footer>
        <div className="inner">
          <Navigator data={data} />
          <div className="footer-img-warper">
            <Image
              src={love}
              alt="Goodbye"
              layout="fixed"
              height={250}
              width={200}
            />
          </div>
          <p>CopyRight By @Wharang - 2021</p>
          <p>Nextjs Wharang@02 Theme</p>
        </div>
    </footer>
  );
}
