const express = require('express');
const csvToJson = require('convert-csv-to-json');
const ejs = require('ejs');
const EmpIndexRouter = require('./routes/EmpIndexRouter.js');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use('/', EmpIndexRouter);

app.listen(8181);
