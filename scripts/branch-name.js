/* eslint-disable */
const path = require('path');
const { execSync } = require('child_process');
const { exit } = require('process');

const validBranchFormat =
  /(?:main$|^(feature|bugfix|release|test|poc|style|ci|build)\/[a-z0-9._-]+$)/;

const notCompliantMsg = `* Sorry but your branch does not meet the naming convention of this repo.
  Please rename it and try again. Valid names are <type>/any-description-here,
  where <type> is one of 'feature|bugfix|release|test|poc|style|ci|build'
  To rename your branch:

            git branch -m your-new-branch
`;

let gitBranch = null;
try {
  console.log('* Validating the name of your branch...');
  gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (error) {
  console.error(error);
  exit(1);
}

console.log(`* Branch name is '${gitBranch}'`);
if (validBranchFormat.test(gitBranch)) {
  console.log(`* That is a valid branch name, continuing the commit...`);
  exit(0);
} else {
  console.error(notCompliantMsg);
  exit(1);
}
