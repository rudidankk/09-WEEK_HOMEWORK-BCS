const prompt = require("inquirer").createPromptModule()
const fs = require("fs")

const api = require("/Users/rudi/Documents/GitHub/09-WEEK_HOMEWORK-BCS/09-Homework/Solved/utils/api.js")
const generateMarkdown = require("/Users/rudi/Documents/GitHub/09-WEEK_HOMEWORK-BCS/09-Homework/Solved/utils/generateMarkdown.js")

const writeToFile = (fileName, data) => {
    fs.writeFile("README.md", data, error => error ? console.error(error) : console.log(`${"README.md"} generated!`))
}

const init = async _ => {
    let rmObject = {}
    do {
    const { rmUser, rmRepo } = await prompt([
        {
        type: "input",
        name: "rmUser",
        message: "What is your GitHub user name?"
        },
        {
        type: 'input',
        name: 'rmRepo',
        message: "What is the repo name of this README file?"
        }
    ])
    rmObject = await api.getUser(rmUser, rmRepo)
    if (!rmObject) {
        console.error("Repo not found!")
    } else {
        console.log(`${rmObject.fullName} we found it!`)
    }
    } while (!rmObject)

    Object.assign(rmObject, await prompt([
    {
        type: "input",
        name: "title",
        message: "Project Title"
    },
    {
        type: "input",
        name: "description",
        message: "Description"
    },
    {
        type: "input",
        name: "contents",
        message: "Table of Contents"
    },
    {
        type: "input",
        name: "intallation",
        message: "Installation"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage instructions"
    },
    {
        type: "checkbox",
        name: "license",
        message: "License",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Contributors"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests"
    },
    {
        type: "input",
        name: "questions",
        message: "Questions?"
    }
    ]))
    writeToFile(rmObject.title, await generateMarkdown(rmObject))
}

init()