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

const avengerQuote = require("./AvengerQuote");
const listavquote = require("./ListAvengerQuote");


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
    let ia = new avengerQuote(1, "Я", "Челс", [ "dodik.jpeg"]);
    ia.addComment("Норм");

    let neia = new avengerQuote(2, "не я", "слеЧ", [ "neia.jpeg" ]);
    neia.addComment("мроН");

    let povr = new avengerQuote(3, "повар", "ну да", [ "povr.jpg" ]);
    povr.addComment("котлета");
    
    let konch = new avengerQuote(4, "puten", "huilo", [ "popusk.jpeg"]);
    konch.addComment("die");

    let listAvengquote = new listavquote();

    listAvengquote.addAvengerQuote(ia);
    listAvengquote.addAvengerQuote(neia);
    listAvengquote.addAvengerQuote(povr);
    listAvengquote.addAvengerQuote(konch);
    listAvengquote.toXML("av.xml");

    res.sendFile("index.html", {root: __dirname });
});



