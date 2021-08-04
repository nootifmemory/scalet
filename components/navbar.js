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
      <container>
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
              <div>
                <i
                  className={
                    inactiveTheme === "light" ? "fas fa-sun" : "fas fa-moon"
                  }
                  onClick={() => setActiveTheme(inactiveTheme)}
                ></i>
              </div>
            </li>
          </ul>
        </nav>
      </container>
    </header>
  );
}
