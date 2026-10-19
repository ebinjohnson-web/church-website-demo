import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { DemoForm, FAQ, Reviews } from "../../components/Interactive";
import { asset } from "../../lib/site";
export const metadata = {
  title: "Contact | Grace Harbour Church",
  description: "Contact Grace Harbour Church, a fictional church website demo.",
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
                <div className="kicker">Contact</div>
                <h1 className="page-title">We’d love to hear from you.</h1>
                <p className="page-text">
                  Visit on Sunday, send a message, or reach out with a question.
                </p>
              </div>
              <div className="page-hero-media" data-reveal>
                <img
                  src={asset("assets/images/contact-church.jpg")}
                  alt="Church building at sunset"
                />
              </div>
            </div>
          </section>
          <section className="section section-last">
            <div className="container contact-grid">
              <div className="contact-stack" data-reveal>
                <article className="detail-card">
                  <h2>Visit Us</h2>
                  <p>
                    214 Wellington Avenue
                    <br />
                    Riverside, ON N0A 0A0
                  </p>
                </article>
                <article className="detail-card">
                  <h2>Call or Email</h2>
                  <p>
                    519-555-0123
                    <br />
                    hello@graceharbour.church
                  </p>
                </article>
                <article className="detail-card">
                  <h2>Service Times</h2>
                  <p>
                    Sunday
                    <br />
                    9:00 AM &amp; 11:00 AM
                  </p>
                </article>
              </div>
              <div className="form-panel" data-reveal>
                <h2>Send a Message</h2>
                <DemoForm data-demo-form>
                  <div className="input-row">
                    <label>
                      <span>Name</span>
                      <input type="text" name="name" placeholder="Your name" />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                      />
                    </label>
                  </div>
                  <label>
                    <span>Message</span>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="How can we help?"
                      defaultValue={""}
                    />
                  </label>
                  <button className="button" type="submit">
                    Send Message
                  </button>
                </DemoForm>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
