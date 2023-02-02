const app = require("express")();

app.get("/api", async (req, res) => {
  (async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).send(body);
  })();
});

module.exports = app;
