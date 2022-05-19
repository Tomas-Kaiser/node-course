# JavaScript Course

NodeJS is an open-source & runtime environment for excuting Javascript code outside of the browser. NodeJS is mostly used for building a backend apps (API). It is very <b>superfast</b> and highly scalable (faster than java).

<b>Architecture of the NodeJS</b>

We are using JS engine to convert JS code into machine code for eg. Firefox using SpiderMonkey, Chrome using V8 engine. The node is an runtime environment using V8 engine. Node has different object such as `http.creatServer()`, `fs.readFile()` etc. wherease in browser we have document (`document.getElementById('')`) object.

Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world.

<b>How Node Works</b>

- We use Node to build fast and scalable networking applications.

- It’s a perfect choice for building RESTful services.

- Node applications are asynchronous or non-blocking by default.That means when the application involves I/O operations (eg accessing the file system or the network), the thread doesn’t wait (or block) for the result of the operation. It is released to serve other clients. All other frameworks as Rail, NET.ASP are synchronous and therefore they need to use many threads to do same work.

- This architecture makes Node ideal for building I/O-intensive applications. You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to finish its job and be ready to serve them.  

<b>Installing Node</b>

Let's see if you are already installed Node with running `node --version` in your terminal.

If not go to https://nodejs.org/en/ and download the NodeJs to your computer based on you OS.

<b>How to execute js file</b>

To execute node js code we need to run `node app.js` where we pass app.js as an argument. NodeJS is an environment built on C++ using V8 engine to run the app.

## Node Module System

<b>Global Object</b>

Global object for JS for browser is `window` where we can find all global mehtods such as `window.console.log()`, `window.setTimeout()` etc but in Node we do not have `window` object instead we have `global`.

<b>Modules</b>

Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported.

```
// EXPORT Module

var testModule = { a: 1, b: 2 };
// ---------- ES5 ----------
module.exports = testModule;
// ---------- ES6 ----------
export default testModule;
// ---------- ES6 (child modules) ----------
export const a = 1;
export const b = 2;
```

```
// IMPORT Module

// ---------- ES5 ----------
var testModule = require(./testModule);
// ---------- ES6 ----------
import testModule from './testModule';
// ---------- ES6 (child modules) ----------
import { a, b } from './testModule';
```

<b>Built-in Modules in Node</b>

Node has several useful modules built in the node. You can see all modules in documentation of the Node. I am going to highlight some of them below:

- path > better to use this module when working with path
- os > is useful when working with operating system
- fs > is useful when working with file system
- events > it is a core module for Node js 
- http > for creating network in application such as backend service etc

<b>Node Core Recap</b>

- We don’t have the window object in Node. 
- The global object in Node is “global”. 
- Unlike browser applications, variables we define are not added to the “global” object.
- Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported.
- To export a variable or function from a module, you need to add them to module.exports: `module.exports.sayHello = sayHello;`
- To load a module, use the require function. This function returns the module.exports object exported from the target module: `const logger = require(‘./logger’);` 
- Node has a few built-in modules that enable us to work with the file system, path objects, network, operating system, etc. 
- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter.
- To create a class with the ability to raise events, we should extend EventEmitter: `class Logger extends EventEmitter { }`