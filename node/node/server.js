var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.end('Bonjour');
});

app.get('/listeMembres', function(req, res) {
    res.setHeader('Content-type', 'text/json');
    var readable = fs.createReadStream("listeMembres.json");
    readable.on('open', function() {
        readable.pipe(res);
        console.log("Liste des membres envoyée");
    })
    readable.on('error', function() {
        res.end("[]");
    });
});

app.listen(8081);
