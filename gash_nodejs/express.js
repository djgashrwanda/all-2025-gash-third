var express = require('express');
var app = express();

app.get('/' , function(req, res){
    res.send('this the home page')
})
app.get('/contact' , function(req, res){
    res.send('this the my contact page')
})

app.listen(3000)