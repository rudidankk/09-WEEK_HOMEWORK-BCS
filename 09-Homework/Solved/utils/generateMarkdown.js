const generateMarkdown = data => {
  return `
<a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>
# ${data.title.toUpperCase()}
![License: ${(data.licence) ? data.licence : 'None'}](https://img.shields.io/badge/License-${(data.licence) ? data.licence : 'None'}-orange)
_Repo by ${data.name}_
__${data.description}__
---
__Project:__
${data.title}
__Description:__
${data.description}
__Installation:__
${data.installation}
__Usage:__
${data.usage}
__License:__
${data.licence}
__Contributors:__
${data.contributors}
__Tests:__
${data.tests}
__Questions:__
${data.questions}
`
}

module.exports = generateMarkdown