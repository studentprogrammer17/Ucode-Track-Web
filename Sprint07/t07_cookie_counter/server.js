let express = require('express'),

session = require('express-session'),
  
app = express();
  
app.use (
    session ({
        secret: "i am gay",
        resave: true,
        saveUninitialized: false,
        cookie: { },
    })
);
  
app.get('/', function(req, res) {
    if(req.session.views) {   
        req.session.views++;
        res.write('<h1>Cookie counter</h1><br><p> The page was loaded: ' + req.session.views + ' time(s) in last minute</p>') 
        res.end()
    } 
    else {
        req.session.views = 1;
        res.end('<h1>Cookie counter</h1><br>Refresh the page, bruh');
    }
})
  

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});

