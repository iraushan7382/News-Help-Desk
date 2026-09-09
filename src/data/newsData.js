export const CATEGORIES = [
  'All',
  'World',
  'Politics',
  'Business',
  'Technology',
  'Sports',
  'Entertainment',
  'Health'
];

export const CATEGORY_COLORS = {
  World: {
    bg: 'bg-sky-50 text-sky-900 border-sky-300',
    pill: 'bg-sky-600 hover:bg-sky-700 text-white',
    badge: 'text-sky-800 bg-sky-100/90 border border-sky-200',
    gradientBadge: 'from-sky-600 to-blue-700 text-white',
    dot: 'bg-sky-500 shadow-sm shadow-sky-300',
    borderTop: 'border-t-sky-600',
    accentColor: '#0284c7',
    tagBg: 'bg-sky-50 hover:bg-sky-100 text-sky-700'
  },
  Politics: {
    bg: 'bg-amber-50 text-amber-900 border-amber-300',
    pill: 'bg-amber-600 hover:bg-amber-700 text-white',
    badge: 'text-amber-900 bg-amber-100/90 border border-amber-200',
    gradientBadge: 'from-amber-600 to-yellow-600 text-white',
    dot: 'bg-amber-500 shadow-sm shadow-amber-300',
    borderTop: 'border-t-amber-600',
    accentColor: '#d97706',
    tagBg: 'bg-amber-50 hover:bg-amber-100 text-amber-800'
  },
  Business: {
    bg: 'bg-emerald-50 text-emerald-900 border-emerald-300',
    pill: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    badge: 'text-emerald-800 bg-emerald-100/90 border border-emerald-200',
    gradientBadge: 'from-emerald-600 to-teal-700 text-white',
    dot: 'bg-emerald-500 shadow-sm shadow-emerald-300',
    borderTop: 'border-t-emerald-600',
    accentColor: '#059669',
    tagBg: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
  },
  Technology: {
    bg: 'bg-indigo-50 text-indigo-900 border-indigo-300',
    pill: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    badge: 'text-indigo-800 bg-indigo-100/90 border border-indigo-200',
    gradientBadge: 'from-indigo-600 to-violet-700 text-white',
    dot: 'bg-indigo-500 shadow-sm shadow-indigo-300',
    borderTop: 'border-t-indigo-600',
    accentColor: '#4f46e5',
    tagBg: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
  },
  Sports: {
    bg: 'bg-orange-50 text-orange-900 border-orange-300',
    pill: 'bg-orange-600 hover:bg-orange-700 text-white',
    badge: 'text-orange-800 bg-orange-100/90 border border-orange-200',
    gradientBadge: 'from-orange-600 to-red-600 text-white',
    dot: 'bg-orange-500 shadow-sm shadow-orange-300',
    borderTop: 'border-t-orange-600',
    accentColor: '#ea580c',
    tagBg: 'bg-orange-50 hover:bg-orange-100 text-orange-700'
  },
  Entertainment: {
    bg: 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-300',
    pill: 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white',
    badge: 'text-fuchsia-800 bg-fuchsia-100/90 border border-fuchsia-200',
    gradientBadge: 'from-fuchsia-600 to-pink-700 text-white',
    dot: 'bg-fuchsia-500 shadow-sm shadow-fuchsia-300',
    borderTop: 'border-t-fuchsia-600',
    accentColor: '#c026d3',
    tagBg: 'bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-700'
  },
  Health: {
    bg: 'bg-teal-50 text-teal-900 border-teal-300',
    pill: 'bg-teal-600 hover:bg-teal-700 text-white',
    badge: 'text-teal-800 bg-teal-100/90 border border-teal-200',
    gradientBadge: 'from-teal-600 to-cyan-700 text-white',
    dot: 'bg-teal-500 shadow-sm shadow-teal-300',
    borderTop: 'border-t-teal-600',
    accentColor: '#0d9488',
    tagBg: 'bg-teal-50 hover:bg-teal-100 text-teal-700'
  },
  All: {
    bg: 'bg-slate-100 text-slate-900 border-slate-300',
    pill: 'bg-slate-900 hover:bg-slate-800 text-white',
    badge: 'text-slate-800 bg-slate-100 border border-slate-200',
    gradientBadge: 'from-slate-800 to-slate-950 text-white',
    dot: 'bg-red-600 shadow-sm shadow-red-300',
    borderTop: 'border-t-slate-900',
    accentColor: '#be123c',
    tagBg: 'bg-slate-100 hover:bg-slate-200 text-slate-700'
  }
};

