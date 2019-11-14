const express = require("express");
const path = require ("path");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const apiRoutes = require("./app/routing/apiRoutes.js");
const htmlRoutes = require("./app/routing/htmlRoutes.js");

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
});