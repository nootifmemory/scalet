import Link from "next/link";
import Image from 'next/image'
import love from '../public/love.png'

export default function Footer() {
  return (
    <footer>
      <container>
        <div className="inner">
          <span>
              CopyRight By @Wharang - 2021
            </span>
          <p>
            Nextjs Wharang Theme - By Wharang
          </p>
          <div className="img-warper">
          <Image src={love} alt="Goodbye" layout="fixed" height={250} width= {200}/>
          </div>
        </div>
      </container>
    </footer>
  );
}
