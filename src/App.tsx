import { useState } from "react";
import {
  ArrowUpRight,
  Play,
  X,
  List,
  BookOpen,
  ChatsCircle,
  Microphone,
  Heart,
  CaretDown,
} from "@phosphor-icons/react";
import { EarlyAccess } from "./components/EarlyAccess";
import { Demo } from "./components/Demo";
import { faqs } from "./content/faq";
import "./styles.css";
const A = import.meta.env.BASE_URL + "assets/";

export function App() {
  const [menu, setMenu] = useState(false);
  const [access, setAccess] = useState(false);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="nav wrap">
          <a href="#" className="brand" aria-label="Our Story home">
            <img src={A + "ourstory-logo.svg"} alt="Our Story" />
          </a>
          <nav className={menu ? "open" : ""} aria-label="Main navigation">
            {[
              ["How it works", "#how-it-works"],
              ["Product demo", "#demo"],
              ["Our mission", "#mission"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <button className="button nav-cta" onClick={() => setAccess(true)}>
            Get early access <ArrowUpRight size={17} />
          </button>
          <button
            className="menu-button"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={25} /> : <List size={25} />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <span className="eyebrow">ENGLISH PRACTICE. FAMILY TIME.</span>
            <h1>
              Practice English.
              <br />
              <em>Tell a story together.</em>
            </h1>
            <p>
              A storytelling app for parents learning English and children growing up bilingual. Take turns reading, describing pictures, and creating your own story—on a phone and a tablet.
            </p>
            <div className="hero-actions">
              <button
                className="button primary"
                onClick={() => setAccess(true)}
              >
                Get early access <ArrowUpRight size={19} />
              </button>
              <a className="watch" href="#demo">
                <Play size={16} weight="fill" /> Watch the demo
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-dot" /> For parents learning English &
              children growing up bilingual
            </div>
          </div>
          <div className="hero-visual">
            <img className="hero-texture" src={A + "product-hero.png"} alt="" />
            <div className="visual-kicker">A WORLD YOU CREATE TOGETHER</div>
            <div className="hero-tablet">
              <img
                src={A + "parent-poster.jpg"}
                alt="Child’s storytelling screen with forest illustrations and story prompts"
              />
            </div>
            <div className="hero-phone">
              <img
                className="phone-screen"
                src={A + "child-poster.jpg"}
                alt="Parent’s story selection screen"
              />
              <img src={A + "phone.png"} alt="" />
            </div>
            <div className="visual-bottom">
              <span>
                A little imagination.
                <br />A lot more connection.
              </span>
              <a href="#demo" aria-label="Explore the Our Story demo">
                <ArrowUpRight size={26} />
              </a>
            </div>
          </div>
        </section>
        <section className="product-facts wrap" aria-label="The Our Story experience">
          <div><BookOpen size={24} /><span>Stories you create together</span></div>
          <div><ChatsCircle size={24} /><span>Reading, listening & speaking</span></div>
          <div><Heart size={24} /><span>Designed around family time</span></div>
        </section>
        <div className="demo-wrap"><div className="wrap"><Demo /></div></div>
        <section id="how-it-works" className="how section wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">THREE STEPS TO A SHARED STORY</span>
              <h2>
                How Our Story works
              </h2>
            </div>
            <p>
              Different screens. Shared imagination.
              <br />
              Everyone has a part to play.
            </p>
          </div>
          <div className="steps">
            {[
              {
                n: "01",
                icon: BookOpen,
                title: "Find your adventure",
                text: "Choose a story that sparks your curiosity. Get ready with your phone and your child’s tablet.",
              },
              {
                n: "02",
                icon: ChatsCircle,
                title: "Take turns. Tune in.",
                text: "Read and describe what you see. Your partner listens and chooses pictures—then you switch roles.",
              },
              {
                n: "03",
                icon: Microphone,
                title: "Make it your own",
                text: "Bring your ideas together into a new story. Record it, revisit it, and keep creating.",
              },
            ].map((s) => (
              <article key={s.n}>
                <div className="step-top">
                  <span>{s.n}</span>
                  <s.icon size={30} weight="light" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="benefits section wrap">
          <span className="eyebrow">SMALL MOMENTS, SHARED POSSIBILITIES</span>
          <div className="benefits-grid">
            <h2>
              Why learn
              <br />
              <em>through stories?</em>
            </h2>
            <div className="benefit-list">
              <article>
                <Heart size={24} weight="light" />
                <div>
                  <h3>Time that brings you together</h3>
                  <p>
                    Make room for playful, face-to-face conversation, with a
                    story to guide you.
                  </p>
                </div>
              </article>
              <article>
                <ChatsCircle size={24} weight="light" />
                <div>
                  <h3>English with a reason to use it</h3>
                  <p>
                    Practice reading, listening, and speaking as part of a
                    shared adventure.
                  </p>
                </div>
              </article>
              <article>
                <BookOpen size={24} weight="light" />
                <div>
                  <h3>A story that belongs to both of you</h3>
                  <p>
                    Create something together, then come back to it for more
                    practice and new ideas.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="mission" className="mission wrap">
          <div className="mission-label">
            <span className="eyebrow">WHY WE’RE HERE</span>
            <Heart size={35} weight="light" />
          </div>
          <h2>
            Language can bring us closer.
            <br />
            <em>Let’s start at home.</em>
          </h2>
          <p>
            Families have so much to share. When parents and children feel more
            comfortable in different languages, everyday conversations can
            become harder. We’re building Our Story to make English practice a
            warm, creative experience that families can enjoy together.
          </p>
          <a className="text-button" href="mailto:info@ourstory.team">
            Get to know us <ArrowUpRight size={18} />
          </a>
        </section>
        <section id="faq" className="faq section wrap">
          <div>
            <span className="eyebrow">A FEW THINGS YOU MIGHT WONDER</span>
            <h2>
              Before your
              <br />
              <em>first chapter.</em>
            </h2>
            <p>
              Have another question?
              <br />
              <a href="mailto:info@ourstory.team">
                We’d love to hear from you.
              </a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <CaretDown size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing">
          <div className="wrap">
            <span className="eyebrow">YOUR FAMILY’S NEXT ADVENTURE</span>
            <h2>
              Every family has a story.
              <br />
              <em>Let’s create yours.</em>
            </h2>
            <button className="button light" onClick={() => setAccess(true)}>
              Get early access <ArrowUpRight size={19} />
            </button>
            <p>In development. Built with families in mind.</p>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a href="#" className="brand">
            <img src={A + "ourstory-logo.svg"} alt="Our Story" />
          </a>
          <p>
            Stories we create.
            <br />
            Connections we grow.
          </p>
          <a href="mailto:info@ourstory.team">
            info@ourstory.team <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Our Story, Inc.</span>
          <span>ourstory.team</span>
          <a href="#faq">Questions & early access</a>
        </div>
      </footer>
      <EarlyAccess open={access} onClose={() => setAccess(false)} />
    </>
  );
}
