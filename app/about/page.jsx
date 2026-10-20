import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PhotoHero from "../../components/PhotoHero";
import { DemoForm } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "About | Grace Harbour Church",
  description: "Faith. Together. A fictional church concept in Ontario.",
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
          kicker="About · Grace Harbour Church"
          title="Faith. Together."
        />
        <section className="photo-section">
          <div className="photo-section-head">
            <h2>Jesus at the centre.</h2>
            <p>
              Rooted in Scripture. Growing in prayer. Learning to love our
              neighbours.
            </p>
          </div>
          <div className="photo-split">
            <img
              src={asset("assets/photos/church-community.jpg")}
              alt="A church community listening and reflecting together"
              width="2000"
              height="1335"
              loading="lazy"
            />
            <div className="photo-split-copy">
              <span className="photo-kicker">A warm welcome</span>
              <h2>Room for your story.</h2>
              <p>
                New to church or returning after a while? Start right where you
                are.
              </p>
              <Link className="photo-button" href="/contact">
                Join us Sunday ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
