const server = appPath => {
  const express = require("express");
  const app = express();
  const port = 9615;

  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database(appPath + "/db.db");

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS test (info text);");
    db.run("INSERT INTO test VALUES ('Hello SQL!');");
  });

  if (process.env.ELECTRON_START_URL) {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
  }

  app.get("/", (req, res) => {
    console.log("Server received a request...");
    db.get("SELECT * FROM test;", (err, row) => {
      if (err) {
        res.send(err);
      }
      res.send(row.info);
    });
  });

  app.get("/", (req, res) => res.send("Hello Server!"));
  app.listen(port, () => console.log(`Server listening on port ${port}...`));
};

module.exports = server;
