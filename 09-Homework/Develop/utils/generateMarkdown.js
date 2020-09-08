function generateMarkdown(data) {
  console.log(data);
  return `
  # Title ${data.title}
  # Badge ${data.badge}
  # Description ${data.description}
  # Contents ${data.contents}
  # Installation ${data.installation}
  # Usage ${data.usage}
  # License ${data.license}
  # Contributing ${data.contributing}
  # Tests ${data.tests}
  # Questions ${data.questions}
`;
}

module.exports = generateMarkdown;
