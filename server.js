// Dependencies
const express = require("express");
const hbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup handlebars
app.engine("handlebars", hbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

//