const express = require("express");
const app = express();
app.set("view engine", "ejs");
//app.engine('html', require("ejs").renderFile);
app.use(express.static("public")); //flder for css, js, images

const request = require("request");

app.get("/", function(req, res){
    res.render("home");
})

app.listen(process.env.PORT, function(){
    console.log("Express server is running...");
})  