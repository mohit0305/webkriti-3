var knex =require('knex');
var postgress =knex({
    client : 'pg',
    connection :{
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Mohit',
    database : 'admin'
    }
});
postgress(function(err){
    if(!err){
        console.log("database is  connected enjoy");
    } else{
        console.log("database is not connected");
    }

});
module.exports =postgress;