export const SECTOR_CARDS = [
  {
    id: 'Technology',
    name: 'Technology',
    tagline: 'AI models, semiconductors, deep tech & future algorithms',
    iconName: 'Cpu',
    color: 'from-indigo-600 to-violet-700',
    border: 'border-indigo-300 hover:border-indigo-500',
    bgLight: 'bg-indigo-50/70',
    textColor: 'text-indigo-700'
  },
  {
    id: 'Business',
    name: 'Business & Markets',
    tagline: 'Central bank rates, global venture deals & clean logistics',
    iconName: 'TrendingUp',
    color: 'from-emerald-600 to-teal-700',
    border: 'border-emerald-300 hover:border-emerald-500',
    bgLight: 'bg-emerald-50/70',
    textColor: 'text-emerald-700'
  },
  {
    id: 'World',
    name: 'World Affairs',
    tagline: 'Global treaties, ocean preservation & diplomacy summits',
    iconName: 'Globe',
    color: 'from-sky-600 to-blue-700',
    border: 'border-sky-300 hover:border-sky-500',
    bgLight: 'bg-sky-50/70',
    textColor: 'text-sky-700'
  },
  {
    id: 'Politics',
    name: 'Politics & Policy',
    tagline: 'Capitol Hill legislation, judicial ethics & governance',
    iconName: 'Landmark',
    color: 'from-amber-600 to-yellow-600',
    border: 'border-amber-300 hover:border-amber-500',
    bgLight: 'bg-amber-50/70',
    textColor: 'text-amber-800'
  },
  {
    id: 'Health',
    name: 'Health & Medicine',
    tagline: 'mRNA cancer breakthroughs, neurobiology & longevity',
    iconName: 'Activity',
    color: 'from-teal-600 to-cyan-700',
    border: 'border-teal-300 hover:border-teal-500',
    bgLight: 'bg-teal-50/70',
    textColor: 'text-teal-700'
  },
  {
    id: 'Sports',
    name: 'Sports & Athletics',
    tagline: 'Olympic modernization, world records & elite physiology',
    iconName: 'Trophy',
    color: 'from-orange-600 to-red-600',
    border: 'border-orange-300 hover:border-orange-500',
    bgLight: 'bg-orange-50/70',
    textColor: 'text-orange-700'
  },
  {
    id: 'Entertainment',
    name: 'Culture & Cinema',
    tagline: 'Venice Golden Lion triumphs, master tapes & visual arts',
    iconName: 'Film',
    color: 'from-fuchsia-600 to-pink-700',
    border: 'border-fuchsia-300 hover:border-fuchsia-500',
    bgLight: 'bg-fuchsia-50/70',
    textColor: 'text-fuchsia-700'
  }
];


