
import http = require('http');
import expressServer from "./server"
// const connectPSQlDb = require('./config/dbConnection');
import connectPSQlDb from './config/dbConnection';

// Normalize port number which will expose server
const port = normalizePort(8080);

// Instantiate the expressServer class
export let expressInstance = new expressServer().expressInstance;

// Make port available within server
expressInstance.set('port', port);

// Create the HTTP Express Server
const server = http.createServer(expressInstance);

// Start listening on the specified Port (Default: 3000)
server.listen(port,()=>{
    console.log(`listening on port ${port}`)
});

connectPSQlDb()

// Port Normalization
function normalizePort(val){
    const port = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    } else {
        return false;
    }
}

