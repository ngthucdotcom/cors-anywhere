// Listen on a specific host via the HOST environment variable
const HOST = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const PORT = process.env.PORT || 8080;
const CORS_PROXY = require('cors-anywhere');

CORS_PROXY.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, function() {
    console.log('Running CORS Anywhere on ' + HOST + ':' + PORT);
});