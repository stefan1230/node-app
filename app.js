const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello From Node');
})

app.listen(3000, console.log('listening on port 3000'))