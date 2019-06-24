const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3' },
]



app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.get('/api/courses', (req,res) => {
    res.send(courses);
})

app.post('/api/courses', (req,res) => {
    const course = {
        id:courses.length + 1,
        name: req.body.name
    };
})


app.get('/api/courses/:id', (req,res) => {
  const course =courses.find(c => c.id === parseInt(req.params.id));
  if (!course)  res.status(404).send('The course is cants be found');
  res.send(course);
})





app.listen(PORT,()=> console.log(`App is listening at ${3000} `))