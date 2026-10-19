import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "About | Grace Harbour Church",
  description:
    "About Grace Harbour Church, a fictional church website demo built for a warm and modern first impression.",
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
          <section className="page-hero section-first">
            <div className="container page-hero-grid">
              <div className="page-copy" data-reveal>
                <div className="kicker">About Grace Harbour</div>
                <h1 className="page-title">
                  Our story. Our faith. Our community.
                </h1>
                <p className="page-text">
                  A fictional church demo with a warm first impression, clear
                  next steps, and concise content.
                </p>
                <div className="hero-actions">
                  <Link className="button" href="/contact">
                    Plan a Visit
                  </Link>
                  <Link className="button-secondary" href="/ministries">
                    See Ministries
                  </Link>
                </div>
              </div>
              <div className="page-hero-media" data-reveal>
                <img
                  src={asset("assets/images/about-story.jpg")}
                  alt="Warm church interior with seating and soft light"
                />
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container stat-grid">
              <article className="stat-card" data-reveal>
                <strong>2</strong>
                <span>Sunday gatherings</span>
              </article>
              <article className="stat-card" data-reveal>
                <strong>5+</strong>
                <span>Core ministries</span>
              </article>
              <article className="stat-card" data-reveal>
                <strong>3</strong>
                <span>Small groups</span>
              </article>
            </div>
          </section>
          <section className="section">
            <div className="container split-grid">
              <div data-reveal>
                <div className="kicker">What we value</div>
                <h2 className="section-title">
                  Simple, rooted, and welcoming.
                </h2>
                <p className="section-intro">
                  Jesus at the center. Scripture in our hands. People cared for
                  with honesty and grace.
                </p>
                <div className="feature-grid">
                  <article className="feature-card">
                    <h3>Jesus-centered</h3>
                    <p>We want people to know Christ and grow in Him.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Bible-led</h3>
                    <p>Teaching that is clear, faithful, and practical.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Prayerful</h3>
                    <p>We bring needs, worship, and gratitude to God.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Neighbourly</h3>
                    <p>We care for one another and serve our community.</p>
                  </article>
                </div>
              </div>
              <div className="image-frame" data-reveal>
                <img
                  src={asset("assets/images/about-church.jpg")}
                  alt="Church building with evening lights"
                />
              </div>
            </div>
          </section>
          <section className="section section-last">
            <div className="container">
              <div className="section-head">
                <div>
                  <div className="kicker">What to expect</div>
                  <h2 className="section-title">A relaxed first visit.</h2>
                </div>
              </div>
              <div className="announcement-grid">
                <article className="announcement-card" data-reveal>
                  <h3>Friendly welcome</h3>
                  <p>Greeters, coffee, and clear signage.</p>
                </article>
                <article className="announcement-card" data-reveal>
                  <h3>Thoughtful worship</h3>
                  <p>Music, prayer, and preaching with room to breathe.</p>
                </article>
                <article className="announcement-card" data-reveal>
                  <h3>Easy next steps</h3>
                  <p>Visit, connect, join a group, or serve.</p>
                </article>
              </div>
              <div className="cta-panel" data-reveal>
                <div>
                  <h2>Have a question?</h2>
                  <p>We’d be glad to help.</p>
                </div>
                <Link className="button" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
