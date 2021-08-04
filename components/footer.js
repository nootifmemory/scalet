import Link from "next/link";
import Image from 'next/image'
import love from '../public/love.png'

export default function Footer() {
  return (
    <footer>
        <div className="inner">
          <p className="line1">
              CopyRight By @Wharang - 2021
            </p>
          <p className="line2">
            Nextjs Wharang Theme - By Wharang
          </p>
          <div className="img-warper">
          <Image src={love} alt="Goodbye" layout="fixed" height={250} width= {200}/>
          </div>
        </div>
    </footer>
  );
}
