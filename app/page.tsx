const Arrow = () => <span aria-hidden="true">↗</span>;

const projects = [
  {
    number: "01",
    type: "AI systems",
    title: "From open question to working system",
    description:
      "I turn ambiguous ideas into practical AI workflows—shaping the experience, connecting the right tools, and making the result genuinely useful.",
    tags: ["Strategy", "Automation", "Prototyping"],
    accent: "violet",
  },
  {
    number: "02",
    type: "Product building",
    title: "Interfaces with a point of view",
    description:
      "I build clean, modern digital products where structure, interaction, and visual language work as one—not as separate layers.",
    tags: ["Product design", "Frontend", "Systems thinking"],
    accent: "coral",
  },
  {
    number: "03",
    type: "Better operations",
    title: "Less repetition. More leverage.",
    description:
      "I find the manual seams in everyday work and replace them with thoughtful systems that are faster, clearer, and easier to trust.",
    tags: ["Process design", "Integrations", "Clarity"],
    accent: "lime",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="KRS, back to top">
          KRS<span className="dot">.</span>
        </a>
        <div className="navLinks">
          <a href="#journey">Journey</a>
          <a href="#about">About</a>
          <a href="#beyond">Beyond work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span className="statusDot" /> Open to conversations
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow reveal">Data engineer · AI explorer · visual storyteller</div>
        <h1 className="reveal delay1">
          Data, stories &amp;
          <span className="italicLine">curious detours.</span>
        </h1>
        <div className="heroBottom reveal delay2">
          <div className="introWithPhoto">
            <img src="/srini-ram.jpg" alt="Srinivasan Ramarao" />
            <p>
              I&apos;m Srinivasan (KRS) Ramarao—a data and analytics leader with 25+ years
              of experience, now exploring what becomes possible when GenAI meets
              real-world systems and human imagination.
            </p>
          </div>
          <a className="roundLink" href="#journey" aria-label="Explore my journey">
            Explore
            <br />
            my journey <span>↓</span>
          </a>
        </div>
        <div className="heroRule" />
      </section>

      <section className="career shell" id="journey">
        <header className="sectionHeader">
          <span>Professional journey</span>
          <span className="sectionCount">2000 — now</span>
        </header>
        <div className="careerIntro">
          <h2>Building the data foundations behind ambitious ideas.</h2>
          <p>
            From enterprise platforms and multi-terabyte warehouses to modern cloud data
            and GenAI, my career has been a long practice in learning, scaling, and making
            complex systems dependable.
          </p>
        </div>
        <div className="careerStats">
          <div><strong>25+</strong><span>years in data &amp; software</span></div>
          <div><strong>9.5</strong><span>years at Oracle</span></div>
          <div><strong>MS</strong><span>Analytics · Georgia Tech</span></div>
          <div><strong>1.6K+</strong><span>LinkedIn community</span></div>
        </div>
        <div className="timeline">
          <article>
            <span>Now</span><div><h3>Staff Designated Support Engineer</h3><p>Snowflake · Data cloud, customer impact, and the next chapter of enterprise AI.</p></div>
          </article>
          <article>
            <span>2016—25</span><div><h3>Principal → Senior Principal Software Engineer</h3><p>Oracle · Nine and a half years building and leading at enterprise scale.</p></div>
          </article>
          <article>
            <span>Earlier</span><div><h3>Data engineering &amp; BI leadership</h3><p>Citrix, CSC, Hexaware, Ramco and consulting roles across cloud, warehousing, analytics, and ERP.</p></div>
          </article>
        </div>
        <div className="careerLinks">
          <a href="https://www.linkedin.com/in/krsrini/" target="_blank" rel="noreferrer">Full experience on LinkedIn <Arrow /></a>
          <a href="https://github.com/krsrini" target="_blank" rel="noreferrer">Projects on GitHub <Arrow /></a>
        </div>
      </section>

      <section className="work shell" id="work">
        <header className="sectionHeader">
          <span>What I&apos;m exploring</span>
          <span className="sectionCount">(03)</span>
        </header>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className={`projectCard ${project.accent}`} key={project.number}>
              <div className="cardTop">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="cardOrb" aria-hidden="true">
                <div />
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tagRow">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" id="about">
        <div className="shell statementInner">
          <span className="sectionLabel">How I think</span>
          <blockquote>
            “Keep learning. Keep building. Stay curious enough to begin again.”
          </blockquote>
          <div className="principles">
            <div>
              <span>01</span>
              <h3>Start with the real problem</h3>
              <p>Look past the request to understand what actually needs to change.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Make the invisible visible</h3>
              <p>Prototype early so ideas become concrete, discussable, and better.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Polish what earns it</h3>
              <p>Care deeply about the details that create confidence and momentum.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="beyond" id="beyond">
        <div className="shell beyondInner">
          <header className="sectionHeader lightHeader">
            <span>Beyond the screen</span>
            <span className="sectionCount">The rest of me</span>
          </header>
          <div className="beyondLead">
            <h2>I follow trails, stories, paws, and wild places.</h2>
            <p>
              Technology is part of my life, not the whole of it. The things I do away
              from a keyboard keep me observant, patient, and open to a better angle.
            </p>
          </div>
          <div className="hobbyGrid">
            {[
              ["01", "Hiking", "The long way up", "Miles on a trail reset my perspective—one switchback, summit, and quiet view at a time."],
              ["02", "Filmmaking", "Life in frames", "I love turning moments into visual stories: noticing light, pacing emotion, and finding the shot that says more."],
              ["03", "Dog lover", "Always a good walk", "Dogs have a talent for presence, joy, and getting us outside. I&apos;m happily part of their fan club."],
              ["04", "Nature explorer", "Curiosity, outdoors", "Forests, coastlines, mountains, and unfamiliar roads—I&apos;m drawn to places that make the world feel bigger."],
            ].map(([number, label, title, copy]) => (
              <article className="hobbyCard" key={number}>
                <div><span>{number}</span><span>{label}</span></div>
                <div className={`hobbyMark mark${number}`} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities shell">
        <header className="sectionHeader">
          <span>What I bring</span>
          <span className="sectionCount">Capabilities</span>
        </header>
        <div className="capabilityList">
          {[
            ["01", "AI & automation", "Workflows, agents, integrations, rapid experiments"],
            ["02", "Product thinking", "Framing, user journeys, feature shaping, prioritization"],
            ["03", "Design & build", "Modern interfaces, prototypes, responsive web experiences"],
            ["04", "Clear communication", "Narratives, documentation, decision-ready synthesis"],
          ].map(([number, title, detail]) => (
            <div className="capability" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerInner">
          <div className="footerKicker">Have an interesting problem?</div>
          <h2>Let&apos;s make something <em>matter.</em></h2>
          <a className="contactLink" href="mailto:krs_in@yahoo.com">
            Start a conversation <Arrow />
          </a>
          <div className="socialLinks" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/krsrini/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://www.instagram.com/krsrini_" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
            <a href="https://www.facebook.com/krsrini" target="_blank" rel="noreferrer">Facebook <Arrow /></a>
            <a href="https://github.com/krsrini" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <span className="whatsappHandle">WhatsApp <strong>@krsrini</strong></span>
          </div>
          <div className="footerMeta">
            <span>Based in California · Working everywhere</span>
            <span>© {new Date().getFullYear()} Srini Ram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
