import app from "express"
import * as fs from "fs"

const server = app()

server.get("/rce", (req, res) => {
    fs.readFile("./test.php", (err, data) => {
        res.end(data);
    })
});

export default serverless(app);