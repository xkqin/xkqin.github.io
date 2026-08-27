const news = [
  {
    date: '2026.07',
    label: 'Publication',
    title: 'DefectSynth published in IEEE Transactions on Automation Science and Engineering.',
  },
  {
    date: '2026.03',
    label: 'Research',
    title: 'Started doctoral research training at Shanghai AI Laboratory.',
  },
  {
    date: '2026',
    label: 'Open source',
    title: 'Game Camera Capture Lab released as a reproducible foundation for embodied camera research.',
  },
  {
    date: '2024.09',
    label: 'Education',
    title: 'Started Ph.D. studies at Ocean University of China.',
  },
  {
    date: '2024.01',
    label: 'Security',
    title: 'Acknowledged by Riipen for responsible disclosure after a web security assessment.',
  },
];

const publications = [
  {
    venue: 'IEEE T-ASE',
    year: '2026',
    note: 'Journal article',
    title: 'DefectSynth: Few-Shot Defective Image Generation by Modeling Shape and Appearance',
    image: '/papers/defectsynth.png',
    imageAlt: 'DefectSynth method and synthesized defect examples',
    authors: 'Dexu Zhao, Xukun Qin, Xinghui Dong',
    description:
      'A few-shot generation framework that models defect shape and appearance to synthesize diverse, controllable industrial defects.',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/TASE.2026.3697519' },
      { label: 'Code', href: 'https://github.com/INDTLab/DefectSynth' },
    ],
    featured: true,
  },
  {
    venue: 'IEEE GRSL',
    year: '2019',
    note: 'Journal article',
    title: 'Inpainting of Remote Sensing SST Images With Deep Convolutional Generative Adversarial Network',
    image: '/papers/remote-sensing-sst-network.jpg',
    imageAlt: 'Generator and discriminator network architecture for remote sensing SST image inpainting',
    authors: 'Junyu Dong, Ruiying Yin, Xin Sun, Qiong Li, Yuting Yang, Xukun Qin',
    description:
      'A generative approach for recovering missing regions in sea-surface-temperature remote-sensing imagery.',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/LGRS.2018.2870880' },
    ],
  },
  {
    venue: 'IEEE BigCom',
    year: '2018',
    note: 'Conference paper',
    title: 'NVMTFS: A Non-Volatile Memory Adaptive File System for Tiered Storage System',
    image: '/papers/nvmtfs-system-layout.png',
    imageAlt: 'NVMTFS file-system layout across NVM, tier-one, and tier-two storage spaces',
    authors: 'Shiyong Liu, Zhichao Cao, Zhongwen Guo, Guohua Wang, Xupeng Wang, Zhijin Qiu, Xukun Qin',
    description:
      'An adaptive file-system design for coordinating non-volatile memory with tiered storage infrastructure.',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/BIGCOM.2018.00039' },
    ],
  },
  {
    venue: 'IEEE BigCom',
    year: '2018',
    note: 'Conference paper',
    title: 'The Read Amplification Analysis of NoSQL Database on Top of OSDs: A Case Study of HBase',
    image: '/papers/hbase-osd-agent.png',
    imageAlt: 'Local Storage Scanner architecture for the HBase OSD Agent',
    authors: 'Shiyong Liu, Zhongwen Guo, Chen Liu, Xupeng Wang, Guohua Wang, Zhijin Qiu, Xukun Qin',
    description:
      'A systems study examining read amplification when HBase is deployed on object-based storage devices.',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/BIGCOM.2018.00040' },
    ],
  },
];

