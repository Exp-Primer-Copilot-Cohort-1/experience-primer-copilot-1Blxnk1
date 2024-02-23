// Create web server
// To run this file, you need to install express and body-parser
// npm install express body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// In-memory data store
const comments = [
    {
        id: "1",
    }
]; // Add closing square bracket
