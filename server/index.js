const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();



const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to db')
    app.set('db',database);
}).catch(error => {
    console.log('There is an error',error);
})


app.get('/api/inventory', (req, res) => {

    req.app.get('db').get_iventory().then(puppies =>{
        res.json(puppies);
    }).catch(error => {
        console.log('This is wrong',error);
        req.statusCode(500).send('There was an error on the serverside')
    })
})






// let shelfieController = require('./server/controller')
// app.use( bodyParser.json() );


const PORT = 4000;
app.listen(PORT, () => { console.log(`server is up and running ${PORT}`) });