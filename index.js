import express from "express";
import * as fs from "fs"

const app = express();

app.get("/", (req, res) => res.end("Express on Vercel"));

app.get("/rce", (req, res) => {
    fs.readFile("./test.php", (err, data) => {
        res.end(data);
    })
});

app.listen(3000)