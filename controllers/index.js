var express=require('express');
var bodyParser =require('body-parser');
var port  = process.env.PORT || 2000
var connection = require('./config1');
var app=express();
var authenticateController=require('./controllers/authenticate-controller1');
var registerController =require('./controllers/register-controller1');

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.get('/adminlogin.html',function(req,res){
    res.sendFile(__dirname + "/" + "adminlogin.html");
    })
    app.get('/adminlogin.html',function(req,res){
        res.sendFile(__dirname + "/" + "adminlogin.html");
        })
    
        app.post('/api/register',registerController.register);
        app.post('/api/authenticate',authenticateController.authenticate);
    
        console.log(authenticateController);
        app.post('/controllers/register-controller1',registerController.register);
        app.post('/controllers/authenticate-controller1',authenticateController.authenticate);

app.listen(port);