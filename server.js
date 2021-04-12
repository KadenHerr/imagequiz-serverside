// This is the server file

// dependencies
const express = require('express');


// create the server
const app = express();
const port = process.env.PORT || 4002;

// parse json
app.use(express.json());

// data
let places = [];

app.get('/', (request, response) => {
    response.send('<h1>welcome to helloworld serveice.</h1>');
});

// this kind of thing will be used in Project.
app.post('/place', (request, response) => {
    let name = request.body.name;
    let address = request.body.address;
    let place = {name: name, address: address};
    places.push(place);
    response.send(`The place ${name} was added successfully`);
});

// start the server
app.listen(port, () => console.log('Listening on port ' + port));