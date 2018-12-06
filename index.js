const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); 

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes/api'));

const port = process.env.PORT || 5000;
app.listen(port,function() {
    console.log("Server is runing on PORT " + port)
})