// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"; // ![License]
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"; // ![License: MIT]
  } else if (license === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"; // ![License: GPL v3]
  } else if (license === "BSD 3") {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"; // ![License]
    // } else if (license === "NONE") {
    //   return "";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"; // ![License]
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"; // ![License: MIT]
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0"; // ![License: GPL v3]
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause"; // ![License]
    // } else if (license === "NONE") {
    //   return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") {
    return "";
  }
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(
    license
  )})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // generate the license badge and link
  const licenseBadge = renderLicenseBadge(data.license);
  // const licenseLink = renderLicenseLink(data.license);
  // create the README content using the user's input data
  return `# ${data.appName}

${renderLicenseSection(data.license)}

## Description
${data.appDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation 
To install the required dependencies, run the following command:

\`\`\`
${data.commandDep}
\`\`\`

## Usage
${data.repoInfo}


## Tests
To run tests, use the following commands:
\`\`\`
${data.commandTest}
\`\`\`

## Contributing
${data.repoUsage}


## Questions
For any questions or inquires, feel free to reach out to me via GitHub:
[${data.github}](https://github.com/${data.github}) or Email: ${data.email}.

`;
}

// inject the stuff (can use markdown language)
//
module.exports = generateMarkdown;

// renderLicenseBadge();
