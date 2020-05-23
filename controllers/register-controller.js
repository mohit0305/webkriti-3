var express =require('express');
var connection =require('./../config');

module.exports.register = function(req,res){
    var today = new Date();
    var users ={
        "name" : req.body.username,
        "password" : req.body.passcode,
        "created_at" : today,
        "updated_at" :today
    }
    connection.query('INSERT INTO users SET ?',users,function(error,results,fields){
        if(error){
            res.json({
               status :false,
               message : 'there is some error with the query'
            })
        }
        else{
            res.sendFile(__dirname + "/" + "adminlogin.html" );
        }
    });
}