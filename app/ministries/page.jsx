import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Ministries | Grace Harbour Church",
  description:
    "Ministries at Grace Harbour Church, a fictional church website demo.",
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
          <section className="page-hero page-hero-overlay section-first page-hero-ministry">
            <div className="container page-hero-grid">
              <div className="page-copy on-dark" data-reveal>
                <div className="kicker kicker-light">Ministries</div>
                <h1 className="page-title">Find your place. Make an impact.</h1>
                <p className="page-text">
                  There is room for families, students, adults, and anyone
                  looking to serve.
                </p>
              </div>
            </div>
          </section>
          <section className="section section-tight-top">
            <div className="container" data-reveal>
              <div className="section-head section-head-stack ministry-intro-head">
                <div>
                  <div className="kicker">Start here</div>
                  <h2 className="section-title section-title-medium">
                    A clear next step for every stage of life.
                  </h2>
                  <p className="section-intro">
                    Whether you are new to church, raising kids, looking for
                    friendship, or ready to serve, there is a place for you
                    here.
                  </p>
                </div>
              </div>
              <div className="eyebrow-list eyebrow-list-compact">
                <li>New here? Start with Sunday</li>
                <li>Families can begin with Kids Ministry</li>
                <li>Adults often begin with Small Groups</li>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container card-grid card-grid-three ministries-card-grid">
              <article
                className="image-card ministry-card priority-card"
                data-reveal
              >
                <img
                  src={asset("assets/images/pexels-kids-ministry.jpg")}
                  alt="Children learning together outdoors"
                />
                <div className="image-card-body">
                  <div className="card-topline">Families</div>
                  <h3>Kids Ministry</h3>
                  <p>
                    Safe teaching, caring leaders, and a warm welcome for
                    families.
                  </p>
                  <div className="ministry-meta">
                    Ages 4–11 · Sundays at 11:00 AM
                  </div>
                  <Link className="text-link" href="/contact">
                    Ask about Kids Ministry
                  </Link>
                </div>
              </article>
              <article
                className="image-card ministry-card priority-card"
                data-reveal
              >
                <img
                  src={asset("assets/images/pexels-small-groups.jpg")}
                  alt="Three adults in a small group Bible discussion"
                />
                <div className="image-card-body">
                  <div className="card-topline">Adults</div>
                  <h3>Small Groups</h3>
                  <p>
                    Prayer, Bible discussion, and honest conversation through
                    the week.
                  </p>
                  <div className="ministry-meta">
                    Weekly groups · Across Riverside
                  </div>
                  <Link className="text-link" href="/contact">
                    Find a small group
                  </Link>
                </div>
              </article>
              <article
                className="image-card ministry-card priority-card"
                data-reveal
              >
                <img
                  src={asset("assets/images/pexels-prayer-support.jpg")}
                  alt="A person reading and writing in a Bible"
                />
                <div className="image-card-body">
                  <div className="card-topline">Care</div>
                  <h3>Prayer &amp; Support</h3>
                  <p>
                    Pastoral care, prayer requests, and practical support when
                    life gets heavy.
                  </p>
                  <div className="ministry-meta">
                    Prayer requests welcome · Weekday follow-up
                  </div>
                  <Link className="text-link" href="/contact">
                    Share a care need
                  </Link>
                </div>
              </article>
              <article className="image-card ministry-card" data-reveal>
                <img
                  src={asset("assets/images/pexels-community-outreach.jpg")}
                  alt="Volunteers serving people outdoors at a community table"
                />
                <div className="image-card-body">
                  <div className="card-topline">Outreach</div>
                  <h3>Community Outreach</h3>
                  <p>
                    Serve neighbours with compassion through simple, practical
                    acts of care.
                  </p>
                  <div className="ministry-meta">
                    Monthly opportunities · Local partnerships
                  </div>
                  <Link className="text-link" href="/contact">
                    Ask about outreach
                  </Link>
                </div>
              </article>
              <article className="image-card ministry-card" data-reveal>
                <img
                  src={asset("assets/images/pexels-youth-nights.jpg")}
                  alt="Young adults talking around a table"
                />
                <div className="image-card-body">
                  <div className="card-topline">Students</div>
                  <h3>Youth Nights</h3>
                  <p>
                    Friendship, worship, and honest discussion for middle and
                    high school students.
                  </p>
                  <div className="ministry-meta">
                    Grades 6–12 · Wednesdays at 7:00 PM
                  </div>
                  <Link className="text-link" href="/contact">
                    Ask about youth nights
                  </Link>
                </div>
              </article>
              <article className="image-card ministry-card" data-reveal>
                <img
                  src={asset("assets/images/pexels-sunday-team.jpg")}
                  alt="People gathered in worship and prayer during a church service"
                />
                <div className="image-card-body">
                  <div className="card-topline">Serve</div>
                  <h3>Sunday Team</h3>
                  <p>
                    Help welcome people through hospitality, music, kids, and
                    service support.
                  </p>
                  <div className="ministry-meta">
                    First step: one Sunday a month
                  </div>
                  <Link className="text-link" href="/contact">
                    Join a Sunday team
                  </Link>
                </div>
              </article>
            </div>
          </section>
          <section className="section section-last">
            <div className="container split-grid split-grid-tight">
              <div className="image-frame" data-reveal>
                <img
                  src={asset("assets/images/pexels-church-exterior.jpg")}
                  alt="Church exterior in warm evening light"
                />
              </div>
              <div data-reveal>
                <div className="kicker">Getting involved</div>
                <h2 className="section-title">Start with one step.</h2>
                <p className="section-intro">
                  You do not need to do everything at once. Start with the next
                  right step and we will help you from there.
                </p>
                <div className="feature-grid ministry-path-grid">
                  <article className="feature-card">
                    <h3>Visit</h3>
                    <p>Join us this Sunday and meet people in person.</p>
                  </article>
                  <article className="feature-card">
                    <h3>Connect</h3>
                    <p>
                      Tell us your stage of life and we will point you clearly.
                    </p>
                  </article>
                  <article className="feature-card">
                    <h3>Serve</h3>
                    <p>Try one team, one role, and one simple next step.</p>
                  </article>
                </div>
                <div className="hero-actions">
                  <Link className="button" href="/contact">
                    Ask About Ministries
                  </Link>
                  <Link className="button button-secondary" href="/contact">
                    Plan a Visit
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