const projects = [
  {
    index: '01',
    type: 'Research direction',
    title: 'Embodied Aesthetic Photography',
    description:
      'An embodied camera policy that selects useful, feasible, and visually intentional viewpoints by reasoning about visibility, geometry, collision safety, motion quality, and composition.',
    tags: ['Vision–Language–Action', 'Camera policy', 'Trajectory planning'],
  },
  {
    index: '02',
    type: 'Open-source system',
    title: 'Game Camera Capture Lab',
    description:
      'A reproducible capture infrastructure for camera poses, point sets, still scans, and trajectories across RE9, KCD2, and Black Myth: Wukong.',
    tags: ['Multi-game adapters', 'Pose logging', 'Dataset tooling'],
    href: 'https://github.com/xkqin/GameCameraCaptureLab',
  },
  {
    index: '03',
    type: 'Doctoral research',
    title: 'World-Action Models for UAV VLN',
    description:
      'Connecting predictive world representations with language-conditioned navigation so aerial agents can actively choose where to move, observe, and gather evidence.',
    tags: ['World action models', 'UAV VLN', 'Active perception'],
  },
  {
    index: '04',
    type: 'Security project',
    title: 'Riipen Website Security Assessment',
    description:
      'A responsible web security assessment covering reconnaissance, validation, and post-analysis of an AWS S3-backed file-sharing workflow.',
    tags: ['AWS S3', 'Burp Suite', 'Nmap'],
    href: 'https://github.com/xkqin/riipen-website-penetration-testing',
  },
  {
    index: '05',
    type: 'Machine learning project',
    title: 'Drug Review Rating Prediction',
    description:
      'Sentiment and supervised-learning models for predicting drug ratings from patient-written reviews using normalized text and engineered features.',
    tags: ['Python', 'TensorFlow', 'Sentiment analysis'],
    href: 'https://github.com/xkqin/CSE_258',
  },
];

const experience = [
  {
    period: 'Mar 2026 – Present',
    role: 'Research Intern / Doctoral Researcher',
    organization: 'Shanghai Artificial Intelligence Laboratory',
    detail:
      'VLA camera-control policies, game-environment trajectory datasets, cross-environment evaluation, and World Action Models for long-horizon viewpoint planning.',
  },
  {
    period: 'Sep 2020 – Mar 2021',
    role: 'Teaching Assistant',
    organization: 'University of California San Diego',
    detail:
      'Supported CSE 232B through database assignment refinement, graduate student discussions, office hours, and debugging assistance.',
  },
  {
    period: 'Jan 2018 – May 2019',
    role: 'Research Assistant',
    organization: 'University of Minnesota Twin Cities',
    detail:
      'Intelligent storage systems, machine-learning-based indexing, and key-value search for Kinetic drive storage.',
  },
  {
    period: 'Jun 2017 – Aug 2017',
    role: 'Software Engineer Intern',
    organization: 'Alibaba Group',
    detail:
      'Personalized recommendation, AI-assisted data categorization, MySQL workflows, and front-end development.',
  },
];

const education = [
  {
    period: 'Mar 2026 – Present',
    degree: 'Research Training',
    school: 'Shanghai AI Laboratory',
    detail:
      'World Action Models, VLA camera control, UAV vision-language navigation, and embodied active perception.',
  },
  {
    period: 'Sep 2024 – Present',
    degree: 'Ph.D. in Computer Science',
    school: 'Ocean University of China',
    detail:
      'World-Action-Model-Driven UAV Vision-Language Navigation and Embodied Active Perception.',
  },
  {
    period: 'May 2023 – Aug 2024',
    degree: 'M.S. in Cybersecurity',
    school: 'New York Institute of Technology',
    detail: 'GPA 3.94 / 4.0',
  },
  {
    period: 'Sep 2022 – Jul 2023',
    degree: 'Doctoral Studies in Computer Science',
    school: 'McGill University',
    detail: 'Doctoral-level research on UAV route planning and autonomous navigation.',
  },
  {
    period: 'Sep 2019 – Jun 2021',
    degree: 'M.S. in Computer Science',
    school: 'University of California San Diego',
    detail: 'GPA 3.78 / 4.0',
  },
  {
    period: 'Sep 2016 – May 2019',
    degree: 'B.S. in Computer Science',
    school: 'University of Minnesota Twin Cities',
    detail: 'GPA 3.84 / 4.0',
  },
];

