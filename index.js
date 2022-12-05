
var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");


var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));


app.get('/', function(req, res, next) {
      console.log('nel root');
     
      res.render("index", {  message:" Benvenuto nella pagina di test "});
   
});
  
app.get('/soulmachines/', function(req, res, next) {
  
 
  res.render("index", {  message:" Benvenuto nella pagina di SM "});

});
app.listen(process.env.PORT || 3000, function() {
    console.log("App started on port 3000");
  });