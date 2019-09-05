var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");

var app = express();
var PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
