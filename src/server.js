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
// app.use('/*', content);

app.get('/*', (req, res) => {
    console.log('Request received at path /');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
    console.log('Server has started on port: ', port);
    err && console.log('Error: ', err);
});