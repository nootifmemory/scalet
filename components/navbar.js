import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <container>
        <nav>
        <Link href="/" passHref={true}><h2>Wharang</h2></Link>
          
          <ul>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <label className="label">
                <input type="checkbox" className="label__input" />
                <div className="label__circle"></div>
              </label>
            </li>
          </ul>
        </nav>
      </container>
    </header>
  );
}
