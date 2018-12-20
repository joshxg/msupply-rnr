const server = appPath => {
  const express = require("express");
  const app = express();
  const port = 9615;

  app.get("/", (req, res) => res.send("Hello Server!"));
  app.listen(port, () => console.log(`Server listening on port ${port}...`));
};

module.exports = server;
