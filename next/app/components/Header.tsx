import Link from 'next/link';
import './Header.css';
export default function Header() {
    return (
      <header>
      <nav>
        <ul>
        <li>home</li>
        <li>
          <Link href="/about">
          About
          </Link>
        </li>
        <li>services</li>
        <li>contact</li>
        <li>else</li>
        </ul>
      </nav>
      </header>
    );
  }
  