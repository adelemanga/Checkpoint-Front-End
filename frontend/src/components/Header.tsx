import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1 className="checkpoint">Checkpoint: Frontend</h1>
      <nav className="n-list">
        <ul>
          <li className="n-list1">
            <Link href="/countries">Countries</Link>
          </li>
          <li className="n-list2">
            <Link href="/add-country">Add Countries</Link>
          </li>
          <li className="n-list3">
            <Link href="/country-details">Countries details</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
