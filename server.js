const flowers = require('./flowers');
const quizzes = require('./quizzes');
// This is the server file


// dependencies
const express = require('express');
const cors = require('cors');

// create the server
const app = express();
const port = process.env.PORT || 4002;

// parse json
app.use(express.json());
app.use(cors());

// data
let scores = [];
let quizzes = quizzes;
let flowers = flowers;

// Can delete this later
app.get('/', (request, response) => {
    response.send('<h1>welcome to helloworld serveice.</h1>');
});


// Return all of the flowers
app.get('/flowers', (request, response) => {
    response.json(flowers);
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





// start the server
app.listen(port, () => console.log('Listening on port ' + port));