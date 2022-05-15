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