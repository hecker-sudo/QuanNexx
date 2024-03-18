const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

// Proxy middleware
app.use('/', (req, res) => {
    const url = req.url.slice(1); // Remove leading slash
    const proxyUrl = `http://${url}`;

    // Forward the request to the destination server
    req.pipe(request(proxyUrl)).pipe(res);
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
