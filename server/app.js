var express = require('express');
var app = express();



app.set('port', process.env.PORT || 5000);


app.use(express.static(__dirname + '/public'));



app.listen(app.get('port'), function(req, res, next){
    console.log('listening on port: ', app.get('port'));
});