export const NEWS_ARTICLES = [
  {
    id: 'art-001',
    title: 'Historic Geneva Accord Establishes First Global Framework for Autonomous Frontier AI Systems',
    subtitle: 'Delegates from 68 nations ratify binding safety protocols and emergency alignment verification standards.',
    category: 'Technology',
    slug: 'historic-geneva-accord-frontier-ai-framework',
    excerpt: 'Following grueling 14-day negotiations in Geneva, international representatives voted overwhelmingly to ratify a landmark treaty establishing stringent verification standards and collective transparency guidelines for frontier intelligence models.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Following grueling fourteen-day negotiations in Geneva, international representatives from 68 nations voted overwhelmingly on Wednesday morning to ratify a landmark treaty establishing stringent verification standards and collective transparency guidelines for frontier intelligence models.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The agreement, termed the Geneva Frontier Intelligence Protocol, establishes a multilateral watchdog modeled after the International Atomic Energy Agency. Beginning next fiscal quarter, commercial laboratories developing models exceeding specified computational thresholds must submit automated safety audits to independent verification panels.</p>

      <blockquote class="my-8 border-l-4 border-red-700 pl-5 italic text-slate-800 font-serif text-lg bg-slate-50 py-3 rounded-r">
        "We are establishing the global traffic rules for the cognitive era before irreversible milestones are crossed. Trust requires verifiable accountability, and this framework provides both."
        <cite class="block text-sm not-italic font-sans text-slate-500 mt-2">— Elena Rostova, Chief Negotiator and UN High Commissioner for Emerging Technology</cite>
      </blockquote>

      <h3 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Core Pillars of the Accord</h3>
      <p class="mb-5 leading-relaxed text-slate-700">Under the treaty's core directives, signatories agreed upon three non-negotiable operational tenets:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Mandatory Pre-Deployment Red-Teaming:</strong> Independent third-party researchers will receive 45-day air-gapped access to evaluate systemic biological, cryptographic, and societal safety vectors.</li>
        <li><strong>Global Model Registry:</strong> Sovereign states will maintain a real-time ledger tracking compute cluster allocations exceeding 100,000 advanced tensor accelerators.</li>
        <li><strong>Open Scientific Commons:</strong> Foundational safety research and alignment telemetry must be placed in public peer-reviewed scientific repositories without commercial patent restrictions.</li>
      </ul>

      <h3 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Industry Reaction & Global Markets</h3>
      <p class="mb-5 leading-relaxed text-slate-700">Technology indices responded positively across Asian and European bourses, with investors welcoming the regulatory certainty after months of speculation. Key semiconductor and cloud infrastructure providers issued joint statements supporting the harmonized global standard over fragmented regional directives.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The treaty is scheduled for formal ceremonial signing next month at the United Nations General Assembly in New York, with phased implementation rolling out across member states over the next eighteen months.</p>
    `,
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Senior Technology Correspondent',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      beat: 'Artificial Intelligence & Global Geopolitics'
    },
    publishedAt: 'September 9, 2026 • 2:15 PM EST',
    publishedDate: '2026-09-09',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The Palais des Nations assembly chamber in Geneva during the final voting session on Wednesday.',
    isBreaking: true,
    isFeaturedHero: true,
    isTrending: true,
    trendingRank: 1,
    isEditorPick: true,
    tags: ['Artificial Intelligence', 'Geneva Accord', 'Global Policy', 'Technology Regulation', 'Cybersecurity']
  },
  {
    id: 'art-002',
    title: 'Global Central Banks Signal Coordinated Shift Toward Growth Stimulus as Inflation Troughs',
    subtitle: 'Benchmark rates ease across major economies as core consumer price metrics stabilize below target bands.',
    category: 'Business',
    slug: 'global-central-banks-signal-coordinated-stimulus-shift',
    excerpt: 'In an unprecedented joint briefing, governors representing the Federal Reserve, European Central Bank, and Bank of Japan indicated synchronized monetary easing as headline inflation dropped to a 4-year low of 1.8%.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">In an unprecedented joint briefing following the annual Jackson Hole symposium, monetary policymakers from the Federal Reserve, European Central Bank, and Bank of Japan indicated synchronized policy easing after headline consumer prices dropped to a four-year low of 1.8% across member states.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The collective signal marks the definitive conclusion of the aggressive quantitative tightening cycle initiated in early 2022. Analysts forecast a sequence of calibrated quarter-point benchmark reductions over the upcoming three quarters to support manufacturing expansion and green transition capital outlays.</p>

      <h3 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Capital Outlays and Corporate Borrowing</h3>
      <p class="mb-5 leading-relaxed text-slate-700">Treasury yields declined steadily following the release, with long-term sovereign bond yields flattening in anticipation of increased municipal and industrial credit demand. Commercial mortgage rates are already demonstrating immediate downward pressure.</p>

      <blockquote class="my-8 border-l-4 border-emerald-700 pl-5 italic text-slate-800 font-serif text-lg bg-emerald-50/50 py-3 rounded-r">
        "Our dual mandate now pivots naturally toward sustaining durable employment and facilitating enterprise capital renewal without reigniting cost-push pressures."
      </blockquote>

      <p class="mb-5 leading-relaxed text-slate-700">Economic advisors highlighted strong productivity gains driven by automation and stabilized ocean freight corridors as the pivotal structural drivers keeping wage-price spirals in check.</p>
    `,
    author: {
      name: 'Sarah Chen-Foster',
      role: 'Chief Economics Editor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      beat: 'Global Monetary Policy & Financial Markets'
    },
    publishedAt: 'September 9, 2026 • 1:40 PM EST',
    publishedDate: '2026-09-09',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Trading floor monitors in Frankfurt reflecting positive gains across international equity benchmarks.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: true,
    trendingRank: 2,
    isEditorPick: true,
    tags: ['Economics', 'Federal Reserve', 'Inflation', 'Financial Markets', 'Banking']
  },
  {
    id: 'art-003',
    title: 'Senate Passes Landmark Clean Energy Infrastructure Modernization Bill with Wide Bipartisan Accord',
    subtitle: 'The $420 billion package fast-tracks high-voltage interstate power grid construction and nuclear fusion test facilities.',
    category: 'Politics',
    slug: 'senate-passes-landmark-energy-infrastructure-bill',
    excerpt: 'Lawmakers voted 78 to 22 on Tuesday evening to approve sweeping energy grid modernization legislation designed to modernize regional transmission grids and streamline federal environmental permitting.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Lawmakers in Washington voted 78 to 22 on Tuesday evening to approve sweeping energy grid modernization legislation designed to link rural renewable power corridors directly to metropolitan manufacturing basins.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The legislative compromise, spearheaded by a bipartisan coalition of lawmakers from the Energy and Natural Resources Committee, guarantees over $420 billion in federal matching grants, low-interest loan guarantees, and streamlined inter-agency review periods for designated high-voltage direct current (HVDC) transmission lines.</p>

      <h3 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Accelerating Grid Interconnections</h3>
      <p class="mb-5 leading-relaxed text-slate-700">Currently, more than 2,000 gigawatts of planned clean power projects remain stalled in regional interconnection queues. The new legislation mandates federal decisions within 270 days for critical corridors connecting offshore wind farms and solar arrays to inland distribution nodes.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Environmental advocacy groups praised the transmission funding while industry trade associations lauded regulatory certainty for private capital deployment. The bill now proceeds directly to the White House for executive signature by week's end.</p>
    `,
    author: {
      name: 'Julian Sterling',
      role: 'Congressional Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      beat: 'Capitol Hill & Environmental Legislation'
    },
    publishedAt: 'September 9, 2026 • 11:20 AM EST',
    publishedDate: '2026-09-09',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'The United States Capitol dome at dusk as lawmakers finalized the infrastructure vote.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: true,
    tags: ['Congress', 'Clean Energy', 'Legislation', 'Infrastructure', 'Policy']
  },
  {
    id: 'art-004',
    title: 'Forty Coastal Nations Ratify Blue Horizon Treaty to Protect 30% of High Seas by 2030',
    subtitle: 'Historic marine sanctuary boundaries and satellite enforcement systems activated to counter illegal high-seas trawling.',
    category: 'World',
    slug: 'forty-nations-ratify-blue-horizon-high-seas-treaty',
    excerpt: 'In a crowning achievement for multilateral conservation diplomacy, 40 coastal nations officially ratified the Blue Horizon Ocean Treaty during the Pacific Maritime Forum in Fiji on Wednesday.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">In a crowning achievement for multilateral conservation diplomacy, 40 coastal nations officially ratified the Blue Horizon Ocean Treaty during the Pacific Maritime Forum in Fiji on Wednesday, creating the largest coordinated network of marine sanctuaries in modern history.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The agreement permanently protects over 12 million square kilometers of open ocean waters outside sovereign exclusive economic zones. Member nations will deploy an autonomous constellation of synthetic-aperture radar satellites and ocean drones to track unauthorized deep-sea seabed mining and unregulated super-trawler vessels in real time.</p>

      <blockquote class="my-8 border-l-4 border-sky-600 pl-5 italic text-slate-800 font-serif text-lg bg-sky-50/60 py-3 rounded-r">
        "Our oceans are the lungs and planetary circulatory system of Earth. Today, we stopped treating the high seas as an ungoverned frontier and pledged our collective will to their regeneration."
        <cite class="block text-sm not-italic font-sans text-slate-500 mt-2">— Hon. Kausea Natano, Forum Envoy</cite>
      </blockquote>

      <p class="mb-5 leading-relaxed text-slate-700">Philanthropic endowments along with sovereign green bond underwriters have pledged an initial $5.8 billion replenishment fund to subsidize sustainable coastal aquaculture in developing island states impacted by commercial fishing zone restrictions.</p>
    `,
    author: {
      name: 'Amara Diallo',
      role: 'International Environment Correspondent',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
      beat: 'Oceanography, Climate Science & UN Affairs'
    },
    publishedAt: 'September 9, 2026 • 10:05 AM EST',
    publishedDate: '2026-09-09',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A turquoise marine reserve lagoon surveyed as part of the newly ratified protected maritime corridor.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: true,
    trendingRank: 3,
    isEditorPick: false,
    tags: ['Oceans', 'Conservation', 'United Nations', 'Marine Biology', 'Environment']
  },
  {
    id: 'art-005',
    title: 'Targeted mRNA Therapeutic Demonstrates 88% Recurrence-Free Survival in Phase III Oncology Trial',
    subtitle: 'Custom neoantigen vaccines tailored within 72 hours through predictive genomics deliver dramatic clinical milestone.',
    category: 'Health',
    slug: 'targeted-mrna-therapeutic-pancreatic-oncology-trial',
    excerpt: 'Clinical oncologists at Johns Hopkins and Oxford University announced groundbreaking Phase III results demonstrating an 88% recurrence-free survival rate for patients battling aggressive pancreatic ductal adenocarcinoma.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Clinical oncologists at Johns Hopkins Medicine and Oxford University announced groundbreaking Phase III results Wednesday morning demonstrating an unprecedented 88% recurrence-free survival rate over a three-year observation period for patients receiving individualized mRNA neoantigen vaccines.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The therapy works by sequencing a patient's biopsied tumor genome within 48 hours using high-throughput nanopore sequencing, synthesising customized mRNA strands that train host cytotoxic T-cells to identify microscopic metastatic mutations with surgical precision.</p>

      <h3 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Shifting the Standard of Care</h3>
      <p class="mb-5 leading-relaxed text-slate-700">Historically, pancreatic cancer has stood among the most lethal oncological diagnoses, with median five-year survival rates lingering below 12%. The clinical cohort in this multinational double-blind study exhibited durable immunologic memory with minimal grade-3 adverse side effects.</p>

      <blockquote class="my-8 border-l-4 border-teal-600 pl-5 italic text-slate-800 font-serif text-lg bg-teal-50/60 py-3 rounded-r">
        "We are witnessing the transition from blunt systemic chemotherapy to bespoke cellular reprogramming. This trial proves that immunological memory can be trained to prevent cancer recurrence permanently."
        <cite class="block text-sm not-italic font-sans text-slate-500 mt-2">— Dr. Alistair Ross, Lead Investigator, Oxford Oncology Institute</cite>
      </blockquote>

      <p class="mb-5 leading-relaxed text-slate-700">Health regulatory authorities in the United States, European Union, and United Kingdom have granted priority review status, with commercial availability anticipated across certified oncology centers by early next year.</p>
    `,
    author: {
      name: 'Dr. Rebecca Thorne',
      role: 'Medical Science Editor',
      avatar: 'https://images.unsplash.com/photo-1594824813533-40a1b66b4461?auto=format&fit=crop&w=200&q=80',
      beat: 'Oncology, Biotechnology & Public Health'
    },
    publishedAt: 'September 9, 2026 • 9:15 AM EST',
    publishedDate: '2026-09-09',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579165466791-788226ab77b4?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A laboratory researcher preparing synthetic mRNA formulation vials in an ultra-clean bio-nanotechnology cleanroom.',
    isBreaking: true,
    isFeaturedHero: false,
    isTrending: true,
    trendingRank: 4,
    isEditorPick: true,
    tags: ['Medicine', 'Cancer Research', 'mRNA', 'Biotechnology', 'Oncology']
  },
  {
    id: 'art-006',
    title: 'International Olympic Committee Formally Approves Hybrid Virtual-Physical Competitions for 2028',
    subtitle: 'Augmented cycling, biometric rowing, and high-speed robotic sailing join traditional Olympic medal programs in Los Angeles.',
    category: 'Sports',
    slug: 'ioc-approves-hybrid-virtual-competitions-2028',
    excerpt: 'In a decisive modernization step, the International Olympic Committee confirmed Wednesday that three technologically integrated athletic categories will award official Olympic medals at the 2028 Los Angeles Games.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">In a decisive modernization step, the International Olympic Committee confirmed Wednesday following its executive board meeting in Lausanne that three technologically integrated athletic categories will award official Olympic medals at the 2028 Los Angeles Games.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The additions include augmented indoor sprint velodrome racing with real-time resistance matching against digitized Olympic records, biometric ergometer rowing squads, and open-ocean hydrofoil sailing featuring standardized robotic wing controls.</p>

      <h3 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Bridging Digital Audiences with Elite Physiology</h3>
      <p class="mb-5 leading-relaxed text-slate-700">Broadcast executives emphasized that the hybrid events are engineered to engage younger digital demographics while honoring uncompromised athletic conditioning. Competitors will undergo rigorous WADA-certified biological testing alongside telemetry hardware verification to prevent algorithmic bias.</p>

      <p class="mb-5 leading-relaxed text-slate-700">"This is not video gaming; this is maximal human aerobic wattage married to millimeter-accurate real-time physics simulators," explained Olympic commission chairwoman Valérie Fontaine.</p>
    `,
    author: {
      name: 'Mateo Rossi',
      role: 'Senior Sports Columnist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      beat: 'Olympics & Athletic Performance Science'
    },
    publishedAt: 'September 9, 2026 • 8:30 AM EST',
    publishedDate: '2026-09-09',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Athletes preparing at the Olympic Velodrome training complex in Southern California.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Olympics', 'Sports Science', 'Los Angeles 2028', 'Athletics']
  },
  {
    id: 'art-007',
    title: 'Indie Cinema Renaissance: Venice Golden Lion Awarded to Micro-Budget Cinematic Masterpiece',
    subtitle: 'Director Maya Lin captures premier honors with poetic 35mm portrait shot entirely on location in rural Kyoto.',
    category: 'Entertainment',
    slug: 'indie-cinema-venice-golden-lion-maya-lin',
    excerpt: 'The 83rd Venice International Film Festival concluded with a resounding triumph for artisanal storytelling as the coveted Golden Lion was bestowed upon 29-year-old auteur Maya Lin for "Echoes of the Cedar Forest".',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">The 83rd Venice International Film Festival concluded with a resounding triumph for artisanal storytelling as the coveted Golden Lion was bestowed upon 29-year-old Japanese-American auteur Maya Lin for her luminous drama "Echoes of the Cedar Forest".</p>

      <p class="mb-5 leading-relaxed text-slate-700">Produced for under $1.5 million and filmed exclusively on discontinued Kodak 35mm optical stock with natural lighting, the film received a record twelve-minute standing ovation at its Sala Grande premiere, outshining heavily funded studio tentpoles.</p>

      <blockquote class="my-8 border-l-4 border-purple-600 pl-5 italic text-slate-800 font-serif text-lg bg-purple-50/60 py-3 rounded-r">
        "In a digital era saturated with synthetic simulations, humanity craves the fragile texture of real light, organic soundscapes, and unvarnished emotional vulnerability."
        <cite class="block text-sm not-italic font-sans text-slate-500 mt-2">— Jury President Juliette Binoche</cite>
      </blockquote>

      <p class="mb-5 leading-relaxed text-slate-700">Major independent distributors engaged in an intense bidding war within hours of the ceremony, securing a worldwide theatrical rollout scheduled for November across over 800 independent art-house cinemas.</p>
    `,
    author: {
      name: 'Chloe Deschanel',
      role: 'Culture & Film Critic',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      beat: 'International Cinema, Theater & Visual Arts'
    },
    publishedAt: 'September 9, 2026 • 7:45 AM EST',
    publishedDate: '2026-09-09',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'The Sala Grande theater red carpet at the Venice Lido during the festival awards ceremony.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: true,
    trendingRank: 5,
    isEditorPick: true,
    tags: ['Cinema', 'Film Festival', 'Venice', 'Arts', 'Entertainment']
  },
  {
    id: 'art-008',
    title: 'Room-Temperature Optical Computing Chip Solves Complex Logistics in Milliseconds',
    subtitle: 'Photonic tensor processors demonstrate 100x power reduction over silicon architectures in commercial server tests.',
    category: 'Technology',
    slug: 'room-temperature-optical-computing-chip-breakthrough',
    excerpt: 'Researchers at MIT and Cambridge announced the validation of an optical tensor processing chip that performs neural network matrix multiplications using laser wave interference without cryogenic cooling.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Researchers at MIT, in partnership with the Cambridge Photonics Institute, announced the commercial validation of an optical tensor processing chip that performs matrix multiplications using modulated laser wave interference at ambient room temperature.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The experimental silicon-photonic hybrid unit completed global airline route optimization models and climate turbulence forecasting calculations in 2.3 milliseconds—demanding less than 15 watts of electrical consumption compared to 1,500 watts required by contemporary GPU clusters.</p>

      <p class="mb-5 leading-relaxed text-slate-700">"By routing light instead of switching electrons, we circumvent the thermal throttling barrier that has plagued microchips for over two decades," stated lead hardware architect Dr. Kenji Sato.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Commercial fab lines in Dresden and Arizona have contracted pilot production runs slated to deliver samples to high-performance computing centers early in 2027.</p>
    `,
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Senior Technology Correspondent',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      beat: 'Artificial Intelligence & Global Geopolitics'
    },
    publishedAt: 'September 8, 2026 • 6:10 PM EST',
    publishedDate: '2026-09-08',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A micro-photonic wafer viewed through an optical inspection microscope.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Hardware', 'Semiconductors', 'Photonics', 'Deep Tech']
  },
  {
    id: 'art-009',
    title: 'Trans-Pacific Clean Energy Corridor: Tokyo Summit Unlocks $85B in Floating Offshore Wind Deals',
    subtitle: 'Consortium of Asian and North American utilities inaugurates deep-water floating turbines capable of surviving typhoons.',
    category: 'World',
    slug: 'tokyo-summit-floating-offshore-wind-deals',
    excerpt: 'Senior ministers and utility executives from Japan, South Korea, Canada, and the United States signed bilateral guarantees pledging $85 billion in capital expenditure for deep-water floating offshore wind installations across the North Pacific basin.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Senior energy ministers and utility executives from Japan, South Korea, Canada, and the United States signed binding bilateral guarantees in Tokyo today, pledging $85 billion in combined capital expenditure for deep-water floating offshore wind installations across the North Pacific basin.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Unlike fixed-bottom coastal wind platforms, floating tension-leg turbines can be anchored in ocean depths exceeding 300 meters, unlocking continuous high-velocity ocean wind streams without disrupting commercial shipping channels or coastal tourist shorelines.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The projects will integrate subsea superconducting power cables capable of transmitting gigawatt-scale electricity across international borders with line losses under 2% per 1,000 kilometers.</p>
    `,
    author: {
      name: 'Amara Diallo',
      role: 'International Environment Correspondent',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
      beat: 'Oceanography, Climate Science & UN Affairs'
    },
    publishedAt: 'September 8, 2026 • 4:20 PM EST',
    publishedDate: '2026-09-08',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Offshore wind turbines operating in calm coastal waters off the northern Japanese coast.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Renewable Energy', 'Japan', 'Pacific Trade', 'Wind Power']
  },
  {
    id: 'art-010',
    title: 'Venture Capital Infusion Breaks Historical Records for Sodium-Ion and Solid-State Battery Tech',
    subtitle: 'Eliminating cobalt and lithium dependencies accelerates affordable grid storage and next-generation mobility.',
    category: 'Business',
    slug: 'venture-capital-records-sodium-ion-solid-state-batteries',
    excerpt: 'Global venture capital commitments into non-lithium electrochemical energy storage topped $18.4 billion this quarter, spurred by rapid commercialization breakthroughs in sodium-ion and solid-state battery manufacturing.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Global venture capital commitments into non-lithium electrochemical energy storage topped $18.4 billion this quarter, spurred by rapid commercialization breakthroughs in sodium-ion and sulfur-based solid-state battery manufacturing.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Sodium-ion cells, which utilize ubiquitous salt derivatives rather than scarce nickel and cobalt, have achieved energy densities surpassing 190 watt-hours per kilogram, making them ideal for grid-scale renewable balancing and affordable entry-level urban commuter vehicles.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Automotive manufacturers in Munich, Seoul, and Detroit confirmed pilot deployments scheduled for late 2026, pointing toward a 40% reduction in vehicle pack production expenses within three years.</p>
    `,
    author: {
      name: 'Sarah Chen-Foster',
      role: 'Chief Economics Editor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      beat: 'Global Monetary Policy & Financial Markets'
    },
    publishedAt: 'September 8, 2026 • 2:50 PM EST',
    publishedDate: '2026-09-08',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558441719-8b459c86f6c0?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Automated battery assembly robotic cells at a gigafactory facility.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Venture Capital', 'Clean Energy', 'Batteries', 'Automotive', 'Tech Finance']
  },
  {
    id: 'art-011',
    title: 'Landmark Neurobiology Study Decodes Glymphatic Nighttime Brain Cleansing Waves',
    subtitle: 'Synchronized delta wave pulses wash away neurodegenerative beta-amyloid proteins during deep slow-wave sleep.',
    category: 'Health',
    slug: 'neurobiology-study-glymphatic-brain-cleansing-waves',
    excerpt: 'Neuroscientists at the Salk Institute and Karolinska Institute unveiled high-resolution imaging showing how rhythmic delta waves act as hydraulic pumps to flush metabolic waste from deep cerebral tissue during stage-three sleep.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Neuroscientists at the Salk Institute and Karolinska Institute unveiled high-resolution two-photon imaging showing how rhythmic delta oscillations act as biological hydraulic pumps to flush metabolic neurotoxic debris from cerebral tissue during deep slow-wave sleep.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The study, published in Nature Neuroscience, demonstrates that cerebrospinal fluid flow increases by 450% during non-REM phase three sleep, physically flushing phosphorylated tau and amyloid protein aggregates associated with cognitive decline and Alzheimer\'s pathology.</p>

      <p class="mb-5 leading-relaxed text-slate-700">"This confirms that sleep is not passive downtime, but an active, non-negotiable biological detoxification process essential for long-term neurological resilience," noted senior author Dr. Helene Lindqvist.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The research team is already partnering with biomedical engineers to develop gentle acoustic cranial stimulation headbands designed to optimize slow-wave synchronization for aging populations.</p>
    `,
    author: {
      name: 'Dr. Rebecca Thorne',
      role: 'Medical Science Editor',
      avatar: 'https://images.unsplash.com/photo-1594824813533-40a1b66b4461?auto=format&fit=crop&w=200&q=80',
      beat: 'Oncology, Biotechnology & Public Health'
    },
    publishedAt: 'September 8, 2026 • 11:15 AM EST',
    publishedDate: '2026-09-08',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A researcher analyzing neural imaging scans in a cognitive neurobiology lab.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: true,
    tags: ['Neuroscience', 'Sleep Health', 'Medicine', 'Cognitive Science']
  },
  {
    id: 'art-012',
    title: 'Judicial Transparency Panel Unveils Automated Conflict-of-Interest Oversight System',
    subtitle: 'Real-time financial matching algorithm flags judicial recusals instantly across federal and state courts.',
    category: 'Politics',
    slug: 'judicial-transparency-conflict-of-interest-system',
    excerpt: 'The Federal Judicial Council delivered its final recommendations today, mandating an algorithmic public disclosure database that links judicial dockets against stock holdings and outside speaking honoraria.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">The Federal Judicial Oversight Council delivered its final recommendations today, mandating an algorithmic public disclosure system that links federal courtroom dockets against judges\' equity holdings and commercial sponsorships.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The initiative aims to rebuild public confidence in the judicial branch following investigative disclosures of undisclosed corporate ties. Under the new protocol, automated compliance software scans active case parties against real-time financial portfolios, generating immediate notification to defense and prosecution counsels if a conflict is detected.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The system has already undergone a twelve-month pilot across the Second and Ninth Circuit appeals courts, resulting in an 82% drop in post-judgment disqualification appeals.</p>
    `,
    author: {
      name: 'Julian Sterling',
      role: 'Congressional Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      beat: 'Capitol Hill & Environmental Legislation'
    },
    publishedAt: 'September 7, 2026 • 3:30 PM EST',
    publishedDate: '2026-09-07',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Courthouse columns and marble portico symbolizing the rule of law.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Courts', 'Judicial Reform', 'Transparency', 'Government']
  },
  {
    id: 'art-013',
    title: 'Underdog 4x400m Mixed Relay Quartet Shatters 12-Year World Record in Dramatic Championship Final',
    subtitle: 'A thrilling anchor leg comeback in Budapest seals historic victory for collegiate track athletes.',
    category: 'Sports',
    slug: 'underdog-mixed-relay-shatters-world-record',
    excerpt: 'A stunned crowd of 45,000 spectators at the World Athletics Stadium witnessed athletic history as an unheralded young relay quartet clipped 0.85 seconds off the global 4x400m record in an electrifying photo finish.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">A stunned crowd of 45,000 spectators at the Budapest National Athletics Center witnessed track history on Sunday as an unheralded collegiate quartet clipped 0.85 seconds off the global 4x400m mixed relay world record in a heart-stopping photo finish.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Anchor runner Tariq Lawson received the baton in fourth place, trailing the race leaders by nearly twelve meters before unleashing a blistering 43.12-second split around the final bend to surge ahead at the tape.</p>

      <p class="mb-5 leading-relaxed text-slate-700">"We trusted each other\'s cadence and executed every baton exchange blind. In relay racing, faith and millimeter precision conquer raw individual splits," remarked Lawson wrapped in his national flag.</p>
    `,
    author: {
      name: 'Mateo Rossi',
      role: 'Senior Sports Columnist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      beat: 'Olympics & Athletic Performance Science'
    },
    publishedAt: 'September 7, 2026 • 1:10 PM EST',
    publishedDate: '2026-09-07',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'Relay sprinters celebrating on the synthetic track following the record-breaking lap.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Athletics', 'Track and Field', 'World Record', 'Sports']
  },
  {
    id: 'art-014',
    title: 'Lost 1974 Orchestral Masterpiece Discovered in Abbey Road Vaults Released to Critical Acclaim',
    subtitle: 'Pioneering composer Arthur Pendelton\'s unreleased analog suite restored using ultra-high-resolution magnetic extraction.',
    category: 'Entertainment',
    slug: 'lost-1974-orchestral-masterpiece-abbey-road',
    excerpt: 'Fifty-two years after disappearing into mislabeled EMI archives, an unreleased symphonic suite by experimental British composer Arthur Pendelton has been meticulously restored and released across streaming and vinyl formats.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">Fifty-two years after disappearing into mislabeled EMI archives, an unreleased symphonic suite by avant-garde British composer Arthur Pendelton has been meticulously restored and released to unanimous acclaim from music historians and audiophiles worldwide.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The six-movement suite, titled "The Solitude of Orbit", combined a full 90-piece Philharmonic orchestra with modular Buchla synthesizers and acoustic tape loops, creating a sonic palette decades ahead of its time.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Audio engineers used non-contact optical magnetic laser scanners to read the brittle two-inch master tapes without physical tape-head friction, reconstructing pristine 192kHz/32-bit digital transfers that preserve Pendelton\'s visionary dynamic range.</p>
    `,
    author: {
      name: 'Chloe Deschanel',
      role: 'Culture & Film Critic',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      beat: 'International Cinema, Theater & Visual Arts'
    },
    publishedAt: 'September 6, 2026 • 5:00 PM EST',
    publishedDate: '2026-09-06',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A soundboard console in an analog recording studio with ambient warm backlights.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Music', 'Abbey Road', 'Classical', 'Culture', 'Audio Restoration']
  },
  {
    id: 'art-015',
    title: 'Electric Zero-Emission Cargo Fleets Complete First Transatlantic Commercial Maiden Voyages',
    subtitle: 'Container vessels equipped with automated rigid wind-sails and swappable battery pods arrive ahead of schedule.',
    category: 'Business',
    slug: 'electric-zero-emission-cargo-fleets-transatlantic-voyage',
    excerpt: 'The maritime shipping industry crossed a defining technological threshold on Monday as the world\'s first fleet of three wind-assisted electric container ships arrived at the Port of Rotterdam from Halifax, Canada.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">The maritime shipping industry crossed a defining technological threshold on Monday as the world\'s first fleet of three wind-assisted electric container ships docked successfully at the Port of Rotterdam following an eleven-day transit from Halifax, Canada.</p>

      <p class="mb-5 leading-relaxed text-slate-700">The 400-meter vessels utilize four telescoping composite wing sails combined with 80-megawatt-hour swappable containerized lithium-iron-phosphate battery packs, cutting fuel consumption by 92% compared to conventional heavy-fuel-oil container ships.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Port authorities completed automated robotic battery pack exchanges in under two hours, allowing the vessels to prepare for their onward leg to Hamburg without shore grid delays.</p>
    `,
    author: {
      name: 'Sarah Chen-Foster',
      role: 'Chief Economics Editor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      beat: 'Global Monetary Policy & Financial Markets'
    },
    publishedAt: 'September 6, 2026 • 2:10 PM EST',
    publishedDate: '2026-09-06',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d2757270?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A commercial cargo vessel navigating shipping waterways under open skies.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Maritime', 'Shipping', 'Clean Logistics', 'Green Tech', 'Supply Chain']
  },
  {
    id: 'art-016',
    title: 'Open-Source Robotics Consortium Releases Modular Disaster-Relief Humanoid Platform',
    subtitle: 'Universal hardware designs and reinforcement-learning controllers made freely available to municipal rescue teams.',
    category: 'Technology',
    slug: 'open-source-robotics-consortium-humanoid-disaster-relief',
    excerpt: 'An international coalition of universities and robotics laboratories released complete blueprints, CAD files, and locomotion neural networks for an agile humanoid rescue robot capable of navigating collapsed rubble.',
    content: `
      <p class="lead text-lg font-serif leading-relaxed text-slate-800 mb-6">An international coalition of twenty-four engineering universities and robotics laboratories released complete open-source hardware blueprints and locomotion neural networks today for "Aegis", an agile bipedal rescue platform designed for hazardous earthquake and flood reconnaissance.</p>

      <p class="mb-5 leading-relaxed text-slate-700">Constructed from lightweight aircraft-grade aluminum and off-the-shelf brushless motor actuators, the robot can traverse forty-degree debris inclines, breach reinforced fire barriers, and stream thermal 3D point-cloud maps to emergency dispatchers.</p>

      <p class="mb-5 leading-relaxed text-slate-700">By removing licensing royalties, the consortium projects that municipal emergency units can fabricate fully operational units for under $18,000—a fraction of proprietary commercial alternatives.</p>
    `,
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Senior Technology Correspondent',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      beat: 'Artificial Intelligence & Global Geopolitics'
    },
    publishedAt: 'September 5, 2026 • 4:40 PM EST',
    publishedDate: '2026-09-05',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    imageCaption: 'A high-dexterity robotic platform demonstrating precision sensor calibration.',
    isBreaking: false,
    isFeaturedHero: false,
    isTrending: false,
    trendingRank: null,
    isEditorPick: false,
    tags: ['Robotics', 'Open Source', 'Disaster Relief', 'Engineering']
  }
];

export const EDITORIAL_OPINIONS = [
  {
    id: 'op-001',
    title: 'The Algorithmic Commons: Why Sovereign AI Models Must Belong to the Public Domain',
    author: 'Prof. Julian Weintraub',
    role: 'Professor of Philosophy & Technology, Sorbonne University',
    readTime: '5 min read'
  },
  {
    id: 'op-002',
    title: 'Beyond GDP: Measuring Planetary Health in National Economic Accounting',
    author: 'Dr. Elena Rostova',
    role: 'UN High Commissioner for Emerging Systems',
    readTime: '4 min read'
  },
  {
    id: 'op-003',
    title: 'The Silent Victory of the Electric Grid: Why Distributed Storage Changes Everything',
    author: 'David Sterling-Webb',
    role: 'Senior Fellow, Energy Innovation Forum',
    readTime: '6 min read'
  }
];

export const MARKET_DATA = [
  { ticker: 'S&P 500', value: '5,892.40', change: '+0.84%', isPositive: true },
  { ticker: 'NASDAQ', value: '18,650.12', change: '+1.18%', isPositive: true },
  { ticker: 'FTSE 100', value: '8,412.30', change: '+0.32%', isPositive: true },
  { ticker: 'NIKKEI', value: '39,120.75', change: '+0.95%', isPositive: true },
  { ticker: 'CRUDE OIL', value: '$71.40', change: '-1.25%', isPositive: false },
  { ticker: '10-YR BOND', value: '3.82%', change: '-0.04%', isPositive: true }
];

export const BREAKING_ALERTS = [
  'BREAKING: International delegates in Geneva ratify binding safety protocols for frontier autonomous AI models.',
  'MARKETS: Global central banks issue joint statement hinting at synchronized growth stimulus reductions.',
  'SCIENCE: Phase III oncology trials confirm 88% recurrence-free survival with bespoke mRNA therapeutics.',
  'SPACE: Deep space solar explorer reaches L2 orbit with zero thruster telemetry anomalies.'
];
