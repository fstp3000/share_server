var express = require('express');
var app = express();
app.use(express.static('img'));


app.listen(9528, function(){
		console.log("Your server was started on port 9528");
});
