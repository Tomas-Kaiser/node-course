const express = require("express");
const Joi = require("joi");

const router = express.Router();

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

router.get('/', (req, res) => {
    res.send(courses);
});

router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given id was not found!");

    res.send(course);
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
    // Validate input with joi
    // schema represent a body of the request. In this case it is a course object 
    const {error} = validateCourse(req.body)
    if (error) return res.status(400).send(error.message);

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given id was not found!");

    course.name = req.body.name;
    res.send(course);
});

router.delete("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given id was not found!");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    // Validate input with joi
    // schema represent a body of the request. In this case it is a course object 
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate({name: course.name});
}

module.exports = router;