import app from "express"
import * as fs from "fs"

import serverless from "serverless-http";

const server = app()

server.get("/rce", (req, res) => {
    fs.readFile("./test.php", (err, data) => {
        res.end(data);
    })
});

export default serverless(app);