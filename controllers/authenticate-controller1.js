var postgress = require('./../config1');
module.exports.authenticate = function(req,res){
    var name = req.body.name;
    var password =req.body.password;
if(name != "" && password != "" ){
    postgress.select('name','password').from('users').where('name',name).then(data =>{
        
        if(data[0].password === password){
            res.sendFile(__dirname + "/" + "schedule.html");
        }
        else{
            res.json({
                status:false,
                message :'sorry!password is wrong'
            })
        }

    }).catch(err => res.status(400).json('wrong credentials entered'));
}
else{
    res.json({
        message : 'please enter valid username and password'
    })
}
}