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
// let request = require('request');

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

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let time = date_ob.getFullYear() + "-" + month + "-" + date + " " + date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds();

    const {fileName, importance, noteText} = req.body;
    let timeAndFilename = time + " > " + fileName;
    fs.writeFile(fileName, noteText, function (err) { if (err) throw err; });
    res.render('NotepadMini', { title: 'NotePad Mini',timeAndFilename: timeAndFilename, time: time, fileName: fileName, importance: importance, noteText: noteText});
});

app.get("/NotePad", (req, res) => {
    res.render('NotepadMini', { title: 'NotePad Mini',timeAndFilename: timeAndFilename, time: time, fileName: fileName, importance: importance, noteText: noteText});
});
  
app.post("/NotePad", (req,res) => {
    console.log(req.time);
    res.render('NotepadFile', { title: 'NotePad Mini',timeN: timeN, fileNameN: fileNameN, importanceN: importanceN, noteTextN: noteTextN});
});

