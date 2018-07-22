const express = require('express');
const app = express();
const path = require('path');
const brokerRepo = require('./brokerRepo')



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/view')));

app.get('/', (req, res) => res.sendFile('/view/index.html'))
app.get('/test', (req, res) => {
    res.send('test');
})

app.get('/brokers', (req, res) => {
    var brokers = brokerRepo.get();
    res.send(brokers);
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");