import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PhotoHero from "../../components/PhotoHero";
import { DemoForm } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Messages | Grace Harbour Church",
  description: "A word for the week. A fictional church concept in Ontario.",
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
          image="church-worship.jpg"
          alt="People sharing a church gathering"
          kicker="Messages · Grace Harbour Church"
          title="A word for the week."
        />
        <section className="photo-section">
          <span className="photo-kicker">Sample message series</span>
          <h2>Hope for everyday life.</h2>
          <div className="short-list">
            <article>
              <h3>Trusting Jesus</h3>
              <p>Faith for uncertain days.</p>
            </article>
            <article>
              <h3>Finding peace</h3>
              <p>Rest, prayer, and steady hope.</p>
            </article>
            <article>
              <h3>Walking together</h3>
              <p>Why community matters.</p>
            </article>
          </div>
          <p>Concept preview. Recordings are not connected.</p>
        </section>
        <section className="photo-callout">
          <h2>Hear it together.</h2>
          <Link className="photo-button" href="/contact">
            Plan a Sunday visit ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
