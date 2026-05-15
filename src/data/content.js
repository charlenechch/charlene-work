export const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements',  href: '#writing'  },
  { label: 'About',    href: '#about'    },
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
    github: '#',
    live: '#',
    thumbColor: 'linear-gradient(135deg, #d0e8cc 0%, #b4d4b0 60%, #96be94 100%)',
  },
  {
    id: 'studybuddy',
    featured: false,
    type: 'Course Project',
    year: '2024',
    title: 'StudyBuddy',
    description: 'A web app that helps students form study groups. Built with React, Node and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: '#',
    thumbColor: '#E8E4DA',
    thumbEmoji: '📚',
  },
  {
    id: 'pathfinder',
    featured: false,
    type: 'Side Project',
    year: '2024',
    title: 'Path-Finder Viz',
    description: 'An interactive visualiser for A*, Dijkstra and BFS on a grid. Vanilla JS + Canvas.',
    tags: ['JavaScript', 'Canvas API'],
    github: '#',
    thumbColor: '#EDE8E0',
    thumbEmoji: '🗺️',
  },
  {
    id: 'campuseats',
    featured: false,
    type: 'Hackathon',
    year: '2023',
    title: 'Campus Eats',
    description: 'A pre-order app for canteen stalls, built in 36 hours. Won "Best UX".',
    tags: ['React', 'Firebase'],
    github: '#',
    thumbColor: '#E4DFF0',
    thumbEmoji: '🍜',
  },
]

export const WRITING = [
  { date: 'Apr 2025', title: 'What I learned building my first full-stack app', readTime: '5 min', href: '#' },
  { date: 'Feb 2025', title: 'Notes on Big-O, in plain English',                readTime: '7 min', href: '#' },
  { date: 'Dec 2024', title: 'My first hackathon: lessons in scope',             readTime: '4 min', href: '#' },
]
