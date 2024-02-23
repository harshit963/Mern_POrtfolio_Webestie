
// acquire
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");

// Set path
const staticPath = path.join(__dirname,"../public");
const partials = path.join(__dirname, "../templates/partials");
const views = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set('views', views);
hbs.registerPartials(partials);


app.use(express.static(staticPath));

// Routing

// Host the home page
app.get("", (req, res)=>{
    res.render("index");
})


app.listen(port,(req,res)=>{
    console.log("Server is running:"+port);
});
