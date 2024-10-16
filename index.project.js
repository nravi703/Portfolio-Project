var http = require("http");
var fs = require("fs");
const port = 8000;

http.createServer(function(req, res) {
    if (req.url === "/Project") {
        // Serve the main index.html file (Project Welcome)
        fs.readFile("Project welcome.html", function(err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url === "/about") {
        // Serve the about.html file for the "About Me" page
        fs.readFile("about me.html", function(err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading about page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url.endsWith(".css")) {
        // Serve the CSS file
        fs.readFile(req.url.substring(1), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end("404 Not Found");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    } else if (req.url.endsWith(".js")) {
        // Serve the JavaScript file
        fs.readFile(req.url.substring(1), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end("404 Not Found");
            } else {
                res.writeHead(200, { "Content-Type": "application/javascript" });
                res.end(data);
            }
        });
    } else {
        // Handle 404 errors for other requests
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});
