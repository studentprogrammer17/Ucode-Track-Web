const express = require("express");
const bodyParser = require("body-parser");
const { message } = require("statuses");
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

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
});

app.post('/', (req, res) => {
    res.sendFile("session.html", {root: __dirname });
    const { name, mail, age,description,photo,level,
        Unknown,ghost,iamincomics,ihavefunclub,SUPERSTAR,
        Strength,Speed,Intelligence,Teleportation,Immortal,Another} = req.body;

    let purpose = 0;
    let experience = 0;
    
    if(Strength != null) experience++;
    if(Speed != null) experience++;
    if(Intelligence != null) experience++;
    if(Teleportation != null) experience++;
    if(Immortal != null) experience++;
    if(Another != null) experience++;

    if(Unknown != null) purpose = 1;
    if(ghost != null) purpose = 2;
    if(iamincomics != null) purpose = 3;
    if(ihavefunclub != null) purpose = 4;
    if(SUPERSTAR != null) purpose = 5;

    res.send({
      name,
      mail,
      age,
      description,
      photo,
      experience,
      level,
      purpose,
    });
  });

app.get("/session", (req, res) => {
    fetch('/session', {
        method: 'POST',
        body: JSON.stringify({
            name,
            mail,
            age,
            description,
            photo,
            experience,
            level,
            purpose
        }),
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data));

});
