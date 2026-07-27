export const NAV_LINKS = [
  { label: 'About',        href: '#home'     },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#writing'  },
]

export const PROJECTS = [
  {
    id: 'sarawakeats',
    featured: true,
    type: 'Final Year Project',
    year: '2025-2026',
    title: 'SarawakEats',
    description:
      "A community-driven full-stack platform that digitally preserves Sarawak's culinary heritage by combining AI-powered food recognition, \
      nutritional analysis, an interactive food map, and gamified community contributions.",
    tags: ['React', 'Node.js', 'LLMs', 'API', 'i18n EN/MY', 'Railway'],
    contributions: [
      { num: '01', title: 'AI Food Recognition', body: 'Integrated an LLM with ensemble embedding strategies and tiered confidence thresholds to identify Sarawakian dishes from user-uploaded images.' },
      { num: '02', title: 'Food Map', body: 'Designed and implemented an interactive map using Google Places API that allows users to search nearby restaurants and discover local Sarawakian dishes by location.' },
      { num: '04', title: 'UI', body: 'Built the frontend UI with parallax scrolling effects and mobile-responsive layouts.' },
      { num: '05', title: 'Deployment', body: 'Deployed the full-stack app across Vercel (frontend) and Railway (backend + AI), with CI/CD via GitHub Actions.' },
    ],
    github: 'https://github.com/charlenechch/Food-Nutrition-Hub',
    live: 'https://www.sarawakeats.site/',
    thumbColor: 'linear-gradient(135deg, #d0e8cc 0%, #b4d4b0 60%, #96be94 100%)',
  },
]