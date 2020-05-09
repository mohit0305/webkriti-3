var connection = require('./../config');
module.exports.authenticate = function(req,res){
    var name = req.body.name;
    var password =req.body.password;

    connection.query('SELECT * FROM users WHERE name = ?',[name],function(error,results,fields){
        if(error){
            res.json({
                status : false,
                message : 'there is some error with the query'
            })
        } else{
            if(results.length>0){
                if(password == results[0].password){
                    res.sendFile(__dirname +"/" + "schedule.html")
                }else{
                    res.json({
                    status : false,
                message : 'email and password does not match'
                    });
                }
            }
            else{
                res.json({
                    status : false,
                message : 'email dose not exists'
                    });
            }
        }
    });
}