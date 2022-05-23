const Joi = require("joi");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./logger");
const auth = require("./authentication");
const express = require("express");

const app = express();

// To anable to parse json in Express app when sending json inside of the body request
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(logger);
app.use(auth);

const courses = [
    {
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    }
]

app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given id was not found!");

    res.send(course);
});

app.post("/api/courses", (req, res) => {
    // Validate input with joi
    // schema represent a body of the request. In this case it is a course object 
    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
});

app.put("/api/courses/:id", (req, res) => {
    // Validate input with joi
    // schema represent a body of the request. In this case it is a course object 
    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.message);

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given id was not found!");

    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given id was not found!");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

function validateCourse(course) {
    // Validate input with joi
    // schema represent a body of the request. In this case it is a course object 
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate({name: course.name});
}