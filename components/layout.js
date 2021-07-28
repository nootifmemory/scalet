import Navbar from "../components/navbar";
import Import from "./import";
import Hero from "./hero";
import Footer from "./footer";
import Float from "./float";
import WaveBottom from "./wavebottom";

export default function Layout({ children }) {
  return (
    <>
      <Import />
      <Navbar />
      <main>
        {/* <div className="size-1vw1vh"></div> */}
        <Float />
        <Hero />
        <section className="work">
          <container>
            <h2 className="section-title">Work</h2>
            {children}
          </container>
        </section>
        <WaveBottom />
      </main>
      <Footer />
    </>
  );
}
