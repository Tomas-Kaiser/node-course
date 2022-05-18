const fsPromises = require("fs").promises;

// const files = fs.readdir("./");
// console.log(files);



async function run() {
    const files = await fsPromises.readdir("./");
    console.log(files);
};

run();
  