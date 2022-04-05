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

const csv = require('csv-parser');





// var parser = require('csv-parse').parse({columns: true}, function (err, records) {
// 	console.log(records);
// });
// fs.createReadStream(__dirname+'/marvel_characters_info.csv').pipe(parser);


app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
});

let id = []
let names = [];
let Alignment = [];
let Gender = [];
let EyeColor = [];
let Race = [];
let HairColor = [];
let Publisher = [];
let SkinColor = [];
let Height = [];
let Weight = [];
let i = 0;
app.post("/", (req, res) => {
    const {fileName} = req.body;

    fs.createReadStream(__dirname+'/marvel_characters_info.csv')
    .pipe(csv())
    .on('data', function(data){
        try {
            if(i > 200)         res.render('filecsv', { title: 'Csv',fileName: fileName, names: names, id: id, Alignment: Alignment,
            Gender: Gender, EyeColor: EyeColor, Race: Race, HairColor: HairColor, Publisher: Publisher,
            SkinColor: SkinColor, Height: Height, Weight: Weight});
            i++;
            id.push(data.ID);
            names.push(data.Name);
            Alignment.push(data.Alignment);
            Gender.push(data.Gender);
            EyeColor.push(data.EyeColor);
            Race.push(data.Race);
            HairColor.push(data.HairColor);
            Publisher.push(data.Publisher);
            SkinColor.push(data.SkinColor);
            Height.push(data.Height);
            Weight.push(data.Weight);
        }
        catch(err) {
        }
    })
    .on('end',function(){
        res.render('filecsv', { title: 'Csv',fileName: fileName, names: names, id: id, Alignment: Alignment,
        Gender: Gender, EyeColor: EyeColor, Race: Race, HairColor: HairColor, Publisher: Publisher,
        SkinColor: SkinColor, Height: Height, Weight: Weight});
        // console.log(rows);
    });  
});

app.get("/filecsv", (req, res) => {
});
  
app.post("/filecsv", (req,res) => {
});

