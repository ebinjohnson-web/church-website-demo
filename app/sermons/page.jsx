import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Sermons | Grace Harbour Church",
  description:
    "Recent sermons for Grace Harbour Church, a fictional church website demo.",
};
export default function Page() {
  return (
    <>
      <div>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">
          <section className="page-hero page-hero-overlay section-first page-hero-sermon">
            <div className="container page-hero-grid">
              <div className="page-copy on-dark" data-reveal>
                <div className="kicker kicker-light">Sermons</div>
                <h1 className="page-title">Messages that equip and inspire.</h1>
                <p className="page-text">
                  Short previews of recent teaching from this fictional church
                  demo.
                </p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container message-list">
              <article className="message-row" data-reveal>
                <img
                  src={asset("assets/images/sermon-preach.jpg")}
                  alt="Preacher in a sanctuary"
                />
                <div className="message-row-body">
                  <div className="card-topline">Apr 6</div>
                  <h2>Trusting Jesus in Uncertain Times</h2>
                  <p>Hope and steady faith when life feels unsettled.</p>
                </div>
                <a className="button-secondary compact" href="#">
                  Watch
                </a>
              </article>
              <article className="message-row" data-reveal>
                <img
                  src={asset("assets/images/sermon-study.jpg")}
                  alt="Person reading the Bible"
                />
                <div className="message-row-body">
                  <div className="card-topline">Mar 30</div>
                  <h2>The Power of God’s Grace</h2>
                  <p>Prayer, worship, and practical hope for busy seasons.</p>
                </div>
                <a className="button-secondary compact" href="#">
                  Watch
                </a>
              </article>
              <article className="message-row" data-reveal>
                <img
                  src={asset("assets/images/sermon-bible.jpg")}
                  alt="Hands around an open Bible"
                />
                <div className="message-row-body">
                  <div className="card-topline">Mar 23</div>
                  <h2>Walking Together in Faith</h2>
                  <p>Why Christian community matters and how care grows.</p>
                </div>
                <a className="button-secondary compact" href="#">
                  Watch
                </a>
              </article>
            </div>
          </section>
          <section className="section section-last">
            <div className="container split-grid split-grid-tight">
              <div data-reveal>
                <div className="kicker">More ways to listen</div>
                <h2 className="section-title">
                  Stay connected through the week.
                </h2>
                <p className="section-intro">
                  Watch online, revisit recent series, or share a message with
                  someone who needs encouragement.
                </p>
                <div className="feature-grid">
                  <article className="feature-card">
                    <h3>Sunday teaching</h3>
                    <p>Current series and recent messages.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Scripture focus</h3>
                    <p>Bible-centered preaching with a clear takeaway.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Easy to share</h3>
                    <p>Simple links for family and friends.</p>
                  </article>
                </div>
              </div>
              <div className="image-frame" data-reveal>
                <img
                  src={asset("assets/images/sermon-bible.jpg")}
                  alt="Open Bible in warm light"
                />
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
