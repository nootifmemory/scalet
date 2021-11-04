import Navbar from "./navbar";
import Import from "./import";
import Hero from "./hero";
import Footer from "./footer/footer";
import Float from "./float";
import WaveBottom from "./wavebottom";
// import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Import />
      <Navbar />
      <main>
        <Float />
        <Hero />
        <section className="work">
          <div className="container">
            <h2 className="section-title">Work</h2>
            {children}
          </div>
        </section>
        <WaveBottom />
      </main>
    </>
  );
}
