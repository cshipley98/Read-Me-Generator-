// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {}
const renderLicenseBadge = license => {
  let licenseBadge = 'https://img.shields.io/badge/license-';
// If there is no license, return an empty string
if (license === 'None') {
  return '';
} else if (license === 'MIT') {
  return licenseBadge + 'MITLicense-blue'
} else if (license === 'GNU AGPLv3') {
  return licenseBadge + 'GNUAGPLv3-brightorange';
} else if (license === 'GNU GPLv3') {
  return licenseBadge + 'GNUGPLv3-brightorange';
} else if (license === 'GNU LGPLv3') {
  return licenseBadge + 'GNULGPLv3-brightorange';
} else if (license === 'Apache 2.0') {
  return licenseBadge + 'ApacheLicense2.0-brightgreen';
} else if (license === 'Mozilla 2.0') {
  return licenseBadge + 'MozillaPublicLicense2.0-yellow'
} else if (license === 'Boost Software') {
  licenseOption = 'BoostSoftwareLicense1.0';
  return licenseBadge +'BoostSoftwareLicense1.0-blueviolet';
} else if (license ===  'Unlicense') {
  return licenseBadge +'TheUnlicense-yellowgreen';

}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
