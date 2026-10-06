module.exports = {
  name: '--help',
  title: '--help',
  repo: '0trustissues/--help',            // powers slide comments (GitHub issues)
  gateway: 'https://api.fslides.dev',   // sign-in broker for commenting on the published deck
  slidesDir: 'slides',

  slides: [
    'cover.html',
    'stat.html',
    'closing.html',
  ],

  labels: [
    'Cover',
    'The Number',
    'Thank You',
  ],
};
