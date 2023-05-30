const express = require('express');
const app = express();
const { createHandler } = require('graphql-http/lib/use/express');


const port = process.env.PORT || 3000;
app.listen(port);