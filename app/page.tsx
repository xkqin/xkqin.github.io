const news = [
  {
    date: '2026.07',
    label: 'Publication',
    title: 'DefectSynth published in IEEE T-ASE.',
  },
  {
    date: '2026.03',
    label: 'Research',
    title: 'Joined Shanghai AI Laboratory for doctoral research.',
  },
  {
    date: '2026',
    label: 'Open source',
    title: 'Released Game Camera Capture Lab.',
  },
  {
    date: '2024.09',
    label: 'Education',
    title: 'Started Ph.D. studies at Ocean University of China.',
  },
  {
    date: '2024.01',
    label: 'Security',
    title: 'Riipen responsible disclosure acknowledgment.',
  },
];

const publications = [
  {
    venue: 'IEEE T-ASE',
    year: '2026',
    title: 'DefectSynth: Few-Shot Defective Image Generation by Modeling Shape and Appearance',
    image: '/papers/defectsynth.png',
    imageAlt: 'DefectSynth method and synthesized defect examples',
    authors: 'Dexu Zhao, Xukun Qin, Xinghui Dong',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/TASE.2026.3697519' },
      { label: 'Code', href: 'https://github.com/INDTLab/DefectSynth' },
    ],
    featured: true,
  },
  {
    venue: 'IEEE GRSL',
    year: '2019',
    title: 'Inpainting of Remote Sensing SST Images With Deep Convolutional Generative Adversarial Network',
    image: '/papers/remote-sensing-sst-network.jpg',
    imageAlt: 'Generator and discriminator network architecture for remote sensing SST image inpainting',
    authors: 'Junyu Dong, Ruiying Yin, Xin Sun, Qiong Li, Yuting Yang, Xukun Qin',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/LGRS.2018.2870880' },
    ],
  },
  {
    venue: 'IEEE BigCom',
    year: '2018',
    title: 'NVMTFS: A Non-Volatile Memory Adaptive File System for Tiered Storage System',
    image: '/papers/nvmtfs-system-layout.png',
    imageAlt: 'NVMTFS file-system layout across NVM, tier-one, and tier-two storage spaces',
    authors: 'Shiyong Liu, Zhichao Cao, Zhongwen Guo, Guohua Wang, Xupeng Wang, Zhijin Qiu, Xukun Qin',
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1109/BIGCOM.2018.00039' },
    ],
  },
  {
    venue: 'IEEE BigCom',
    year: '2018',
    title: 'The Read Amplification Analysis of NoSQL Database on Top of OSDs: A Case Study of HBase',
    image: '/papers/hbase-osd-agent.png',
    imageAlt: 'Local Storage Scanner architecture for the HBase OSD Agent',
    authors: 'Shiyong Liu, Zhongwen Guo, Chen Liu, Xupeng Wang, Guohua Wang, Zhijin Qiu, Xukun Qin',
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
      'VLA policies for viewpoint planning and visual composition.',
    tags: ['Vision–Language–Action', 'Camera policy', 'Trajectory planning'],
  },
  {
    index: '02',
    type: 'Open-source system',
    title: 'Game Camera Capture Lab',
    description:
      'Camera poses and trajectories across RE9, KCD2, and Black Myth: Wukong.',
    tags: ['Multi-game adapters', 'Pose logging', 'Dataset tooling'],
    href: 'https://github.com/xkqin/GameCameraCaptureLab',
  },
  {
    index: '03',
    type: 'Doctoral research',
    title: 'World-Action Models for UAV VLN',
    description:
      'World models for language-guided aerial navigation.',
    tags: ['World action models', 'UAV VLN', 'Active perception'],
  },
  {
    index: '04',
    type: 'Security project',
    title: 'Riipen Website Security Assessment',
    description:
      'Web security assessment and responsible disclosure.',
    tags: ['AWS S3', 'Burp Suite', 'Nmap'],
    href: 'https://github.com/xkqin/riipen-website-penetration-testing',
  },
  {
    index: '05',
    type: 'Machine learning project',
    title: 'Drug Review Rating Prediction',
    description:
      'Predicting drug ratings from patient reviews.',
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
      'Embodied AI · VLA / VLN · World models',
  },
  {
    period: 'Sep 2020 – Mar 2021',
    role: 'Teaching Assistant',
    organization: 'University of California San Diego',
    detail:
      'CSE 232B · Database Systems',
  },
  {
    period: 'Jan 2018 – May 2019',
    role: 'Research Assistant',
    organization: 'University of Minnesota Twin Cities',
    detail:
      'Intelligent storage · Learned indexing',
  },
  {
    period: 'Jun 2017 – Aug 2017',
    role: 'Software Engineer Intern',
    organization: 'Alibaba Group',
    detail:
      'Recommendation systems · Data categorization',
  },
];

