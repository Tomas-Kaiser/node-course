const _ = require("underscore");

// Firstly it looks for core module
// File or folder but in this case it should be like ./undersroce.js
// So last option is to look to node_modules

let result = _.contains([1, 2, 3], 2);
console.log(result);