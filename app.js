const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/view')));

app.get('/', (req, res) => res.sendFile('/view/index.html'))
app.get('/broker', (req, res) => res.send('broker'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");