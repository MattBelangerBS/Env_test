//
try{
    var env = require('./config/env_dev');
}
catch(err){
    var env = require('./config/env_prod');
}

var express = require('express');
var app = express();


app.use(express.static(__dirname + './../app'));



app.listen(env.port,function() {
    console.log("listening on "+ env.host+':'+env.port);
});