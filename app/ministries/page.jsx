import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PhotoHero from "../../components/PhotoHero";
import { DemoForm } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Ministries | Grace Harbour Church",
  description: "Find your people. A fictional church concept in Ontario.",
};
export default function Page() {
  return (
    <div className="image-led-page church-photos">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PhotoHero
          inner
          image="church-community.jpg"
          alt="People sharing a church gathering"
          kicker="Ministries · Grace Harbour Church"
          title="Find your people."
        />
        <section className="photo-section">
          <span className="photo-kicker">Life beyond Sunday</span>
          <h2>Grow. Care. Belong.</h2>
          <div className="short-list">
            <article>
              <h3>Kids &amp; youth</h3>
              <p>A caring place to ask questions and grow.</p>
            </article>
            <article>
              <h3>Small groups</h3>
              <p>Friendship, Scripture, and prayer around the table.</p>
            </article>
            <article>
              <h3>Care &amp; community</h3>
              <p>
                Encouragement for one another. Practical love for our
                neighbours.
              </p>
            </article>
          </div>
        </section>
        <section className="photo-callout">
          <h2>There’s a place for you.</h2>
          <Link className="photo-button" href="/contact">
            Find your next step ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
