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

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
});

app.post("/", (req, res) => {
    const {url} = req.body;
    if(url.length <= 0) url = null;
    request({
        uri: url,
    },function(error, respnose, body){
        let s1 = body.indexOf("<body>")+"<body>".length;
        let bodytag = body.substring(s1,body.indexOf("</body>"))
        res.render('url', { title: 'Url', url: url, bodytag: bodytag});
    });
});

app.get("/change_charset", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
});
  
app.post("/change_charset", (req,res) => {
    res.sendFile("index.html", {root: __dirname });
});

