var connect = require('connect');
var http = require('http');
var Fs = require('fs');

var app = connect();

var bodyParser = require('body-parser'); //sert à creer un objet correspondant à la requete
app.use(bodyParser.urlencoded({ //permet de decrypter tt ce qui est html
    extended: false
}))

app.use(function(req, res){
    if(req.method == 'GET'){
        var url = (req.url == '/') ? '/index.html' : req.url;
        var filename = __dirname + '/public' + url;
        console.log(req.method + ' ' + req.url + '=>' + filename);
        Fs.readFile(filename, "utf8", function(err, data){
            if(err){
                res.writeHeader(404);
                res.end("page not found")
            } else {
                res.end(data);
            }
        });
    } else {
        res.end('ceci n est pas un get : (' + req.method + ') \n');
    }
});

http.createServer(app).listen(3000);
console.log("serveur démarré")