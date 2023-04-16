// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return (
            `\n* [License](#license)\n`
        );
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
      return (
        `## License
        
        This project is licensed under the ${license} license.`
      );
    }
    return '';
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown({ 
  title, 
  license, 
  description, 
  installation, 
  usage, 
  contribution, 
  test, 
  github, 
  email 
}) {
  // Get the license badge, link, and section based on which license is passed in
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title}
  ${licenseBadge}
  ## Description
  
  ${description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License]${licenseLink}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ${licenseSection}


  ---

  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## Contribution
  
  ${contribution}

  ## Tests
  
  ${test}
  
  
  ## Questions

  For any other information, You can reach the developers on the below contact information:

  Github Profile: ${github}

  Email: ${email} `;
}

module.exports = generateMarkdown;