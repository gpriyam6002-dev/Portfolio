import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import "./ProjectForm.css"

// ── Data (cleaner than inline JSX) ──────────────────
const MARQUEE_ITEMS = [
  "Web Design", "Brand Identity", "Logo Design", "Promo Videos",
  "Banner Design", "Social Media", "UI / UX Design", "Digital Marketing",
];

const PROJECTS = [
  {
    url:        "https://gpriyam6002-dev.github.io/gym-web/",
    burl:       "gpriyam6002-dev.github.io/gym-web",
    thumbClass: "wt-gym",
    name:       "EVOLVE FITNESS",
    sub:        "Elite Performance Engineering",
    tags:       ["Web Design", "Frontend Dev", "Dark Theme"],
    title:      "Evolve Fitness",
    desc:       "A cinematic, high-performance gym website with scroll animations, a bento-style class showcase, membership tiers, and a lead capture form. Built for conversion.",
  },
  {
    url:        "https://gpriyam6002-dev.github.io/resturant-web/",
    burl:       "gpriyam6002-dev.github.io/resturant-web",
    thumbClass: "wt-res",
    name:       "THE MONSOON VERANDAH",
    sub:        "Artisanal Desi Fusion Café",
    tags:       ["Web Design", "Interactive Menu", "Reservation System"],
    title:      "The Monsoon Verandah",
    desc:       "A premium café & bistro website with a filterable interactive menu, table reservation form, and warm visual branding rooted in Indian craftsmanship.",
  },
];

const SERVICES = [
  { icon: "🌐", title: "Website Design", desc: "Custom-built, mobile-first websites that make your brand look world-class and turn visitors into customers." },
  { icon: "🎬", title: "Promo Videos",   desc: "High-energy promotional videos and reels that tell your brand story and stop the scroll on every platform." },
  { icon: "✏️", title: "Logo Design",    desc: "Timeless, memorable logos built with intention — your visual identity that speaks before you do." },
  { icon: "🎨", title: "Banner & Print", desc: "Eye-catching banners, posters, and print materials that make a bold impression everywhere you show up." },
];

const STEPS = [
  { n: "01", title: "Discovery", desc: "We dig into your brand, goals, and audience to build a solid strategic foundation." },
  { n: "02", title: "Design",    desc: "Detailed mockups and prototypes. You review, give feedback, and we refine until it's perfect." },
  { n: "03", title: "Build",     desc: "Clean, fast, and responsive code that brings the design to life exactly as planned." },
  { n: "04", title: "Launch",    desc: "We go live, hand over all assets, and stay available for support whenever you need us." },
];

const WHY_ITEMS = [
  "Direct communication — no middlemen",
  "Fast turnaround without cutting corners",
  "Affordable pricing for startups & small businesses",
  "Post-launch support included",
];

const STATS = [
  { n: "2",    l: "Projects Launched", accent: true },
  { n: "100%", l: "On-Time Delivery" },
  { n: "2",    l: "Industries Served" },
  { n: "∞",    l: "Revisions Offered" },
];

