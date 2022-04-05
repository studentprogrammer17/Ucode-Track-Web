const express = require("express");
const bodyParser = require("body-parser");
const { message } = require("statuses");
const bcrypt = require ('bcrypt');
let crypto = require('crypto');
let http = require('http');
let path = require("path");
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");

const app = express();
let server = http.createServer(app);

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


app.post("/", (req, res) => {
  let iterations = 10000;
  const {pass,salt} = req.body;
  
  let hash = crypto.createHmac('sha512', salt);
  hash.update(pass);
  let value = hash.digest('hex');
  res.render('newpug', { title: 'Password', hash: value, pass: pass});
});

app.get("/check", (req, res) => {
  res.sendFile("index.html", {root: __dirname });
});

app.post("/check", (req,res) => {
  const {pass, check_pass} = req.body;
  if(pass != check_pass) console.log("HAcked!");
  else console.log("Not hacked!");
  res.sendFile("index.html", {root: __dirname });
});

