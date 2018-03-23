// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/map", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/map.html"));
  });

  app.get("/authentication", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/authentication.html"));
  });

  app.get("/recommendation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recommendation.html"));
  });

  app.get("/chat", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chat.html"));
  });

};