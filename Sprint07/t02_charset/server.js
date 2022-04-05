const express = require("express");
const bodyParser = require("body-parser");
const { message } = require("statuses");
const bcrypt = require ('bcrypt');
let crypto = require('crypto');
let http = require('http');
let path = require("path");
let helmet = require('helmet');
let rateLimit = require("express-rate-limit");
const utf8 = require('utf8');
const { Iconv } = require('iconv');


function stringToBytes(text) {
    const length = text.length;
    const result = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      const code = text.charCodeAt(i);
      const byte = code > 255 ? 32 : code;
      result[i] = byte;
    }
    return result;
}

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
    let converted = null;
    const {string,charsets} = req.body;
    console.log(string + " " + charsets);
    if(charsets == "UTF-8") {
        converted = utf8.encode(string);
    }
    if(charsets == "ISO-8859-1") {
        const bytes = stringToBytes(string);
        converted = new Array([bytes.buffer], { type: 'text/plain; charset=ISO-8859-1' });
    }
    if(charsets == "Windows-1252") {
        converted = Iconv('utf8', 'windows-1251')
            .convert(string)
            .toString();
    }
    res.render('charset', { title: 'Charsets', string: string, charsets: charsets, converted: converted});
});

app.get("/change_charset", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
  });
  
app.post("/change_charset", (req,res) => {
    res.sendFile("index.html", {root: __dirname });
  });