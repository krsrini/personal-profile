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

const linkedinHighlights = [
  {
    label: "Story",
    kicker: "Family, memory, and gratitude",
    title: "I sat on this story for a while",
    description:
      "A personal reflection about carrying a story long enough to understand what it means, then finally sharing it.",
    href: "https://www.linkedin.com/posts/krsrini_ive-sat-on-this-story-for-a-while-and-kept-activity-7480312504842354688-MVBr",
    image: "/social/linkedin-1.png",
  },
  {
    label: "Post",
    kicker: "India vs Pakistan · CDN",
    title: "Why some live streams scale smoothly",
    description:
      "A practical look at high-traffic streaming, CDN behavior, and what live events teach us about resilient digital infrastructure.",
    href: "https://www.linkedin.com/posts/krsrini_indiavspakistan-indiavspakistan-cdn-activity-7299630060204961793-0ugL",
    image: "/social/linkedin-2.png",
  },
  {
    label: "Post",
    kicker: "OpenAI · AI chatbot",
    title: "Building a local chatbot with OpenAI API for fun",
    description:
      "A hands-on learning note about tinkering with the OpenAI API, building locally, and learning by making something real.",
    href: "https://www.linkedin.com/posts/krsrini_openai-ai-chatbot-ugcPost-7368904065969213443--vfx/",
    image: "/social/linkedin-3.png",
  },
];

const instagramMoments = [
  {
    number: "01",
    title: "Mission Peak Morning",
    description: "A recent Mission Peak hike with blue-sky views, steady miles, and a summit-state-of-mind reset.",
    href: "https://www.instagram.com/reel/Dbi3EUkvimb/",
    image: "/social/insta-1.png",
  },
  {
    number: "02",
    title: "Coyotes Before Sunrise",
    description: "A quiet trail moment turned wild: coyotes howling near the top before the day fully arrived.",
    href: "https://www.instagram.com/reel/Dbiy-07vh-S/",
    image: "/social/insta-2.png",
  },
  {
    number: "03",
    title: "Trailside Standoff",
    description: "A rattlesnake and ground squirrel face-off on the Mission Peak trail, nature drama in miniature.",
    href: "https://www.instagram.com/reel/DabhedWP7nK/",
    image: "/social/insta-3.png",
  },
];

