module.exports = {
  name: 'security-pitch',
  title: 'Elastic Security',
  repo: '0trustissues/security-pitch',   // powers slide comments (GitHub issues)
  gateway: 'https://api.fslides.dev',    // sign-in broker for commenting on the published deck
  slidesDir: 'slides',
  style: 'elastic-web',

  // Slide filenames in order, relative to the slides/ directory
  slides: [
    'cover.html',
    'team.html',
    'why-now.html',
    'problem-orientation.html',
    'soc-model.html',
    'agentic-soc.html',
    'answers-to-action.html',
    'senses-brain-hands.html',
    'search-ai-platform.html',
    'all-your-data.html',
    'solution.html',
    'elastic-security-labs.html',
    'unified-platform.html',
    'multi-layer-security.html',
    'esql.html',
    'closing.html',
  ],

  // Human-readable labels for the overview panel (must match slides array length)
  labels: [
    'Cover',
    'Team',
    'Why now',
    'Problem orientation',
    'SOC operating model',
    'Agentic SOC',
    'From answers to action',
    'Senses, brain, hands',
    'Search AI Platform',
    'All your data',
    'Security solution',
    'Elastic Security Labs',
    'Unified platform',
    'Multi-layer security',
    'ES|QL',
    'Thank you',
  ],

  // Optional: per-slide PDF overrides
  // pdfOverrides: {
  //   'my-animated-slide.html': {
  //     wait: 5000,   // extra ms to wait before capturing
  //     extra: `document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));`
  //   }
  // },
  disabled: [],
};
