const express = require('express');
const proxy = require('./setupProxy');
const compression = require('compression');

const app = express();
app.use(compression);
proxy(app);

const path = require('path');
const port = process.env.PORT || 3000;

const content = express.static(path.join(__dirname, 'build'), {
    eTag: true,
    lastModified: true
});

app.use(content);
app.use('/*', content);

app.listen(port, '0.0.0.0');