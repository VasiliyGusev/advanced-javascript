// const http = require('http');
// const static = require('node-static');
const express = require('express');
const fs = require('fs');
const app = express();
const cart = require('./cartRouter');

app.use(express.json());
app.use('/', express.static('../'));
app.use('/api/cart', cart);


app.get('/api/products', (req, res) => {
    fs.readFile('server/getDataProducts.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

app.listen(3000, () => console.log('server is running on port 3000!'));