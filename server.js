const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
const server = app.listen(5555);
app.use(express.urlencoded({extended: true}));
var path = require('path')
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
