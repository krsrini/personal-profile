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
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span className="statusDot" /> Open to conversations
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow reveal">Independent builder · AI × product × systems</div>
        <h1 className="reveal delay1">
          I make complex ideas
          <span className="italicLine">feel inevitable.</span>
        </h1>
        <div className="heroBottom reveal delay2">
          <p>
            I&apos;m Srini Ram—a curious, detail-minded builder working where technology,
            design, and better ways of working meet.
          </p>
          <a className="roundLink" href="#work" aria-label="Explore selected work">
            Explore
            <br />
            the work <span>↓</span>
          </a>
        </div>
        <div className="heroRule" />
      </section>

      <section className="work shell" id="work">
        <header className="sectionHeader">
          <span>Selected directions</span>
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
            “The best work is clear enough to explain, useful enough to keep,
            and considered enough to feel human.”
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
          <div className="footerMeta">
            <span>Based in California · Working everywhere</span>
            <span>© {new Date().getFullYear()} Srini Ram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
