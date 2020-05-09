var express=require('express');
var bodyParser =require('body-parser');

var connection = require('./config');
var app=express();
var authenticateController=require('./controllers/authenticate-controller');
var registerController =require('./controllers/register-controller');

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
        app.post('/controllers/register-controller',registerController.register);
        app.post('/controllers/authenticate-controller',authenticateController.authenticate);

app.listen(2000);