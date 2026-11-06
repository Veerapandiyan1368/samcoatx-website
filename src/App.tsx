import { useState, type FormEvent, type ReactNode } from "react"

const images = {
  hero: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1600&q=88",
  painter:
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
  living:
    "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=1200&q=85",
  lounge:
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=1200&q=85",
  detail:
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
  exterior:
    "https://images.unsplash.com/photo-1769805446592-35a4ed882bc4?auto=format&fit=crop&w=1200&q=85",
  office:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  office2:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  contemporary:
    "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?auto=format&fit=crop&w=1200&q=85",
  cta: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?auto=format&fit=crop&w=1800&q=88",
}

const nav = [
  ["Home", "home"],
  ["About Us", "about"],
  ["Services", "services"],
  ["Our Work", "work"],
  ["Colour Preview", "colours"],
  ["Contact", "contact"],
]

const services = [
  [
    "Interior Painting",
    "Beautiful interior finishes for bedrooms, living rooms, kitchens and more.",
    images.living,
    "home",
  ],
  [
    "Exterior Painting",
    "Durable finishes that protect and enhance the character of your property.",
    images.exterior,
    "sun",
  ],
  [
    "Residential Painting",
    "Complete painting solutions for apartments, houses and villas.",
    images.lounge,
    "brush",
  ],
  [
    "Commercial Painting",
    "Professional painting for offices, shops and contemporary workspaces.",
    images.office,
    "building",
  ],
  [
    "Texture & Decorative Painting",
    "Unique textures, artistic finishes and distinctive wall designs.",
    images.detail,
    "spark",
  ],
  [
    "Colour Consultation",
    "Expert colour guidance to create the perfect atmosphere for your space.",
    images.contemporary,
    "palette",
  ],
]

const benefits = [
  ["award", "Experienced Painting Professionals"],
  ["shield", "Premium Quality Materials"],
  ["focus", "Clean & Precise Finishing"],
  ["quote", "Transparent Quotations"],
  ["clock", "On-Time Project Completion"],
  ["heart", "Customer-Focused Service"],
]

const projects = [
  {
    title: "Warm Minimal Residence",
    type: "Interior Painting",
    image: images.hero,
    span: "project-tall",
  },
  {
    title: "Contemporary Villa Exterior",
    type: "Exterior Painting",
    image: images.exterior,
    span: "",
  },
  {
    title: "Textured Feature Wall",
    type: "Texture Painting",
    image: images.detail,
    span: "",
  },
  {
    title: "Refined Family Lounge",
    type: "Residential Projects",
    image: images.lounge,
    span: "project-wide",
  },
  {
    title: "Modern Creative Office",
    type: "Commercial Projects",
    image: images.office2,
    span: "",
  },
  {
    title: "Soft Neutral Living",
    type: "Interior Painting",
    image: images.living,
    span: "",
  },
]

const steps = [
  [
    "Share Your Requirements",
    "Tell us about your space, style and painting needs.",
  ],
  [
    "Site Visit & Quotation",
    "We assess your space and provide a clear quotation.",
  ],
  [
    "Professional Painting",
    "Our team executes every detail with skill and care.",
  ],
  [
    "Inspection & Handover",
    "We review the finish and hand over your transformed space.",
  ],
]

