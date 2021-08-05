import Link from "next/link";
export default function HomePage({ handleLogout }) {
  return (
    <>
      <section>
        <header>
          <nav>
            <ul>
              <li>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
            <div>
              <button onClick={handleLogout}>LogOut</button>
            </div>
          </nav>
        </header>
        <h1>Welcome </h1>
      </section>
    </>
  );
}
