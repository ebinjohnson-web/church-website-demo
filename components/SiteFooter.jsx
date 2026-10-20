import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="quiet-footer">
      <div className="quiet-footer-top">
        <strong>Grace Harbour Church</strong>
        <nav aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/ministries">Ministries</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/contact">Visit</Link>
        </nav>
      </div>
      <p className="quiet-footer-note">
        © 2026 · Fictional concept. Stock photography for illustration.
      </p>
      <details className="photo-credits">
        <summary>Photo credits</summary>
        <ul>
          <li>
            <a
              href="https://www.pexels.com/photo/people-listening-to-mass-8815008/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pavel Danilyuk · church community
            </a>
          </li>
          <li>
            <a
              href="https://www.pexels.com/photo/people-standing-in-a-church-16102726/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luis Quintero · church worship
            </a>
          </li>
        </ul>
        <p>
          Photography from{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels
          </a>
          , used under the{" "}
          <a
            href="https://www.pexels.com/license/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels License
          </a>
          . The people pictured are not presented as this fictional
          organisation’s staff or members.
        </p>
      </details>
    </footer>
  );
}
