const express = require("express");
//creating app
const app = express();
//make the app listen on port
//send an HTTP response when receiving HTTP GET /

//send the index.html when receiving HTTP GET /

//handling static HTML and EJS templates
//handling static HTML and EJS templates
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});
//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//pass requests to the router middleware
const router = require("./routes/apis");
app.use(router);

const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
