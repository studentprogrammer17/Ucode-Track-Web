const express = require("express");
const bodyParser = require("body-parser");
const { message } = require("statuses");
const bcrypt = require ('bcrypt');
let crypto = require('crypto');
let https = require('https');
let path = require("path");
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");

let fs = require('fs');
let request = require('request');

const app = express();
let server = https.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
});

let download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

app.post("/", (req, res) => {
    const {url} = req.body;
    let image = "image.png";
    download(url, image, function(){
        console.log(url);
    });
    res.render('image', { title: 'Image', url: url, image: image});
});

app.get("/change_charset", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
});
  
app.post("/change_charset", (req,res) => {
    res.sendFile("index.html", {root: __dirname });
});

