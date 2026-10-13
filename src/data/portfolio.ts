/**
 * All portfolio content lives in this file.
 * Edit text, links and lists here — the components only handle presentation.
 * Everything below is taken from the CV; do not add facts that are not true.
 */

export const profile = {
  name: 'Radu-Adrian Stavilă',
  shortName: 'Radu Stavilă',
  role: 'Senior Android Engineer',
  secondaryRole: 'Mobile Technical Lead',
  location: 'Cluj-Napoca, Romania',
  headline: ['Android apps,', 'owned end to end.'],
  intro:
    'I’m a Senior Android Engineer with 6+ years of experience building and maintaining production apps in Kotlin and Jetpack Compose. I lead Android development for the GHIN app, the official USGA handicap application, and I build and publish my own products on Google Play.',
  seoTitle: 'Radu-Adrian Stavilă — Senior Android Engineer',
  seoDescription:
    'Senior Android Engineer and Mobile Technical Lead in Cluj-Napoca. 6+ years building production Android apps with Kotlin and Jetpack Compose, including the GHIN app (1M+ downloads) and Xpiry.',
};

export const links = {
  email: 'stavila.radu@yahoo.com',
  github: 'https://github.com/radustavila',
  linkedin: 'https://www.linkedin.com/in/radu-stavila/',
  ghinPlay: 'https://play.google.com/store/apps/details?id=com.advancedmobile.android.ghin&hl=en&gl=US',
  xpirySite: 'https://xpiry.net/',
  xpiryPlay: 'https://play.google.com/store/apps/details?id=com.radustavila.xpiry',
  expandableCardRepo: 'https://github.com/radustavila/Expandable-Card-With-Image-Android-Library',
  numberPickerRepo: 'https://github.com/radustavila/NumberPicker-Customizable-Card-Android-Library',
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const ledger = [
  { key: 'Role', value: 'Senior Android Engineer · Mobile Technical Lead' },
  { key: 'Now', value: 'GHIN app at GolfGenius Software' },
  { key: 'Stack', value: 'Kotlin · Jetpack Compose · Coroutines · MVI/MVVM' },
  { key: 'Based', value: 'Cluj-Napoca, Romania' },
];

export const stats = [
  { value: '6+', label: 'years building production Android apps' },
  { value: '1M+', label: 'downloads of the GHIN app I lead on Android' },
  { value: '30k+', label: 'downloads of Xpiry, my own product, rated 4.7+' },
  { value: '3', label: 'Android engineers mentored and coordinated at peak' },
];

export const about = {
  paragraphs: [
    'Most of my career has been spent on one product that matters to a lot of people: the GHIN app, used by golfers across the United States. For roughly three years I was its only Android developer, responsible for features, architecture decisions, releases and production support.',
    'Over the last three years that ownership grew to the full feature lifecycle. I refine requirements with stakeholders, run technical discovery, design the solution, write the technical specification, and then build and ship it. Along the way I mentor other Android engineers and act as the primary Android technical owner.',
    'Outside of work I run Xpiry, a consumer app I built and published on my own. Deciding what to build, how to monetize it and what to fix first has shaped how I think about engineering trade-offs in every project.',
  ],
  principles: [
    {
      title: 'Own the whole lifecycle',
      body: 'I’m most useful when I’m involved from requirements and feasibility through to production monitoring and post-release maintenance.',
    },
    {
      title: 'Modernize deliberately',
      body: 'Legacy code is paid down continuously: refactor components, reduce technical debt and adopt modern Android practices as the product evolves.',
    },
    {
      title: 'Make decisions concrete',
      body: 'High-level requirements become technical specifications, user flows, architecture decisions and tasks an engineer can pick up.',
    },
    {
      title: 'Use AI as leverage',
      body: 'I rely on AI tools for implementation, code analysis, debugging and technical research, which lets me run several workstreams in parallel.',
    },
  ],
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  visual: 'migration' | 'expiry' | 'ble';
  kicker: string;
  title: string;
  summary: string;
  role: string;
  facts: { value: string; label: string }[];
  story: { heading: string; points: string[] }[];
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: 'ghin',
    visual: 'migration',
    kicker: 'GolfGenius Software · 2020 – present',
    title: 'GHIN Mobile App',
    summary:
      'The official USGA handicap application, used by golfers across the United States.',
    role: 'Senior Android Engineer and Mobile Technical Lead. Primary Android technical owner.',
    facts: [
      { value: '1M+', label: 'Google Play downloads' },
      { value: '~3 yrs', label: 'as the sole Android developer' },
      { value: 'Up to 3', label: 'Android engineers mentored' },
    ],
    story: [
      {
        heading: 'What I did',
        points: [
          'Drove feature development, architecture decisions, releases and production support independently for about three years.',
          'Took on the full feature lifecycle: requirements refinement, technical discovery, solution design, technical specifications, implementation and delivery.',
          'Integrated Firebase Analytics, Airship, Deep Links and App Links.',
        ],
      },
      {
        heading: 'Key technical decision',
        points: [
          'Led the migration from Java and XML to Kotlin, Jetpack Compose and a modern MVVM/MVI architecture, improving maintainability and speeding up future feature work.',
          'Improved stability by continuously reducing technical debt and refactoring legacy components rather than leaving them in place.',
        ],
      },
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM / MVI', 'Coroutines', 'Firebase Analytics', 'Airship', 'App Links'],
    links: [{ label: 'View on Google Play', href: links.ghinPlay }],
  },
  {
    id: 'xpiry',
    visual: 'expiry',
    kicker: 'Personal product · Founder & Developer',
    title: 'Xpiry',
    summary:
      'A consumer Android app for tracking product expiration dates. Built, launched and grown independently.',
    role: 'Everything: niche research, architecture, UI/UX, development, analytics, monetization and Google Play operations.',
    facts: [
      { value: '30k+', label: 'Google Play downloads' },
      { value: '4.7+', label: 'store rating' },
      { value: 'Solo', label: 'from idea to release' },
    ],
    story: [
      {
        heading: 'What I did',
        points: [
          'Took the product from an initial idea and niche research to a Google Play release, then kept developing it.',
          'Designed and maintained the app architecture using MVVM and modern Android practices.',
          'Prioritized features and fixes from user feedback, Play Store reviews and usage analytics.',
        ],
      },
      {
        heading: 'Platform work',
        points: [
          'Integrated Google Play Billing for both subscriptions and one-time purchases, plus Google AdMob.',
          'Added In-App Reviews, In-App Updates and Firebase Analytics.',
          'Manage the full Google Play lifecycle: releases, store operations, monetization and maintenance.',
        ],
      },
    ],
    stack: ['Kotlin', 'MVVM', 'Play Billing', 'AdMob', 'In-App Reviews', 'In-App Updates', 'Firebase Analytics'],
    links: [
      { label: 'xpiry.net', href: links.xpirySite },
      { label: 'View on Google Play', href: links.xpiryPlay },
    ],
  },
  {
    id: 'myblesense',
    visual: 'ble',
    kicker: 'Personal project · Android + IoT',
    title: 'MyBleSense',
    summary:
      'An end-to-end system where an Android app receives and tracks real-time touch intensity data from an ESP32 microcontroller over Bluetooth Low Energy.',
    role: 'Designed and built the complete system, focused on BLE communication and real-time sensing.',
    facts: [
      { value: 'BLE', label: 'scanning and GATT' },
      { value: 'ESP32', label: 'capacitive touch sensing' },
      { value: 'Real-time', label: 'intensity tracking' },
    ],
    story: [
      {
        heading: 'What I did',
        points: [
          'Implemented BLE scanning, GATT connections, read/write operations, timeouts and reconnection.',
          'Added real-time capacitive touch detection and intensity tracking, with session event history and statistics.',
        ],
      },
      {
        heading: 'How it’s built',
        points: [
          'Kotlin and Jetpack Compose with Coroutines and Flow, Clean Architecture, Hilt and a multi-module project structure.',
        ],
      },
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Clean Architecture', 'Hilt', 'Multi-module', 'BLE GATT'],
    links: [],
  },
];

export const libraries = {
  title: 'Open-source Android UI libraries',
  summary:
    'Two small, reusable UI components I developed and published for other Android developers.',
  items: [
    {
      id: 'expandable',
      name: 'Expandable image card',
      year: '2022',
      tech: 'Jetpack Compose',
      description: 'An expandable card with an image, exposed through a simple, highly customizable API.',
      href: links.expandableCardRepo,
    },
    {
      id: 'picker',
      name: 'Number picker card',
      year: '2023',
      tech: 'XML / Views',
      description:
        'A customizable number picker card for intuitive quantity selection that drops easily into existing apps.',
      href: links.numberPickerRepo,
    },
  ],
};

export const experience = {
  company: 'GolfGenius Software',
  title: 'Senior Android Engineer · Mobile Technical Lead',
  period: '09/2020 – Present',
  context:
    'Android development for the GHIN Mobile App, the official USGA handicap application.',
  phases: [
    {
      label: 'First ~3 years',
      heading: 'Sole Android developer',
      points: [
        'Independently drove feature development, architecture decisions, releases and production support.',
        'Integrated Firebase Analytics, Airship, Deep Links and App Links.',
      ],
    },
    {
      label: 'Last 3 years',
      heading: 'Technical lead and primary Android owner',
      points: [
        'Collaborate with stakeholders to refine requirements, assess technical feasibility, identify edge cases and define technical solutions.',
        'Translate high-level requirements into technical specifications, user flows, architecture decisions and actionable engineering tasks.',
        'Set architecture and long-term technical direction for Android while working with cross-functional teams.',
        'Mentor and coordinate a team of up to three Android engineers through code reviews, technical guidance and architecture discussions.',
        'Take part in release planning, production monitoring, bug triage and post-release maintenance.',
      ],
    },
  ],
};

export const education = [
  {
    period: '2021 – 2023',
    degree: 'Master of Software Engineering',
    school: 'Faculty of Mathematics & Informatics, UBB Cluj',
  },
  {
    period: '2018 – 2021',
    degree: 'Bachelor of Science, Informatics',
    school: 'Faculty of Mathematics & Informatics, UBB Cluj',
  },
];

export const skills = [
  {
    title: 'Languages & UI',
    items: ['Kotlin', 'Java', 'Jetpack Compose', 'XML / Views', 'Android SDK'],
  },
  {
    title: 'Architecture',
    items: ['MVI', 'MVVM', 'Clean Architecture', 'Multi-module', 'Hilt (DI)'],
  },
  {
    title: 'Async & data',
    items: ['Coroutines', 'Flows', 'LiveData', 'WorkManager', 'Room', 'SQLite', 'Retrofit', 'OkHttp', 'REST APIs'],
  },
  {
    title: 'Testing',
    items: ['Unit testing', 'JUnit', 'MockK', 'Compose UI Testing', 'Espresso'],
  },
  {
    title: 'Platform & growth',
    items: ['Firebase', 'Airship', 'Deep Links', 'App Links', 'Google Play APIs', 'Play Billing', 'AdMob', 'BLE / GATT'],
  },
  {
    title: 'Delivery & leadership',
    items: ['Git', 'Gradle', 'CI/CD', 'Technical discovery', 'Solution design', 'Code reviews', 'Mentoring', 'AI-assisted development'],
  },
];

export const contact = {
  heading: 'Let’s talk Android.',
  body: 'Whether it’s about Android engineering, technical leadership or a collaboration, email is the fastest way to reach me.',
};
