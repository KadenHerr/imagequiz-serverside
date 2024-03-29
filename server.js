
// This is the server file


// dependencies
const express = require('express');
const cors = require('cors');
const db = require('./db');

// create the server
const app = express();
const port = process.env.PORT || 4002;

// parse json
app.use(express.json());
app.use(cors());

// data
let scores = [];


// DB home display
app.get('/', (request, response) => {
    response.send('<h1>Welcome to imagequiz serveice.</h1>');
});


// Return all of the flowers
app.get('/flowers', (request, response) => {
    db.getFlowers()
    .then(flowers => response.json(flowers))
    .catch(e => {console.log(e); response.status(500).send(e)});
});



// Return all of the quizzes
app.get('/quizzes', (request, response) => {
    response.json(quizzes);
});

// Return a single quiz using a given id.
app.get('/quiz/:id', (request, response) => {
    let id = request.params.id;
    let quiz = quizzes[Number(id)];
    if(quiz) {
        response.json(quiz);
    } else {
        response.status(404).send(`The quiz with id ${id} could not be found.`);
    }
});

// Add a score to the scores array.
app.post('/score', (request, response) => {
    let s = request.body.score;
    /*
    let quizid = request.body.quizid;
    let username = request.body.username;
    score.push({score: score, quizid: quizid, username: username}]);
    */
    scores.push(s);
    response.send(`The score ${s} was added successfully`);
});

// Add a customer to the database.
app.post('/customer', (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    db.addCustomer(name,email,password)
    .then(() =>response.send(`The score ${s} was added successfully`))
    .catch(e => response.status(500).send('There was an error in saving the customer'));
});


// start the server
app.listen(port, () => console.log('Listening on port ' + port));