const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, nitesh bhardwaj again then again');
});

app.listen(8080,function(){
    console.log('Example app listing on port 8080')
});

module.exports = app;
