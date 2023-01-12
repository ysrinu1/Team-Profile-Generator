# Team-Profile-Generator

# Table of Contents
- [Description](#description)
- [Coding Badges](#coding-badges)
- [Example HTML Output](#link-to-example-html-output)
- [Application Video Demo](#application-demo-video)
- [Application Features](#application-features)
- [Installation Instructions](#installation-instructions)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

# Description
A Node.js command-line application that takes in information about a Manager of a team, as well as all team members.  Following the completion of employee entries, an automated HTML file is created, displaying all employees within the team.  Each team member is represented on their own card, with the GitLab and eMail linking to the user's GitLab profile or launching your native email application (respectively).

## Coding Badges
![alt text](https://img.shields.io/badge/Node.js-modules-green)
![alt text](https://img.shields.io/badge/JavaScript-.js-yellowgreen)
![alt text](https://img.shields.io/badge/HTML-.html-orange)
![alt text](https://img.shields.io/badge/CSS-.css-blue)
![alt text](https://img.shields.io/badge/Jest%20Test-jest-red)

## [Link to Example HTML Output](https://estee3.github.io/Team-Profile-Generator/)
![alt text](./assets/Example%20HTML%20Output.png)

# Application Demo Video
[![Demonstration Video](https://img.youtube.com/vi/PD2yKSoZDUI/0.jpg)](https://www.youtube.com/watch?v=PD2yKSoZDUI)

# Application Features
- Allows for a single manager per team
- Once the user is completed with adding all team members, they are asked to enter a name for the team, which is used for:
  - Naming of the resulting HTML file
  - HTML Title (test within the browser tab)
  - Header of the resulting HTML file
- The styling for the resulting HTML is included within the file so that no additional files are needed in order to view the finished page
- All of the above features will allow end users to create multiple teams and inject the resulting HTML pages into their website or team-based solutions!

# Installation Instructions
1. Download the contents of this repo as a .zip file
2. Unzip the folder in your preferred location
3. Open the folder within Visual Studio (or your IDE of choice)
4. Open a command prompt within the IDE and type `npm i`, followed by the Enter key and wait for the install to complete
5. Within the same command prompt, type `node index.js`, followed by the Enter key to kick off the team building process
6. Once you've completed entering all team members, you'll find the resulting HTML file within the `dist` folder which can also be accessed within the IDE you're using.


# User Story
**AS A** manager... **I WANT** to generate a webpage that displays my team's basic info... **SO THAT** I have quick access to their emails and GitHub profiles

# Acceptance Criteria

```
GIVEN a command-line application that accepts user input:

WHEN I am prompted for my team members and their information
┗►THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
┗►THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
┗►THEN that GitHub profile opens in a new tab

WHEN I start the application
┗►THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
┗►THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
┗►THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
┗►THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
┗►THEN I exit the application, and the HTML is generated
```

## License

MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)
