import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" passHref={true}>
            <h2>Wharang</h2>
          </Link>

          <ul>
            <li>
              <Link href="/#work">Work</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <div type="button" className="btn-placeholder" onClick={() => setActiveTheme(inactiveTheme)}>
                <i
                  className={
                    inactiveTheme === "light" ? "btn-item fas fa-sun" : "btn-item fas fa-moon"
                  }
                  
                ></i>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