function Icon({ name, size = 22 }: { name: string size?: number }) {
  const paths: Record<string, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    brush: (
      <>
        <path d="m14 4 6 6-9 9H5v-6z" />
        <path d="m13 5 2-2 6 6-2 2M5 19c-1 0-2 .7-2 2h8c0-1.3-1-2-2-2" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V4h11v17M15 9h5v12M8 8h3m-3 4h3m-3 4h3" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1.4c1.5 0 2.2-1.8 1.1-2.8-.8-.7-.3-2.2.8-2.2H18a3 3 0 0 0 3-3c0-5.5-4-10-9-10Z" />
        <circle cx="7.5" cy="10" r=".7" />
        <circle cx="10" cy="6.8" r=".7" />
        <circle cx="14" cy="7" r=".7" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="m8 14-1 8 5-3 5 3-1-8M9.5 9l1.5 1.5L15 7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 4.5 5v6c0 4.8 3 8.6 7.5 11 4.5-2.4 7.5-6.2 7.5-11V5z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    focus: (
      <>
        <path d="M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    quote: (
      <>
        <path d="M4 6h16v12H4zM8 10h8m-8 4h5" />
        <path d="M7 3v3m10-3v3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    heart: (
      <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14m-5-5 5 5-5 5" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.7-1.5-6.5-4.3-8-8l2-2z" />
    ),
    mail: (
      <>
        <path d="M3 5h18v14H3z" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".6" />
      </>
    ),
    facebook: (
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V2.5c-.6-.1-1.8-.3-3-.3-3 0-5 1.8-5 5.2V9H7v4h3v8" />
    ),
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`logo ${light ? "logo-light" : ""}`}
      aria-label="SAM CoatX home"
    >
      <span className="logo-mark">
        <span className="roof">⌃</span>
        <span className="roller" />
      </span>
      <span>
        <b>SAM</b>
        <strong>
          Coat<span>X</span>
        </strong>
        <small>PAINTING · PERFECTED</small>
      </span>
    </a>
  )
}