// ── Component ────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [showTop,  setShowTop]    = useState(false);

  useEffect(() => {
    // Scroll reveal
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("on"); revealObs.unobserve(e.target); }
      }),
      { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
    );
    document.querySelectorAll(".r").forEach((el) => revealObs.observe(el));

    // Scroll state
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => { revealObs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Nav ───────────────────────────────────── */}
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <div className="nav-i">
          <a href="#" className="logo">krea<span>.</span></a>

          {/* Desktop links */}
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right side: CTA + burger */}
          <div className="nav-right">
            <Link to="/start-project" className="nav-cta">Let's Talk</Link>
            <button
              className={`burger ${menuOpen ? "burger-open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        <a href="#work"     onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#process"  onClick={closeMenu}>Process</a>
        <a href="#contact"  onClick={closeMenu}>Contact</a>
        <Link to="/start-project" className="mobile-nav-cta" onClick={closeMenu}>
          Start a Project →
        </Link>
      </div>

      {/* ── Hero ──────────────────────────────────── */}
      <section id="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="hero-inner">
          <div>
            {/* Status badge */}
            <div className="status-badge r">
              <span className="status-dot" />
              Currently open for projects
            </div>

            {/* Studio badge */}
            <div className="hero-badge r d1">
              <span className="hero-badge-dot" />
              Creative &amp; Marketing Studio
            </div>

            <h1 className="hero-h1 r d2">
              We build brands<br />that people
              <em>remember.</em>
            </h1>
            <p className="hero-sub r d3">
              From high-converting websites to scroll-stopping visuals — we help
              businesses grow their digital presence with strategy and craft.
            </p>

            <div className="hero-acts r d4">
              <a href="#work" className="btn-dark">View Our Work →</a>
              <Link to="/start-project" className="btn-ghost">Start a Project</Link>
            </div>

            {/* Trust strip */}
            <div className="hero-trust r d4">
              <span>✓ No hidden fees</span>
              <span className="trust-sep" />
              <span>✓ Fast delivery</span>
              <span className="trust-sep" />
              <span>✓ Free consultation</span>
            </div>
          </div>

          {/* Floating project preview cards */}
          <div className="hero-right">
            <a href="https://gpriyam6002-dev.github.io/gym-web/" target="_blank" rel="noreferrer" className="fcard fcard-gym">
              <div className="browser-bar">
                <div className="bdots"><span className="bd1" /><span className="bd2" /><span className="bd3" /></div>
                <div className="burl">gpriyam6002-dev.github.io/gym-web</div>
              </div>
              <div className="fcard-thumb gym-t">
                <div className="fcard-thumb-name">EVOLVE FITNESS</div>
                <div className="fcard-thumb-cat">Web Design · Kolkata</div>
              </div>
              <div className="fcard-foot">
                <span className="fcard-foot-n">Evolve Fitness</span>
                <span className="fcard-foot-t">Gym &amp; Fitness</span>
              </div>
            </a>

            <a href="https://gpriyam6002-dev.github.io/resturant-web/" target="_blank" rel="noreferrer" className="fcard fcard-resto">
              <div className="browser-bar">
                <div className="bdots"><span className="bd1" /><span className="bd2" /><span className="bd3" /></div>
                <div className="burl">gpriyam6002-dev.github.io/resturant-web</div>
              </div>
              <div className="fcard-thumb res-t">
                <div className="fcard-thumb-name">MONSOON VERANDAH</div>
                <div className="fcard-thumb-cat">Web Design · Hyderabad</div>
              </div>
              <div className="fcard-foot">
                <span className="fcard-foot-n">The Monsoon Verandah</span>
                <span className="fcard-foot-t">Café &amp; Bistro</span>
              </div>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <div className="scroll-hint-line" />
          <span hidden>scroll</span>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────── */}
      <div className="mq">
        <div className="mq-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((label, i) => (
            <div key={i} className={`mq-item ${i % 2 === 0 ? "hi" : ""}`}>
              <span className="mq-dot" />{label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Work ──────────────────────────────────── */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="r"><p className="sec-eye">Selected Work</p></div>
          <h2 className="work-h r d1">Projects we're proud of</h2>

          <div className="work-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className={`wcard r ${i > 0 ? "d1" : ""}`}>
                <div className="wcard-browser">
                  <div className="bdots"><span className="bd1" /><span className="bd2" /><span className="bd3" /></div>
                  <div className="burl">{p.burl}</div>
                </div>

                {/* Thumbnail with hover overlay */}
                <div className={`wcard-thumb ${p.thumbClass}`}>
                  <div className="wcard-thumb-inner">
                    <span className="wcard-thumb-name">{p.name}</span>
                    <span className="wcard-thumb-sub">{p.sub}</span>
                  </div>
                  <a href={p.url} target="_blank" rel="noreferrer" className="wcard-overlay">
                    <span>Visit Live Site ↗</span>
                  </a>
                </div>

                <div className="wcard-body">
                  <div className="wcard-tags">
                    {p.tags.map((t) => <span key={t} className="wtag">{t}</span>)}
                  </div>
                  <h3 className="wcard-title">{p.title}</h3>
                  <p className="wcard-desc">{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noreferrer" className="wcard-link">
                    Visit Live Site →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="work-more r">
            More projects in the works —{" "}
            <Link to="/start-project" className="work-more-link">be our next client →</Link>
          </p>
        </div>
      </section>

      {/* ── Services ──────────────────────────────── */}
      <section className="srv-sec sec" id="services">
        <div className="wrap">
          <div className="srv-hdr">
            <p className="sec-eye r" style={{ justifyContent: "center" }}>What We Offer</p>
            <h2 className="srv-h r d1">End-to-end creative services</h2>
            <p className="srv-sub r d2">
              Everything your brand needs to stand out — designed with intention, delivered with care.
            </p>
          </div>
          <div className="srv-grid">
            {SERVICES.map(({ icon, title, desc }, i) => (
              <div key={title} className={`srv r${i > 0 ? ` d${i}` : ""}`}>
                <div className="srv-icon">{icon}</div>
                <h3 className="srv-t">{title}</h3>
                <p className="srv-p">{desc}</p>
                <Link to="/start-project" className="srv-link">Get started →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────── */}
      <section className="sec" id="process">
        <div className="wrap">
          <div className="proc-hdr">
            <p className="sec-eye r" style={{ justifyContent: "center" }}>How We Work</p>
            <h2 className="proc-h r d1">From idea to live</h2>
            <p className="proc-sub r d2">
              A clear, collaborative process so you always know where your project stands.
            </p>
          </div>
          <div className="steps">
            {STEPS.map(({ n, title, desc }, i) => (
              <div key={n} className={`step r${i > 0 ? ` d${i}` : ""}`}>
                <div className="step-n">{n}</div>
                <h4 className="step-t">{title}</h4>
                <p className="step-p">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────── */}
      <section className="why-sec sec">
        <div className="wrap">
          <div className="why-inner">
            <div className="r">
              <p className="why-label">Why Choose Us</p>
              <h2 className="why-h">Small team.<br />Serious work.<br />Real results.</h2>
              <p className="why-p">
                We're not an agency with 50 people handing your project off to someone
                you've never met. You work directly with us — the people who actually
                design and build your brand.
              </p>
              <ul className="why-list">
                {WHY_ITEMS.map((item) => (
                  <li key={item} className="why-item">
                    <span className="why-check">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-right r d1">
              {STATS.map(({ n, l, accent }) => (
                <div key={l} className={`stat-box${accent ? " stat-box-acc" : ""}`}>
                  <div className="stat-n">{n}</div>
                  <div className="stat-l">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="cta-sec sec" id="contact">
        <div className="cta-blob cta-blob-1" />
        <div className="cta-blob cta-blob-2" />
        <div className="wrap">
          <div className="cta-inner r">
            <div className="cta-status">
              <span className="status-dot status-dot-lt" />
              Currently accepting new projects
            </div>
            <h2 className="cta-h">
              Have a project<br /><em>in mind?</em>
            </h2>
            <p className="cta-sub">
              Whether it's a full website, a brand identity, or just a logo — we'd
              genuinely love to hear about it. First conversation is always free.
            </p>
            <Link to="/start-project" className="btn-acc">Start a Project →</Link>
            <p className="cta-note">
              Usually reply within 24 hours · Based in India · Working globally
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer>
        {/* Top: brand + columns */}
        <div className="ft-top">
          <div className="wrap">
            <div className="ft-grid">
              <div className="ft-brand">
                <div className="ft-logo">krea<span>.</span></div>
                <p className="ft-tagline">
                  We build brands that people remember. Based in India, working globally.
                </p>
                <div className="ft-social">
                  <a href="#" className="ft-soc-link" title="Instagram">Ig</a>
                  <a href="#" className="ft-soc-link" title="LinkedIn">Li</a>
                  <a href="#" className="ft-soc-link" title="Behance">Be</a>
                </div>
              </div>

              <div className="ft-col">
                <p className="ft-col-h">Services</p>
                <a href="#services">Website Design</a>
                <a href="#services">Logo Design</a>
                <a href="#services">Promo Videos</a>
                <a href="#services">Banner &amp; Print</a>
              </div>

              <div className="ft-col">
                <p className="ft-col-h">Company</p>
                <a href="#work">Our Work</a>
                <a href="#process">Our Process</a>
                <Link to="/start-project">Start a Project</Link>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="wrap">
            <div className="ft">
              <span className="ft-copy">© 2024 Krea Studio. All rights reserved.</span>
              <div className="ft-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Scroll to top ─────────────────────────── */}
      <button
        className={`scroll-top ${showTop ? "scroll-top-show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}