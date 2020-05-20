var knex =require('knex');
var postgress =knex({
    client : 'pg',
    connection :{
    host : 
    'ec2-52-44-55-63.compute-1.amazonaws.com',
    user : 'bhkuladnvmzkxo',
    password : 'a8c412a19a54c79c4fb333f94315fd7e1983bd9e3b8d426a82ff665534380690',
    database : 'd67r66k2u9nr1t'
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