function Button({
  children,
  href,
  secondary = false,
  light = false,
}: {
  children: ReactNode
  href: string
  secondary?: boolean
  light?: boolean
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""} ${
        light ? "button-light" : ""
      }`}
      href={href}
    >
      {children}
      <Icon name="arrow" size={17} />
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow?: string
  title: ReactNode
  description?: string
  light?: boolean
  align?: "center" | "left"
}) {
  return (
    <div
      className={`section-heading ${align === "left" ? "align-left" : ""} ${
        light ? "heading-light" : ""
      }`}
    >
      {eyebrow && (
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState("All Projects")
  const [sent, setSent] = useState(false)
  const categories = [
    "All Projects",
    ...Array.from(new Set(projects.map((p) => p.type))),
  ]
  const visibleProjects =
    category === "All Projects"
      ? projects
      : projects.filter((p) => p.type === category)

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <div className="nav container">
          <Logo />
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Primary navigation"
          >
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Button href="#contact">Get Free Quote</Button>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grain" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                Premium painting in Coimbatore
              </p>
              <h1>
                Transform Your Walls.
                <br />
                <em>Elevate Your Space.</em>
              </h1>
              <p className="hero-lead">
                Bring your spaces to life with professional painting services,
                beautiful colour combinations and exceptional finishing.
              </p>
              <div className="button-row">
                <Button href="#contact">Get Free Quote</Button>
                <Button href="#work" secondary>
                  Explore Our Work
                </Button>
              </div>
              <div className="trust-row">
                {[
                  "Professional Painting Team",
                  "Premium Finishing",
                  "Residential & Commercial",
                ].map((item) => (
                  <div key={item}>
                    <span>
                      <Icon name="check" size={13} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image">
                <img
                  src={images.hero}
                  alt="Warm, professionally finished modern living room"
                />
              </div>
              <div className="hero-note">
                <span>Made for living</span>
                <strong>
                  Beautiful finishes.
                  <br />
                  Lasting impressions.
                </strong>
              </div>
              <div className="paint-stroke" />
            </div>
          </div>
          <a href="#about" className="scroll-cue">
            Scroll to discover <span>↓</span>
          </a>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-images">
              <img
                className="about-main"
                src={images.painter}
                alt="Professional painter carefully applying paint to an interior wall"
              />
              <div className="experience-card">
                <strong>Detail</strong>
                <span>in every coat</span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="The SAM CoatX approach"
                title={
                  <>
                    Painting Beyond <em>Expectations</em>
                  </>
                }
                align="left"
              />
              <p className="large-copy">
                At SAM CoatX, we believe every wall deserves a perfect finish.
                We combine painting expertise, creative colour selection and
                professional execution to transform ordinary spaces into
                beautiful environments.
              </p>
              <p>
                From careful preparation to the final inspection, our process is
                designed around precision, clean execution and complete customer
                satisfaction.
              </p>
              <div className="quality-list">
                {[
                  "Quality-focused painting process",
                  "Meticulous attention to detail",
                  "Customer satisfaction at every stage",
                ].map((item) => (
                  <div key={item}>
                    <span>
                      <Icon name="check" size={15} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <Button href="#services">Discover Our Services</Button>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Complete Painting <em>Solutions</em>
                </>
              }
              description="Professional painting services thoughtfully designed for every kind of space."
            />
            <div className="service-grid">
              {services.map(([title, desc, image, icon], i) => (
                <article className="service-card" key={title}>
                  <div className="service-image">
                    <img src={image} alt={`${title} service`} />
                    <span>0{i + 1}</span>
                  </div>
                  <div className="service-body">
                    <div className="service-icon">
                      <Icon name={icon} />
                    </div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <a href="#contact">
                      Enquire Now <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why">
          <div className="container">
            <SectionHeading
              eyebrow="The CoatX difference"
              title={
                <>
                  Why Choose <em>SAM CoatX?</em>
                </>
              }
              description="A reliable team, a refined process and a finish you will be proud to live with."
              light
            />
            <div className="benefit-grid">
              {benefits.map(([icon, title]) => (
                <div className="benefit" key={title}>
                  <span>
                    <Icon name={icon} size={26} />
                  </span>
                  <h3>{title}</h3>
                  <p>
                    Professional care and attention, from first conversation to
                    final handover.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio" id="work">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Spaces We’ve <em>Transformed</em>
                </>
              }
              description="Explore our painting work and discover the difference thoughtful colour and fine finishing can make."
            />
            <div
              className="filter-row"
              role="tablist"
              aria-label="Project categories"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={category === item ? "active" : ""}
                  role="tab"
                  aria-selected={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article
                  className={`project-card ${project.span}`}
                  key={project.title}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                    <span>
                      <Icon name="arrow" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <div className="center-button">
              <Button href="#contact" secondary>
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        <section className="section colours" id="colours">
          <div className="container colour-grid">
            <div className="colour-copy">
              <SectionHeading
                eyebrow="Colour inspiration"
                title={
                  <>
                    Find the Perfect Colour for <em>Your Space</em>
                  </>
                }
                align="left"
              />
              <p>
                Every colour tells a story. Discover shades and combinations
                that reflect your personality and transform your environment.
              </p>
              <div className="palette-list">
                {[
                  [
                    "Calm Neutrals",
                    ["#E9DDC9", "#F8F5EF", "#A89E8C", "#D6C7B4"],
                  ],
                  ["Warm Earth", ["#B58A56", "#C5A27B", "#8C5E43", "#E2C8A8"]],
                  [
                    "Modern Heritage",
                    ["#23352F", "#879184", "#B8BBAE", "#343B38"],
                  ],
                  [
                    "Soft Elegance",
                    ["#DDD0C3", "#C2B7AA", "#F0E9DF", "#766E65"],
                  ],
                ].map(([name, colors]) => (
                  <div className="palette-item" key={name as string}>
                    <div>
                      {(colors as string[]).map((c) => (
                        <span key={c} style={{ background: c }} />
                      ))}
                    </div>
                    <p>{name as string}</p>
                  </div>
                ))}
              </div>
              <Button href="#contact">Explore Colour Ideas</Button>
            </div>
            <div className="colour-visual">
              <img
                src={images.contemporary}
                alt="Contemporary living room with a refined neutral colour palette"
              />
              <div className="consult-card">
                <Icon name="palette" size={28} />
                <div>
                  <strong>Not sure which colour suits your space?</strong>
                  <p>Let our colour team help you choose.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="container">
            <SectionHeading
              eyebrow="Our process"
              title={
                <>
                  Simple. Professional. <em>Hassle-Free.</em>
                </>
              }
              description="A clear four-step journey from your first idea to a beautifully finished space."
            />
            <div className="process-line">
              {steps.map(([title, desc], i) => (
                <div className="process-step" key={title}>
                  <div className="step-number">0{i + 1}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <SectionHeading
              eyebrow="Customer stories"
              title={
                <>
                  What Our <em>Customers Say</em>
                </>
              }
              description="Sample testimonial content ready to be replaced with verified customer feedback."
            />
            <div className="testimonial-grid">
              {[1, 2, 3].map((i) => (
                <article className="testimonial-card" key={i}>
                  <div className="stars" aria-label="Sample five star rating">
                    ★★★★★
                  </div>
                  <blockquote>
                    “[Add a verified customer testimonial here. Share their
                    experience with the painting quality, process and service.]”
                  </blockquote>
                  <div className="customer">
                    <span>CP</span>
                    <div>
                      <strong>[Customer Name]</strong>
                      <p>[Project Type] · Sample content</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <img src={images.cta} alt="" />
          <div className="cta-overlay" />
          <div className="container cta-content">
            <p className="eyebrow">
              <span />
              Let’s create something beautiful
            </p>
            <h2>
              Ready to Transform
              <br />
              Your <em>Space?</em>
            </h2>
            <p>
              Let’s bring your vision to life with professional painting
              services from SAM CoatX.
            </p>
            <div className="button-row">
              <Button href="#contact" light>
                Request a Free Quote
              </Button>
              <Button href="#contact" secondary light>
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="Start your project"
              title={
                <>
                  Let’s Discuss Your <em>Painting Project</em>
                </>
              }
              description="Tell us a little about your space. We’ll get in touch to understand your requirements."
            />
            <div className="contact-grid">
              <form className="enquiry-form" onSubmit={submitForm}>
                <div className="field-grid">
                  <label>
                    Full Name
                    <input required name="name" placeholder="Your full name" />
                  </label>
                  <label>
                    Mobile Number
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Your mobile number"
                    />
                  </label>
                  <label>
                    Email Address
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    Service Required
                    <select required name="service" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map(([title]) => (
                        <option key={title}>{title}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Property Type
                    <select required name="property" defaultValue="">
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                  </label>
                  <label>
                    Location
                    <input
                      required
                      name="location"
                      placeholder="Area or city"
                    />
                  </label>
                </div>
                <label>
                  Project Description
                  <textarea
                    name="description"
                    rows={5}
                    placeholder="Tell us about the space, size, colours or timing..."
                  />
                </label>
                <label className="upload">
                  <input type="file" accept="image/*" multiple />
                  <span>＋</span>
                  <div>
                    <strong>
                      Upload Property Images <small>(optional)</small>
                    </strong>
                    <p>JPG or PNG files</p>
                  </div>
                </label>
                <button className="button submit" type="submit">
                  Send Enquiry <Icon name="arrow" size={17} />
                </button>
                {sent && (
                  <p className="success-message" role="status">
                    Thank you. Your sample enquiry has been captured in this
                    preview.
                  </p>
                )}
              </form>
              <aside className="contact-aside">
                <div>
                  <p className="eyebrow">
                    <span />
                    Contact details
                  </p>
                  <h3>
                    Prefer to speak
                    <br />
                    with our team?
                  </h3>
                  <p>
                    Reach out using the details below and we’ll help you plan
                    the right painting solution.
                  </p>
                </div>
                <div className="contact-list">
                  <div>
                    <span>
                      <Icon name="phone" />
                    </span>
                    <p>
                      Phone & WhatsApp<strong>[Business Phone Number]</strong>
                    </p>
                  </div>
                  <div>
                    <span>
                      <Icon name="mail" />
                    </span>
                    <p>
                      Email<strong>[Business Email]</strong>
                    </p>
                  </div>
                  <div>
                    <span>
                      <Icon name="pin" />
                    </span>
                    <p>
                      Service Area
                      <strong>
                        Coimbatore & surrounding areas, Tamil Nadu
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="map-placeholder">
                  <Icon name="pin" size={30} />
                  <strong>Coimbatore</strong>
                  <span>Business location map placeholder</span>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              Transform Your Walls.
              <br />
              Elevate Your Space.
            </p>
            <small>
              Premium residential and commercial painting with a focus on
              beautiful colour, clean execution and lasting quality.
            </small>
          </div>
          <div>
            <h4>Quick Links</h4>
            {nav.slice(0, 5).map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h4>Our Services</h4>
            {services.slice(0, 5).map(([title]) => (
              <a key={title} href="#services">
                {title}
              </a>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <p>[Business Phone Number]</p>
            <p>[Business Email]</p>
            <p>Coimbatore, Tamil Nadu</p>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
              <a href="#" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 SAM CoatX. All Rights Reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