const skills = [
  'Python',
  'C++',
  'PyTorch',
  'Hugging Face',
  'OpenCV',
  'CUDA',
  'SLURM',
  'Distributed training',
  'Gaussian Splatting',
  'Docker',
  'Linux',
  'AWS',
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xukun Qin, back to top">
          Xukun Qin
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#news">Recent</a>
          <a href="#papers">Papers</a>
          <a href="#work">Work</a>
          <a href="#education">Edu</a>
        </nav>
      </header>

      <div className="page-shell" id="top">
        <section className="hero" id="about">
          <div className="hero-copy">
            <div className="institution-lockup" aria-label="Primary affiliation">
              <span>上海人工智能实验室</span>
              <strong>Shanghai AI Laboratory</strong>
            </div>
            <p className="eyebrow">Embodied AI · Active Perception · Autonomous Camera Agents</p>
            <h1>Xukun Qin</h1>
            <p className="role-line">
              Researcher at Shanghai AI Laboratory · Ph.D. Student at Ocean
              University of China
            </p>
            <p className="intro">
              I study world-action-model-driven UAV vision-language navigation
              and embodied active perception. My work asks how an intelligent
              agent can decide <strong>where to look</strong>,{' '}
              <strong>how to move</strong>, and <strong>what to capture next</strong>.
            </p>
            <div className="hero-links" aria-label="Profile links">
              <a href="mailto:xukunqinwork@gmail.com">Email</a>
              <ExternalLink href="https://github.com/xkqin">GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/xukun-qin">LinkedIn</ExternalLink>
              <ExternalLink href="https://dblp.org/pid/229/7799">DBLP</ExternalLink>
              <ExternalLink href="https://github.com/xkqin/GameCameraCaptureLab">
                Camera Lab
              </ExternalLink>
            </div>
          </div>

          <aside className="research-note" aria-label="Current research focus">
            <span className="note-index">01 / CURRENT FOCUS</span>
            <p>
              Building agents that connect perception, world modeling, and
              action for autonomous viewpoint planning.
            </p>
            <div className="focus-tags">
              <span>World Action Models</span>
              <span>UAV VLN</span>
              <span>Viewpoint Planning</span>
            </div>
            <div className="note-stats" aria-label="Academic profile summary">
              <div>
                <strong>04</strong>
                <small>selected works</small>
              </div>
              <div>
                <strong>03</strong>
                <small>research threads</small>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="news">
          <div className="section-heading">
            <p>Recent</p>
            <h2>News</h2>
          </div>
          <div className="news-list">
            {news.map((item) => (
              <article className="news-item" key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <div>
                  <span className="news-label">{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="papers">
          <div className="section-heading sticky-heading">
            <p>Research</p>
            <h2>Selected publications</h2>
            <p className="section-summary">
              Work spanning embodied decision-making, generative modeling,
              remote sensing, and systems research.
            </p>
          </div>
          <div className="paper-list">
            {publications.map((paper, index) => (
              <article
                className={`paper-card${paper.featured ? ' featured' : ''}`}
                key={paper.title}
              >
                <div className="paper-visual">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={paper.image}
                    alt={paper.imageAlt}
                    width="1200"
                    height="675"
                    loading="lazy"
                  />
                  <div className="paper-venue">
                    <div>
                      <span>{paper.venue}</span>
                      <strong>{paper.year}</strong>
                    </div>
                    <small>{paper.note}</small>
                    <em>{String(index + 1).padStart(2, '0')}</em>
                  </div>
                </div>
                <div className="paper-content">
                  <h3>{paper.title}</h3>
                  <p className="authors">{paper.authors}</p>
                  <p>{paper.description}</p>
                  <div className="paper-links">
                    {paper.links.map((link) => (
                      <ExternalLink href={link.href} key={link.label}>
                        {link.label} ↗
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading sticky-heading">
            <p>Projects</p>
            <h2>Research systems</h2>
            <p className="section-summary">
              Research is most useful when ideas become inspectable systems,
              repeatable experiments, and shared data.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.index}>
                <div className="project-topline">
                  <span>{project.index}</span>
                  <small>{project.type}</small>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.href ? (
                    <ExternalLink href={project.href}>Explore project ↗</ExternalLink>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p>Background</p>
            <h2>Research & experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.role}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p>Education</p>
            <h2>Academic path</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={`${item.period}-${item.degree}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.degree}</h3>
                  <h4>{item.school}</h4>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-heading">
          <div>
            <p className="eyebrow">Toolbox</p>
            <h2 id="skills-heading">Research foundations</h2>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Contact</p>
          <div>
            <h2>Let&apos;s build agents that know where to look.</h2>
            <p>
              I am open to research conversations and collaborations around
              embodied AI, active perception, world models, and autonomous
              camera systems.
            </p>
          </div>
          <a className="contact-button" href="mailto:xukunqinwork@gmail.com">
            xukunqinwork@gmail.com ↗
          </a>
        </section>

        <footer>
          <p>© 2026 Xukun Qin</p>
          <p className="quote">“这个世界还是需要有人相信那些没用但重要的东西”</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
