import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../components/Interactive";
import { asset } from "../lib/site";
export const metadata = {
  title: "Grace Harbour Church | Church Website Demo",
  description:
    "A warm, modern fictional church website demo with real image-based artwork and concise content.",
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
          <section className="hero section-first">
            <div className="container hero-grid">
              <div className="hero-copy" data-reveal>
                <div className="kicker">
                  Grace Harbour Church · Riverside, Ontario
                </div>
                <h1 className="hero-title">Room for you. Space to grow.</h1>
                <p className="hero-text">
                  A welcoming church in Riverside, Ontario, centered on Jesus,
                  shaped by Scripture, and open to all.
                </p>
                <div className="hero-actions">
                  <Link className="button" href="/contact">
                    Plan Your Visit
                  </Link>
                  <Link className="button-secondary" href="/sermons">
                    Watch a Message
                  </Link>
                </div>
                <div className="meta-row">
                  <article className="meta-card">
                    <div className="meta-label">Sunday</div>
                    <div className="meta-value">9:00 AM &amp; 11:00 AM</div>
                  </article>
                  <article className="meta-card">
                    <div className="meta-label">Prayer</div>
                    <div className="meta-value">Wednesday · 7:00 PM</div>
                  </article>
                  <article className="meta-card">
                    <div className="meta-label">Families</div>
                    <div className="meta-value">Kids ministry at 11:00 AM</div>
                  </article>
                </div>
              </div>
              <div className="hero-visual" data-reveal>
                <article className="media-card media-card-tall">
                  <img
                    src={asset("assets/images/pexels-church-exterior.jpg")}
                    alt="Church exterior in warm evening light"
                  />
                  <div className="media-card-body">
                    <div className="card-topline">Visitor note</div>
                    <h2>This Sunday · 11 AM</h2>
                    <p>
                      Come early for coffee. Parking and kids check-in are easy
                      to find.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="info-band">
            <div className="container info-band-grid">
              <article className="info-pill" data-reveal>
                <h3>New here?</h3>
                <p>Come as you are. We would love to welcome you.</p>
              </article>
              <article className="info-pill" data-reveal>
                <h3>Where we meet</h3>
                <p>214 Wellington Avenue, Riverside, Ontario.</p>
              </article>
              <article className="info-pill" data-reveal>
                <h3>Kids check-in</h3>
                <p>Simple, calm, and clearly signed.</p>
              </article>
              <article className="info-pill" data-reveal>
                <h3>Current series</h3>
                <p>Steady in Christ.</p>
              </article>
            </div>
          </section>
          <section className="section">
            <div className="container split-grid split-grid-tight">
              <div className="image-frame" data-reveal>
                <img
                  src={asset("assets/images/about-church.jpg")}
                  alt="Grace Harbour Church building in evening light"
                />
              </div>
              <div data-reveal>
                <div className="kicker">About</div>
                <h2 className="section-title">
                  A welcoming place to grow in faith.
                </h2>
                <p className="section-intro">
                  Friendly people, biblical teaching, prayer, and real
                  community.
                </p>
                <ul className="eyebrow-list">
                  <li>All ages welcome</li>
                  <li>Biblical teaching</li>
                  <li>Real community</li>
                </ul>
                <div className="feature-grid">
                  <article className="feature-card">
                    <h3>Warm welcome</h3>
                    <p>Friendly hosts and a relaxed first visit.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Thoughtful worship</h3>
                    <p>Music, prayer, and preaching with a calm tone.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Open doors</h3>
                    <p>Simple next steps for families, students, and adults.</p>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <div className="section-head">
                <div>
                  <div className="kicker">Ministries</div>
                  <h2 className="section-title">
                    Find friendship and a place to serve.
                  </h2>
                </div>
                <Link className="inline-link" href="/ministries">
                  View all ministries
                </Link>
              </div>
              <div className="card-grid card-grid-four">
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/ministries-kids.jpg")}
                    alt="Children and families together at church"
                  />
                  <div className="image-card-body">
                    <h3>Kids &amp; Youth</h3>
                    <p>Safe, caring, and age-appropriate.</p>
                  </div>
                </article>
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/ministries-groups.jpg")}
                    alt="Small group gathered in a church room"
                  />
                  <div className="image-card-body">
                    <h3>Small Groups</h3>
                    <p>Prayer, Bible discussion, and friendship.</p>
                  </div>
                </article>
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/ministries-care.jpg")}
                    alt="People praying together around a table"
                  />
                  <div className="image-card-body">
                    <h3>Prayer &amp; Support</h3>
                    <p>Pastoral care and practical encouragement.</p>
                  </div>
                </article>
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/ministries-outreach.jpg")}
                    alt="Community outreach gathering outdoors"
                  />
                  <div className="image-card-body">
                    <h3>Community Outreach</h3>
                    <p>Serving our neighbours with compassion.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <div className="section-head">
                <div>
                  <div className="kicker">Sermons</div>
                  <h2 className="section-title">Recent messages.</h2>
                </div>
                <Link className="inline-link" href="/sermons">
                  Browse all sermons
                </Link>
              </div>
              <div className="card-grid card-grid-three">
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/sermon-preach.jpg")}
                    alt="Pastor standing in a warmly lit sanctuary"
                  />
                  <div className="image-card-body">
                    <div className="card-topline">April 6</div>
                    <h3>Trusting Jesus</h3>
                    <p>Hope for uncertain days.</p>
                  </div>
                </article>
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/sermon-study.jpg")}
                    alt="Person reading the Bible in soft evening light"
                  />
                  <div className="image-card-body">
                    <div className="card-topline">March 30</div>
                    <h3>Finding Peace</h3>
                    <p>Prayer, worship, and steady hope.</p>
                  </div>
                </article>
                <article className="image-card" data-reveal>
                  <img
                    src={asset("assets/images/sermon-bible.jpg")}
                    alt="Hands gathered around an open Bible"
                  />
                  <div className="image-card-body">
                    <div className="card-topline">March 23</div>
                    <h3>Walking Together</h3>
                    <p>Why Christian community matters.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="section section-last">
            <div className="container">
              <div className="section-head">
                <div>
                  <div className="kicker">Coming up</div>
                  <h2 className="section-title">What’s next.</h2>
                </div>
              </div>
              <div className="announcement-grid">
                <article className="announcement-card" data-reveal>
                  <div className="card-topline">Apr 13</div>
                  <h3>Newcomers Lunch</h3>
                  <p>After the 11:00 AM gathering.</p>
                </article>
                <article className="announcement-card" data-reveal>
                  <div className="card-topline">Apr 18</div>
                  <h3>Prayer Night</h3>
                  <p>Friday · 7:00 PM</p>
                </article>
                <article className="announcement-card" data-reveal>
                  <div className="card-topline">Apr 27</div>
                  <h3>Serve Sunday</h3>
                  <p>A church-wide outreach morning.</p>
                </article>
              </div>
              <div className="cta-panel" data-reveal>
                <div>
                  <h2>Thinking of visiting?</h2>
                  <p>We’d love to welcome you. Come as you are.</p>
                </div>
                <Link className="button" href="/contact">
                  Get in Touch
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
