const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, nitesh bhardwaj againn ffffhf');
});

app.listen(8080,function(){
    console.log('Example app listing on port 8080')
});

module.exports = app;
