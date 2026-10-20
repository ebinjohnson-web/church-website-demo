import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PhotoHero from "../components/PhotoHero";
import { DemoForm } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Grace Harbour Church | You belong here",
  description:
    "A fictional church concept with a warm welcome, community photography, and simple next steps.",
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
          image="church-community.jpg"
          alt="People gathered together during a church service"
          kicker="Grace Harbour Church · Riverside, Ontario"
          title="You belong here."
        >
          <p>Sundays · 9 &amp; 11 AM</p>
          <div className="photo-actions">
            <Link className="photo-button" href="/contact">
              Plan a visit <span aria-hidden="true">↗</span>
            </Link>
            <Link className="photo-button outline" href="/about">
              Get to know us
            </Link>
          </div>
        </PhotoHero>
        <div className="photo-ribbon">
          <span>Jesus at the centre.</span>
          <span>Room for everyone.</span>
          <span>Come as you are.</span>
        </div>
        <section className="photo-section">
          <div className="photo-split">
            <img
              src={asset("assets/photos/church-worship.jpg")}
              alt="Worshippers raising their hands together"
              width="2000"
              height="1333"
              loading="lazy"
            />
            <div className="photo-split-copy">
              <span className="photo-kicker">Life together</span>
              <h2>Faith. Friendship. Everyday.</h2>
              <p>A place to worship, grow, and care for our neighbours.</p>
              <Link className="photo-button" href="/ministries">
                Find your place ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="photo-callout">
          <div>
            <span className="photo-kicker">See you Sunday</span>
            <h2>There’s a seat for you.</h2>
          </div>
          <Link className="photo-button" href="/contact">
            Your first visit ↗
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
