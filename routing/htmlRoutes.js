const fs = require('fs');

module.exports = function (app) {
    app.get('/', function (req, res) {
        fs.readFile('./public/home.html', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHeader(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    })

    app.get('/survey', function (req, res) {
        fs.readFile('./public/survey.html', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHeader(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    })

}