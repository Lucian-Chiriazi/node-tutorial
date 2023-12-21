// package, module or dependancy they all mean the same thing 
// (a folder that contains reusable JS code)

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create propreties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// devDependencies - modules that we use during the development process
// Those are modules that we dont need when the app is finished
// Examples of packages: formatting, testing ...
// npm i <packageName> -D or npm i <packageName> --save-dev

// To run nodemon we can use:
// "start": "nodemon app.js" -> npm start
// "dev": "nodemon app.js"   -> npm run dev



const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');