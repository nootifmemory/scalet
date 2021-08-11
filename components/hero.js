import Image from "next/image";
import hero from "../public/hero.png";
import WaveTop from "./wavetop";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="img-wraper">
          <Image
            className="min-height:85vh"
            src={hero}
            alt="Hero"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
          <WaveTop />
      </section>
    </>
  );
}