const education = [
  {
    period: 'Mar 2026 – Present',
    degree: 'Research Training',
    school: 'Shanghai AI Laboratory',
    detail:
      'Embodied intelligence · World models',
  },
  {
    period: 'Sep 2024 – Present',
    degree: 'Ph.D. in Computer Science',
    school: 'Ocean University of China',
    detail:
      'UAV vision-language navigation',
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
    detail: 'UAV planning · Autonomous navigation',
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
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Xukun Qin, back to top">
          <span className="monogram" aria-hidden="true">XQ</span>
          <span>Xukun Qin / Research</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#papers">Papers</a>
          <a href="#work">Work</a>
          <a href="#experience">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

        <section className="hero" id="top" aria-labelledby="profile-name">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-image" src="/research-paper-background-wide.webp" alt="" aria-hidden="true" width="2172" height="724" fetchPriority="high" />
          <div className="hero-copy">
            <p className="eyebrow">SHANGHAI AI LABORATORY</p>
            <h1 id="profile-name">Xukun Qin</h1>
            <p className="hero-tagline">Embodied AI · VLA / VLN · World Models</p>
            <p className="role-line">
              Ph.D. Student, Ocean University of China
            </p>
            <div className="hero-links" aria-label="Profile links">
              <a href="mailto:xukunqinwork@gmail.com">Email</a>
              <ExternalLink href="https://github.com/xkqin">GitHub</ExternalLink>
              <ExternalLink href="https://dblp.org/pid/229/7799">DBLP</ExternalLink>
              <a href="#work">Research systems</a>
            </div>
          </div>
        </section>

      <div className="page-shell">
        <section className="about-band" id="about" aria-label="Research introduction">
          <p className="intro">
            My research focuses on <strong>embodied intelligence</strong>,
            particularly <strong>vision-language-action (VLA)</strong> models,{' '}
            <strong>vision-language navigation (VLN)</strong>, and{' '}
            <strong>world models</strong> for perception, planning, and control.
          </p>
          <aside className="affiliation">
            <p className="eyebrow">CURRENTLY AT</p>
            <strong>Shanghai AI Laboratory</strong>
            <span>Doctoral research training</span>
            <span>Since March 2026</span>
          </aside>
        </section>

        <section className="section" id="news">
          <div className="section-heading">
            <p>01 / UPDATES</p>
            <h2>News.</h2>
          </div>
          <div className="news-list">
            {news.slice(0, 3).map((item) => (
              <article className="news-item" key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <div>
                  <span className="news-label">{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
            <details className="news-archive">
              <summary>Earlier updates</summary>
              {news.slice(3).map((item) => (
                <article className="news-item" key={item.date}>
                  <time>{item.date}</time>
                  <div><span className="news-label">{item.label}</span><h3>{item.title}</h3></div>
                </article>
              ))}
            </details>
          </div>
        </section>

        <section className="section" id="papers">
          <div className="section-heading sticky-heading">
            <p>02 / PUBLICATIONS</p>
            <h2>Publications.</h2>
          </div>
          <div className="paper-list">
            {publications.map((paper) => (
              <article
                className={`paper-card${paper.featured ? ' featured' : ''}`}
                key={paper.title}
              >
                <div className="paper-visual">
                  <a href={paper.links[0].href} target="_blank" rel="noreferrer" aria-label={`Read ${paper.title}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={paper.image}
                    alt={paper.imageAlt}
                    width="1200"
                    height="675"
                    loading="lazy"
                  />
                  </a>
                  <div className="paper-venue">
                      <span>{paper.venue}</span>
                      <strong>{paper.year}</strong>
                  </div>
                </div>
                <div className="paper-content">
                  <h3>{paper.title}</h3>
                  <p className="authors">{paper.authors.split('Xukun Qin').map((part, index) => <span key={index}>{index > 0 && <strong>Xukun Qin</strong>}{part}</span>)}</p>
                  <div className="paper-links">
                    {paper.links.map((link) => (
                      <ExternalLink href={link.href} key={link.label}>
                        {link.label}
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
            <p>03 / PROJECTS</p>
            <h2>Projects.</h2>
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
                    <ExternalLink href={project.href}>View on GitHub</ExternalLink>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p>04 / EXPERIENCE</p>
            <h2>Experience.</h2>
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
            <p>05 / EDUCATION</p>
            <h2>Education.</h2>
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
            <h2 id="skills-heading">Tools.</h2>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

      </div>
        <section className="contact" id="contact">
          <div className="page-shell contact-inner">
          <p className="eyebrow">Contact</p>
          <div>
            <h2>Let’s connect.</h2>
          <a className="contact-button" href="mailto:xukunqinwork@gmail.com">
            xukunqinwork@gmail.com
          </a>
          </div>
          </div>
        </section>

      <div className="page-shell">
        <footer>
          <p>© 2026 Xukun Qin</p>
          <p className="quote" lang="zh-CN">“这个世界还是需要有人相信那些没用但重要的东西”</p>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </main>
  );
}
