module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=10 --config  .eslintrc.js --quiet',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
