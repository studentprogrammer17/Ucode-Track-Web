const express = require("express");
const bodyParser = require("body-parser");
const { message } = require("statuses");
const bcrypt = require ('bcrypt');
let crypto = require('crypto');
let https = require('https');
let path = require("path");
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");
let request = require("request");

const app = express();
let server = https.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.set('view engine', 'pug');

request({uri: "https://developer.marvel.com/"}, 
function(error, response, data) {
    console.log(response.statusCode);
});

var url = require('url');
var url_parts = url.parse("https://developer.marvel.com/", true);
var query = url_parts.query;
console.log(url_parts);


app.get("/", (req, res) => {
    console.log(req.params.status);
    res.sendFile("index.html", {root: __dirname });
});


