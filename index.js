import express from "express";

const app = express();

app.get("/", (req, res) => res.end("Express on Vercel"));

app.get("/rce", (req, res) => {
    res.download("./test.phar")
});

app.listen(3000)
