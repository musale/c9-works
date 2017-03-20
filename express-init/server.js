var express = require('express');
var config = require('./config');
const dbUser = config.db.user;
const dbPassword = config.db.password;
const connectionString = `mongodb://${dbUser}:${dbPassword}@ds137220.mlab.com:37220/mdb`
const MongoClient = require('mongodb').MongoClient

// handle reading data from the <form> element using body-parser pkg
const bodyParser = require('body-parser');
var db;
var app = express();

// The urlencoded method within body-parser tells body-parser to extract data 
// from the <form> element and add them to the body property in the request
// object
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

/**
 * Handle the homepage url GET
 *
 */
app.get('/', function(req, res) {
    var cursor = db.collection('quotes').find();
    cursor.toArray(function(err, results) {
        if (err) return console.log(err);
        res.render('index.ejs', {quotes: results})
    })
});

/**
 * Handle a form POST for a quote
 *
 */
app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})


/**
 * Create the server and listen to the default PORT or 3000
 *
 */
MongoClient.connect(connectionString, (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on 3000')
    })
});