const collaborationDoors = [
  {
    number: "01",
    title: "Bring a data / AI problem",
    description:
      "Have a messy workflow, support pattern, reporting gap, or automation idea? Send me the puzzle and I’ll help make the first path visible.",
    href: "mailto:krs_in@yahoo.com?subject=Data%20%2F%20AI%20problem&body=Hi%20KRS%2C%0A%0AI%20have%20a%20data%20%2F%20AI%20problem%20I%27d%20like%20to%20explore%3A%0A",
    accent: "violet",
  },
  {
    number: "02",
    title: "Prototype an idea",
    description:
      "If you have a rough concept, let’s turn it into something clickable, testable, and easier to explain to the next person.",
    href: "mailto:krs_in@yahoo.com?subject=Prototype%20an%20idea&body=Hi%20KRS%2C%0A%0AI%20have%20an%20idea%20I%27d%20like%20to%20prototype%3A%0A",
    accent: "coral",
  },
  {
    number: "03",
    title: "Talk GenAI & learning",
    description:
      "Career pivots, prompt engineering, builders’ curiosity, or what to learn next—start the conversation and we’ll trade notes.",
    href: "mailto:krs_in@yahoo.com?subject=Learning%20%2F%20GenAI%20conversation&body=Hi%20KRS%2C%0A%0AI%27d%20like%20to%20talk%20about%20GenAI%20%2F%20learning%3A%0A",
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

      <section className="dailyPulse shell" aria-label="Daily message">
        <span>Daily spark</span>
        <p data-daily-message>
          “Be the change that you wish to see in the world.” — Mahatma Gandhi ·
          Happy Independence Day, India 🇮🇳
        </p>
      </section>

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
        </div>
        <div className="heroRule" />
      </section>

      <div className="floatingNav" aria-label="Page navigation">
        <a className="floatingNext" href="#journey" data-floating-next>
          Explore
          <span>↓</span>
        </a>
        <a className="backToTop" href="#top" aria-label="Back to top">↑</a>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const dailyMessage = document.querySelector('[data-daily-message]');
              if (dailyMessage) {
                const specialDays = {
                  '01-01': 'New year, new trail: build one useful thing, learn one honest lesson, and keep moving forward. ✨',
                  '01-24': 'Education turns curiosity into capability. Happy International Day of Education.',
                  '02-11': 'Science gets better when more minds are invited in. International Day of Women and Girls in Science.',
                  '03-08': 'Celebrate the women who lead, build, teach, question, and make the path wider for everyone. International Women\\'s Day.',
                  '03-22': 'Small choices become rivers. World Water Day is a reminder to protect what sustains us.',
                  '04-22': 'The Earth is not a backdrop; it is the story. Happy Earth Day. 🌎',
                  '05-01': 'Every durable thing is built by human effort. Respect the work, and the worker.',
                  '06-05': 'Nature keeps the best dashboards: air, water, soil, silence. World Environment Day.',
                  '06-21': 'Balance is a practice, not a pose. International Yoga Day.',
                  '07-20': 'One small step still echoes. International Moon Day reminds us to keep reaching.',
                  '08-12': 'Young minds do not wait for permission to imagine better futures. International Youth Day.',
                  '08-15': '“Be the change that you wish to see in the world.” — Mahatma Gandhi · Happy Independence Day, India 🇮🇳',
                  '09-05': 'Generosity is a system too: one thoughtful action can change someone’s day. International Day of Charity.',
                  '09-21': 'Peace is built in choices, conversations, and courage. International Day of Peace.',
                  '10-10': 'Strong systems need care. Strong people do too. World Mental Health Day.',
                  '10-24': 'Progress is a shared project. United Nations Day is a reminder to think beyond borders.',
                  '12-10': 'Dignity is not a feature request; it is the foundation. Human Rights Day.',
                };
                const sparks = [
                  'Stay curious enough to begin again.',
                  'Make the invisible visible, then make it useful.',
                  'A good question can move a whole system.',
                  'Build the smallest honest version, then learn from it.',
                  'Clarity is kindness, especially in complex work.',
                  'Follow the signal, not the noise.',
                  'Let the trail teach patience; let the work teach craft.',
                  'Every useful system starts as a rough sketch.',
                  'The best ideas often arrive wearing ordinary clothes.',
                  'Turn one repeated task into one reusable tool.',
                  'Look closely. Better angles hide in plain sight.',
                  'Do the thoughtful thing before the flashy thing.',
                  'Learn in public, build with care, share what helps.',
                  'A prototype is a conversation starter.',
                  'Small improvements compound quietly.',
                  'Leave the system clearer than you found it.',
                  'Good design removes one little friction at a time.',
                  'Data tells a story; wisdom asks if it is the right one.',
                  'Adventure is attention with better shoes.',
                  'Make something today that tomorrow-you can trust.',
                  'The next chapter usually starts as a detour.',
                  'Useful beats impressive more often than we admit.',
                  'Notice the pattern before naming the solution.',
                  'Momentum loves a first draft.',
                  'Let curiosity do some of the heavy lifting.',
                  'Systems scale when people can trust them.',
                  'There is craft in making complexity feel calm.',
                  'Start with the real problem.',
                  'A clear path is often built one switchback at a time.',
                  'Keep learning. Keep building. Keep walking.',
                  'Today is a good day to make one thing simpler.',
                ];
                const now = new Date();
                const key = String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
                const start = new Date(now.getFullYear(), 0, 0);
                const dayOfYear = Math.floor((now - start) / 86400000);
                dailyMessage.textContent = specialDays[key] || sparks[dayOfYear % sparks.length];
              }

              const next = document.querySelector('[data-floating-next]');
              if (!next) return;
              const stops = [
                { id: 'top', label: 'Journey', href: '#journey' },
                { id: 'journey', label: 'Recent writing', href: '#recent-writing' },
                { id: 'recent-writing', label: "Exploring", href: '#work' },
                { id: 'work', label: 'Beyond', href: '#beyond' },
                { id: 'beyond', label: 'What I bring', href: '#capabilities' },
                { id: 'capabilities', label: 'Build with me', href: '#build-with-me' },
                { id: 'build-with-me', label: 'Contact', href: '#contact' },
                { id: 'contact', label: 'Back to top', href: '#top' },
              ];
              const update = () => {
                const y = window.scrollY + window.innerHeight * 0.42;
                let active = stops[0];
                for (const stop of stops) {
                  const el = document.getElementById(stop.id);
                  if (el && el.offsetTop <= y) active = stop;
                }
                next.href = active.href;
                next.innerHTML = active.label + '<span>' + (active.href === '#top' ? '↑' : '↓') + '</span>';
              };
              update();
              window.addEventListener('scroll', update, { passive: true });
              window.addEventListener('resize', update);

              const share = document.querySelector('[data-share-page]');
              if (!share) return;
              const originalLabel = share.textContent;
              share.addEventListener('click', async () => {
                const shareData = {
                  title: 'Srinivasan (KRS) Ramarao — Data, AI & Visual Stories',
                  text: 'Personal profile of Srinivasan (KRS) Ramarao.',
                  url: window.location.href,
                };
                try {
                  if (navigator.share) {
                    await navigator.share(shareData);
                  } else if (navigator.clipboard) {
                    await navigator.clipboard.writeText(window.location.href);
                    share.textContent = 'Copied link';
                    window.setTimeout(() => { share.textContent = originalLabel; }, 1800);
                  }
                } catch {}
              });
            })();
          `,
        }}
      />

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
          <div><span className="statIcon" aria-hidden="true">DB</span><strong>25+</strong><span>years in data &amp; software</span></div>
          <div><span className="statIcon" aria-hidden="true">OR</span><strong>9.5</strong><span>years at Oracle</span></div>
          <div><span className="statIcon" aria-hidden="true">GT</span><strong>MS</strong><span>Analytics · Georgia Tech</span></div>
          <div><span className="statIcon" aria-hidden="true">in</span><strong>1.6K+</strong><span>LinkedIn community</span></div>
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
        <div className="sectionNext">
          <a className="nextLink" href="#recent-writing">
            Recent writing <span>↓</span>
          </a>
        </div>
        <div className="recentWriting" id="recent-writing">
          <div className="miniHeader">
            <span>Recent writing</span>
            <a href="https://www.linkedin.com/in/krsrini/recent-activity/articles/" target="_blank" rel="noreferrer">
              More on LinkedIn <Arrow />
            </a>
          </div>
          <div className="writingGrid">
            {linkedinHighlights.map((item, index) => (
              <a className="writingCard" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <div><span>{item.label}</span><span>Top 0{index + 1}</span></div>
                <div className="postThumb">
                  <img src={item.image} alt={`${item.title} screenshot`} />
                </div>
                <span className="postKicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="readMore">Read on LinkedIn <Arrow /></span>
              </a>
            ))}
          </div>
          <div className="sectionNext">
            <a className="nextLink" href="#work">
              What I&apos;m exploring <span>↓</span>
            </a>
          </div>
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
        <div className="sectionNext">
          <a className="nextLink" href="#beyond">
            Beyond the screen <span>↓</span>
          </a>
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
          <div className="instagramBlock">
            <div className="miniHeader lightMiniHeader">
              <span>From Instagram</span>
              <a href="https://www.instagram.com/krsrini_/" target="_blank" rel="noreferrer">
                @krsrini_ <Arrow />
              </a>
            </div>
            <div className="instagramGrid">
              {instagramMoments.map((moment) => (
                <a className="instagramCard" href={moment.href} target="_blank" rel="noreferrer" key={moment.number}>
                  <div className="reelThumb">
                    <img src={moment.image} alt={`${moment.title} Instagram screenshot`} />
                  </div>
                  <span>Top {moment.number}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                  <em>Watch on Instagram <Arrow /></em>
                </a>
              ))}
            </div>
          </div>
          <div className="sectionNext lightSectionNext">
            <a className="nextLink" href="#capabilities">
              What I bring <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities shell" id="capabilities">
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
        <div className="sectionNext">
          <a className="nextLink" href="#build-with-me">
            Build with me <span>↓</span>
          </a>
        </div>
      </section>

      <section className="buildWithMe" id="build-with-me">
        <div className="shell buildInner">
          <header className="sectionHeader">
            <span>Build with me</span>
            <span className="sectionCount">Pick a door</span>
          </header>
          <div className="buildLead">
            <h2>If something here sparked an idea, choose the next move.</h2>
            <p>
              The best conversations usually begin with a half-formed problem, a curious
              “what if,” or a system that could work better. This is the invitation.
            </p>
          </div>
          <div className="doorGrid">
            {collaborationDoors.map((door) => (
              <a className={`doorCard ${door.accent}`} href={door.href} key={door.number}>
                <div className="doorTop">
                  <span>{door.number}</span>
                  <span>Email opener</span>
                </div>
                <div className="doorSymbol" aria-hidden="true">
                  <span />
                </div>
                <h3>{door.title}</h3>
                <p>{door.description}</p>
                <em>Start this thread <Arrow /></em>
              </a>
            ))}
          </div>
          <div className="buildNote">
            <span>Prefer simple?</span>
            <a href="mailto:krs_in@yahoo.com">Just send a hello <Arrow /></a>
          </div>
          <div className="sectionNext">
            <a className="nextLink" href="#contact">
              Start a conversation <span>↓</span>
            </a>
          </div>
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
            <button className="sharePage" type="button" data-share-page>
              Share page <span aria-hidden="true">↗</span>
            </button>
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
