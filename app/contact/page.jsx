import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PhotoHero from "../../components/PhotoHero";
import { DemoForm } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Visit | Grace Harbour Church",
  description: "See you Sunday. A fictional church concept in Ontario.",
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
          kicker="Visit · Grace Harbour Church"
          title="See you Sunday."
        />
        <section className="photo-section">
          <div className="photo-form-layout">
            <div>
              <span className="photo-kicker">Your first visit</span>
              <h2>Come as you are.</h2>
              <p>
                <strong>Sundays · 9 &amp; 11 AM</strong>
                <br />
                Kids ministry at 11 AM.
              </p>
              <p>
                214 Wellington Avenue
                <br />
                Riverside, Ontario
              </p>
              <p>Fictional church · Demo inquiry only.</p>
            </div>
            <DemoForm>
              <label>
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Your question
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit" className="photo-button">
                Try the inquiry ↗
              </button>
            </DemoForm>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
