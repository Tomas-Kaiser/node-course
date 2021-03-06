const debug = require("debug")("app:startup");
const config = require("config");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./middlewares/logger");
const auth = require("./authentication");
const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require("express");

const app = express();

// To anable to parse json in Express app when sending json inside of the body request
app.use(express.json());
app.use(helmet());
app.use(logger);
app.use(auth);
app.use("/api/courses", courses);
app.use("/", home);

// Configuration
console.log("App name:" + config.get('name'));
console.log("Mail server:" + config.get('mail.host'));
console.log("Mail password:" + config.get('mail.password'));

if (app.get('env') === 'development'){
    app.use(morgan("tiny"));
    debug("Morgan enabled...");
    console.log('Morgan enabled...');
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

