var express = require('express');
var fs = require("fs");
var app = express();

/* M´ethodes pouvant ^etre utilis´ees pour acc´eder `a des donn´ees :
res.sendFile(path.join(__dirname+'...')) : renvoi directement un fichier
fs.readFileSync('...') : lit un fichier
fs.createReadStream('...') : met en place un stream */

app.get('/listeMembres', function(req, res) {
    console.log("serveur Node : /listeMembres");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    var readable = fs.createReadStream('listeMembres.json');
    readable.on('open', function() { readable.pipe(res); });
    readable.on('error', function() { res.end("[]"); });
});

app.get('/listeMembres/:nom', function(req, res) {
    console.log("serveur node : /listeMembres/:nom");
    var nomACherche = req.params.nom;
    var chaineListeMembres = fs.readFileSync("listeMembres.json", "UTF-8");
    var listeMembres = JSON.parse(chaineListeMembres);
    var listePersonnes = [];
    for (var i=0; i < listeMembres.length; i++) {
        console.log(listeMembres[i]);
        var nom = listeMembres[i].nom;
        var prenom = listeMembres[i].prenom;
        if (listeMembres[i].nom == nomACherche) {
            listePersonnes.push({"nom":nom,"prenom":prenom});
        }
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    var json = JSON.stringify(listePersonnes);
    console.log(" -> json : "+json);
    res.end(json);
});

app.listen(8888);
