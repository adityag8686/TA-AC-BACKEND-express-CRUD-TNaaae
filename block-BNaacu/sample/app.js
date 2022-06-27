var express = require("express");
var app = express();
var path = require("path")
var mongoose= require("mongoose")

// Connecting the database

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'connected : true');
});

//  setting the ejs

app.set('view engine', 'ejs');
app.set("views", path.join("__dirname", views))
// Setting the middlewares

app.use(express.json());
app.use(express.urlencoded());

// Routes

// Students new Get request

app.get('/student/new', (req, res) => {
    res.render(form);
});
app.post('/students', (req, res) => {
    console.log(req.body);
    Student.create(req.body, (err, student) => {
        console.log(err, student);
    });
    res.send(`${req.body.name} added succesfully`);
});

app.get('/students/:id', (req, res, next) => {
    var id = req.body.id;
    Student.find({ name: id }, (err, students) => {
        console.log(err, students);
        var name = { name: students.name, email: `${id}@gmail.com` };
        res.render('studentsDetails', { name: name });
    });
});

app.use((req, res, next) => {
    res.send('Page Not Found');
});  
  // Server

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
});
