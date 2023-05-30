const express = require('express');
const app = express();

const schema = require('./schema/schema')


const port = process.env.PORT || 3000;
app.listen(port);