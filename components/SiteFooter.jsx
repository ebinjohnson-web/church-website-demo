import Link from "next/link";
import { asset } from "../lib/site";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Grace Harbour Church</h3>
          <p>A warm, modern church website demo for Ontario.</p>
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <p>
            214 Wellington Avenue
            <br />
            Riverside, ON N0A 0A0
          </p>
          <p>Sunday · 9:00 AM &amp; 11:00 AM</p>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <nav aria-label="Footer navigation">
            <Link href="/about">About</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/sermons">Sermons</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <nav aria-label="Social links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © <span>2026</span> Grace Harbour Church. Demo site only.
        </span>
        <span>Built for a fictional church in Ontario.</span>
      </div>
    </footer>
  );
}
