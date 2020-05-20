var express =require('express');
var postgress =require('./../config1');

module.exports.register = function(req,res){
    var today = new Date();
   var name = req.body.username;
 var password=req.body.passcode;
 if(name != "" && password != ""){
    postgress('users').insert({
        "name" : req.body.username,
        "password" : req.body.passcode,
       
    }).then(function(error,results,fields){
       
            res.sendFile(__dirname + "/" + "adminlogin.html")
    });
}
else{
    res.json({
        message : 'please enter valid username and password'
    })
}
}